<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <!-- Barra superior -->
          <div class="flex justify-between items-center mb-6">
            <div class="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Buscar detalles de elección..."
                class="input pl-10"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="ml-4 flex items-center space-x-3">
              <button class="btn">Crear tarea</button>
            </div>
          </div>

          <!-- Lista de tareas -->
          <div class="space-y-4">
            <div v-for="task in tasks" :key="task.id" class="bg-gray-50 rounded-lg p-4">
              <div class="flex items-start justify-between">
                <div class="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    :checked="task.status === 'completed'"
                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">{{ task.title }}</h3>
                    <div class="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                      <span>Asignado a: {{ task.assigned }}</span>
                      <span>•</span>
                      <span>Vence: {{ task.dueDate }}</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                        :class="{
                          'bg-green-100 text-green-800': task.status === 'completed',
                          'bg-yellow-100 text-yellow-800': task.status === 'pending'
                        }">
                    {{ task.status }}
                  </span>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {{ task.importance }}
                  </span>
                </div>
              </div>

              <!-- Documentos adjuntos y URLs -->
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <button class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                    <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                    </svg>
                    Adjuntar
                  </button>
                  <button class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                    <svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                    </svg>
                    Incluir URL
                  </button>
                </div>
                <div class="flex space-x-2">
                  <button class="btn-secondary text-sm">Mover a archivo</button>
                  <button class="btn-secondary text-sm text-red-600 hover:text-red-700">Eliminar tarea</button>
                </div>
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
const tasks = ref([])

onMounted(async () => {
  try {
    await store.dispatch('fetchTasks')
    tasks.value = store.state.tasks
  } catch (error) {
    console.error('Error loading tasks:', error)
  }
})
</script>
