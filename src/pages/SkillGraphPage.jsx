import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Network,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users,
  Layers,
  ChevronRight,
  Zap,
  BookOpen
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';
import { criticalSkillGaps, skillEcosystem, employees } from '../data/mockData';

export function SkillGraphPage() {
  const navigate = useNavigate();
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedSkillGap, setSelectedSkillGap] = useState(null);
  const [upskillModalOpen, setUpskillModalOpen] = useState(false);
  const [notification, setNotification] = useState('');

  // Interactive node selector
  const [selectedNode, setSelectedNode] = useState({
    type: 'Employee',
    name: 'Ananya Sharma',
    role: 'Senior Software Engineer',
    department: 'Engineering',
    connectedSkills: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Kubernetes'],
    targetRoles: ['Staff Software Engineer', 'Cloud Architect']
  });

  const handleLaunchUpskilling = (gap) => {
    setSelectedSkillGap(gap);
    setUpskillModalOpen(true);
  };

  const handleConfirmUpskilling = () => {
    setUpskillModalOpen(false);
    setNotification(`Successfully launched ${selectedSkillGap?.name} Upskilling Academy! Enrolled 15 engineers.`);
    setTimeout(() => setNotification(''), 4000);
  };

  return (
    <div className="space-y-8">
      {/* Toast Alert */}
      {notification && (
        <div className="fixed top-20 right-8 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <Network className="w-3.5 h-3.5" />
            <span>Capability Intelligence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Workforce Skill Graph
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Understand current organizational capabilities, model emerging tech stacks, and remediate critical skill deficits.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleLaunchUpskilling(criticalSkillGaps[0])}
            className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center gap-1.5"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Upskilling Program</span>
          </button>
        </div>
      </div>

      {/* Interactive Visual Skill Ecosystem: Employees -> Skills -> Departments -> Roles */}
      <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-soft-xl border border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Dynamic Relational Graph Explorer
            </span>
            <h2 className="text-lg font-bold text-white mt-0.5">
              Employees → Skills → Departments → Roles
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Selected Node Focus:</span>
            <span className="font-bold text-brand-300 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
              {selectedNode.name} ({selectedNode.role})
            </span>
          </div>
        </div>

        {/* Visual Graph Canvas Mockup with Interactive Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1: Employees Node */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              1. Talent Node
            </span>
            <div className="space-y-2">
              {employees.slice(0, 3).map((emp) => (
                <div
                  key={emp.id}
                  onClick={() =>
                    setSelectedNode({
                      type: 'Employee',
                      name: emp.name,
                      role: emp.role,
                      department: emp.department,
                      connectedSkills: emp.skills.map((s) => s.name),
                      targetRoles: ['Staff Engineer', 'Principal Architect']
                    })
                  }
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center gap-2.5 ${
                    selectedNode.name === emp.name
                      ? 'bg-brand-600/40 border-brand-400 text-white shadow-glow'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1 text-xs">
                    <p className="font-bold truncate">{emp.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{emp.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Connected Skills Node */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm space-y-3 md:col-span-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                2. Connected Competency Matrix
              </span>
              <span className="text-[10px] text-brand-300 font-semibold">
                {selectedNode.connectedSkills.length} Verified Skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedNode.connectedSkills.map((skill, sIdx) => {
                const isGap = skill === 'Kubernetes' || skill === 'Cloud Security';
                return (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 ${
                      isGap
                        ? 'bg-rose-500/20 border-rose-500/40 text-rose-200'
                        : 'bg-indigo-500/20 border-indigo-400/30 text-indigo-100'
                    }`}
                  >
                    <span>{skill}</span>
                    {isGap && <AlertTriangle className="w-3 h-3 text-rose-300" />}
                  </span>
                );
              })}
            </div>

            <div className="pt-2 text-[11px] text-slate-300 leading-relaxed border-t border-white/10">
              <span className="font-bold text-amber-300">Graph Connection: </span>
              {selectedNode.name}'s verified mastery in{' '}
              <span className="underline decoration-indigo-400">{selectedNode.connectedSkills.slice(0, 3).join(', ')}</span> enables critical architectural throughput in{' '}
              <span className="font-semibold text-white">{selectedNode.department}</span>.
            </div>
          </div>

          {/* Column 3: Roles & Career Progression Node */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              3. Target Roles & Progression
            </span>
            <div className="space-y-2">
              {selectedNode.targetRoles.map((role, rIdx) => (
                <div
                  key={rIdx}
                  className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-xs font-bold text-emerald-200 flex items-center justify-between"
                >
                  <span>{role}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 pt-1">
              Required: Expand Kubernetes cluster proficiency from Intermediate to Expert.
            </p>
          </div>
        </div>
      </div>

      {/* Critical Skill Gaps Section (Exact requirement) */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Critical Workforce Skill Gaps</h2>
            <p className="text-xs text-slate-500">
              Identified capability deficits directly impacting strategic delivery deadlines
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-xl">
            5 Critical Deficits Monitored
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criticalSkillGaps.map((gap) => (
            <div
              key={gap.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {gap.category}
                  </span>
                  <Badge variant={gap.priority === 'Critical' ? 'danger' : 'warning'} size="sm">
                    {gap.priority}
                  </Badge>
                </div>

                <h3 className="text-base font-bold text-slate-900">{gap.name}</h3>

                {/* Numbers: Current vs Required vs Gap */}
                <div className="mt-4 grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Current</span>
                    <span className="text-lg font-extrabold text-slate-800">{gap.currentEmployees}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Required</span>
                    <span className="text-lg font-extrabold text-slate-800">{gap.requiredEmployees}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-rose-500 font-bold uppercase block">Deficit Gap</span>
                    <span className="text-lg font-black text-rose-600">-{gap.gap}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Coverage Percentage</span>
                    <span className="text-slate-900">{gap.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        gap.percentage < 40 ? 'bg-rose-500' :
                        gap.percentage < 60 ? 'bg-amber-500' : 'bg-brand-600'
                      }`}
                      style={{ width: `${gap.percentage}%` }}
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {gap.reasoning}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleLaunchUpskilling(gap)}
                  className="w-full py-2.5 px-3 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Launch Upskilling Program</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Domain Skill Health Matrix */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm space-y-4">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Organizational Skill Domains</h2>
          <p className="text-xs text-slate-500">Overview of capabilities across major company domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillEcosystem.map((eco, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900">{eco.domain}</h3>
                <span className="font-semibold text-slate-600">{eco.headcount} Staff</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {eco.skills.map((s, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
              <span className={`text-[10px] font-bold block pt-1 ${eco.status.includes('Deficit') ? 'text-amber-600' : 'text-emerald-600'}`}>
                ● {eco.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upskilling Program Modal */}
      <Modal
        isOpen={upskillModalOpen}
        onClose={() => setUpskillModalOpen(false)}
        title={selectedSkillGap ? `Launch ${selectedSkillGap.name} Upskilling Academy` : ''}
        subtitle="WorkMind AI Automated Upskilling Track Deployment"
      >
        {selectedSkillGap && (
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
              <span className="font-bold text-indigo-950 block">Target Capability Deficit:</span>
              <p className="text-indigo-900 mt-0.5">
                Current deficit is {selectedSkillGap.gap} employees across {selectedSkillGap.impactedDepartments.join(', ')}.
              </p>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Cohort Selection</label>
              <input
                type="text"
                defaultValue="15 Senior Software Engineers from Core Platform squad"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Assigned Lead Instructor / Mentor</label>
              <input
                type="text"
                defaultValue="Siddharth Roy (DevOps Specialist - CKA Certified)"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Estimated Completion Duration</label>
              <input
                type="text"
                defaultValue="6 Weeks (4 hrs/week hands-on lab sprints)"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>

            <div className="pt-3 flex justify-end gap-2">
              <button
                onClick={() => setUpskillModalOpen(false)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUpskilling}
                className="px-4 py-2 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 shadow-md shadow-brand-500/20"
              >
                Deploy Upskilling Curriculum
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default SkillGraphPage;
