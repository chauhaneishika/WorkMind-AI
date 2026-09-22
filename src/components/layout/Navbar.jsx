import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Menu,
  Search,
  Bell,
  Sparkles,
  PlayCircle,
  ExternalLink,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { Badge } from '../common/Badge';

export function Navbar({ onOpenMobile, onOpenTour }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  // Dynamic Page Title mapping
  const titleMap = {
    '/dashboard': 'Workforce Intelligence Overview',
    '/recruitment': 'AI Recruitment Intelligence',
    '/employees': 'Employee Directory & Talent Roster',
    '/onboarding': 'Adaptive Onboarding Journeys',
    '/attrition': 'Attrition Risk Intelligence',
    '/performance': 'Performance & OKR Intelligence',
    '/skills': 'Workforce Skill Graph & Deficits',
    '/interviews': 'AI Interview Agent & Evaluation',
    '/policy-assistant': 'HR Policy Intelligence Assistant',
    '/insights': 'Cross-Source Workforce Insights',
    '/action-center': 'AI Recommended Action Center',
    '/data-sources': 'Connected HR Data Sources',
    '/reports': 'Executive Reports & Analytics',
    '/settings': 'System Settings & AI Preferences',
  };

  const currentTitle = titleMap[location.pathname] || 'Workforce Intelligence';

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 lg:px-6 flex items-center justify-between transition-all">
      {/* Left Section: Mobile toggle + Breadcrumb Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">WorkMind AI</span>
            <span className="text-slate-300">/</span>
            <h1 className="text-sm lg:text-base font-bold text-slate-900 truncate">{currentTitle}</h1>
          </div>
        </div>
      </div>

      {/* Middle/Right Controls */}
      <div className="flex items-center gap-3">
        {/* Global Search Bar */}
        <div className="relative hidden md:block w-64 lg:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search employees, skills, policies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchQuery.trim()) {
                navigate(`/employees?q=${encodeURIComponent(searchQuery)}`);
              }
            }}
            className="w-full bg-slate-100/80 border border-slate-200/80 rounded-xl pl-9 pr-10 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded">
            ⌘K
          </kbd>
        </div>

        {/* AI Engine Status Pill */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Reasoning Engine Active</span>
        </div>

        {/* Hackathon Demo Tour Button */}
        <button
          onClick={onOpenTour}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white text-xs font-bold shadow-sm shadow-brand-500/20 transition-all transform active:scale-95"
        >
          <PlayCircle className="w-4 h-4 text-amber-300" />
          <span className="hidden sm:inline">Hackathon Demo Tour</span>
          <span className="sm:hidden">Tour</span>
        </button>

        {/* View Landing Page link */}
        <Link
          to="/"
          className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-brand-600 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          title="Visit Public Landing Page"
        >
          <span>Landing Page</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        {/* Notifications Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">AI Priority Notifications</span>
                <span className="text-[10px] text-brand-600 font-semibold cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="py-2 space-y-2.5">
                <div 
                  onClick={() => { setShowNotifications(false); navigate('/attrition'); }}
                  className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-100 hover:bg-rose-50 cursor-pointer transition-colors"
                >
                  <p className="text-xs font-bold text-rose-900">Attrition Risk Alert: Engineering</p>
                  <p className="text-[11px] text-slate-600 mt-0.5">17% risk surge detected correlated with +21% overtime spike.</p>
                  <span className="text-[10px] text-slate-400 mt-1 block">8 minutes ago</span>
                </div>
                <div 
                  onClick={() => { setShowNotifications(false); navigate('/recruitment'); }}
                  className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100 hover:bg-indigo-50 cursor-pointer transition-colors"
                >
                  <p className="text-xs font-bold text-indigo-900">8 Candidates Shortlisted</p>
                  <p className="text-[11px] text-slate-600 mt-0.5">AI finished ranking candidates for Senior Backend Engineer.</p>
                  <span className="text-[10px] text-slate-400 mt-1 block">24 minutes ago</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 text-center">
                <button
                  onClick={() => { setShowNotifications(false); navigate('/action-center'); }}
                  className="text-xs font-semibold text-brand-600 hover:text-brand-700"
                >
                  View All Action Center Tasks →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
