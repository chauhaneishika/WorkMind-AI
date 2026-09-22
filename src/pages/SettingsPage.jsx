import React, { useState } from 'react';
import {
  Settings,
  User,
  Building,
  Sliders,
  Bell,
  Database,
  Shield,
  CheckCircle2,
  Save,
  Lock
} from 'lucide-react';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('AI Preferences');
  const [toastMsg, setToastMsg] = useState('');

  // AI Preferences state
  const [riskSensitivity, setRiskSensitivity] = useState(70);
  const [minConfidence, setMinConfidence] = useState(85);
  const [explainabilityLevel, setExplainabilityLevel] = useState('Deep Multi-Source Evidence');
  const [enableProactiveActions, setEnableProactiveActions] = useState(true);

  const tabs = [
    { id: 'Profile', icon: User },
    { id: 'Organization', icon: Building },
    { id: 'AI Preferences', icon: Sliders },
    { id: 'Notifications', icon: Bell },
    { id: 'Data Sources', icon: Database },
    { id: 'Security & Audit', icon: Shield },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    setToastMsg('Settings and AI parameters updated successfully.');
    setTimeout(() => setToastMsg(''), 3000);
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
            <Settings className="w-3.5 h-3.5" />
            <span>Platform Configuration</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            WorkMind AI Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Configure enterprise security, model reasoning parameters, and notification thresholds.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all flex items-center gap-1.5"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Settings Tab Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-2 shadow-soft-sm flex overflow-x-auto gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.id}</span>
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-soft-sm">
        {/* AI Preferences Tab */}
        {activeTab === 'AI Preferences' && (
          <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
            <div>
              <h2 className="text-sm font-bold text-slate-900">AI Reasoning & Model Calibration</h2>
              <p className="text-xs text-slate-500 mt-0.5">Control risk detection sensitivity and decision support transparency.</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-700 mb-1">
                  <span>Attrition Risk Signal Threshold</span>
                  <span className="text-brand-600">{riskSensitivity}% probability</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="90"
                  value={riskSensitivity}
                  onChange={(e) => setRiskSensitivity(e.target.value)}
                  className="w-full accent-brand-600"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Employees with departure probability above this cutoff will be flagged in Priority Alerts.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-700 mb-1">
                  <span>Minimum AI Model Confidence Floor</span>
                  <span className="text-brand-600">{minConfidence}%</span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="95"
                  value={minConfidence}
                  onChange={(e) => setMinConfidence(e.target.value)}
                  className="w-full accent-brand-600"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Filters out low-confidence recommendations to prevent alert fatigue.
                </p>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Explainability Depth</label>
                <select
                  value={explainabilityLevel}
                  onChange={(e) => setExplainabilityLevel(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800"
                >
                  <option value="Deep Multi-Source Evidence">Deep Multi-Source Evidence (Signals + Telemetry + Impact)</option>
                  <option value="Standard Summary">Standard Summary (Signals + Recommendations)</option>
                  <option value="High-Level Executive">High-Level Executive (Direct Recommendations only)</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900 block">Automate Action Center Recommendations</span>
                  <p className="text-slate-500 text-[11px]">Generate prioritized HR interventions automatically upon telemetry sync.</p>
                </div>
                <input
                  type="checkbox"
                  checked={enableProactiveActions}
                  onChange={(e) => setEnableProactiveActions(e.target.checked)}
                  className="w-4 h-4 accent-brand-600"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md shadow-brand-500/20 hover:bg-brand-700"
              >
                Update AI Preferences
              </button>
            </div>
          </form>
        )}

        {/* Profile Tab */}
        {activeTab === 'Profile' && (
          <form onSubmit={handleSave} className="space-y-4 max-w-xl text-xs">
            <h2 className="text-sm font-bold text-slate-900">Administrator Profile</h2>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Full Name</label>
              <input type="text" defaultValue="HR Admin" className="w-full p-2.5 rounded-xl border border-slate-200" />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input type="email" defaultValue="admin@workmind.ai" className="w-full p-2.5 rounded-xl border border-slate-200" />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Role Title</label>
              <input type="text" defaultValue="Human Resources Manager" className="w-full p-2.5 rounded-xl border border-slate-200" />
            </div>
            <div className="pt-2 flex justify-end">
              <button type="submit" className="px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold">Save Profile</button>
            </div>
          </form>
        )}

        {/* Organization Tab */}
        {activeTab === 'Organization' && (
          <form onSubmit={handleSave} className="space-y-4 max-w-xl text-xs">
            <h2 className="text-sm font-bold text-slate-900">Organization Settings</h2>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Enterprise Name</label>
              <input type="text" defaultValue="WorkMind Global Inc." className="w-full p-2.5 rounded-xl border border-slate-200" />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Industry Sector</label>
              <input type="text" defaultValue="Enterprise Cloud Software & SaaS" className="w-full p-2.5 rounded-xl border border-slate-200" />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Total Monitored Workforce</label>
              <input type="text" disabled defaultValue="1,248 Active Employees" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500" />
            </div>
            <div className="pt-2 flex justify-end">
              <button type="submit" className="px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold">Save Organization</button>
            </div>
          </form>
        )}

        {/* Notifications Tab */}
        {activeTab === 'Notifications' && (
          <div className="space-y-4 max-w-xl text-xs">
            <h2 className="text-sm font-bold text-slate-900">Notification Preferences</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900 block">Critical Attrition Risk Webhooks</span>
                  <p className="text-slate-500 text-[11px]">Instant alert when an employee exceeds 75% risk threshold.</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-600" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900 block">AI Shortlist Digest</span>
                  <p className="text-slate-500 text-[11px]">Daily email digest of top candidate matches (&gt;88%).</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-600" />
              </div>
            </div>
          </div>
        )}

        {/* Data Sources Tab */}
        {activeTab === 'Data Sources' && (
          <div className="space-y-4 max-w-xl text-xs">
            <h2 className="text-sm font-bold text-slate-900">Data Synchronization Schedules</h2>
            <p className="text-slate-500">6 connected enterprise data sources configured for real-time and scheduled webhook updates.</p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex justify-between">
                <span className="font-bold text-slate-700">Workday Core HRIS:</span>
                <span className="text-emerald-600 font-semibold">Every 10 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-700">Greenhouse ATS:</span>
                <span className="text-emerald-600 font-semibold">Real-Time Webhook</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-700">Kronos Time Tracker:</span>
                <span className="text-emerald-600 font-semibold">Hourly Batch</span>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'Security & Audit' && (
          <div className="space-y-4 max-w-xl text-xs">
            <h2 className="text-sm font-bold text-slate-900">Security & Compliance</h2>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
              <span className="font-bold block flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-600" />
                SOC2 Type II & GDPR Verified
              </span>
              <p className="text-[11px] text-emerald-800">
                All employee PII is tokenized with AES-256 at rest and TLS 1.3 in transit.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-800 block">Multi-Factor Authentication (MFA)</span>
              <p className="text-slate-500 text-[11px]">Enforced for all HR Managers and System Administrators.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsPage;
