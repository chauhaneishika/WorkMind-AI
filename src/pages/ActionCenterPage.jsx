import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Building,
  Check,
  ExternalLink
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { actionCenterItems as initialActionItems } from '../data/mockData';

export function ActionCenterPage() {
  const navigate = useNavigate();
  const [actionItems, setActionItems] = useState(initialActionItems);
  const [filterPriority, setFilterPriority] = useState('All');
  const [toastMsg, setToastMsg] = useState('');

  const filteredItems = actionItems.filter((item) => {
    if (filterPriority === 'All') return true;
    return item.priority === filterPriority;
  });

  const handleResolveAction = (itemId) => {
    setActionItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, status: item.status === 'Completed' ? 'Pending' : 'Completed' }
          : item
      )
    );
    setToastMsg('Action status updated in executive audit log.');
    setTimeout(() => setToastMsg(''), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed top-20 right-8 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Prescriptive Decision Support</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            AI Action Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            WorkMind AI transforms cross-source pattern recognition into prioritized, high-leverage HR interventions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-soft-sm">
            {actionItems.filter((i) => i.status === 'Completed').length} of {actionItems.length} Actions Completed
          </span>
        </div>
      </div>

      {/* Priority Filters Bar */}
      <div className="flex items-center justify-between bg-white rounded-2xl border border-slate-200/80 p-3 shadow-soft-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 px-2">Priority Filter:</span>
          {['All', 'High', 'Medium', 'Low'].map((p) => (
            <button
              key={p}
              onClick={() => setFilterPriority(p)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterPriority === p
                  ? 'bg-slate-900 text-white shadow-soft-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Action Items List */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const isDone = item.status === 'Completed';

          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border p-6 shadow-soft-sm transition-all flex flex-col justify-between space-y-4 ${
                isDone
                  ? 'border-emerald-200/80 bg-slate-50/50 opacity-75'
                  : 'border-slate-200/80 hover:border-brand-200 hover:shadow-soft-md'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2.5">
                    <Badge variant={item.priority === 'High' ? 'danger' : 'warning'} size="sm">
                      {item.priority} Priority
                    </Badge>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-600">{item.department}</span>
                    {isDone && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Resolved
                      </span>
                    )}
                  </div>
                  <h3 className={`text-base font-bold text-slate-900 ${isDone ? 'line-through text-slate-500' : ''}`}>
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => handleResolveAction(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 ${
                    isDone
                      ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isDone ? 'Reopen Action' : 'Mark Resolved'}</span>
                </button>
              </div>

              {/* Reason, Evidence, and Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <span className="font-bold text-slate-700 uppercase text-[10px] block">
                    Why AI Generated This:
                  </span>
                  <p className="text-slate-600 leading-relaxed">{item.reason}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-200/70 space-y-1">
                  <span className="font-bold text-indigo-900 uppercase text-[10px] block">
                    Underlying Telemetry Evidence:
                  </span>
                  <p className="text-slate-600 leading-relaxed">{item.evidence}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/70 space-y-1">
                  <span className="font-bold text-emerald-900 uppercase text-[10px] block">
                    Expected Quantified Impact:
                  </span>
                  <p className="text-emerald-950 font-medium leading-relaxed">{item.expectedImpact}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => navigate(item.link)}
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActionCenterPage;
