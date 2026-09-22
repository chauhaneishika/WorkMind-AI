import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Sparkles,
  Database,
  ArrowRight,
  TrendingDown,
  Layers,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building,
  RefreshCw
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { workforceInsights, connectedDataSources } from '../data/mockData';

export function InsightsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const filteredInsights = workforceInsights.filter((ins) => {
    if (selectedCategory === 'All') return true;
    return ins.category.includes(selectedCategory);
  });

  const handleRefreshInsights = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setToastMsg('Cross-source HR data re-indexed across 6 systems.');
      setTimeout(() => setToastMsg(''), 3500);
    }, 800);
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
            <LineChart className="w-3.5 h-3.5" />
            <span>Cross-Source Intelligence Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Workforce Intelligence Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Autonomous multi-source reasoning across Recruitment, Attendance, Performance, Engagement, Skills, and Compensation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRefreshInsights}
            disabled={isRefreshing}
            className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold shadow-soft-sm flex items-center gap-1.5 transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-brand-600 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Cross-Referencing...' : 'Re-Run Synthesis'}</span>
          </button>
        </div>
      </div>

      {/* 6 Connected Data Sources Visual Banner */}
      <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-soft-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-brand-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Connected Telemetry Feeds Powering AI Reasoning
            </h2>
          </div>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
            ● 6 Systems Synchronized
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {connectedDataSources.map((ds) => (
            <div key={ds.id} className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block truncate">{ds.name.split(' ')[0]}</span>
              <p className="text-xs font-bold text-white mt-1 truncate">{ds.records}</p>
              <span className="text-[10px] text-emerald-400 mt-0.5 block">{ds.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2">
        {['All', 'Risk', 'Skill', 'Productivity'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat === 'All' ? 'All Cross-Source Insights' : `${cat} Insights`}
          </button>
        ))}
      </div>

      {/* Cross-Source Reasoning Cards */}
      <div className="space-y-6">
        {filteredInsights.map((insight) => (
          <div
            key={insight.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm space-y-5"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant={insight.priority === 'High' ? 'danger' : 'info'} size="sm">
                      {insight.priority} Priority
                    </Badge>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-600">{insight.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">{insight.title}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {insight.connectedSources.map((src, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {src}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Finding Narrative */}
            <p className="text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200/70 leading-relaxed">
              "{insight.summary}"
            </p>

            {/* Evidence, Impact, and Recommended Action Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Evidence */}
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  1. Multi-Source Evidence
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {insight.evidence.map((ev, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></span>
                      <span className="leading-snug"><span className="font-semibold text-slate-900">{ev.source}:</span> {ev.data}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                  2. Business & Project Impact
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {insight.impact}
                </p>
              </div>

              {/* Recommended Action */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                  3. Prescribed HR Action
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {insight.recommendedActions.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => navigate('/action-center')}
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all"
              >
                <span>Deploy Recommended Interventions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsightsPage;
