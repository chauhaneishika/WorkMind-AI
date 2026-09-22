import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2 } from 'lucide-react';

export function StatCard({ title, value, change, trend = 'up', period = 'vs last month', icon: Icon, badgeColor = 'indigo', onClick }) {
  const isAlert = trend === 'alert';
  const isUp = trend === 'up';
  const isPositive = trend === 'positive';
  
  const iconColorMap = {
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    rose: 'bg-rose-50 text-rose-600 border-rose-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    sky: 'bg-sky-50 text-sky-600 border-sky-100',
  };

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 ${onClick ? 'cursor-pointer hover:border-slate-300' : ''}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</span>
        {Icon && (
          <div className={`p-2.5 rounded-lg border ${iconColorMap[badgeColor] || iconColorMap.indigo}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight text-slate-900">{value}</span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs">
        <span
          className={`inline-flex items-center gap-1 font-semibold px-1.5 py-0.5 rounded ${
            isAlert
              ? 'bg-rose-50 text-rose-700'
              : isPositive || isUp
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-slate-100 text-slate-700'
          }`}
        >
          {isAlert ? (
            <AlertTriangle className="w-3.5 h-3.5" />
          ) : isUp || isPositive ? (
            <TrendingUp className="w-3.5 h-3.5" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5" />
          )}
          {change}
        </span>
        <span className="text-slate-500">{period}</span>
      </div>
    </div>
  );
}

export default StatCard;
