export const mockElections = [
  {
    id: 1,
    name: 'Presidential Election',
    endDate: '2023-12-31',
    type: 'presidential'
  },
  {
    id: 2,
    name: 'Senate Election',
    endDate: '2024-01-15',
    type: 'senate'
  }
]

export const mockResults = [
  {
    id: 1,
    candidateName: 'John Smith',
    votes: 1234567,
    percentage: 55
  },
  {
    id: 2,
    candidateName: 'Jane Doe',
    votes: 987654,
    percentage: 45
  },
  {
    id: 3,
    name: 'Ballot Measure A',
    votes: 1500000,
    percentage: 60
  }
]

export const mockEvents = [
  {
    id: 1,
    title: 'Election Debate',
    date: '2023-12-10'
  },
  {
    id: 2,
    title: 'Voter Registration Deadline',
    date: '2023-12-20'
  },
  {
    id: 3,
    title: 'Election Results Announcement',
    date: '2024-01-05'
  }
]

export const mockTasks = [
  {
    id: 1,
    title: 'Candidate lists',
    status: 'completed',
    assigned: 'Myself',
    dueDate: 'Today',
    importance: 'Moderate'
  },
  {
    id: 2,
    title: 'Voter lists',
    status: 'completed',
    assigned: 'admin',
    dueDate: 'Yesterday',
    importance: 'High'
  },
  {
    id: 3,
    title: 'Generate election reports',
    status: 'pending',
    assigned: 'Myself',
    dueDate: 'Tomorrow',
    importance: 'High'
  }
]
