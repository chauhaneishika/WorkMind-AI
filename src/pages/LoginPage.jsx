import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, UserCheck, Lock } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('HR Manager');
  const [loading, setLoading] = useState(false);

  const roles = [
    { role: 'HR Manager', name: 'HR Admin (Default Demo)', desc: 'Full workforce analytics, attrition modeling & policy access' },
    { role: 'People Partner', name: 'Priya Iyer', desc: 'Recruitment screening & adaptive onboarding access' },
    { role: 'Engineering VP', name: 'Vikram Malhotra', desc: 'Department performance, skill graph & retention alerts' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
            WorkMind <span className="text-brand-600">AI</span>
          </span>
        </Link>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          Sign In to Workforce Intelligence
        </h2>
        <p className="mt-1.5 text-xs text-slate-600">
          Pre-authenticated enterprise sandbox environment
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-soft-lg rounded-2xl border border-slate-200/80 sm:px-10">
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Persona for Demo
              </label>
              <div className="space-y-2">
                {roles.map((r) => (
                  <div
                    key={r.role}
                    onClick={() => setSelectedRole(r.role)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedRole === r.role
                        ? 'border-brand-500 bg-brand-50/50 shadow-soft-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{r.name}</span>
                      <span className="text-[10px] font-semibold text-brand-600 bg-brand-100/60 px-2 py-0.5 rounded-full">
                        {r.role}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Enterprise Email
              </label>
              <input
                type="email"
                disabled
                value="admin@workmind.ai"
                className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 cursor-not-allowed"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 hover:shadow-lg transition-all"
              >
                {loading ? (
                  <span>Authenticating with Workday SSO...</span>
                ) : (
                  <>
                    <span>Enter WorkMind AI Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              SOC2 Type II & GDPR Compliant Sandbox
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
