import React, { useState } from 'react';
import {
  Award,
  Target,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Users,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import StatCard from '../components/common/StatCard';
import Badge from '../components/common/Badge';
import AiReasoningCard from '../components/common/AiReasoningCard';
import { performanceDistribution, employees } from '../data/mockData';

export function PerformancePage() {
  const [selectedDept, setSelectedDept] = useState('All');

  const COLORS = ['#4F46E5', '#06B6D4', '#F59E0B', '#EF4444'];

  const departmentPerformance = [
    { department: 'Engineering', avgScore: 4.3, goalCompletion: 91 },
    { department: 'Sales', avgScore: 4.1, goalCompletion: 87 },
    { department: 'Marketing', avgScore: 4.2, goalCompletion: 88 },
    { department: 'Operations', avgScore: 3.9, goalCompletion: 82 },
    { department: 'Finance', avgScore: 4.4, goalCompletion: 93 },
    { department: 'Human Resources', avgScore: 4.3, goalCompletion: 89 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Talent Calibration</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Performance Intelligence & OKRs
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Multidimensional calibration connecting objective goal velocity, 360° peer feedback sentiment, and AI growth plans.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-soft-sm">
            Q2 Calibration Active: 98% Reviewed
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Average Performance Score"
          value="4.1 / 5.0"
          change="+0.2"
          period="vs Q1 baseline"
          trend="positive"
          icon={Award}
          badgeColor="indigo"
        />
        <StatCard
          title="Goal & OKR Completion"
          value="88%"
          change="+5%"
          period="on-track for Q3"
          trend="up"
          icon={Target}
          badgeColor="emerald"
        />
        <StatCard
          title="Peer Feedback Sentiment"
          value="76%"
          change="+3%"
          period="positive valence"
          trend="positive"
          icon={MessageSquare}
          badgeColor="sky"
        />
        <StatCard
          title="Employees Needing Support"
          value="48"
          change="-6"
          period="in coaching tracks"
          trend="positive"
          icon={Users}
          badgeColor="amber"
        />
      </div>

      {/* AI Performance Insight Signature Card */}
      <AiReasoningCard
        title="AI Calibration Insight: High Delivery vs Collaboration Friction"
        subtitle="AI identified that 16% of high-delivery individual contributors in Engineering display declining cross-functional collaboration ratings."
        confidence="92%"
        category="360° Calibration Analytics"
        evidence={[
          { source: 'Lattice OKRs', data: 'Technical delivery velocity exceeds expectation at 94% task completion.' },
          { source: 'CultureAmp 360', data: 'Peer feedback sentiment notes friction during cross-team architectural handoffs.' },
          { source: 'Sprint Retros', data: 'Review comments show brief or non-constructive feedback on junior PRs.' }
        ]}
        reasoning="Engineers pushing aggressive release deadlines often deprioritize cross-functional empathy and mentoring, leading to downstream integration friction."
        recommendedActions={[
          'Schedule structured mentorship coaching for high-impact technical contributors.',
          'Introduce dedicated architectural collaboration workshops in Q4 sprint cycles.',
          'Incorporate collaborative empathy milestones into Senior Engineering promotion criteria.'
        ]}
        actionLabel="Review Calibrated Engineering Cohort"
        onAction={() => setSelectedDept('Engineering')}
      />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Performance by Department */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Department Performance & Goal Delivery</h2>
              <p className="text-xs text-slate-500">Average review score vs goal completion percentage</p>
            </div>
          </div>

          <div className="h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentPerformance} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="department" tick={{ fontSize: 11, fill: '#64748B' }} />
                <YAxis yAxisId="left" domain={[0, 5]} tick={{ fontSize: 11, fill: '#64748B' }} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748B' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0B132B', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
                />
                <Bar yAxisId="left" dataKey="avgScore" fill="#4F46E5" radius={[6, 6, 0, 0]} name="Avg Score (out of 5)" />
                <Bar yAxisId="right" dataKey="goalCompletion" fill="#10B981" radius={[6, 6, 0, 0]} name="Goal Completion %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Performance Distribution */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Rating Distribution</h2>
            <p className="text-xs text-slate-500 mb-4">Organizational curve (1,248 staff)</p>

            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceDistribution}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="count"
                  >
                    {performanceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0B132B', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-slate-900">4.1</span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Avg</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
            {performanceDistribution.map((p, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                  <span className="text-slate-600 truncate">{p.rating.split(' ')[0]}</span>
                </div>
                <span className="font-bold text-slate-900">{p.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Performance Cards */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">Featured Performance Profiles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {employees.slice(0, 4).map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm space-y-4 hover:shadow-soft-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{emp.name}</h3>
                    <p className="text-xs text-slate-500">{emp.role} • {emp.department}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 font-semibold block">Rating</span>
                  <span className="text-lg font-black text-brand-600">{emp.performanceScore} / 5.0</span>
                </div>
              </div>

              {/* Goals snapshot */}
              <div className="space-y-1 text-xs">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Primary Goal:</span>
                <p className="text-slate-700 font-medium">
                  {emp.goals && emp.goals[0] ? emp.goals[0].title : 'Deliver key architectural improvements'}
                </p>
              </div>

              {/* AI Feedback Summary */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1.5">
                <span className="font-bold text-brand-700 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Performance Calibration
                </span>
                <p className="text-slate-600 leading-snug">
                  "{emp.aiInsight.summary}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PerformancePage;
