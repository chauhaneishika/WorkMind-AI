// src/data/mockData.js
// Enterprise Mock Data for WorkMind AI

export const kpis = {
  totalEmployees: { value: 1248, change: '+4.2%', trend: 'up', period: 'vs last month' },
  openPositions: { value: 32, change: '+6', trend: 'up', period: 'active requisitions' },
  highAttritionRisk: { value: 47, change: '+12%', trend: 'alert', period: 'flagged by AI' },
  skillGapsDetected: { value: 18, change: '-3', trend: 'positive', period: 'across 4 teams' }
};

export const departments = [
  'All Departments',
  'Engineering',
  'Human Resources',
  'Finance',
  'Marketing',
  'Sales',
  'Operations'
];

export const headcountTrendData = [
  { month: 'Apr', headcount: 1160, hires: 24, attrition: 8 },
  { month: 'May', headcount: 1180, hires: 28, attrition: 8 },
  { month: 'Jun', headcount: 1195, hires: 22, attrition: 7 },
  { month: 'Jul', headcount: 1215, hires: 31, attrition: 11 },
  { month: 'Aug', headcount: 1232, hires: 26, attrition: 9 },
  { month: 'Sep', headcount: 1248, hires: 29, attrition: 13 },
];

export const departmentDistribution = [
  { name: 'Engineering', value: 480, color: '#4F46E5' },
  { name: 'Sales', value: 290, color: '#06B6D4' },
  { name: 'Marketing', value: 165, color: '#F59E0B' },
  { name: 'Operations', value: 140, color: '#10B981' },
  { name: 'Finance', value: 98, color: '#8B5CF6' },
  { name: 'Human Resources', value: 75, color: '#EC4899' },
];

export const attritionByDepartment = [
  { department: 'Engineering', highRisk: 22, mediumRisk: 34, avgRiskScore: 38 },
  { department: 'Sales', highRisk: 14, mediumRisk: 26, avgRiskScore: 32 },
  { department: 'Marketing', highRisk: 5, mediumRisk: 11, avgRiskScore: 21 },
  { department: 'Operations', highRisk: 4, mediumRisk: 8, avgRiskScore: 18 },
  { department: 'Finance', highRisk: 1, mediumRisk: 3, avgRiskScore: 12 },
  { department: 'Human Resources', highRisk: 1, mediumRisk: 2, avgRiskScore: 10 },
];

export const performanceDistribution = [
  { rating: 'Exceeds Expectations (4.5-5.0)', count: 284, percentage: 23 },
  { rating: 'Meets Expectations (3.5-4.4)', count: 712, percentage: 57 },
  { rating: 'Developing (2.8-3.4)', count: 204, percentage: 16 },
  { rating: 'Needs Support (<2.8)', count: 48, percentage: 4 },
];

export const priorityAlerts = [
  {
    id: 'alt-1',
    title: '12 employees require attention',
    category: 'Attrition & Engagement',
    priority: 'High',
    description: 'Workload spikes detected alongside declining sentiment scores in Cloud Platform squad.',
    actionLabel: 'Review Employees',
    link: '/attrition',
    badgeColor: 'rose'
  },
  {
    id: 'alt-2',
    title: '8 candidates shortlisted by AI',
    category: 'Recruitment',
    priority: 'Medium',
    description: 'Candidates with >88% skill match for Senior Software Engineer ready for review.',
    actionLabel: 'Review Candidates',
    link: '/recruitment',
    badgeColor: 'indigo'
  },
  {
    id: 'alt-3',
    title: '5 critical skill gaps detected',
    category: 'Workforce Capabilities',
    priority: 'High',
    description: 'Kubernetes and Cloud Security deficits are delaying Q4 infrastructure initiatives.',
    actionLabel: 'View Skill Gaps',
    link: '/skills',
    badgeColor: 'amber'
  },
  {
    id: 'alt-4',
    title: '3 onboarding journeys delayed',
    category: 'Onboarding',
    priority: 'Medium',
    description: 'Dev environment setup and security checklist overdue for Week 2 new hires.',
    actionLabel: 'View Onboarding',
    link: '/onboarding',
    badgeColor: 'sky'
  }
];

export const recentActivities = [
  {
    id: 'act-1',
    user: 'AI Reasoning Engine',
    action: 'Flagged attrition risk signal for Ananya Sharma',
    detail: 'Cross-referenced 3 missed check-ins with 22% increase in logged GitHub hours.',
    time: '8 mins ago',
    type: 'risk'
  },
  {
    id: 'act-2',
    user: 'HR Admin (You)',
    action: 'Shortlisted Aarav Sharma for Senior Software Engineer',
    detail: '92% skill match score with 4.8/5 technical evaluation.',
    time: '24 mins ago',
    type: 'recruitment'
  },
  {
    id: 'act-3',
    user: 'Adaptive Onboarding Agent',
    action: 'Assigned Cloud Security learning module to Riya Sharma',
    detail: 'Personalized curriculum automatically added based on role skill gap analysis.',
    time: '1 hour ago',
    type: 'onboarding'
  },
  {
    id: 'act-4',
    user: 'Skill Graph Engine',
    action: 'Identified 17-person Kubernetes skill deficit',
    detail: 'Required 35 vs Verified 18 in Core Engineering.',
    time: '2 hours ago',
    type: 'skills'
  },
  {
    id: 'act-5',
    user: 'Vikram Malhotra (Engineering Lead)',
    action: 'Submitted Q3 Performance Review for Siddharth Roy',
    detail: 'Overall rating 4.7/5. Recommended for Tech Lead promotion track.',
    time: '3 hours ago',
    type: 'performance'
  }
];

// Connected Enterprise Systems
export const connectedDataSources = [
  {
    id: 'emp-db',
    name: 'Employee Database (Workday Core)',
    type: 'Human Resource Information System',
    records: '12,450 records',
    lastSync: '10 minutes ago',
    status: 'Connected',
    health: '100% synced',
    fields: ['Employee Profile', 'Hierarchy', 'Compensation', 'Tenure', 'Location']
  },
  {
    id: 'rec-sys',
    name: 'Recruitment System (Greenhouse ATS)',
    type: 'Applicant Tracking System',
    records: '3,240 records',
    lastSync: '15 minutes ago',
    status: 'Connected',
    health: '100% synced',
    fields: ['Resumes', 'Interview Scores', 'Sourcing Channels', 'Offer Rates']
  },
  {
    id: 'att-sys',
    name: 'Attendance & Time Tracker (Kronos / Slack)',
    type: 'Time & Attendance Tracker',
    records: '18,650 records',
    lastSync: '8 minutes ago',
    status: 'Connected',
    health: '99.4% synced',
    fields: ['Clock-in / Clock-out', 'Remote Logs', 'Overtime', 'Leave Requests']
  },
  {
    id: 'perf-mgt',
    name: 'Performance Management (Lattice / CultureAmp)',
    type: 'Performance & OKR System',
    records: '9,850 records',
    lastSync: '20 minutes ago',
    status: 'Connected',
    health: '100% synced',
    fields: ['Quarterly OKRs', '360 Feedback', 'Manager Reviews', 'Goals']
  },
  {
    id: 'surveys',
    name: 'Employee Surveys & Sentiment (Glint)',
    type: 'Pulse & Engagement Platform',
    records: '7,420 responses',
    lastSync: '1 hour ago',
    status: 'Connected',
    health: '98.8% synced',
    fields: ['eNPS', 'Burnout Index', 'Manager Satisfaction', 'Peer Trust']
  },
  {
    id: 'policies',
    name: 'Enterprise HR Policy Corpus (Notion & PDF)',
    type: 'Knowledge Base & Compliance',
    records: '42 documents',
    lastSync: '2 hours ago',
    status: 'Connected',
    health: 'Semantic Vector Indexed',
    fields: ['Leave Policies', 'Remote Work', 'Notice Periods', 'Health Benefits']
  }
];

// 20+ Realistic Detailed Employees
export const employees = [
  {
    id: 'EMP-1001',
    name: 'Ananya Sharma',
    role: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Bangalore, India (Hybrid)',
    email: 'ananya.sharma@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    tenure: '2.8 years',
    hireDate: 'Jan 2024',
    salary: '$115,000',
    manager: 'Vikram Malhotra',
    status: 'Active',
    performanceScore: 4.4,
    engagementScore: 58,
    attritionRisk: 'High',
    attritionProbability: 79,
    attendance: {
      presenceRate: '91%',
      remoteDaysPerWeek: 4,
      sickLeavesUsed: 8,
      unexplainedAbsences: 2
    },
    skills: [
      { name: 'Java', level: 'Expert', endorsed: 24 },
      { name: 'Spring Boot', level: 'Advanced', endorsed: 19 },
      { name: 'Microservices', level: 'Advanced', endorsed: 15 },
      { name: 'AWS', level: 'Intermediate', endorsed: 11 },
      { name: 'Kubernetes', level: 'Intermediate', endorsed: 7 },
      { name: 'PostgreSQL', level: 'Advanced', endorsed: 16 }
    ],
    riskFactors: [
      'Engagement score plummeted from 82% to 58% over the past 90 days',
      'Unexplained Friday/Monday absenteeism increased by 25%',
      'Stagnant in current band for 28 months with no promotion discussion',
      'Current compensation is 14% below market median for Senior SWE',
      'Recent sprint velocity spiked +32% indicating potential workload burnout'
    ],
    aiInsight: {
      summary: 'High attrition probability driven by severe workload burnout and below-benchmark compensation, despite consistently superior code quality.',
      evidence: [
        'GitHub activity logs show continuous late-night commits between 11 PM and 2 AM for 6 consecutive weeks.',
        'Pulse survey sentiment reflected: "Feeling underappreciated given the scope of the microservices migration."',
        'External LinkedIn recruiter profile updates recorded in the last 14 days.'
      ],
      reasoning: 'The combination of high sustained technical delivery, declining sentiment, and competitive market demand for Senior Java Engineers makes spontaneous resignation within 60 days highly probable.',
      recommendedActions: [
        'Schedule a 1-on-1 career development and retention check-in within 48 hours.',
        'Review compensation adjustments to match 75th percentile market benchmark.',
        'Rebalance sprint story points across the platform team to reduce overtime strain.',
        'Nominate for Tech Lead mentorship track to address career stagnation concerns.'
      ]
    },
    goals: [
      { title: 'Complete Auth0 Federated SSO Integration', progress: 95, status: 'In Progress' },
      { title: 'Mentor 2 Junior Engineers on Spring Cloud', progress: 70, status: 'In Progress' },
      { title: 'Achieve AWS Solutions Architect Associate Certification', progress: 40, status: 'Behind' }
    ],
    performanceReviews: [
      {
        quarter: 'Q2 2026',
        rating: 4.5,
        managerFeedback: 'Ananya is an absolute technical rockstar on the Payments gateway redesign.',
        peerFeedback: 'Always helps resolve tricky distributed locking issues, though has seemed fatigued recently.'
      },
      {
        quarter: 'Q1 2026',
        rating: 4.4,
        managerFeedback: 'Solid execution and delivered the message broker refactor ahead of schedule.'
      }
    ]
  },
  {
    id: 'EMP-1002',
    name: 'Siddharth Roy',
    role: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Bangalore, India (Remote)',
    email: 'siddharth.roy@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    tenure: '3.1 years',
    hireDate: 'Aug 2023',
    salary: '$120,000',
    manager: 'Vikram Malhotra',
    status: 'Active',
    performanceScore: 4.7,
    engagementScore: 88,
    attritionRisk: 'Low',
    attritionProbability: 12,
    attendance: {
      presenceRate: '98%',
      remoteDaysPerWeek: 5,
      sickLeavesUsed: 3,
      unexplainedAbsences: 0
    },
    skills: [
      { name: 'Kubernetes', level: 'Expert', endorsed: 31 },
      { name: 'Terraform', level: 'Expert', endorsed: 28 },
      { name: 'AWS', level: 'Expert', endorsed: 27 },
      { name: 'Docker', level: 'Expert', endorsed: 25 },
      { name: 'CI/CD Pipelines', level: 'Advanced', endorsed: 22 }
    ],
    riskFactors: ['High on-call incident frequency during weekend maintenance windows'],
    aiInsight: {
      summary: 'Key organizational pillar with exceptional technical influence. Low risk of attrition, ideal candidate for cross-skilling team mentorship.',
      evidence: [
        'High engagement ratings (92% satisfaction in internal peer reviews).',
        'Consistently resolves 99.9% uptime incidents within SLAs.'
      ],
      reasoning: 'Employee has strong alignment with organizational roadmap and clear path toward Principal SRE role.',
      recommendedActions: [
        'Appoint as lead instructor for the upcoming internal Kubernetes Academy.',
        'Offer conference sponsorship for KubeCon.'
      ]
    },
    goals: [
      { title: 'Zero-Downtime EKS 1.30 Cluster Upgrade', progress: 100, status: 'Completed' },
      { title: 'Terraform Module Standardization', progress: 85, status: 'In Progress' }
    ]
  },
  {
    id: 'EMP-1003',
    name: 'Priya Iyer',
    role: 'HR Manager',
    department: 'Human Resources',
    location: 'Mumbai, India (Hybrid)',
    email: 'priya.iyer@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    tenure: '4.2 years',
    hireDate: 'May 2022',
    salary: '$98,000',
    manager: 'Radhika Rao (VP People)',
    status: 'Active',
    performanceScore: 4.3,
    engagementScore: 78,
    attritionRisk: 'Low',
    attritionProbability: 15,
    attendance: {
      presenceRate: '96%',
      remoteDaysPerWeek: 2,
      sickLeavesUsed: 4,
      unexplainedAbsences: 0
    },
    skills: [
      { name: 'Talent Acquisition', level: 'Expert', endorsed: 22 },
      { name: 'Employee Relations', level: 'Expert', endorsed: 20 },
      { name: 'HR Policies', level: 'Advanced', endorsed: 18 },
      { name: 'Compliance', level: 'Advanced', endorsed: 16 }
    ],
    riskFactors: ['Administrative overhead from manual onboarding coordination'],
    aiInsight: {
      summary: 'Consistent performer managing 4 business units. High reliability and organizational trust.',
      evidence: ['98% resolution of employee grievance tickets within 48 hours.'],
      reasoning: 'Stable tenure and satisfaction, potential leverage from WorkMind AI automation.',
      recommendedActions: ['Roll out WorkMind AI Adaptive Onboarding to cut manual tracking by 70%.']
    },
    goals: [
      { title: 'Automate Quarterly Employee Sentiment Pulse', progress: 90, status: 'In Progress' },
      { title: 'Diversity & Inclusion Hiring Target 40%', progress: 82, status: 'In Progress' }
    ]
  },
  {
    id: 'EMP-1004',
    name: 'Rohan Mehra',
    role: 'Product Manager',
    department: 'Engineering',
    location: 'Bangalore, India (In-Office)',
    email: 'rohan.mehra@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    tenure: '1.9 years',
    hireDate: 'Nov 2024',
    salary: '$130,000',
    manager: 'Deepak Joshi (CPO)',
    status: 'Active',
    performanceScore: 3.9,
    engagementScore: 54,
    attritionRisk: 'High',
    attritionProbability: 72,
    attendance: {
      presenceRate: '88%',
      remoteDaysPerWeek: 1,
      sickLeavesUsed: 9,
      unexplainedAbsences: 1
    },
    skills: [
      { name: 'Product Strategy', level: 'Advanced', endorsed: 18 },
      { name: 'Agile & Scrum', level: 'Advanced', endorsed: 17 },
      { name: 'Roadmap Planning', level: 'Advanced', endorsed: 14 },
      { name: 'Data Analytics', level: 'Intermediate', endorsed: 9 }
    ],
    riskFactors: [
      'Misalignment with cross-functional Engineering priorities in Q2',
      'Sprint delivery friction noted by Tech Leads',
      'Drop in meeting participation over recent 6 weeks',
      'Absenteeism up 18%'
    ],
    aiInsight: {
      summary: 'Strained stakeholder dynamics and scope ambiguity leading to frustration and disengagement.',
      evidence: [
        'Sprint retrospectives indicate frequent requirement pivots without prior developer alignment.',
        'Negative sentiment score recorded in cross-functional survey feedback.'
      ],
      reasoning: 'Product manager feels isolated between commercial demands and engineering delivery constraints.',
      recommendedActions: [
        'Organize strategic alignment workshop with CPO and Engineering Leads.',
        'Provide dedicated Product Operations analyst support.'
      ]
    },
    goals: [
      { title: 'Launch Enterprise Analytics Dashboard V2', progress: 65, status: 'Behind' },
      { title: 'Customer Feedback Advisory Board setup', progress: 50, status: 'In Progress' }
    ]
  },
  {
    id: 'EMP-1005',
    name: 'Kavita Nair',
    role: 'Senior Sales Executive',
    department: 'Sales',
    location: 'Delhi, India (Hybrid)',
    email: 'kavita.nair@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    tenure: '2.4 years',
    hireDate: 'May 2024',
    salary: '$92,000 + Comm',
    manager: 'Amitabh Sen (VP Sales)',
    status: 'Active',
    performanceScore: 4.8,
    engagementScore: 82,
    attritionRisk: 'Medium',
    attritionProbability: 45,
    attendance: {
      presenceRate: '95%',
      remoteDaysPerWeek: 3,
      sickLeavesUsed: 4,
      unexplainedAbsences: 0
    },
    skills: [
      { name: 'B2B Enterprise Sales', level: 'Expert', endorsed: 34 },
      { name: 'Negotiation', level: 'Expert', endorsed: 30 },
      { name: 'Pipeline Management', level: 'Advanced', endorsed: 25 },
      { name: 'CRM (Salesforce)', level: 'Advanced', endorsed: 21 }
    ],
    riskFactors: [
      'Quota exceeded by 140% but commission tier renegotiation pending',
      'Aggressive poaching attempts by rival SaaS firms'
    ],
    aiInsight: {
      summary: 'Top commercial performer. Medium risk due to aggressive external market headhunting.',
      evidence: ['Closed 3 marquee enterprise deals in Q2 2026 totalling $1.4M ARR.'],
      reasoning: 'External market offers 20% higher base salaries for demonstrated high-quota closers.',
      recommendedActions: [
        'Accelerate executive review of revised commission accelerators.',
        'Assign Strategic Account Director title with equity top-up.'
      ]
    },
    goals: [
      { title: 'Achieve $2M Annual Closed ARR', progress: 92, status: 'In Progress' },
      { title: 'Expand into Southeast Asia enterprise accounts', progress: 75, status: 'In Progress' }
    ]
  },
  {
    id: 'EMP-1006',
    name: 'Rahul Deshmukh',
    role: 'Data Analyst',
    department: 'Finance',
    location: 'Pune, India (Hybrid)',
    email: 'rahul.deshmukh@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    tenure: '1.2 years',
    hireDate: 'Jul 2025',
    salary: '$75,000',
    manager: 'Meera Chawla (CFO)',
    status: 'Active',
    performanceScore: 4.1,
    engagementScore: 71,
    attritionRisk: 'Low',
    attritionProbability: 18,
    attendance: {
      presenceRate: '97%',
      remoteDaysPerWeek: 2,
      sickLeavesUsed: 2,
      unexplainedAbsences: 0
    },
    skills: [
      { name: 'SQL', level: 'Advanced', endorsed: 21 },
      { name: 'Financial Modeling', level: 'Advanced', endorsed: 19 },
      { name: 'PowerBI', level: 'Advanced', endorsed: 16 },
      { name: 'Python', level: 'Intermediate', endorsed: 12 }
    ],
    riskFactors: ['Monotonous manual spreadsheet reporting cycles'],
    aiInsight: {
      summary: 'Strong analytical foundation. Expressed desire for predictive ML modeling.',
      evidence: ['Enrolled in external Data Science certification independently.'],
      reasoning: 'Providing higher-order analytics responsibilities will ensure long-term retention.',
      recommendedActions: ['Incorporate automated financial forecasting models with WorkMind AI.']
    },
    goals: [
      { title: 'Automate Q3 Budget Consolidation', progress: 88, status: 'In Progress' },
      { title: 'Build Executive Cash-Burn Forecast Dashboard', progress: 70, status: 'In Progress' }
    ]
  },
  {
    id: 'EMP-1007',
    name: 'Arjun Verma',
    role: 'Software Engineer',
    department: 'Engineering',
    location: 'Bangalore, India (Hybrid)',
    email: 'arjun.verma@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    tenure: '1.5 years',
    hireDate: 'Mar 2025',
    salary: '$88,000',
    manager: 'Vikram Malhotra',
    status: 'Active',
    performanceScore: 4.2,
    engagementScore: 61,
    attritionRisk: 'Medium',
    attritionProbability: 52,
    attendance: {
      presenceRate: '93%',
      remoteDaysPerWeek: 3,
      sickLeavesUsed: 6,
      unexplainedAbsences: 1
    },
    skills: [
      { name: 'React', level: 'Advanced', endorsed: 18 },
      { name: 'TypeScript', level: 'Advanced', endorsed: 15 },
      { name: 'Node.js', level: 'Intermediate', endorsed: 12 },
      { name: 'GraphQL', level: 'Intermediate', endorsed: 9 }
    ],
    riskFactors: ['Feels siloed within frontend tasks without backend growth opportunities'],
    aiInsight: {
      summary: 'Reliable UI engineer seeking fullstack development expansion.',
      evidence: ['Requested transfer to Fullstack Platform squad in 1-on-1 notes.'],
      reasoning: 'Moderate attrition risk if technical horizons remain restricted.',
      recommendedActions: ['Pair with Senior Backend engineer on GraphQL API gateway implementation.']
    },
    goals: [
      { title: 'Design System Migration to Tailwind V3.4', progress: 90, status: 'In Progress' },
      { title: 'Frontend Unit Test Coverage to 85%', progress: 60, status: 'Behind' }
    ]
  },
  {
    id: 'EMP-1008',
    name: 'Neha Kapoor',
    role: 'Marketing Lead',
    department: 'Marketing',
    location: 'Mumbai, India (In-Office)',
    email: 'neha.kapoor@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    tenure: '3.5 years',
    hireDate: 'Feb 2023',
    salary: '$105,000',
    manager: 'Pooja Bhatt (CMO)',
    status: 'Active',
    performanceScore: 4.6,
    engagementScore: 84,
    attritionRisk: 'Low',
    attritionProbability: 14,
    attendance: {
      presenceRate: '96%',
      remoteDaysPerWeek: 2,
      sickLeavesUsed: 5,
      unexplainedAbsences: 0
    },
    skills: [
      { name: 'Content Strategy', level: 'Expert', endorsed: 27 },
      { name: 'Demand Generation', level: 'Advanced', endorsed: 24 },
      { name: 'SEO & Growth', level: 'Advanced', endorsed: 20 },
      { name: 'Brand Marketing', level: 'Advanced', endorsed: 19 }
    ],
    riskFactors: ['High workload during product launch cycles'],
    aiInsight: {
      summary: 'High-impact growth marketing driver with strong company advocacy.',
      evidence: ['Generated +45% inbound enterprise demo requests in Q2.'],
      reasoning: 'High engagement and recognition, solid retention profile.',
      recommendedActions: ['Approve agency budget to offload repetitive content creation.']
    },
    goals: [
      { title: 'Launch WorkMind AI 2026 Brand Campaign', progress: 95, status: 'In Progress' },
      { title: 'Organize Annual Workforce Intelligence Summit', progress: 80, status: 'In Progress' }
    ]
  },
  {
    id: 'EMP-1009',
    name: 'Karan Saxena',
    role: 'Operations Specialist',
    department: 'Operations',
    location: 'Bangalore, India (In-Office)',
    email: 'karan.saxena@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    tenure: '2.1 years',
    hireDate: 'Aug 2024',
    salary: '$68,000',
    manager: 'Sameer Joshi',
    status: 'Active',
    performanceScore: 3.7,
    engagementScore: 49,
    attritionRisk: 'High',
    attritionProbability: 76,
    attendance: {
      presenceRate: '87%',
      remoteDaysPerWeek: 1,
      sickLeavesUsed: 11,
      unexplainedAbsences: 3
    },
    skills: [
      { name: 'Vendor Management', level: 'Advanced', endorsed: 14 },
      { name: 'Logistics Planning', level: 'Advanced', endorsed: 13 },
      { name: 'Process Optimization', level: 'Intermediate', endorsed: 10 }
    ],
    riskFactors: [
      'Frequent unexplained absenteeism on Mondays',
      'Expressed dissatisfaction with rigid in-office requirements',
      'High operational escalation volume'
    ],
    aiInsight: {
      summary: 'Critical burnout and scheduling inflexibility driving severe attrition signals.',
      evidence: ['Sick leave utilization exceeded annual quota by 20% in first 6 months.'],
      reasoning: 'Employee has low psychological safety and feels overwhelmed by logistical fires.',
      recommendedActions: [
        'Offer flexible hybrid schedule (2 days remote).',
        'Review operational workload and reassign vendor compliance queues.'
      ]
    },
    goals: [
      { title: 'Optimize Hardware Procurement SLA to 48 hours', progress: 55, status: 'Behind' }
    ]
  },
  {
    id: 'EMP-1010',
    name: 'Divya Sen',
    role: 'Cloud Security Architect',
    department: 'Engineering',
    location: 'Hyderabad, India (Remote)',
    email: 'divya.sen@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
    tenure: '1.1 years',
    hireDate: 'Aug 2025',
    salary: '$145,000',
    manager: 'Vikram Malhotra',
    status: 'Active',
    performanceScore: 4.9,
    engagementScore: 89,
    attritionRisk: 'Low',
    attritionProbability: 9,
    attendance: {
      presenceRate: '99%',
      remoteDaysPerWeek: 5,
      sickLeavesUsed: 2,
      unexplainedAbsences: 0
    },
    skills: [
      { name: 'Cloud Security', level: 'Expert', endorsed: 36 },
      { name: 'AWS IAM & KMS', level: 'Expert', endorsed: 32 },
      { name: 'SOC2 Compliance', level: 'Expert', endorsed: 28 },
      { name: 'Kubernetes Hardening', level: 'Advanced', endorsed: 22 }
    ],
    riskFactors: ['Critical sole point of failure for cloud governance audits'],
    aiInsight: {
      summary: 'Top tier security specialist. Vital organizational asset. Need to build backup capabilities.',
      evidence: ['Passed SOC2 Type II audit with zero non-conformities.'],
      reasoning: 'High retention and compensation satisfaction, but team has dangerous 14-person deficit in Cloud Security capability.',
      recommendedActions: ['Pair Divya with mid-level engineers to cross-train on SOC2 and AWS IAM guardrails.']
    },
    goals: [
      { title: 'Zero-Trust Architecture Rollout for Production VPCs', progress: 85, status: 'In Progress' }
    ]
  },
  // Additional realistic employees to bring total to 20
  {
    id: 'EMP-1011',
    name: 'Manish Pandey',
    role: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Pune, India (Hybrid)',
    email: 'manish.pandey@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    tenure: '2.5 years',
    hireDate: 'Apr 2024',
    salary: '$110,000',
    manager: 'Vikram Malhotra',
    status: 'Active',
    performanceScore: 4.0,
    engagementScore: 64,
    attritionRisk: 'Medium',
    attritionProbability: 48,
    attendance: { presenceRate: '94%', remoteDaysPerWeek: 3, sickLeavesUsed: 5, unexplainedAbsences: 1 },
    skills: [{ name: 'Go', level: 'Advanced', endorsed: 19 }, { name: 'Distributed Systems', level: 'Advanced', endorsed: 15 }],
    riskFactors: ['Underutilized Go expertise while assigned to legacy monolith maintenance'],
    aiInsight: {
      summary: 'Frustrated by legacy maintenance duties; eager for modern Golang service development.',
      reasoning: 'Mismatch between core skills and assigned tasks.',
      recommendedActions: ['Transition to new Event Streaming Engine squad in Q4.']
    },
    goals: [{ title: 'Kafka Event Consumer Migration', progress: 78, status: 'In Progress' }]
  },
  {
    id: 'EMP-1012',
    name: 'Tanya Goel',
    role: 'UX Designer',
    department: 'Engineering',
    location: 'Bangalore, India (Hybrid)',
    email: 'tanya.goel@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
    tenure: '1.8 years',
    hireDate: 'Nov 2024',
    salary: '$94,000',
    manager: 'Deepak Joshi',
    status: 'Active',
    performanceScore: 4.5,
    engagementScore: 86,
    attritionRisk: 'Low',
    attritionProbability: 11,
    attendance: { presenceRate: '98%', remoteDaysPerWeek: 2, sickLeavesUsed: 3, unexplainedAbsences: 0 },
    skills: [{ name: 'Figma', level: 'Expert', endorsed: 29 }, { name: 'Design Systems', level: 'Expert', endorsed: 24 }],
    riskFactors: ['None identified'],
    aiInsight: {
      summary: 'Outstanding creative output. Champion of the WorkMind UI design system.',
      reasoning: 'Strong peer relationships and executive visibility.',
      recommendedActions: ['Promote to Lead Product Designer in next cycle.']
    },
    goals: [{ title: 'Complete Accessibility (WCAG AAA) Design Review', progress: 92, status: 'In Progress' }]
  },
  {
    id: 'EMP-1013',
    name: 'Varun Singhania',
    role: 'Sales Executive',
    department: 'Sales',
    location: 'Mumbai, India (In-Office)',
    email: 'varun.singhania@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&auto=format&fit=crop&q=80',
    tenure: '1.4 years',
    hireDate: 'May 2025',
    salary: '$78,000 + Comm',
    manager: 'Amitabh Sen',
    status: 'Active',
    performanceScore: 3.4,
    engagementScore: 51,
    attritionRisk: 'High',
    attritionProbability: 74,
    attendance: { presenceRate: '89%', remoteDaysPerWeek: 1, sickLeavesUsed: 8, unexplainedAbsences: 2 },
    skills: [{ name: 'Cold Outreach', level: 'Advanced', endorsed: 14 }, { name: 'Lead Qualification', level: 'Advanced', endorsed: 12 }],
    riskFactors: ['Missed Q2 quota by 28%', 'Low pipeline conversion rate', 'High inbound lead fallout'],
    aiInsight: {
      summary: 'Struggling with complex enterprise sales cycle; lacks solution engineering support.',
      reasoning: 'Inadequate pre-sales alignment causing deal slippage.',
      recommendedActions: ['Pair with Senior Solutions Engineer on tier-1 demo calls; review territory allocation.']
    },
    goals: [{ title: 'Qualify 30 New Enterprise SQLs', progress: 60, status: 'Behind' }]
  },
  {
    id: 'EMP-1014',
    name: 'Pooja Agarwal',
    role: 'Financial Analyst',
    department: 'Finance',
    location: 'Bangalore, India (Hybrid)',
    email: 'pooja.agarwal@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80',
    tenure: '2.9 years',
    hireDate: 'Jan 2024',
    salary: '$82,000',
    manager: 'Meera Chawla',
    status: 'Active',
    performanceScore: 4.3,
    engagementScore: 76,
    attritionRisk: 'Low',
    attritionProbability: 16,
    attendance: { presenceRate: '96%', remoteDaysPerWeek: 2, sickLeavesUsed: 4, unexplainedAbsences: 0 },
    skills: [{ name: 'Accounting', level: 'Expert', endorsed: 22 }, { name: 'Audit & Compliance', level: 'Advanced', endorsed: 18 }],
    riskFactors: ['Overtime spike during fiscal year-end close'],
    aiInsight: {
      summary: 'Solid core finance contributor. Thorough and dependable.',
      reasoning: 'Steady tenure with stable engagement.',
      recommendedActions: ['Introduce robotic process automation for invoice reconciliation.']
    },
    goals: [{ title: 'Automated Expense Reconciliation Rollout', progress: 85, status: 'In Progress' }]
  },
  {
    id: 'EMP-1015',
    name: 'Nikhil Kashyap',
    role: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Hyderabad, India (Remote)',
    email: 'nikhil.kashyap@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80',
    tenure: '1.7 years',
    hireDate: 'Dec 2024',
    salary: '$102,000',
    manager: 'Vikram Malhotra',
    status: 'Active',
    performanceScore: 4.1,
    engagementScore: 68,
    attritionRisk: 'Medium',
    attritionProbability: 38,
    attendance: { presenceRate: '95%', remoteDaysPerWeek: 5, sickLeavesUsed: 4, unexplainedAbsences: 0 },
    skills: [{ name: 'Docker', level: 'Advanced', endorsed: 20 }, { name: 'Terraform', level: 'Intermediate', endorsed: 14 }],
    riskFactors: ['Slow progression toward required Kubernetes proficiency level'],
    aiInsight: {
      summary: 'High potential DevOps engineer experiencing difficulty mastering Kubernetes cluster administration.',
      reasoning: 'Knowledge gap is directly related to organizational Kubernetes skill shortage.',
      recommendedActions: ['Enroll in mentored internal Kubernetes certification track led by Siddharth Roy.']
    },
    goals: [{ title: 'Achieve CKA (Certified Kubernetes Administrator)', progress: 45, status: 'Behind' }]
  },
  {
    id: 'EMP-1016',
    name: 'Shreya Ghosh',
    role: 'HR Specialist',
    department: 'Human Resources',
    location: 'Bangalore, India (Hybrid)',
    email: 'shreya.ghosh@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
    tenure: '1.0 years',
    hireDate: 'Sep 2025',
    salary: '$72,000',
    manager: 'Priya Iyer',
    status: 'Active',
    performanceScore: 4.4,
    engagementScore: 82,
    attritionRisk: 'Low',
    attritionProbability: 13,
    attendance: { presenceRate: '97%', remoteDaysPerWeek: 2, sickLeavesUsed: 3, unexplainedAbsences: 0 },
    skills: [{ name: 'Campus Recruiting', level: 'Advanced', endorsed: 17 }, { name: 'Candidate Experience', level: 'Advanced', endorsed: 16 }],
    riskFactors: ['High interview coordination volume during hiring sprints'],
    aiInsight: {
      summary: 'Energetic talent acquisition driver. Spearheading early-career college hiring drives.',
      reasoning: 'High motivation and clear organizational buy-in.',
      recommendedActions: ['Integrate WorkMind AI Candidate Screening to triage initial applicant volume.']
    },
    goals: [{ title: 'Close 25 College Engineering Hires for FY27', progress: 88, status: 'In Progress' }]
  },
  {
    id: 'EMP-1017',
    name: 'Aditya Chawla',
    role: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Delhi, India (Hybrid)',
    email: 'aditya.chawla@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    tenure: '2.0 years',
    hireDate: 'Oct 2024',
    salary: '$74,000',
    manager: 'Neha Kapoor',
    status: 'Active',
    performanceScore: 3.8,
    engagementScore: 56,
    attritionRisk: 'High',
    attritionProbability: 69,
    attendance: { presenceRate: '90%', remoteDaysPerWeek: 3, sickLeavesUsed: 7, unexplainedAbsences: 2 },
    skills: [{ name: 'Social Media Marketing', level: 'Advanced', endorsed: 15 }, { name: 'Paid Ads', level: 'Intermediate', endorsed: 11 }],
    riskFactors: ['Disengagement following cancellation of preferred digital campaign', 'Rising absenteeism'],
    aiInsight: {
      summary: 'Demotivated by perceived lack of creative autonomy on growth campaigns.',
      reasoning: 'Low sentiment correlated with top-down feedback loops.',
      recommendedActions: ['Grant ownership of independent TikTok & LinkedIn thought leadership pilot.']
    },
    goals: [{ title: 'Grow Organic Social Reach by 35%', progress: 50, status: 'Behind' }]
  },
  {
    id: 'EMP-1018',
    name: 'Deepak Joshi',
    role: 'Chief Product Officer',
    department: 'Engineering',
    location: 'Bangalore, India (In-Office)',
    email: 'deepak.joshi@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    tenure: '5.2 years',
    hireDate: 'Jun 2021',
    salary: '$210,000',
    manager: 'CEO',
    status: 'Active',
    performanceScore: 4.8,
    engagementScore: 92,
    attritionRisk: 'Low',
    attritionProbability: 5,
    attendance: { presenceRate: '98%', remoteDaysPerWeek: 1, sickLeavesUsed: 2, unexplainedAbsences: 0 },
    skills: [{ name: 'Product Vision', level: 'Expert', endorsed: 42 }, { name: 'Executive Leadership', level: 'Expert', endorsed: 39 }],
    riskFactors: ['None'],
    aiInsight: {
      summary: 'Executive anchor defining the product roadmap.',
      reasoning: 'Long-term equity alignment and strong board backing.',
      recommendedActions: ['Facilitate quarterly offsite alignment with VP Engineering.']
    },
    goals: [{ title: 'Ship WorkMind AI 3.0 Enterprise Suite', progress: 90, status: 'In Progress' }]
  },
  {
    id: 'EMP-1019',
    name: 'Vikram Malhotra',
    role: 'VP Engineering',
    department: 'Engineering',
    location: 'Bangalore, India (In-Office)',
    email: 'vikram.malhotra@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    tenure: '4.8 years',
    hireDate: 'Nov 2021',
    salary: '$225,000',
    manager: 'CTO',
    status: 'Active',
    performanceScore: 4.9,
    engagementScore: 94,
    attritionRisk: 'Low',
    attritionProbability: 4,
    attendance: { presenceRate: '99%', remoteDaysPerWeek: 1, sickLeavesUsed: 1, unexplainedAbsences: 0 },
    skills: [{ name: 'Engineering Leadership', level: 'Expert', endorsed: 45 }, { name: 'Distributed Architecture', level: 'Expert', endorsed: 40 }],
    riskFactors: ['None'],
    aiInsight: {
      summary: 'Exceptional engineering leader managing 180+ developers across 14 pods.',
      reasoning: 'High team trust and stellar organizational execution.',
      recommendedActions: ['Support with automated workforce skill gap reporting from WorkMind AI.']
    },
    goals: [{ title: 'Achieve 99.99% Core Service Reliability', progress: 98, status: 'In Progress' }]
  },
  {
    id: 'EMP-1020',
    name: 'Aisha Khan',
    role: 'Operations Lead',
    department: 'Operations',
    location: 'Mumbai, India (Hybrid)',
    email: 'aisha.khan@workmind.ai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    tenure: '3.0 years',
    hireDate: 'Jul 2023',
    salary: '$96,000',
    manager: 'COO',
    status: 'Active',
    performanceScore: 4.4,
    engagementScore: 80,
    attritionRisk: 'Low',
    attritionProbability: 15,
    attendance: { presenceRate: '95%', remoteDaysPerWeek: 2, sickLeavesUsed: 4, unexplainedAbsences: 0 },
    skills: [{ name: 'Operations Excellence', level: 'Expert', endorsed: 25 }, { name: 'Vendor Contracts', level: 'Advanced', endorsed: 20 }],
    riskFactors: ['None'],
    aiInsight: {
      summary: 'Disciplined operational executor; maintains low overhead across regional facilities.',
      reasoning: 'Strong performance and reliable delivery.',
      recommendedActions: ['Standardize IT asset provisioning pipelines with automated onboarding workflows.']
    },
    goals: [{ title: 'Vendor Spend Reduction of 12%', progress: 85, status: 'In Progress' }]
  }
];

// Active Job Requisitions & Candidates
export const jobs = [
  {
    id: 'JOB-201',
    title: 'Senior Software Engineer (Backend)',
    department: 'Engineering',
    location: 'Bangalore, India (Hybrid)',
    experience: '3-6 years',
    openings: 3,
    status: 'Active',
    requirements: ['Java', 'Spring Boot', 'SQL', 'AWS', 'Docker', 'Git'],
    description: 'Looking for a Senior Backend Engineer to architect high-throughput distributed transaction engines using Java, Spring Boot, and AWS cloud infrastructure.'
  },
  {
    id: 'JOB-202',
    title: 'Senior DevOps / Platform Engineer',
    department: 'Engineering',
    location: 'Remote',
    experience: '4-7 years',
    openings: 2,
    status: 'Active',
    requirements: ['Kubernetes', 'Terraform', 'AWS', 'Docker', 'CI/CD', 'Python'],
    description: 'Lead the migration to multi-region Kubernetes clusters, standardize Infrastructure-as-Code modules in Terraform, and automate zero-downtime deployment pipelines.'
  },
  {
    id: 'JOB-203',
    title: 'Technical Product Manager',
    department: 'Engineering',
    location: 'Bangalore, India (Hybrid)',
    experience: '4-8 years',
    openings: 1,
    status: 'Active',
    requirements: ['Product Strategy', 'Agile & Scrum', 'SQL', 'API Design', 'System Architecture'],
    description: 'Drive the roadmap for our AI intelligence platform, collaborating closely with ML engineers and executive HR stakeholders.'
  }
];

export const candidates = [
  {
    id: 'CAND-01',
    jobId: 'JOB-201',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    email: 'aarav.sharma.dev@gmail.com',
    phone: '+91 98201 44521',
    currentCompany: 'Infosys FinTech Labs',
    experience: '2.4 years',
    skillsMatch: 92,
    aiScore: 91,
    status: 'Shortlisted',
    education: 'B.Tech in Computer Science, NIT Karnataka (2024)',
    matchedSkills: ['Java', 'Spring Boot', 'SQL', 'Docker', 'Git'],
    missingSkills: ['AWS Cloud Architecture'],
    resumeSummary: 'Full stack backend engineer with 2.4 years of hands-on production experience in Java 17, Spring Boot microservices, high-volume PostgreSQL optimizations, and containerized Docker CI/CD deployments.',
    aiReasoning: 'Candidate matches 92% of the required skills. Demonstrates strong Java, Spring Boot, and SQL query tuning experience. While direct AWS infrastructure provisioning is limited, previous Docker containerization and Redis caching expertise suggests a steep learning curve.',
    interviewRecommendation: 'Strongly Recommend for Round 2 Technical Architecture Interview. Focus deep-dive questions on AWS ECS/EKS deployment patterns and distributed database locking.'
  },
  {
    id: 'CAND-02',
    jobId: 'JOB-201',
    name: 'Priya Verma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    email: 'priya.verma.tech@outlook.com',
    phone: '+91 98450 11293',
    currentCompany: 'Wipro Digital',
    experience: '1.8 years',
    skillsMatch: 87,
    aiScore: 86,
    status: 'Review',
    education: 'B.E. Information Technology, Pune Institute of Computer Technology (2024)',
    matchedSkills: ['Java', 'Spring Boot', 'SQL', 'Git'],
    missingSkills: ['AWS', 'Docker'],
    resumeSummary: 'Backend developer focused on REST API design, Hibernate ORM, and Oracle SQL databases with good understanding of enterprise design patterns and Git collaboration.',
    aiReasoning: 'Strong foundation in core Java and Spring Boot. Clean coding test submission with 95% test coverage. Missing Docker and AWS experience, but demonstrates strong algorithmic reasoning.',
    interviewRecommendation: 'Recommend for Technical Screen with evaluation emphasis on containerization fundamentals and concurrency.'
  },
  {
    id: 'CAND-03',
    jobId: 'JOB-201',
    name: 'Rahul Singh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    email: 'rahul.singh.eng@yahoo.com',
    phone: '+91 97110 88203',
    currentCompany: 'Cognizant Technology Solutions',
    experience: '3.0 years',
    skillsMatch: 78,
    aiScore: 79,
    status: 'Review',
    education: 'B.Tech in Computer Science, SRM University (2023)',
    matchedSkills: ['Java', 'SQL', 'Git'],
    missingSkills: ['Spring Boot (Minimal)', 'AWS', 'Docker'],
    resumeSummary: 'Java engineer working on legacy enterprise maintenance with J2EE and Struts frameworks. Transitioning toward modern Spring Boot and microservice paradigms.',
    aiReasoning: 'Good tenure and solid Java core proficiency, but primary background is in older enterprise stacks. Minimal production experience with Spring Boot microservices and cloud deployment.',
    interviewRecommendation: 'Hold or consider for Junior Backend pool if candidate is willing to complete modern Spring Boot upskilling.'
  },
  {
    id: 'CAND-04',
    jobId: 'JOB-201',
    name: 'Neha Gupta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    email: 'neha.gupta.cloud@gmail.com',
    phone: '+91 99002 54312',
    currentCompany: 'TCS Innovation Hub',
    experience: '3.5 years',
    skillsMatch: 95,
    aiScore: 94,
    status: 'Shortlisted',
    education: 'M.Tech Software Systems, BITS Pilani (2023)',
    matchedSkills: ['Java', 'Spring Boot', 'SQL', 'AWS', 'Docker', 'Git'],
    missingSkills: [],
    resumeSummary: 'Exceptional backend cloud engineer with end-to-end expertise in Spring Cloud, AWS ECS, DynamoDB, PostgreSQL, and automated GitHub Actions pipelines.',
    aiReasoning: '100% skill requirement coverage with certified AWS Developer Associate credential. Demonstrated high-throughput payment transaction pipeline redesign in current role.',
    interviewRecommendation: 'Top Priority Candidate. Fast-track directly to Final Technical Presentation with VP Engineering.'
  },
  {
    id: 'CAND-05',
    jobId: 'JOB-202',
    name: 'Vikram Patel',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    email: 'vikram.patel.sre@gmail.com',
    phone: '+91 98112 33490',
    currentCompany: 'Flipkart SRE Squad',
    experience: '5.2 years',
    skillsMatch: 96,
    aiScore: 95,
    status: 'Shortlisted',
    education: 'B.Tech CS, Delhi Technological University (2021)',
    matchedSkills: ['Kubernetes', 'Terraform', 'AWS', 'Docker', 'CI/CD', 'Python'],
    missingSkills: [],
    resumeSummary: 'SRE Specialist managing 45+ production EKS clusters, authoring reusable Terraform modules, and building automated failover systems handling 250k RPM.',
    aiReasoning: 'Perfect match for our critical Kubernetes & Cloud Infrastructure deficit. Directly solves the 17-person Kubernetes skill gap in Engineering.',
    interviewRecommendation: 'Immediate Final Loop scheduling. Consider signing bonus flexibility.'
  },
  {
    id: 'CAND-06',
    jobId: 'JOB-203',
    name: 'Ananya Sen',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    email: 'ananya.sen.pm@gmail.com',
    phone: '+91 98200 77123',
    currentCompany: 'Swiggy Product Org',
    experience: '4.5 years',
    skillsMatch: 90,
    aiScore: 89,
    status: 'Interviewing',
    education: 'MBA IIM Bangalore (2022), B.Tech IIT Kharagpur (2020)',
    matchedSkills: ['Product Strategy', 'Agile & Scrum', 'SQL', 'System Architecture'],
    missingSkills: ['API Design (Hands-on)'],
    resumeSummary: 'Data-driven Product Manager with proven track record scaling driver allocation algorithms and merchant analytics portals.',
    aiReasoning: 'Strong quantitative instincts and exceptional technical empathy with engineering squads. Highly aligned with WorkMind platform complexity.',
    interviewRecommendation: 'Advance to Executive Product Vision presentation with CPO Deepak Joshi.'
  }
];

// Adaptive Onboarding Journeys
export const onboardingEmployees = [
  {
    id: 'ONB-01',
    name: 'Riya Sharma',
    role: 'Software Engineer',
    department: 'Engineering',
    mentor: 'Ananya Sharma',
    startDate: 'Sep 12, 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    progress: 68,
    status: 'On Track',
    tasks: [
      { id: 't1', title: 'Complete HR documentation & payroll forms', completed: true, category: 'HR' },
      { id: 't2', title: 'Meet engineering manager (1-on-1 welcome)', completed: true, category: 'People' },
      { id: 't3', title: 'Security training & 2FA device authentication', completed: true, category: 'Compliance' },
      { id: 't4', title: 'Development environment & Docker setup', completed: true, category: 'Tech' },
      { id: 't5', title: 'Team introduction & sprint architecture walk-through', completed: false, category: 'People' },
      { id: 't6', title: 'First PR assignment (Bugfix on Auth service)', completed: false, category: 'Tech' }
    ],
    aiRecommendation: {
      title: 'Personalized Onboarding Recommendation',
      content: 'Based on Riya’s Software Engineering role and the team’s current SOC2 audit cycle, WorkMind AI recommends completing the Cloud Security & IAM guardrails module before allocating her to the production Auth service project.',
      expectedBenefit: 'Reduces code security vulnerability risk by 40% in initial commit cycle.'
    }
  },
  {
    id: 'ONB-02',
    name: 'Rohan Mehta',
    role: 'Product Designer',
    department: 'Engineering',
    mentor: 'Tanya Goel',
    startDate: 'Sep 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    progress: 42,
    status: 'Attention Needed',
    tasks: [
      { id: 't21', title: 'Complete HR documentation & ID verification', completed: true, category: 'HR' },
      { id: 't22', title: 'Manager welcome session', completed: true, category: 'People' },
      { id: 't23', title: 'Design system Figma tokens walk-through', completed: false, category: 'Tech' },
      { id: 't24', title: 'Setup Miro & UserTesting workspace access', completed: false, category: 'Tech' },
      { id: 't25', title: 'Review Q4 Mobile Design Sprint Brief', completed: false, category: 'Tech' }
    ],
    aiRecommendation: {
      title: 'Personalized Onboarding Recommendation',
      content: 'Rohan has not yet accessed the centralized Figma Design Token repository. WorkMind AI suggests scheduling a 30-minute design pairing session with Lead Designer Tanya Goel to prevent component divergence.',
      expectedBenefit: 'Prevents design system discrepancies in the upcoming Q4 sprint.'
    }
  },
  {
    id: 'ONB-03',
    name: 'Sneha Kapoor',
    role: 'Data Analyst',
    department: 'Finance',
    mentor: 'Rahul Deshmukh',
    startDate: 'Sep 05, 2026',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80',
    progress: 85,
    status: 'Ahead of Schedule',
    tasks: [
      { id: 't31', title: 'HR compliance & security clearance', completed: true, category: 'HR' },
      { id: 't32', title: 'Snowflake & dbt data warehouse access setup', completed: true, category: 'Tech' },
      { id: 't33', title: 'Finance schema orientation with CFO', completed: true, category: 'People' },
      { id: 't34', title: 'Deliver first automated ARR dashboard', completed: true, category: 'Tech' },
      { id: 't35', title: '30-Day Onboarding check-in with HR partner', completed: false, category: 'HR' }
    ],
    aiRecommendation: {
      title: 'Personalized Onboarding Recommendation',
      content: 'Sneha completed all technical milestones 5 days early. WorkMind AI recommends inviting her to present her automated ARR pipeline directly in the upcoming Finance All-Hands.',
      expectedBenefit: 'Reinforces high early engagement and accelerates leadership visibility.'
    }
  },
  {
    id: 'ONB-04',
    name: 'Karan Malhotra',
    role: 'DevOps Engineer',
    department: 'Engineering',
    mentor: 'Siddharth Roy',
    startDate: 'Sep 18, 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    progress: 25,
    status: 'Delayed Setup',
    tasks: [
      { id: 't41', title: 'HR Compliance Documentation', completed: true, category: 'HR' },
      { id: 't42', title: 'AWS IAM Identity Center Provisioning', completed: false, category: 'Tech' },
      { id: 't43', title: 'Hardware YubiKey token distribution', completed: false, category: 'Tech' },
      { id: 't44', title: 'Kubernetes cluster read-only access', completed: false, category: 'Tech' }
    ],
    aiRecommendation: {
      title: 'Bottleneck Alert',
      content: 'Hardware security token delivery is pending from IT Operations, blocking AWS IAM clearance. WorkMind AI has flagged IT ticket #OPS-8821 for urgent escalation.',
      expectedBenefit: 'Recovers 4 lost onboarding business days.'
    }
  }
];

// Workforce Skill Graph & Critical Gaps
export const criticalSkillGaps = [
  {
    id: 'sk-1',
    name: 'Kubernetes Cluster Administration',
    category: 'Cloud & Infrastructure',
    currentEmployees: 18,
    requiredEmployees: 35,
    gap: 17,
    percentage: 51,
    priority: 'Critical',
    impactedDepartments: ['Engineering', 'DevOps'],
    reasoning: 'Upcoming multi-region cloud migration in Q4 requires 35 certified engineers. Current deficit of 17 puts the migration at risk of 8-week delay.',
    actionSuggestion: 'Launch internal Kubernetes Upskilling Academy paired with Siddharth Roy.'
  },
  {
    id: 'sk-2',
    name: 'Cloud Security & DevSecOps',
    category: 'Security & Compliance',
    currentEmployees: 8,
    requiredEmployees: 22,
    gap: 14,
    percentage: 36,
    priority: 'Critical',
    impactedDepartments: ['Engineering', 'Operations'],
    reasoning: 'SOC2 Type II and ISO 27001 continuous compliance requires security guardrails embedded across all 14 engineering squads.',
    actionSuggestion: 'Sponsor AWS Certified Security Specialty track for 15 Senior Software Engineers.'
  },
  {
    id: 'sk-3',
    name: 'Distributed Systems & Kafka',
    category: 'Backend Architecture',
    currentEmployees: 24,
    requiredEmployees: 38,
    gap: 14,
    percentage: 63,
    priority: 'High',
    impactedDepartments: ['Engineering'],
    reasoning: 'Event-driven streaming migration requires deep understanding of partition rebalancing and exactly-once semantics.',
    actionSuggestion: 'Conduct 4-week internal Kafka architecture workshop series.'
  },
  {
    id: 'sk-4',
    name: 'Predictive Data Analytics (Python/ML)',
    category: 'Data Science',
    currentEmployees: 12,
    requiredEmployees: 20,
    gap: 8,
    percentage: 60,
    priority: 'Medium',
    impactedDepartments: ['Finance', 'Marketing'],
    reasoning: 'Manual spreadsheet reporting in Finance & Marketing causes a 3-day lag in executive decision-making.',
    actionSuggestion: 'Cross-train BI analysts on Python pandas & automated SQL reporting.'
  },
  {
    id: 'sk-5',
    name: 'Enterprise Contract Negotiation',
    category: 'Sales & Commercial',
    currentEmployees: 15,
    requiredEmployees: 24,
    gap: 9,
    percentage: 62,
    priority: 'Medium',
    impactedDepartments: ['Sales'],
    reasoning: 'New tier-1 enterprise deal size requires specialized commercial legal & procurement negotiation skills.',
    actionSuggestion: 'Enroll mid-tier Sales Executives in enterprise procurement coaching.'
  }
];

export const skillEcosystem = [
  {
    domain: 'Cloud & Infrastructure',
    skills: ['Kubernetes', 'AWS', 'Docker', 'Terraform', 'CI/CD Pipelines', 'Cloud Security'],
    headcount: 82,
    status: 'Deficit in 2 Core Skills'
  },
  {
    domain: 'Software Engineering',
    skills: ['Java', 'Spring Boot', 'TypeScript', 'React', 'Go', 'Microservices', 'PostgreSQL'],
    headcount: 320,
    status: 'Healthy Coverage'
  },
  {
    domain: 'Data & Artificial Intelligence',
    skills: ['Python', 'SQL', 'Snowflake', 'dbt', 'Machine Learning', 'Data Modeling'],
    headcount: 64,
    status: 'Moderate Deficit'
  },
  {
    domain: 'Product & Design',
    skills: ['Product Strategy', 'Agile & Scrum', 'User Research', 'Figma', 'Design Systems'],
    headcount: 48,
    status: 'Optimal'
  },
  {
    domain: 'Commercial & People',
    skills: ['Enterprise B2B Sales', 'Negotiation', 'Talent Acquisition', 'Employee Relations', 'Compliance'],
    headcount: 140,
    status: 'Healthy Coverage'
  }
];

// AI Interview Agent Data
export const interviewQuestionsData = {
  'Backend Developer': {
    Technical: [
      {
        id: 'q-tech-1',
        question: 'Explain how you design an idempotent payment processing endpoint handling 10,000 requests per minute with potential network retry duplicate requests.',
        expectedKeyPoints: ['Idempotency keys (UUID) stored in distributed cache (Redis)', 'Distributed locking with lease expiration', 'Database transaction isolation levels', 'Dead-letter queues and error classification'],
        sampleCandidateResponse: 'I would generate an idempotency key on the client side and check it in Redis with an atomic SETNX before processing. If the key exists, I return the cached result. For database safety, I use database constraints and pessimistic locks on the account balance row.',
        aiEvaluation: {
          score: 88,
          verdict: 'Strong Technical Depth',
          observations: 'Candidate demonstrated clear understanding of Redis atomic operations and client-side idempotency tokens. Could have elaborated on distributed lock expiration corner cases (split-brain) and asynchronous event publishing with transactional outbox pattern.',
          rubric: { technicalAccuracy: 90, systemScalability: 86, edgeCaseHandling: 84 }
        }
      },
      {
        id: 'q-tech-2',
        question: 'How do you handle schema migrations on a PostgreSQL table with 150 million rows without blocking read or write operations?',
        expectedKeyPoints: ['CREATE INDEX CONCURRENTLY', 'Adding nullable columns or columns with DEFAULT NULL', 'Multi-phase rollout (expand and contract pattern)', 'Monitoring table locks in pg_stat_activity'],
        sampleCandidateResponse: 'You should never run regular ALTER TABLE directly because of exclusive locks. I use CREATE INDEX CONCURRENTLY, add new columns as nullable, deploy application code to write to both old and new columns, backfill historical data in batches, and finally switch reads.',
        aiEvaluation: {
          score: 94,
          verdict: 'Excellent Production Mastery',
          observations: 'Flawless recall of zero-downtime database migration patterns (expand-contract) and lock mitigation on high-traffic production databases.',
          rubric: { technicalAccuracy: 96, systemScalability: 94, edgeCaseHandling: 92 }
        }
      }
    ],
    Behavioral: [
      {
        id: 'q-beh-1',
        question: 'Describe a situation where an architectural decision you made caused an unforeseen production incident or performance degradation. How did you handle stakeholder communication and recovery?',
        expectedKeyPoints: ['Ownership without blame', 'Root cause analysis (RCA)', 'Clear stakeholder blast-radius communication', 'Preventative automated safeguards'],
        sampleCandidateResponse: 'We introduced an in-memory cache that wasn’t bounded, which caused an out-of-memory crash during a marketing traffic spike. I immediately rolled back to the previous release, sent an incident update to leadership within 15 minutes, and published a blameless post-mortem with automated memory limit alarms the next morning.',
        aiEvaluation: {
          score: 91,
          verdict: 'Mature Incident Ownership',
          observations: 'Clear evidence of accountability and transparency. High psychological safety demonstrated through proactive stakeholder communication.',
          rubric: { accountability: 94, communication: 90, resilience: 89 }
        }
      }
    ],
    Situational: [
      {
        id: 'q-sit-1',
        question: 'Your Product Manager insists on shipping an un-refactored feature with known security vulnerabilities to hit an executive deadline. How do you resolve this conflict?',
        expectedKeyPoints: ['Quantifying risk objectively', 'Compromise / feature flagging / mitigation', 'Involving Security Officer or Tech Lead', 'Clear documentation of technical debt'],
        sampleCandidateResponse: 'I would assess if the security issue exposes user PII or allows unauthorized access. If critical, I escalate to our security lead and propose shipping a gated alpha to non-sensitive internal beta users, while finishing the patch before general release.',
        aiEvaluation: {
          score: 89,
          verdict: 'Pragmatic & Principled',
          observations: 'Balanced business urgency with non-negotiable security standards. Good use of phased feature flags as a risk mitigation strategy.',
          rubric: { conflictResolution: 90, riskAssessment: 92, leadership: 85 }
        }
      }
    ]
  }
};

// HR Policy Reasoning Corpus & Suggested Questions
export const policyDocuments = [
  {
    id: 'POL-01',
    title: 'Enterprise Leave & Time-Off Policy',
    version: 'v3.2 (Approved Jan 2026)',
    author: 'Radhika Rao (VP People)',
    summary: 'Governs earned annual leave, carry-forward limits, emergency sick leave, and inter-departmental transfers.',
    clauses: [
      {
        section: 'Section 4.1 - Annual Leave Carry Forward',
        text: 'Full-time employees may carry forward a maximum of 12 unused Earned Annual Leave (EAL) days into the subsequent calendar year. Any unused balance exceeding 12 days automatically lapses on March 31 unless granted a written exemption by the Head of Department.'
      },
      {
        section: 'Section 4.3 - Inter-Departmental Transfers',
        text: 'When an employee transitions across business units or departments within WorkMind AI, all accrued earned leave balances and tenure seniority are 100% preserved. The receiving department assumes financial liability for the carried forward leave accrual without forfeiture.'
      },
      {
        section: 'Section 5.2 - Compassionate & Emergency Sick Leave',
        text: 'Employees are allocated 10 days of paid sick and emergency leave annually. A certified medical practitioner note is required only for continuous absences exceeding three (3) consecutive business days.'
      }
    ]
  },
  {
    id: 'POL-02',
    title: 'Remote & Hybrid Work Guidelines',
    version: 'v4.0 (Approved Mar 2026)',
    author: 'Priya Iyer (HR Manager)',
    summary: 'Specifies core in-office collaboration requirements, international remote working stipulations, and home equipment stipends.',
    clauses: [
      {
        section: 'Section 2.1 - Hybrid Rhythm',
        text: 'Engineering, Product, and Sales team members operate under a 3:2 hybrid rhythm (3 days in-office, 2 days remote). Core collaboration hours are 10:30 AM to 4:30 PM local timezone.'
      },
      {
        section: 'Section 3.4 - Work From Anywhere (WFA) Allowance',
        text: 'Employees in good performance standing (>3.5 rating) are entitled to up to 30 calendar days per year of domestic or international remote work from an approved jurisdiction, subject to 14 days manager notice.'
      }
    ]
  },
  {
    id: 'POL-03',
    title: 'Notice Period & Offboarding Policy',
    version: 'v2.1 (Approved Nov 2025)',
    author: 'Legal & HR Compliance',
    summary: 'Specifies contractual notice durations, garden leave, and buyout provisions.',
    clauses: [
      {
        section: 'Section 1.2 - Notice Duration by Band',
        text: 'Standard Software Engineers and Individual Contributors adhere to a 60-day notice period. Lead Engineers, Engineering Managers, and Executive Directors adhere to a 90-day notice period. Notice buyout requires joint approval from VP People and Department Head.'
      }
    ]
  },
  {
    id: 'POL-04',
    title: 'Maternity, Paternity & Caregiver Policy',
    version: 'v2.4 (Approved Feb 2026)',
    author: 'Radhika Rao (VP People)',
    summary: 'Provides 26 weeks of fully paid maternity leave, 4 weeks paternity leave, and phased return-to-work options.',
    clauses: [
      {
        section: 'Section 2.2 - Primary Caregiver Leave',
        text: 'Eligible birth mothers and primary adoptive parents are granted 26 continuous weeks of fully compensated leave with full equity vesting continuity and benefits maintenance.'
      }
    ]
  }
];

export const suggestedPolicyQuestions = [
  'Can an employee carry forward unused leave after changing departments?',
  'What is the notice period required for Senior Software Engineers?',
  'What are the guidelines for working remotely from another city or country?',
  'What is the maternity and parental leave entitlement?'
];

// Pre-computed responses for policy reasoning with exact citations
export const policyQnAResponses = {
  'carry forward': {
    answer: 'Yes. An employee can fully carry forward up to 12 days of unused earned annual leave when changing departments.',
    reasoning: 'According to Section 4.3 of the Enterprise Leave Policy, when an employee transitions across business units or departments within the company, 100% of accrued earned leave balances and tenure seniority are preserved. The receiving department assumes financial liability without any forfeiture.',
    source: 'Enterprise Leave & Time-Off Policy v3.2',
    clause: 'Section 4.3 (Inter-Departmental Transfers) & Section 4.1 (Annual Leave Carry Forward)',
    confidence: '98%',
    relatedPolicies: ['Remote & Hybrid Work Guidelines v4.0', 'Employee Benefits Handbook 2026']
  },
  'notice period': {
    answer: 'Senior Software Engineers are required to serve a 60-day notice period upon resignation.',
    reasoning: 'Under Section 1.2 of the Notice Period & Offboarding Policy v2.1, standard individual contributors and senior software engineers adhere to a 60-day notice period. Roles at the Lead Engineer, Management, or Director level require a 90-day notice period. Any early buyout requires joint sign-off from the VP People and the Department Head.',
    source: 'Notice Period & Offboarding Policy v2.1',
    clause: 'Section 1.2 - Notice Duration by Band',
    confidence: '99%',
    relatedPolicies: ['Severance & Offboarding Handbook', 'IP Protection & Non-Disclosure Agreement']
  },
  'remote': {
    answer: 'Employees operate under a 3:2 hybrid schedule and are entitled to up to 30 days per year of Work-From-Anywhere remote work.',
    reasoning: 'Per Section 2.1 of the Remote & Hybrid Guidelines v4.0, teams follow a 3-day in-office and 2-day remote weekly rhythm. Additionally, Section 3.4 grants high-performing employees (>3.5 rating) up to 30 calendar days annually to work remotely from any approved location with two weeks advance manager notice.',
    source: 'Remote & Hybrid Work Guidelines v4.0',
    clause: 'Section 2.1 (Hybrid Rhythm) & Section 3.4 (WFA Allowance)',
    confidence: '96%',
    relatedPolicies: ['IT Security for Remote Devices', 'Travel & Expense Reimbursement Policy']
  },
  'maternity': {
    answer: 'Primary caregivers and birth mothers are entitled to 26 continuous weeks of fully paid leave with unbroken equity vesting.',
    reasoning: 'Under Section 2.2 of the Maternity, Paternity & Caregiver Policy v2.4, primary caregivers receive 26 weeks of full salary compensation, full equity vesting continuity, health insurance maintenance, and access to a flexible phased return-to-work program.',
    source: 'Maternity, Paternity & Caregiver Policy v2.4',
    clause: 'Section 2.2 - Primary Caregiver Leave',
    confidence: '99%',
    relatedPolicies: ['Health Benefits Guide 2026', 'Caregiver Phased Return Program']
  }
};

// Cross-Source Workforce Intelligence Insights
export const workforceInsights = [
  {
    id: 'ins-1',
    title: 'Engineering Attrition Spike Correlated with Workload & Market Demand',
    category: 'Workforce Risk',
    priority: 'High',
    connectedSources: ['Attendance Logs', 'Performance Management', 'Employee Surveys', 'Recruitment Benchmarks'],
    summary: 'AI detected a 17% increase in attrition risk within the Core Engineering department over the past 60 days.',
    evidence: [
      { source: 'Kronos Attendance & GitHub Logs', data: 'Average weekly sprint story points increased by 21% with late night commits up 34%.' },
      { source: 'Glint Pulse Surveys', data: 'Engineering department satisfaction dropped 9 points (from 81% to 72%).' },
      { source: 'CultureAmp Performance', data: 'Stagnant promotions: 14 senior engineers unpromoted for >24 months.' },
      { source: 'Market Intelligence', data: 'External job market demand for Senior Java & Cloud engineers increased 28% in Bangalore.' }
    ],
    impact: 'Potential loss of 8-12 mission-critical platform engineers before Q4, jeopardizing the cloud migration deadline and incurring an estimated $380,000 in replacement costs.',
    recommendedActions: [
      'Conduct immediate manager check-ins with the 12 highest-risk engineers.',
      'Rebalance platform sprint backlog to cap overtime hours.',
      'Fast-track promotion and market compensation adjustments for senior contributors.'
    ]
  },
  {
    id: 'ins-2',
    title: 'Critical Cloud Infrastructure Deficit Threatens Q4 Roadmap',
    category: 'Skill Gap & Strategy',
    priority: 'High',
    connectedSources: ['Employee Database', 'Recruitment System', 'Performance OKRs'],
    summary: 'Cross-referencing verified engineer skills with upcoming Q4 OKRs reveals a severe 17-person Kubernetes gap and 14-person Cloud Security gap.',
    evidence: [
      { source: 'Skill Matrix', data: 'Only 18 engineers currently verified in Kubernetes administration; 35 required for production cluster operations.' },
      { source: 'Recruitment System', data: 'Average time-to-hire for external DevOps engineers has extended to 54 days.' },
      { source: 'OKRs', data: 'Four squad initiatives blocked waiting on shared SRE availability.' }
    ],
    impact: 'External hiring alone cannot satisfy the deadline. Without rapid internal reskilling, project timelines will slip by an estimated 7 to 9 weeks.',
    recommendedActions: [
      'Launch the internal Kubernetes Upskilling Academy sponsored by Lead SRE Siddharth Roy.',
      'Prioritize recruitment offers for shortlisted DevOps candidate Vikram Patel.'
    ]
  },
  {
    id: 'ins-3',
    title: 'Sales Team Onboarding Velocity Accelerating Quota Attainment',
    category: 'Productivity Optimization',
    priority: 'Medium',
    connectedSources: ['Onboarding System', 'Salesforce CRM', 'Pulse Surveys'],
    summary: 'New sales hires who completed the AI Adaptive Onboarding curriculum achieved quota attainment 3.2 weeks faster than legacy cohorts.',
    evidence: [
      { source: 'Onboarding System', data: 'Adaptive onboarding cohorts completed product qualification modules in 14 days vs 28 days previously.' },
      { source: 'Salesforce CRM', data: 'First closed demo deal accelerated from Day 45 to Day 26.' }
    ],
    impact: 'Projected additional $420,000 in early-ramp ARR across the Q3/Q4 sales hiring cohort.',
    recommendedActions: [
      'Expand the Adaptive Onboarding model to the Engineering and Customer Success departments.'
    ]
  }
];

// AI Action Center
export const actionCenterItems = [
  {
    id: 'act-item-1',
    title: 'Schedule check-in with 12 high-risk Engineering employees',
    priority: 'High',
    department: 'Engineering',
    reason: 'Severe attrition signals detected: declining sentiment (-18%), sustained workload spikes (+25%), and salary gap against market.',
    evidence: 'Cross-referenced Kronos attendance, Git commit time distributions, and Q2 Glint sentiment pulse.',
    expectedImpact: 'Mitigates 70% of potential short-term resignations through proactive retention dialogue.',
    actionLabel: 'Review Employees',
    link: '/attrition',
    status: 'Pending'
  },
  {
    id: 'act-item-2',
    title: 'Launch internal Kubernetes Upskilling Academy',
    priority: 'High',
    department: 'Engineering',
    reason: '17-person critical deficit in Kubernetes cluster administration identified ahead of Q4 cloud migration.',
    evidence: 'Verified 18 active practitioners vs 35 required in Q4 infrastructure OKR roadmap.',
    expectedImpact: 'Closes 12 of 17 skill deficits internally within 6 weeks, saving $140,000 in external agency recruiting fees.',
    actionLabel: 'Launch Upskilling Program',
    link: '/skills',
    status: 'Pending'
  },
  {
    id: 'act-item-3',
    title: 'Review 8 candidates shortlisted by AI for Senior Backend Engineer',
    priority: 'High',
    department: 'Recruitment',
    reason: 'Top candidates Aarav Sharma and Neha Gupta scored >90% match on core Spring Boot and database scalability.',
    evidence: 'Resume parsing, code assessment grading, and architectural interview evaluations.',
    expectedImpact: 'Reduces time-to-offer by 11 days and secures scarce backend engineering talent.',
    actionLabel: 'Review Candidates',
    link: '/recruitment',
    status: 'Pending'
  },
  {
    id: 'act-item-4',
    title: 'Resolve IT Hardware Token Block for New Hire Karan Malhotra',
    priority: 'Medium',
    department: 'Operations & HR',
    reason: 'YubiKey hardware delivery delayed 4 days, blocking AWS IAM clearance for Week 1 DevOps onboarding.',
    evidence: 'Adaptive Onboarding task tracker flagged IT Ops ticket #OPS-8821.',
    expectedImpact: 'Restores onboarding momentum and enables Week 2 production shadow rotations.',
    actionLabel: 'Escalate Ticket',
    link: '/onboarding',
    status: 'Pending'
  },
  {
    id: 'act-item-5',
    title: 'Approve Hybrid Flexibility for Operations Specialist Karan Saxena',
    priority: 'Medium',
    department: 'Operations',
    reason: 'High attrition risk (76%) driven by rigid 5-day in-office requirement and caregiver scheduling conflict.',
    evidence: '11 days sick leave used; sentiment score 49%; exit risk flagged.',
    expectedImpact: 'Reduces attrition probability from 76% to under 25%.',
    actionLabel: 'Approve Hybrid Plan',
    link: '/employees/EMP-1009',
    status: 'Pending'
  }
];
