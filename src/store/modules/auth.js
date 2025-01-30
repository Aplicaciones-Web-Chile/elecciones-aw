export default {
  namespaced: true,
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = !!user
    }
  },
  actions: {
    async login({ commit }, credentials) {
      // Simulamos una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 800))
      
      if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
        const user = {
          id: 1,
          name: 'Admin User',
          email: credentials.email,
          role: 'admin'
        }
        commit('SET_USER', user)
        return { success: true }
      }
      
      throw new Error('Invalid credentials')
    },
    
    logout({ commit }) {
      commit('SET_USER', null)
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user
  }
}
