import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AlertTriangle,
  TrendingDown,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Filter,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ChevronRight,
  Building
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import StatCard from '../components/common/StatCard';
import Badge from '../components/common/Badge';
import Drawer from '../components/common/Drawer';
import { employees, attritionByDepartment } from '../data/mockData';

export function AttritionPage() {
  const navigate = useNavigate();
  const [selectedRiskFilter, setSelectedRiskFilter] = useState('All');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const riskEmployees = employees.filter((e) => {
    if (selectedRiskFilter === 'All') return true;
    return e.attritionRisk === selectedRiskFilter;
  });

  return (
    <div className="space-y-6">
      {/* Disclaimer Banner: Crucial requirement */}
      <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 flex items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="text-xs text-amber-900 leading-relaxed font-medium">
          <span className="font-bold">Human-in-the-Loop Protocol:</span> All predictions shown are{' '}
          <span className="font-bold underline decoration-amber-400">AI-generated risk signals</span>, not certain outcomes. They are intended for proactive coaching, workload rebalancing, and retention support.
        </p>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 uppercase tracking-wider">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>Retention & Workforce Risk</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Attrition Risk Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Predictive modeling correlating attendance anomalies, sentiment degradation, and market compensation gaps.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/action-center')}
            className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center gap-1.5"
          >
            <span>Execute 5 AI Retention Actions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="High Risk Employees"
          value="47"
          change="+12%"
          period="requires urgent check-in"
          trend="alert"
          badgeColor="rose"
        />
        <StatCard
          title="Medium Risk Employees"
          value="84"
          change="+4%"
          period="monitor sentiment"
          trend="alert"
          badgeColor="amber"
        />
        <StatCard
          title="Avg Attrition Probability"
          value="14.2%"
          change="-1.8%"
          period="baseline: 16.0%"
          trend="positive"
          badgeColor="indigo"
        />
        <StatCard
          title="Departments At Risk"
          value="2"
          change="Engineering & Sales"
          period="concentrated vulnerability"
          trend="alert"
          badgeColor="rose"
        />
      </div>

      {/* Chart: Attrition Risk by Department */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Attrition Risk Distribution by Department</h2>
            <p className="text-xs text-slate-500">Cross-department risk concentration breakdown</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-rose-600">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> High Risk Employees
            </span>
            <span className="flex items-center gap-1.5 text-amber-600">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Medium Risk Employees
            </span>
          </div>
        </div>

        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attritionByDepartment} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="department" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748B' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0B132B', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
              />
              <Bar dataKey="highRisk" fill="#EF4444" radius={[6, 6, 0, 0]} name="High Risk" />
              <Bar dataKey="mediumRisk" fill="#F59E0B" radius={[6, 6, 0, 0]} name="Medium Risk" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Attrition Risk Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Workforce Risk Assessment Registry</h2>
            <p className="text-xs text-slate-500">Click any employee to inspect multi-source AI signal explainability</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">Filter:</span>
            {['All', 'High', 'Medium', 'Low'].map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRiskFilter(r)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedRiskFilter === r
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/70 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3 px-6">Employee</th>
                <th className="py-3 px-6">Department</th>
                <th className="py-3 px-6">Risk Level</th>
                <th className="py-3 px-6">Risk Score</th>
                <th className="py-3 px-6">Key Risk Factors</th>
                <th className="py-3 px-6 text-right">Recommended Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {riskEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  onClick={() => setSelectedEmployee(emp)}
                  className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          {emp.name}
                        </div>
                        <div className="text-[11px] text-slate-400">{emp.role}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-6 font-semibold text-slate-700">
                    {emp.department}
                  </td>

                  <td className="py-4 px-6">
                    <Badge variant={emp.attritionRisk}>{emp.attritionRisk}</Badge>
                  </td>

                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            emp.attritionProbability > 65 ? 'bg-rose-500' :
                            emp.attritionProbability > 35 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${emp.attritionProbability}%` }}
                        />
                      </div>
                      <span className="font-extrabold text-slate-800">{emp.attritionProbability}%</span>
                    </div>
                  </td>

                  <td className="py-4 px-6 max-w-xs">
                    <p className="text-[11px] text-slate-600 truncate leading-snug">
                      {emp.riskFactors[0] || 'Nominal variance across baseline'}
                    </p>
                  </td>

                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEmployee(emp);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-600 hover:text-white font-semibold text-slate-700 text-xs transition-all inline-flex items-center gap-1"
                    >
                      <span>Explain Signals</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Risk Explanation Drawer */}
      <Drawer
        isOpen={!!selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
        title={selectedEmployee ? `Risk Signal Explainability: ${selectedEmployee.name}` : ''}
        subtitle={selectedEmployee ? `${selectedEmployee.role} • ${selectedEmployee.department}` : ''}
        width="max-w-2xl"
      >
        {selectedEmployee && (
          <div className="space-y-6">
            {/* Risk Gauge Header */}
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">
                  AI-Generated Predictive Signal
                </span>
                <h3 className="text-xl font-extrabold text-rose-950 mt-0.5">
                  {selectedEmployee.attritionRisk} Attrition Risk ({selectedEmployee.attritionProbability}%)
                </h3>
                <p className="text-xs text-rose-700 mt-1">Estimated horizon: 45 to 60 days without proactive intervention</p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 font-semibold block">Model Confidence</span>
                <span className="text-2xl font-black text-rose-600">94%</span>
              </div>
            </div>

            {/* Why? Multi-Source Factors */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Correlated Risk Drivers (Why was this flagged?)
              </h4>
              <div className="space-y-2">
                {selectedEmployee.riskFactors.map((factor, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-soft-sm flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Reasoning Summary */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-600" />
                WorkMind AI Reasoning Engine
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {selectedEmployee.aiInsight.reasoning}
              </p>
            </div>

            {/* Recommended Action Plan */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Recommended Preventative Interventions
              </h4>
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                {selectedEmployee.aiInsight.recommendedActions.map((action, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => navigate(`/employees/${selectedEmployee.id}`)}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
              >
                <span>Open Full 7-Tab Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setSelectedEmployee(null);
                  navigate('/action-center');
                }}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold shadow-md shadow-brand-500/20"
              >
                Initiate Retention Action
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default AttritionPage;
