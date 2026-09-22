import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  Download,
  Printer,
  Calendar,
  CheckCircle2,
  TrendingDown,
  Users,
  Award,
  Network,
  ArrowRight
} from 'lucide-react';
import Badge from '../components/common/Badge';

export function ReportsPage() {
  const [selectedReportType, setSelectedReportType] = useState('Workforce Summary');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const reportTypes = [
    { id: 'Workforce Summary', icon: Users, desc: 'Holistic headcount, hiring velocity, and quarterly organizational health' },
    { id: 'Attrition Report', icon: TrendingDown, desc: 'Predictive risk breakdown, retention factor correlation, and departmental exposure' },
    { id: 'Performance Report', icon: Award, desc: 'Goal completion curves, 360° sentiment distributions, and calibration matrices' },
    { id: 'Skill Gap Report', icon: Network, desc: 'Critical competency deficits, role readiness analysis, and upskilling roadmaps' },
    { id: 'Recruitment Report', icon: FileText, desc: 'Candidate quality index, AI screening pass-rates, and time-to-hire velocity' },
  ];

  const handleGenerateAiReport = () => {
    setIsGenerating(true);
    setGenerationStep('Analyzing cross-source workforce telemetry...');
    setTimeout(() => {
      setGenerationStep('Cross-referencing performance OKRs, attendance logs, and survey sentiment...');
      setTimeout(() => {
        setGenerationStep('Synthesizing executive intelligence narrative & risk remediation roadmap...');
        setTimeout(() => {
          setIsGenerating(false);
          setGenerationStep('');
          setToastMsg('AI Executive Report synthesized and ready for download.');
          setTimeout(() => setToastMsg(''), 3500);
        }, 600);
      }, 700);
    }, 700);
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
            <FileText className="w-3.5 h-3.5" />
            <span>Executive Analytics & Compliance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Workforce Intelligence Reports
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Generate board-ready executive summaries combining descriptive metrics with predictive AI narratives.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleGenerateAiReport}
            disabled={isGenerating}
            className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center gap-2"
          >
            <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Generating AI Report...' : 'Generate AI Report'}</span>
          </button>
        </div>
      </div>

      {/* Loading Modal / State */}
      {isGenerating && (
        <div className="p-5 bg-gradient-to-r from-brand-50 via-indigo-50 to-purple-50 rounded-2xl border border-brand-200 shadow-soft-sm flex items-center gap-3 animate-pulse">
          <div className="p-2 rounded-xl bg-brand-600 text-white">
            <Sparkles className="w-5 h-5 animate-spin" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-700">AI Synthesis in Progress</h4>
            <p className="text-xs font-medium text-slate-800 mt-0.5">{generationStep}</p>
          </div>
        </div>
      )}

      {/* Report Types Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {reportTypes.map((rep) => (
          <div
            key={rep.id}
            onClick={() => setSelectedReportType(rep.id)}
            className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
              selectedReportType === rep.id
                ? 'bg-brand-600 text-white border-brand-600 shadow-soft-md'
                : 'bg-white text-slate-800 border-slate-200/80 hover:border-slate-300 shadow-soft-sm'
            }`}
          >
            <div>
              <rep.icon className={`w-5 h-5 mb-2.5 ${selectedReportType === rep.id ? 'text-white' : 'text-brand-600'}`} />
              <h3 className="text-xs font-bold">{rep.id}</h3>
              <p className={`text-[11px] mt-1 leading-snug ${selectedReportType === rep.id ? 'text-brand-100' : 'text-slate-500'}`}>
                {rep.desc}
              </p>
            </div>
            <span className={`text-[10px] font-bold block mt-3 pt-2 border-t ${selectedReportType === rep.id ? 'border-brand-500 text-brand-200' : 'border-slate-100 text-slate-400'}`}>
              Q2 2026 Snapshot
            </span>
          </div>
        ))}
      </div>

      {/* Report Preview Panel */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft-sm p-6 sm:p-8 space-y-6">
        {/* Document Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Executive Report</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-slate-500">WorkMind AI Intelligence Suite</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mt-1">{selectedReportType}</h2>
            <p className="text-xs text-slate-500 mt-1">Generated: September 22, 2026 • Scope: Global Workforce (1,248 staff)</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setToastMsg('Downloading PDF export...');
                setTimeout(() => setToastMsg(''), 2500);
              }}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export PDF</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Executive Summary Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400">Total Headcount</span>
            <p className="text-xl font-extrabold text-slate-900 mt-0.5">1,248</p>
            <span className="text-[11px] text-emerald-600 font-semibold">+4.2% YoY</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400">Predictive Attrition Risk</span>
            <p className="text-xl font-extrabold text-rose-600 mt-0.5">3.7%</p>
            <span className="text-[11px] text-slate-500 font-semibold">47 high-risk flags</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400">Average Performance</span>
            <p className="text-xl font-extrabold text-brand-600 mt-0.5">4.1 / 5.0</p>
            <span className="text-[11px] text-slate-500 font-semibold">92% OKR Delivery</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400">Critical Skill Gaps</span>
            <p className="text-xl font-extrabold text-amber-600 mt-0.5">18 Deficits</p>
            <span className="text-[11px] text-slate-500 font-semibold">Kubernetes & Sec</span>
          </div>
        </div>

        {/* AI Synthesis Narrative */}
        <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-700 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-600" />
            AI Executive Narrative
          </h3>

          <p className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-soft-sm">
            WorkMind AI’s cross-source synthesis highlights a divergence between overall commercial velocity (+8% closed ARR ramp) and platform engineering retention. While 88% of company OKRs remain on schedule, sustained workload spikes in Engineering (+21% story points) combined with below-benchmark compensation (-14%) have driven a 17% surge in voluntary departure probability among senior technical contributors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200 space-y-1.5">
              <span className="font-bold text-rose-900 block text-xs">Primary Strategic Risk:</span>
              <p className="text-rose-950">
                17-person Kubernetes infrastructure capability deficit threatens to delay multi-region cloud migration by up to 9 weeks if unaddressed through targeted upskilling.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-1.5">
              <span className="font-bold text-emerald-900 block text-xs">Recommended Action Priority:</span>
              <p className="text-emerald-950">
                Deploy the internal Kubernetes Upskilling Academy, approve hybrid scheduling flexibility for operations staff, and conduct 12 proactive retention dialogues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
