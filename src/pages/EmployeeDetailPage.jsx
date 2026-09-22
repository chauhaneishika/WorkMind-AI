import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Mail,
  MapPin,
  TrendingDown,
  Award,
  AlertTriangle,
  Clock,
  Briefcase,
  CheckCircle2,
  DollarSign,
  UserCheck,
  Building,
  Target,
  FileText
} from 'lucide-react';
import Badge from '../components/common/Badge';
import AiReasoningCard from '../components/common/AiReasoningCard';
import Modal from '../components/common/Modal';
import { employees } from '../data/mockData';

export function EmployeeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('AI Insights');
  const [checkInModalOpen, setCheckInModalOpen] = useState(false);
  const [notification, setNotification] = useState('');

  const employee = employees.find((e) => e.id === id) || employees[0];

  const tabs = [
    'Overview',
    'Performance',
    'Skills',
    'Attendance',
    'Engagement',
    'Career Growth',
    'AI Insights'
  ];

  const handleScheduleCheckIn = () => {
    setCheckInModalOpen(false);
    setNotification('1-on-1 Retention Check-in scheduled with Manager.');
    setTimeout(() => setNotification(''), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {notification && (
        <div className="fixed top-20 right-8 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Back button */}
      <div>
        <button
          onClick={() => navigate('/employees')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Employees</span>
        </button>
      </div>

      {/* Employee Hero Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-200 shadow-soft-sm"
            />
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">{employee.name}</h1>
                <Badge variant={employee.attritionRisk}>
                  {employee.attritionRisk} Risk ({employee.attritionProbability}%)
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 mt-1.5">
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <Briefcase className="w-3.5 h-3.5 text-brand-600" />
                  {employee.role}
                </span>
                <span className="flex items-center gap-1">
                  <Building className="w-3.5 h-3.5" />
                  {employee.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {employee.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  {employee.email}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setCheckInModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 1-on-1 Check-in</span>
            </button>
          </div>
        </div>

        {/* 7 Tab Navigation Switcher */}
        <div className="mt-8 border-b border-slate-200 flex overflow-x-auto gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab
                  ? 'text-brand-600 border-b-2 border-brand-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab === 'AI Insights' && <Sparkles className="w-3.5 h-3.5 text-brand-600" />}
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: AI Insights (The Core Feature) */}
      {activeTab === 'AI Insights' && (
        <div className="space-y-6">
          {/* Explainability Highlight Box */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                Workforce Attrition Risk Signal: {employee.attritionRisk} ({employee.attritionProbability}%)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-200/60 text-rose-900">
                Confidence: 94%
              </span>
            </div>

            <h3 className="text-base font-bold text-rose-950 mb-2">
              Why was this employee flagged by WorkMind AI?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-white p-4 rounded-xl border border-rose-200/80 shadow-soft-sm">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Multi-Source Risk Evidence
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {employee.riskFactors.map((rf, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                      <span>{rf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-soft-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  Recommended Preventative Interventions
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {employee.aiInsight.recommendedActions.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Full AI Reasoning Card */}
          <AiReasoningCard
            title={`Comprehensive Intelligence Synthesis: ${employee.name}`}
            subtitle={employee.aiInsight.summary}
            evidence={employee.aiInsight.evidence || employee.riskFactors}
            reasoning={employee.aiInsight.reasoning}
            recommendedActions={employee.aiInsight.recommendedActions}
            actionLabel="Schedule Priority Retention Dialogue"
            onAction={() => setCheckInModalOpen(true)}
          />
        </div>
      )}

      {/* Tab 2: Overview */}
      {activeTab === 'Overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Employment Details</h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Tenure</span>
                <span className="font-bold text-slate-900">{employee.tenure}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Hire Date</span>
                <span className="font-bold text-slate-900">{employee.hireDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Direct Manager</span>
                <span className="font-bold text-slate-900">{employee.manager}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Compensation Tier</span>
                <span className="font-bold text-slate-900">{employee.salary}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Status</span>
                <span className="font-bold text-emerald-600">{employee.status}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-4 md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Goals & OKRs</h3>
            <div className="space-y-3">
              {employee.goals && employee.goals.map((g, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{g.title}</span>
                    <Badge variant={g.status === 'Completed' ? 'success' : g.status === 'Behind' ? 'danger' : 'info'} size="sm">
                      {g.status}
                    </Badge>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${g.progress === 100 ? 'bg-emerald-500' : 'bg-brand-600'}`}
                      style={{ width: `${g.progress}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 block text-right font-medium">{g.progress}% Complete</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Performance */}
      {activeTab === 'Performance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase">Performance Score</span>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">{employee.performanceScore} / 5.0</p>
              <span className="text-xs text-emerald-600 font-semibold mt-1 block">Exceeds team baseline (4.1)</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase">Quarterly Goal Delivery</span>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">92%</p>
              <span className="text-xs text-slate-500 mt-1 block">5 of 6 deliverables shipped</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase">Peer Feedback Sentiment</span>
              <p className="text-3xl font-extrabold text-brand-600 mt-1">88% Positive</p>
              <span className="text-xs text-slate-500 mt-1 block">14 peer evaluations</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Historical Performance Reviews</h3>
            <div className="space-y-3">
              {employee.performanceReviews && employee.performanceReviews.map((rev, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{rev.quarter}</span>
                    <Badge variant="primary" size="sm">Rating: {rev.rating} / 5.0</Badge>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 block">Manager Feedback:</span>
                    <p className="text-slate-600 mt-0.5">{rev.managerFeedback}</p>
                  </div>
                  {rev.peerFeedback && (
                    <div className="pt-1.5 border-t border-slate-200/60">
                      <span className="font-semibold text-slate-700 block">Peer Feedback:</span>
                      <p className="text-slate-600 mt-0.5">{rev.peerFeedback}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Skills */}
      {activeTab === 'Skills' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Verified Technical & Professional Competencies</h3>
            <p className="text-xs text-slate-500">Evaluated across code reviews, projects, and manager endorsements</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {employee.skills.map((skill, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs">{skill.name}</span>
                  <Badge variant={skill.level === 'Expert' ? 'success' : 'primary'} size="sm">
                    {skill.level}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Peer Endorsements</span>
                  <span className="font-semibold text-slate-700">{skill.endorsed} reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Attendance */}
      {activeTab === 'Attendance' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase">Presence Rate</span>
            <p className="text-3xl font-extrabold text-slate-900">{employee.attendance.presenceRate}</p>
            <span className="text-xs text-slate-500">Scheduled workdays accounted</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase">Remote Days / Week</span>
            <p className="text-3xl font-extrabold text-indigo-600">{employee.attendance.remoteDaysPerWeek} Days</p>
            <span className="text-xs text-slate-500">Average weekly hybrid pattern</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase">Sick Leaves Taken</span>
            <p className="text-3xl font-extrabold text-amber-600">{employee.attendance.sickLeavesUsed} Days</p>
            <span className="text-xs text-slate-500">{employee.attendance.unexplainedAbsences} unexcused flags</span>
          </div>
        </div>
      )}

      {/* Tab 6: Engagement */}
      {activeTab === 'Engagement' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Engagement & Morale Trajectory</h3>
              <p className="text-xs text-slate-500">Continuous sentiment analysis from Glint pulse surveys</p>
            </div>
            <Badge variant={employee.engagementScore < 60 ? 'danger' : 'success'} size="md">
              Index: {employee.engagementScore}%
            </Badge>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs">
            <h4 className="font-bold text-slate-800 uppercase text-[11px]">Recent Pulse Survey Feedback Excerpt</h4>
            <blockquote className="italic text-slate-600 border-l-2 border-brand-500 pl-3">
              "The technical scope has multiplied with the microservices migration, but recognition and compensation have remained unchanged for over two years."
            </blockquote>
            <p className="text-[11px] text-slate-400">Captured in Q2 Confidential Organization Pulse</p>
          </div>
        </div>
      )}

      {/* Tab 7: Career Growth */}
      {activeTab === 'Career Growth' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Promotion Track & Mobility Opportunities</h3>
            <p className="text-xs text-slate-500">Internal leveling and career path roadmap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Current Band</span>
              <p className="text-sm font-bold text-slate-900">{employee.role} (IC-4)</p>
              <p className="text-slate-500">28 months in current level without band adjustment.</p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-2">
              <span className="text-[11px] font-bold text-brand-600 uppercase">Recommended Next Band</span>
              <p className="text-sm font-bold text-slate-900">Staff Software Engineer / Tech Lead (IC-5)</p>
              <p className="text-slate-600">Meets technical bar. Needs formal sponsorship from VP Engineering.</p>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Check-in Modal */}
      <Modal
        isOpen={checkInModalOpen}
        onClose={() => setCheckInModalOpen(false)}
        title={`Schedule 1-on-1 Check-in with ${employee.name}`}
        subtitle="Proactive career and retention discussion"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Meeting Objective</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs">
              <option>Retention & Career Progression Dialogue (Recommended by AI)</option>
              <option>Workload & Sprint Story Point Rebalancing</option>
              <option>Quarterly Performance Check-in</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Participants</label>
            <input
              type="text"
              defaultValue={`${employee.name}, ${employee.manager}, HR Admin (You)`}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Suggested Discussion Agenda</label>
            <textarea
              rows={3}
              defaultValue="1. Review recent platform migration contributions&#10;2. Discuss compensation adjustment to market benchmark&#10;3. Map timeline for Tech Lead promotion track"
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="pt-3 flex justify-end gap-2">
            <button
              onClick={() => setCheckInModalOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleScheduleCheckIn}
              className="px-4 py-2 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700"
            >
              Confirm 1-on-1 Invite
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EmployeeDetailPage;
