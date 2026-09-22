import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Database, ShieldAlert, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from './Badge';

export function AiReasoningCard({
  title = "AI Workforce Insight",
  subtitle,
  confidence = "94%",
  evidence = [],
  reasoning,
  recommendedActions = [],
  actionLabel = "Execute Recommendation",
  onAction,
  category = "Attrition Risk Intelligence",
  sources = ["Kronos Attendance", "Lattice OKRs", "Glint Surveys", "Market Benchmarks"],
  className = ""
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`bg-gradient-to-br from-white via-slate-50/60 to-indigo-50/30 rounded-2xl border border-indigo-100 shadow-soft-md overflow-hidden transition-all ${className}`}>
      {/* Top Header */}
      <div className="p-5 border-b border-indigo-100/70 bg-white/80 backdrop-blur-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">WorkMind AI Intelligence</span>
              <span className="text-slate-300">•</span>
              <Badge variant="primary" size="sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping"></span>
                Confidence: {confidence}
              </Badge>
              <Badge variant="default" size="sm">{category}</Badge>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">{title}</h3>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-semibold text-slate-500 hover:text-slate-700 flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {expanded ? 'Collapse Detail' : 'Show AI Reasoning Flow'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Reasoning Architecture: Data -> Reasoning -> Recommendation */}
      {expanded && (
        <div className="p-5 space-y-5">
          {subtitle && (
            <p className="text-sm font-medium text-slate-700 leading-relaxed bg-indigo-50/60 p-3.5 rounded-xl border border-indigo-100/80">
              {subtitle}
            </p>
          )}

          {/* Flow Stepper Indicator */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Step 1: Data Sources & Evidence */}
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-soft-sm">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-600" />
                  1. Evidence & Data
                </span>
                <span className="text-[10px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
                  {evidence.length} Signals
                </span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {evidence.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                    <span className="leading-snug">{typeof item === 'string' ? item : `${item.source}: ${item.data}`}</span>
                  </li>
                ))}
              </ul>
              {sources && sources.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                  {sources.map((src, sIdx) => (
                    <span key={sIdx} className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {src}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Step 2: AI Reasoning */}
            <div className="bg-white p-4 rounded-xl border border-indigo-200/80 shadow-soft-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                  2. AI Reasoning
                </span>
                <span className="text-[10px] bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded-full">
                  Cross-Source
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {reasoning || "WorkMind AI correlated employee activity logs, sentiment declines, and compensation benchmarks to derive this behavioral trajectory."}
              </p>
              <div className="mt-3 pt-2.5 border-t border-indigo-50 text-[11px] text-indigo-700 font-medium flex items-center gap-1">
                <span>Model: Explainable HR-LLM V2</span>
              </div>
            </div>

            {/* Step 3: Recommended Actions */}
            <div className="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-soft-sm">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  3. Recommended Action
                </span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
                  Actionable
                </span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {recommendedActions.map((action, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span className="leading-snug">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Footer */}
          {onAction && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-brand-600" />
                AI-generated decision support. Human oversight required.
              </span>
              <button
                onClick={onAction}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm hover:shadow transition-all"
              >
                <span>{actionLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AiReasoningCard;
