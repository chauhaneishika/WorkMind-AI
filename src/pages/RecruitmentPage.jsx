import React, { useState } from 'react';
import {
  Briefcase,
  UserCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  ExternalLink,
  Calendar,
  FileText,
  UserPlus,
  Search,
  Filter,
  ArrowRight,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Drawer from '../components/common/Drawer';
import Modal from '../components/common/Modal';
import { jobs, candidates as initialCandidates } from '../data/mockData';

export function RecruitmentPage() {
  const [selectedJobId, setSelectedJobId] = useState(jobs[0].id);
  const [candidatesList, setCandidatesList] = useState(initialCandidates);
  const [activeCandidate, setActiveCandidate] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [interviewModalOpen, setInterviewModalOpen] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  const currentJob = jobs.find((j) => j.id === selectedJobId) || jobs[0];
  const filteredCandidates = candidatesList.filter((c) => c.jobId === selectedJobId);

  const handleUpdateStatus = (candidateId, newStatus) => {
    setCandidatesList((prev) =>
      prev.map((c) => (c.id === candidateId ? { ...c, status: newStatus } : c))
    );
    if (activeCandidate && activeCandidate.id === candidateId) {
      setActiveCandidate((prev) => ({ ...prev, status: newStatus }));
    }
    setNotificationMsg(`Candidate ${newStatus === 'Shortlisted' ? 'shortlisted' : 'status updated'}`);
    setTimeout(() => setNotificationMsg(''), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notificationMsg && (
        <div className="fixed top-20 right-8 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Talent Acquisition Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            AI Recruitment Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Evaluate and rank candidates using skill benchmarks, resume embeddings, and explainable AI rubrics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            ATS Synced: Greenhouse
          </span>
        </div>
      </div>

      {/* Job Requisition Selector Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-2 shadow-soft-sm flex flex-wrap gap-2">
        {jobs.map((job) => (
          <button
            key={job.id}
            onClick={() => setSelectedJobId(job.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedJobId === job.id
                ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{job.title}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedJobId === job.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
              {job.openings} Open
            </span>
          </button>
        ))}
      </div>

      {/* Selected Job Requisition Requirements Card */}
      <div className="bg-gradient-to-r from-slate-900 to-navy-900 text-white rounded-2xl p-6 shadow-soft-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-300 font-semibold mb-1">
              <span>{currentJob.department}</span>
              <span>•</span>
              <span>{currentJob.location}</span>
              <span>•</span>
              <span>Required: {currentJob.experience}</span>
            </div>
            <h2 className="text-lg font-bold text-white">{currentJob.title}</h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">{currentJob.description}</p>
          </div>

          <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 max-w-md">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
              Required Target Skills ({currentJob.requirements.length})
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentJob.requirements.map((req, rIdx) => (
                <span
                  key={rIdx}
                  className="px-2.5 py-1 rounded-lg bg-brand-500/30 border border-brand-400/40 text-xs font-semibold text-white"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Ranking Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Ranked Candidates ({filteredCandidates.length})</h2>
            <p className="text-xs text-slate-500">Ranked by WorkMind AI Multi-Criteria Matching Algorithm</p>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            Auto-Scored from Resume + Coding Screen
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/70 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3 px-6">Candidate</th>
                <th className="py-3 px-6">Experience</th>
                <th className="py-3 px-6">Skills Match</th>
                <th className="py-3 px-6">AI Score</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredCandidates.map((cand) => (
                <tr
                  key={cand.id}
                  onClick={() => setActiveCandidate(cand)}
                  className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={cand.avatar}
                        alt={cand.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          {cand.name}
                        </div>
                        <div className="text-[11px] text-slate-500">{cand.currentCompany}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-6 font-medium text-slate-700">
                    {cand.experience}
                  </td>

                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-brand-600 h-full rounded-full"
                          style={{ width: `${cand.skillsMatch}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-800">{cand.skillsMatch}%</span>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 font-extrabold text-indigo-700">
                      <Sparkles className="w-3 h-3 text-indigo-600" />
                      <span>{cand.aiScore} / 100</span>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    <Badge variant={cand.status}>{cand.status}</Badge>
                  </td>

                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCandidate(cand);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-600 hover:text-white font-semibold text-slate-700 text-xs transition-all inline-flex items-center gap-1"
                    >
                      <span>View Profile</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Candidate Profile Drawer */}
      <Drawer
        isOpen={!!activeCandidate}
        onClose={() => setActiveCandidate(null)}
        title={activeCandidate ? `${activeCandidate.name}` : ''}
        subtitle={activeCandidate ? `${activeCandidate.experience} Exp • ${activeCandidate.currentCompany}` : ''}
        width="max-w-2xl"
      >
        {activeCandidate && (
          <div className="space-y-6">
            {/* Quick Header Banner */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
              <div className="flex items-center gap-3">
                <img
                  src={activeCandidate.avatar}
                  alt={activeCandidate.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h3 className="text-base font-bold text-slate-900">{activeCandidate.name}</h3>
                  <p className="text-xs text-slate-500">{activeCandidate.email} • {activeCandidate.phone}</p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">{activeCandidate.education}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">AI Evaluation Score</span>
                <span className="text-2xl font-black text-brand-600">{activeCandidate.aiScore}</span>
                <span className="text-xs text-slate-400"> / 100</span>
              </div>
            </div>

            {/* Resume Summary */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-brand-600" />
                Resume Summary
              </h4>
              <p className="text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/70 leading-relaxed">
                {activeCandidate.resumeSummary}
              </p>
            </div>

            {/* Skill Match Breakdown */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Skills Match Analysis ({activeCandidate.skillsMatch}% Alignment)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Verified Matched Skills ({activeCandidate.matchedSkills.length})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCandidate.matchedSkills.map((sk, sIdx) => (
                      <span key={sIdx} className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                    <XCircle className="w-4 h-4 text-amber-600" />
                    Missing / Low Exposure Skills ({activeCandidate.missingSkills.length})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCandidate.missingSkills.length > 0 ? (
                      activeCandidate.missingSkills.map((sk, sIdx) => (
                        <span key={sIdx} className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          {sk}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-500 italic">None - Complete skill coverage</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Reasoning (Explainability) */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50/60 via-purple-50/30 to-white border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <h4 className="text-xs font-bold text-indigo-950 uppercase tracking-wider">
                  AI Explainable Reasoning
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                "{activeCandidate.aiReasoning}"
              </p>
            </div>

            {/* Interview Recommendation */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Recommended Next Step
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeCandidate.interviewRecommendation}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setInterviewModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Interview</span>
                </button>

                <button
                  onClick={() => handleUpdateStatus(activeCandidate.id, 'Shortlisted')}
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 flex items-center gap-1.5"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Shortlist Candidate</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Drawer>

      {/* Full Resume Modal */}
      <Modal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        title={activeCandidate ? `Resume: ${activeCandidate.name}` : ''}
        subtitle="Parsed via WorkMind ATS Document Ingestion"
        maxWidth="max-w-2xl"
      >
        {activeCandidate && (
          <div className="space-y-4 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm">{activeCandidate.name}</h4>
              <p className="text-slate-500 mt-0.5">{activeCandidate.email} • {activeCandidate.phone}</p>
              <p className="text-slate-600 mt-2 font-medium">{activeCandidate.education}</p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 uppercase text-[11px] mb-1">Executive Summary</h5>
              <p className="leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                {activeCandidate.resumeSummary}
              </p>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 uppercase text-[11px] mb-1">Verified Technical Stack</h5>
              <div className="flex flex-wrap gap-1.5">
                {activeCandidate.matchedSkills.concat(activeCandidate.missingSkills).map((s, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setResumeModalOpen(false)}
                className="px-4 py-2 bg-brand-600 text-white rounded-xl font-bold text-xs"
              >
                Close Resume
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Schedule Interview Modal */}
      <Modal
        isOpen={interviewModalOpen}
        onClose={() => setInterviewModalOpen(false)}
        title={activeCandidate ? `Schedule Interview with ${activeCandidate.name}` : ''}
        subtitle="Automatic calendar coordination via Google Meet / Zoom"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Interview Type</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs">
              <option>Round 2: Technical Architecture Deep-Dive (60 mins)</option>
              <option>Round 1: Initial Technical Screening (45 mins)</option>
              <option>Round 3: Leadership & Cultural Alignment (45 mins)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Interviewers</label>
            <input
              type="text"
              defaultValue="Vikram Malhotra (VP Eng), Siddharth Roy (DevOps)"
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Proposed Date & Time</label>
            <input
              type="datetime-local"
              defaultValue="2026-09-24T14:30"
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="pt-3 flex justify-end gap-2">
            <button
              onClick={() => setInterviewModalOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setInterviewModalOpen(false);
                if (activeCandidate) handleUpdateStatus(activeCandidate.id, 'Interviewing');
              }}
              className="px-4 py-2 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700"
            >
              Send Calendar Invites
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RecruitmentPage;
