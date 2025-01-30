<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Registro de Votantes</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="fullName" class="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                required
                class="input mt-1"
              />
            </div>

            <div>
              <label for="address" class="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                id="address"
                v-model="form.address"
                type="text"
                required
                class="input mt-1"
              />
            </div>

            <div>
              <label for="birthDate" class="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
              <input
                id="birthDate"
                v-model="form.birthDate"
                type="date"
                required
                class="input mt-1"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="input mt-1"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="input mt-1"
              />
            </div>

            <div class="pt-4">
              <button
                type="submit"
                :disabled="loading"
                class="btn w-full"
              >
                <span v-if="loading" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registrando...
                </span>
                <span v-else>Registrar Votante</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { electionService } from '../api/services/electionService'

const loading = ref(false)
const form = reactive({
  fullName: '',
  address: '',
  birthDate: '',
  email: '',
  phone: ''
})

const handleSubmit = async () => {
  loading.value = true
  try {
    const response = await electionService.registerVoter(form)
    alert('Votante registrado exitosamente')
    // Limpiar formulario
    Object.keys(form).forEach(key => form[key] = '')
  } catch (error) {
    alert('Error al registrar votante')
  } finally {
    loading.value = false
  }
}
</script>
