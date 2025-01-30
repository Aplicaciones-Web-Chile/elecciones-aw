import { createStore } from 'vuex'
import { electionService } from '../api/services/electionService'
import auth from './modules/auth'

export default createStore({
  modules: {
    auth
  },
  state: {
    ongoingElections: [],
    electionResults: [],
    upcomingEvents: [],
    tasks: [],
    loading: false,
    error: null
  },
  mutations: {
    SET_ONGOING_ELECTIONS(state, elections) {
      state.ongoingElections = elections
    },
    SET_ELECTION_RESULTS(state, results) {
      state.electionResults = results
    },
    SET_UPCOMING_EVENTS(state, events) {
      state.upcomingEvents = events
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchOngoingElections({ commit }) {
      commit('SET_LOADING', true)
      try {
        const elections = await electionService.getOngoingElections()
        commit('SET_ONGOING_ELECTIONS', elections)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchElectionResults({ commit }) {
      commit('SET_LOADING', true)
      try {
        const results = await electionService.getElectionResults()
        commit('SET_ELECTION_RESULTS', results)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchUpcomingEvents({ commit }) {
      commit('SET_LOADING', true)
      try {
        const events = await electionService.getUpcomingEvents()
        commit('SET_UPCOMING_EVENTS', events)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchTasks({ commit }) {
      commit('SET_LOADING', true)
      try {
        const tasks = await electionService.getTasks()
        commit('SET_TASKS', tasks)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    isLoading: state => state.loading,
    hasError: state => state.error !== null,
    getError: state => state.error
  }
})
