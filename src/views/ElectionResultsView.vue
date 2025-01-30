<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Resultados Finales</h2>
            
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="filter1" class="rounded text-primary-600 focus:ring-primary-500" />
                <label for="filter1" class="text-sm text-gray-700">Filter Option 1</label>
              </div>
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="filter2" class="rounded text-primary-600 focus:ring-primary-500" />
                <label for="filter2" class="text-sm text-gray-700">Filter Option 2</label>
              </div>
              <button class="btn-secondary">Sort</button>
            </div>
          </div>

          <!-- Tabla de resultados -->
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Candidato/Opción
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Votos Totales
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Porcentaje
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="result in electionResults" :key="result.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ result.candidateName || result.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    {{ formatNumber(result.votes) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    {{ result.percentage }}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Visualización gráfica -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Distribución de Votos</h3>
              <!-- Aquí irá el gráfico circular -->
              <div class="h-64 flex items-center justify-center text-gray-500">
                Gráfico circular de distribución
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Votos por Candidato</h3>
              <!-- Aquí irá el gráfico de barras -->
              <div class="h-64 flex items-center justify-center text-gray-500">
                Gráfico de barras
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const electionResults = ref([])

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number)
}

onMounted(async () => {
  try {
    await store.dispatch('fetchElectionResults')
    electionResults.value = store.state.electionResults
  } catch (error) {
    console.error('Error loading election results:', error)
  }
})
</script>
