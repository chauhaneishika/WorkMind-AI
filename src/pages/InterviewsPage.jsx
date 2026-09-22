import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Award,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  FileCheck,
  Send,
  HelpCircle,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { interviewQuestionsData } from '../data/mockData';

export function InterviewsPage() {
  const [selectedRole, setSelectedRole] = useState('Backend Developer');
  const [selectedLevel, setSelectedLevel] = useState('Senior');
  const [selectedType, setSelectedType] = useState('Technical');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [candidateAnswer, setCandidateAnswer] = useState('');
  const [evaluated, setEvaluated] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  const roleQuestions =
    interviewQuestionsData['Backend Developer']?.[selectedType] ||
    interviewQuestionsData['Backend Developer']?.Technical;

  const currentQ = roleQuestions[activeQuestionIndex] || roleQuestions[0];

  const handleSimulateCandidateResponse = () => {
    setCandidateAnswer(currentQ.sampleCandidateResponse);
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setEvaluated(true);
    }, 700);
  };

  const handleReset = () => {
    setCandidateAnswer('');
    setEvaluated(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            <span>AI Interview Agent</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            AI-Assisted Candidate Interviewer
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Generate role-specific technical, behavioral, and situational prompts with instant multi-rubric evaluation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Autonomous Rubric Scoring Active
          </span>
        </div>
      </div>

      {/* Role & Configuration Selector Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Target Job Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800"
            >
              <option value="Backend Developer">Backend Developer (Java/Spring)</option>
              <option value="DevOps Specialist">DevOps & Cloud SRE</option>
              <option value="Product Manager">Technical Product Manager</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Experience Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800"
            >
              <option value="Junior">Junior (0-2 years)</option>
              <option value="Mid-Level">Mid-Level (2-4 years)</option>
              <option value="Senior">Senior (4-7 years)</option>
              <option value="Lead">Lead / Principal (7+ years)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Interview Evaluation Dimension
            </label>
            <div className="flex rounded-xl bg-slate-100 p-1">
              {['Technical', 'Behavioral', 'Situational'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setActiveQuestionIndex(0);
                    handleReset();
                  }}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    selectedType === type
                      ? 'bg-white text-slate-900 shadow-soft-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Interview Simulation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Active Question & Candidate Answer */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                Question {activeQuestionIndex + 1} of {roleQuestions.length} ({selectedType})
              </span>
              <span className="text-xs text-slate-400 font-medium">Difficulty: Hard</span>
            </div>

            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>

            {/* Expected Key Points */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Target Evaluation Rubric Key Points:
              </span>
              <ul className="space-y-1 text-xs text-slate-600">
                {currentQ.expectedKeyPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Candidate Response Text Area */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Candidate Verbal / Written Response:
                </label>
                <button
                  onClick={handleSimulateCandidateResponse}
                  disabled={isSimulating}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Simulate Real Candidate Response</span>
                </button>
              </div>

              <textarea
                rows={4}
                value={candidateAnswer}
                onChange={(e) => setCandidateAnswer(e.target.value)}
                placeholder="Type or simulate candidate response to trigger real-time AI evaluation..."
                className="w-full p-3.5 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-slate-50/50"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleReset}
                className="px-3.5 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Response</span>
              </button>

              <button
                onClick={() => setEvaluated(true)}
                disabled={!candidateAnswer.trim()}
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center gap-1.5"
              >
                <span>Run AI Evaluation</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* AI Real-time Evaluation Card */}
          {evaluated && currentQ.aiEvaluation && (
            <div className="bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 rounded-2xl border border-indigo-200 p-6 shadow-soft-md space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      AI Interview Evaluation: {currentQ.aiEvaluation.verdict}
                    </h4>
                    <span className="text-[11px] text-slate-500">Autonomous Reasoning Rubric</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Question Score</span>
                  <span className="text-2xl font-black text-brand-600">{currentQ.aiEvaluation.score}</span>
                  <span className="text-xs text-slate-400"> / 100</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-indigo-100 shadow-soft-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Key Observations & Technical Critique:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  "{currentQ.aiEvaluation.observations}"
                </p>
              </div>

              {/* Rubric Breakdown */}
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(currentQ.aiEvaluation.rubric).map(([k, val]) => (
                  <div key={k} className="p-3 rounded-xl bg-white border border-slate-200/80 text-center">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block truncate">
                      {k.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-base font-extrabold text-slate-900">{val}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Comprehensive Interview Summary & Verdict */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-brand-600" />
              <span>Interview Scorecard Summary</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-600">Technical Depth</span>
                  <span className="text-slate-900 font-bold">92%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-brand-600 h-full rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-600">Communication & Clarity</span>
                  <span className="text-slate-900 font-bold">88%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-600">Problem Solving</span>
                  <span className="text-slate-900 font-bold">85%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-600">Role & Cultural Fit</span>
                  <span className="text-slate-900 font-bold">90%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Overall Interview Verdict
              </span>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-900 block">
                  Strong Hire Recommendation (Score: 89/100)
                </span>
                <p className="text-[11px] text-emerald-800 mt-1 leading-snug">
                  Candidate meets the Senior Backend bar. Recommend pairing on cloud infrastructure deployment in initial 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewsPage;
