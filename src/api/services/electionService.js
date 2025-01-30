import { mockElections, mockResults, mockEvents, mockTasks } from '../mock/data'

// Simulated delay to mimic API calls
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const electionService = {
  async getOngoingElections() {
    await delay(300)
    return mockElections
  },

  async getElectionResults() {
    await delay(300)
    return mockResults
  },

  async getUpcomingEvents() {
    await delay(300)
    return mockEvents
  },

  async getTasks() {
    await delay(300)
    return mockTasks
  },

  async registerVoter(voterData) {
    await delay(500)
    return {
      success: true,
      message: 'Voter registered successfully',
      voterId: Math.random().toString(36).substr(2, 9)
    }
  },

  async createTask(taskData) {
    await delay(500)
    return {
      success: true,
      message: 'Task created successfully',
      taskId: Math.random().toString(36).substr(2, 9)
    }
  }
}
