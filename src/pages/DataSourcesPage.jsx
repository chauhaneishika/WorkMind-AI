import React, { useState } from 'react';
import {
  Database,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Clock,
  ExternalLink
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { connectedDataSources as initialSources } from '../data/mockData';

export function DataSourcesPage() {
  const [sources, setSources] = useState(initialSources);
  const [syncingId, setSyncingId] = useState(null);
  const [toastMsg, setToastMsg] = useState('');

  const handleSyncSource = (id) => {
    setSyncingId(id);
    setTimeout(() => {
      setSyncingId(null);
      setSources((prev) =>
        prev.map((s) => (s.id === id ? { ...s, lastSync: 'Just now' } : s))
      );
      setToastMsg('Data source synchronized and re-indexed.');
      setTimeout(() => setToastMsg(''), 3000);
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
            <Database className="w-3.5 h-3.5" />
            <span>Infrastructure Connectivity</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Connected HR Data Sources
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            WorkMind AI’s unified intelligence layer ingesting and reasoning across 6 enterprise HR systems.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            All 6 Enterprise Connectors Healthy
          </span>
        </div>
      </div>

      {/* Unified Architecture Layer Visual Box */}
      <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-soft-xl border border-slate-800 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            WorkMind AI Architecture
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Unifying 6 Disparate Silos Into One Reasoning Engine
          </h2>
          <p className="text-xs text-slate-300">
            Real-time webhook listeners & scheduled ETL pipelines feed the WorkMind Vector Index and Cross-Source Correlation Model.
          </p>
        </div>

        {/* Multi-source Ingestion flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {sources.map((s) => (
            <div key={s.id} className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <span className="text-xs font-bold text-white block truncate">{s.name.split(' ')[0]}</span>
              <p className="text-[10px] text-slate-400 mt-0.5">{s.records}</p>
              <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Sources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((source) => {
          const isSyncing = syncingId === source.id;

          return (
            <div
              key={source.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="success" size="sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {source.status}
                  </Badge>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {source.lastSync}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">{source.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{source.type}</p>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Total Volume:</span>
                    <span className="font-bold text-slate-900">{source.records}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Sync Health:</span>
                    <span className="font-bold text-emerald-600">{source.health}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Synchronized Fields:</span>
                  <div className="flex flex-wrap gap-1">
                    {source.fields.map((f, fIdx) => (
                      <span key={fIdx} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">OAuth2 Token Active</span>
                <button
                  onClick={() => handleSyncSource(source.id)}
                  disabled={isSyncing}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-brand-600' : ''}`} />
                  <span>{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataSourcesPage;
