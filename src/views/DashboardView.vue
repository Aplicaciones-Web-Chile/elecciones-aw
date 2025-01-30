<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Sección de Elecciones en Curso -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Elecciones en Curso</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="election in ongoingElections" :key="election.id" 
               class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ election.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">
                Finaliza el {{ formatDate(election.endDate) }}
              </p>
              <div class="mt-4">
                <button class="btn-secondary">Ver Detalles</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de Próximos Eventos -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <ul class="divide-y divide-gray-200">
            <li v-for="event in upcomingEvents" :key="event.id" class="p-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">{{ event.title }}</h4>
                  <p class="text-sm text-gray-500">{{ formatDate(event.date) }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Sección de Notificaciones Importantes -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Notificaciones Importantes</h2>
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-6 space-y-4">
            <div v-for="(notification, index) in notifications" :key="index" 
                 class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-gray-700">{{ notification }}</p>
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
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const store = useStore()
const ongoingElections = ref([])
const upcomingEvents = ref([])
const notifications = ref([
  'New voting guidelines have been released. Please ensure you are familiar with the changes before proceeding to vote.',
  'The election commission has extended the voting hours for the upcoming senatorial elections.',
  'Ensure your voter ID is up-to-date to avoid any inconvenience on election day.'
])

const formatDate = (dateString) => {
  return format(new Date(dateString), "d 'de' MMMM, yyyy", { locale: es })
}

onMounted(async () => {
  try {
    await store.dispatch('fetchOngoingElections')
    await store.dispatch('fetchUpcomingEvents')
    ongoingElections.value = store.state.ongoingElections
    upcomingEvents.value = store.state.upcomingEvents
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  }
})
</script>
