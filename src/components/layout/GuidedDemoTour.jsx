import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowLeft, X, CheckCircle2, Play, ExternalLink } from 'lucide-react';
import { Modal } from '../common/Modal';

export const demoSteps = [
  {
    step: 1,
    title: '1. Central Workforce Intelligence Overview',
    route: '/dashboard',
    badge: 'Step 1 of 10',
    description: 'WorkMind AI ingests and synthesizes data across 6 systems (Workday, Greenhouse, Kronos, CultureAmp, Glint, Policies). Observe the core KPIs, headcount trends, and top cross-source AI alert.',
    focusArea: 'KPI cards & Top AI Workforce Insight',
    judgePrompt: 'Notice how WorkMind AI immediately presents explainable Data → Reasoning → Recommendation insights.'
  },
  {
    step: 2,
    title: '2. Attrition Risk Intelligence',
    route: '/attrition',
    badge: 'Step 2 of 10',
    description: 'Explore the predictive attrition risk matrix. WorkMind AI flags 47 high-risk employees not by guesswork, but by cross-referencing workload spikes with sentiment drops and stagnant tenure.',
    focusArea: 'Department Risk breakdown & Risk Table',
    judgePrompt: 'Review the high-risk signals in Core Engineering (22 high-risk employees).'
  },
  {
    step: 3,
    title: '3. High-Risk Employee Drilldown: Ananya Sharma',
    route: '/employees/EMP-1001',
    badge: 'Step 3 of 10',
    description: 'Drill into Senior Software Engineer Ananya Sharma’s profile. Examine her 7 distinct profile lenses including Performance, Attendance, Engagement, and AI Insights.',
    focusArea: 'Employee Profile Tabs & AI Insights Tab',
    judgePrompt: 'Look at the AI Insights tab showing why she is high risk despite superior code quality.'
  },
  {
    step: 4,
    title: '4. Multi-Source Risk Evidence Breakdown',
    route: '/employees/EMP-1001',
    badge: 'Step 4 of 10',
    description: 'Explainability in action: WorkMind AI reveals late-night GitHub commits (11 PM - 2 AM), +32% sprint story points, below-market salary (-14%), and declining sentiment from 82% to 58%.',
    focusArea: 'AI Reasoning & Evidence Box',
    judgePrompt: 'No black box: Every AI risk score is backed by transparent, multi-source evidence.'
  },
  {
    step: 5,
    title: '5. Workforce Skill Graph',
    route: '/skills',
    badge: 'Step 5 of 10',
    description: 'Enter the interactive Workforce Skill Graph. Visualizes organizational capabilities mapping Employees ↔ Skills ↔ Roles ↔ Strategic Objectives.',
    focusArea: 'Skill Ecosystem Visualizer & Domain Headcount',
    judgePrompt: 'Demonstrates deep workforce capability modeling beyond simple keyword matching.'
  },
  {
    step: 6,
    title: '6. Critical Kubernetes & Cloud Security Skill Gaps',
    route: '/skills',
    badge: 'Step 6 of 10',
    description: 'Inspect the 17-person Kubernetes deficit and 14-person Cloud Security gap. WorkMind AI identifies that these deficits directly imperil the Q4 Cloud Migration OKR.',
    focusArea: 'Critical Skill Gaps Deficit Cards',
    judgePrompt: 'Notice the immediate trigger to launch an internal upskilling program.'
  },
  {
    step: 7,
    title: '7. AI Action Center',
    route: '/action-center',
    badge: 'Step 7 of 10',
    description: 'Central command for executive HR decisions. WorkMind AI doesn’t just show charts; it prescribes prioritized, high-leverage interventions with calculated business impact.',
    focusArea: 'Prioritized Action Queue',
    judgePrompt: 'See the prioritized action cards with clear reasoning and expected impact.'
  },
  {
    step: 8,
    title: '8. Proactive Upskilling Recommendation',
    route: '/action-center',
    badge: 'Step 8 of 10',
    description: 'WorkMind AI recommends launching the internal Kubernetes Upskilling Academy led by Lead SRE Siddharth Roy, projected to close 12 deficits and save $140,000 in agency recruiting fees.',
    focusArea: 'Upskilling Action Card & One-Click Execution',
    judgePrompt: 'Click "Launch Upskilling Program" to see realistic automated workflow execution.'
  },
  {
    step: 9,
    title: '9. Source-Backed Policy Intelligence',
    route: '/policy-assistant',
    badge: 'Step 9 of 10',
    description: 'Not a generic ChatGPT wrapper. WorkMind AI queries verified company policy documents, provides exact clause citations, confidence scores, and departmental transfer rules.',
    focusArea: 'Policy Intelligence Interface & Verified Citations',
    judgePrompt: 'Select the suggested question: "Can an employee carry forward unused leave after changing departments?"'
  },
  {
    step: 10,
    title: '10. Explainable, Citation-Grounded Answer',
    route: '/policy-assistant',
    badge: 'Step 10 of 10',
    description: 'See the grounded answer citing Enterprise Leave Policy v3.2 Section 4.3, explaining that accrued leave transfers 100% with no forfeiture.',
    focusArea: 'Source Citation Card & Policy Reasoning',
    judgePrompt: 'Concludes the 10-step hackathon demo flow: WorkMind AI connects, reasons, and acts across the entire employee lifecycle!'
  }
];

export function GuidedDemoTour({ isOpen, onClose }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const current = demoSteps[currentStepIndex];

  const handleGoToStep = (index) => {
    setCurrentStepIndex(index);
    navigate(demoSteps[index].route);
  };

  const handleNext = () => {
    if (currentStepIndex < demoSteps.length - 1) {
      handleGoToStep(currentStepIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      handleGoToStep(currentStepIndex - 1);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-lg w-full bg-navy-950 text-white rounded-2xl shadow-2xl border border-brand-500/40 p-5 animate-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center text-amber-300 font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Hackathon Evaluation Tour</span>
            <p className="text-[11px] text-slate-400">Step {currentStepIndex + 1} of {demoSteps.length}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="py-4 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            {current.title}
          </h4>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {current.description}
        </p>

        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] text-brand-300 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
            <span>Judge Spotlight:</span>
          </div>
          <p className="text-xs text-amber-200/90 font-medium italic">
            "{current.judgePrompt}"
          </p>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 py-1">
        {demoSteps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => handleGoToStep(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentStepIndex
                ? 'w-6 bg-brand-400'
                : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
            title={`Jump to step ${idx + 1}`}
          />
        ))}
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800">
        <button
          onClick={handlePrev}
          disabled={currentStepIndex === 0}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md shadow-brand-600/30 flex items-center gap-1.5 transition-all"
        >
          <span>{currentStepIndex === demoSteps.length - 1 ? 'Finish Tour' : 'Next Step'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default GuidedDemoTour;
