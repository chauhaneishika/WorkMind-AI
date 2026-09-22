import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Bot,
  Network,
  Users,
  Award,
  BookOpen,
  UserPlus,
  CheckCircle2,
  Database,
  LineChart,
  Layers,
  ChevronRight
} from 'lucide-react';

export function LandingPage() {
  const featureCards = [
    {
      title: 'AI Recruitment',
      desc: 'Evaluate and rank candidates using skill match analysis and explainable AI scoring.',
      icon: UserPlus,
      color: 'from-blue-600 to-indigo-600',
      badge: '92% Match Precision'
    },
    {
      title: 'Attrition Intelligence',
      desc: 'Predict workforce departure risks months in advance by cross-referencing engagement and workload.',
      icon: TrendingDown,
      color: 'from-rose-500 to-amber-500',
      badge: 'Early Risk Warning'
    },
    {
      title: 'Policy Reasoning',
      desc: 'Source-backed answers to complex HR policy questions with verified citations and clauses.',
      icon: BookOpen,
      color: 'from-violet-600 to-purple-600',
      badge: 'Zero Hallucinations'
    },
    {
      title: 'Performance Intelligence',
      desc: 'Holistic performance analytics combining OKR goal velocity, peer sentiment, and manager feedback.',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      badge: '360° Calibration'
    },
    {
      title: 'Workforce Skill Graph',
      desc: 'Map organizational capabilities, identify critical skill deficits, and trigger targeted upskilling.',
      icon: Network,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Real-time Gaps'
    },
    {
      title: 'AI Interview Agent',
      desc: 'Role-specific question generation, candidate answer evaluation, and structured competency scoring.',
      icon: Bot,
      color: 'from-brand-600 to-indigo-700',
      badge: 'Automated Scoring'
    }
  ];

  const intelligencePipeline = [
    { name: 'Recruitment', count: '3,240 ATS Records' },
    { name: 'Employees', count: '1,248 Core Profiles' },
    { name: 'Performance', count: '9,850 OKR Cycles' },
    { name: 'Skills', count: '140+ Competencies' },
    { name: 'Engagement', count: '7,420 Pulse Logs' },
    { name: 'Attrition', count: 'Predictive Signals' },
    { name: 'HR Decisions', count: 'Actionable ROI' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white overflow-hidden">
      {/* Top Navigation */}
      <nav className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                WorkMind <span className="text-brand-600">AI</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                Enterprise Workforce Intelligence
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-xs font-bold text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-600/20 transition-all hover:shadow-lg"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-400/20 via-indigo-300/20 to-sky-300/10 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-6 animate-in fade-in duration-500">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Workforce Intelligence Layer</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Turn Workforce Data Into <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Intelligent HR Decisions
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          An AI-powered workforce intelligence platform that connects recruitment, performance, skills, engagement and workforce risks to help HR teams make smarter decisions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-lg shadow-brand-600/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition-all"
          >
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>View AI Insights</span>
          </Link>
        </div>

        {/* Live Interactive Product Preview Mockup */}
        <div className="mt-14 relative rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xl max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
            {/* Mockup Title bar */}
            <div className="h-10 bg-slate-100/80 px-4 flex items-center justify-between border-b border-slate-200/70">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="ml-2 text-xs font-mono text-slate-500">app.workmind.ai/dashboard</span>
              </div>
              <span className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                Live AI Reasoning Active
              </span>
            </div>

            {/* Mockup Internal View */}
            <div className="p-6 text-left grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft-sm">
                <span className="text-xs font-semibold text-slate-500 uppercase">Total Headcount</span>
                <p className="text-2xl font-bold text-slate-900 mt-1">1,248</p>
                <span className="text-xs font-semibold text-emerald-600 mt-1 block">+4.2% this quarter</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft-sm">
                <span className="text-xs font-semibold text-slate-500 uppercase">High Attrition Risk</span>
                <p className="text-2xl font-bold text-rose-600 mt-1">47</p>
                <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded inline-block mt-1">
                  12 in Core Engineering
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft-sm">
                <span className="text-xs font-semibold text-slate-500 uppercase">Critical Skill Gaps</span>
                <p className="text-2xl font-bold text-amber-600 mt-1">18</p>
                <span className="text-xs font-semibold text-slate-600 mt-1 block">Kubernetes (-17) & Security (-14)</span>
              </div>

              {/* Full width AI Banner in mockup */}
              <div className="md:col-span-3 p-4 rounded-xl bg-gradient-to-r from-brand-50 via-indigo-50 to-purple-50 border border-brand-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-600 text-white mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wider">Top AI Finding</h4>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
                      "Workload spiked 21% while sentiment dropped 9% in Engineering. 12 senior engineers show severe attrition risk."
                    </p>
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  className="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-bold shadow-sm hover:bg-brand-700"
                >
                  Inspect Live Dashboard →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "One Workforce. One Intelligence Layer." Section */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Unified Data Architecture
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Workforce. One Intelligence Layer.
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Traditional HR tools store data in disconnected silos. WorkMind AI connects, correlates, and reasons over the entire employee lifecycle.
          </p>

          {/* Visual Data Pipeline Chain */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {intelligencePipeline.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:bg-brand-50/30 transition-all text-center group"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-brand-600 font-bold text-xs mx-auto flex items-center justify-center shadow-soft-sm group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {idx + 1}
                </div>
                <h3 className="text-xs font-bold text-slate-900 mt-2.5">{step.name}</h3>
                <p className="text-[10px] text-slate-500 mt-0.5">{step.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Workforce Intelligence Capabilities
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Engineered for Chief People Officers, HR Directors, and Talent Partners to make proactive, evidence-grounded workforce decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all hover:border-brand-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feat.color} flex items-center justify-center text-white shadow-md`}>
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-600 group-hover:text-brand-700">
                <span>Explore capability</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white mx-auto shadow-glow mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready to Experience Workforce Intelligence?
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Explore the live interactive application pre-loaded with comprehensive enterprise demo data.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md shadow-brand-600/30 transition-all"
            >
              Launch Live Platform →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p>© 2026 WorkMind AI. Built for the Next-Gen Workforce Intelligence Hackathon.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
