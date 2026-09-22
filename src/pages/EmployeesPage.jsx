import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Users,
  Search,
  Filter,
  AlertTriangle,
  ChevronRight,
  TrendingDown,
  Sparkles,
  SlidersHorizontal,
  X
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { employees as allEmployees, departments } from '../data/mockData';

export function EmployeesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedRisk, setSelectedRisk] = useState('All');
  const [selectedRole, setSelectedRole] = useState('All');

  const filteredEmployees = useMemo(() => {
    return allEmployees.filter((emp) => {
      const matchSearch =
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.skills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchDept = selectedDept === 'All Departments' || emp.department === selectedDept;
      const matchRisk = selectedRisk === 'All' || emp.attritionRisk === selectedRisk;
      const matchRole = selectedRole === 'All' || emp.role.includes(selectedRole);

      return matchSearch && matchDept && matchRisk && matchRole;
    });
  }, [searchQuery, selectedDept, selectedRisk, selectedRole]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Workforce Management</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Employee Directory & Profiles
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Holistic view of all employees with cross-source performance, engagement, and risk signals.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-soft-sm">
            Showing {filteredEmployees.length} of {allEmployees.length} profiles
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-soft-sm space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, role, skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Department Filter */}
          <div>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Attrition Risk Filter */}
          <div>
            <select
              value={selectedRisk}
              onChange={(e) => setSelectedRisk(e.target.value)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="All">All Risk Levels</option>
              <option value="High">High Attrition Risk</option>
              <option value="Medium">Medium Attrition Risk</option>
              <option value="Low">Low Attrition Risk</option>
            </select>
          </div>

          {/* Quick Clear Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDept('All Departments');
                setSelectedRisk('All');
                setSelectedRole('All');
              }}
              className="w-full py-2 px-3 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Employee Directory Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/70 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3 px-6">Employee</th>
                <th className="py-3 px-6">Role</th>
                <th className="py-3 px-6">Department</th>
                <th className="py-3 px-6">Performance</th>
                <th className="py-3 px-6">Engagement</th>
                <th className="py-3 px-6">Attrition Risk</th>
                <th className="py-3 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  onClick={() => navigate(`/employees/${emp.id}`)}
                  className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                          {emp.name}
                        </div>
                        <div className="text-[11px] text-slate-400">{emp.email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-6 font-semibold text-slate-700">
                    {emp.role}
                  </td>

                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {emp.department}
                  </td>

                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <span>{emp.performanceScore}</span>
                      <span className="text-slate-400 text-[10px]">/ 5.0</span>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-14 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            emp.engagementScore > 75 ? 'bg-emerald-500' :
                            emp.engagementScore > 55 ? 'bg-amber-500' : 'bg-rose-500'
                          }`}
                          style={{ width: `${emp.engagementScore}%` }}
                        />
                      </div>
                      <span className="font-semibold text-slate-700">{emp.engagementScore}%</span>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    <Badge variant={emp.attritionRisk}>
                      {emp.attritionRisk} ({emp.attritionProbability}%)
                    </Badge>
                  </td>

                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/employees/${emp.id}`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-600 hover:text-white font-semibold text-slate-700 text-xs transition-all inline-flex items-center gap-1"
                    >
                      <span>View Profile</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeesPage;
