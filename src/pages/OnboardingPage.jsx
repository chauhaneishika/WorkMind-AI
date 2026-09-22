import React, { useState } from 'react';
import {
  UserCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  AlertTriangle,
  BookOpen,
  Calendar,
  Check
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { onboardingEmployees as initialOnboarding } from '../data/mockData';

export function OnboardingPage() {
  const [onboardingList, setOnboardingList] = useState(initialOnboarding);
  const [selectedHireId, setSelectedHireId] = useState(initialOnboarding[0].id);

  const activeHire = onboardingList.find((h) => h.id === selectedHireId) || onboardingList[0];

  const handleToggleTask = (hireId, taskId) => {
    setOnboardingList((prev) =>
      prev.map((hire) => {
        if (hire.id !== hireId) return hire;
        const updatedTasks = hire.tasks.map((t) =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        );
        const completedCount = updatedTasks.filter((t) => t.completed).length;
        const newProgress = Math.round((completedCount / updatedTasks.length) * 100);
        return {
          ...hire,
          tasks: updatedTasks,
          progress: newProgress,
          status: newProgress === 100 ? 'Completed' : hire.status
        };
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Employee Lifecycle</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Adaptive Onboarding Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Personalized onboarding journeys powered by role capability analysis and real-time checkpoint monitoring.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-soft-sm">
            4 Active New Hires in Cohort
          </span>
        </div>
      </div>

      {/* Overview Cards for Active Cohort */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {onboardingList.map((hire) => (
          <div
            key={hire.id}
            onClick={() => setSelectedHireId(hire.id)}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              selectedHireId === hire.id
                ? 'bg-white border-brand-500 shadow-soft-md ring-2 ring-brand-500/20'
                : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-soft-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={hire.avatar}
                alt={hire.name}
                className="w-12 h-12 rounded-xl object-cover border border-slate-200"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-slate-900 text-sm truncate">{hire.name}</h3>
                <p className="text-xs text-slate-500 truncate">{hire.role}</p>
                <div className="mt-1 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Progress</span>
                  <span className="font-bold text-brand-600">{hire.progress}%</span>
                </div>
              </div>
            </div>

            <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  hire.progress > 70 ? 'bg-emerald-500' :
                  hire.progress > 40 ? 'bg-brand-600' : 'bg-amber-500'
                }`}
                style={{ width: `${hire.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Selected Onboarding Journey */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Task Checklist & Progress */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">{activeHire.name}</h2>
                <Badge variant={activeHire.status === 'Ahead of Schedule' ? 'success' : activeHire.status === 'On Track' ? 'info' : 'warning'}>
                  {activeHire.status}
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeHire.role} • {activeHire.department} • Mentor: {activeHire.mentor} • Started {activeHire.startDate}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-2xl font-black text-brand-600">{activeHire.progress}%</span>
                <span className="text-xs text-slate-400 block font-semibold">Completed</span>
              </div>
            </div>
          </div>

          {/* Interactive Tasks Checklist */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Onboarding Checklist ({activeHire.tasks.filter((t) => t.completed).length} of {activeHire.tasks.length} Completed)
            </h3>

            <div className="space-y-2.5">
              {activeHire.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleToggleTask(activeHire.id, task.id)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    task.completed
                      ? 'bg-slate-50/80 border-slate-200/80 text-slate-500'
                      : 'bg-white border-slate-200 hover:border-brand-300 text-slate-800 shadow-soft-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className={`text-xs font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {task.title}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {task.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: AI Personalized Recommendations Box */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-brand-50 via-indigo-50/50 to-white rounded-2xl border border-brand-200 p-6 shadow-soft-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-brand-600 text-white shadow-md shadow-brand-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  {activeHire.aiRecommendation.title}
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">Auto-Tailored by Role Graph</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-medium bg-white/80 p-3.5 rounded-xl border border-brand-100">
              "{activeHire.aiRecommendation.content}"
            </p>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
              <span className="font-bold block text-[11px]">Expected Business Impact:</span>
              <p className="mt-0.5 text-emerald-900">{activeHire.aiRecommendation.expectedBenefit}</p>
            </div>

            <button
              onClick={() => handleToggleTask(activeHire.id, activeHire.tasks[activeHire.tasks.length - 1].id)}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Assign Recommended Module</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft-sm space-y-3 text-xs">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Cohort Velocity Benchmarks</h4>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Average Time to First PR</span>
              <span className="font-bold text-slate-900">11 Days (Team avg: 18)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Security Clearance Rate</span>
              <span className="font-bold text-emerald-600">100% on Week 1</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">90-Day Retention Projected</span>
              <span className="font-bold text-brand-600">94.8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
