<template>
  <div class="min-h-screen bg-gray-50">
    <nav v-if="showNavigation" class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link to="/" class="flex items-center">
              <span class="text-xl font-bold">ElectionManager</span>
            </router-link>
          </div>
          <div class="flex space-x-4">
            <router-link to="/dashboard" class="inline-flex items-center px-3 py-2 text-sm font-medium">
              Dashboard
            </router-link>
            <router-link to="/voter-registration" class="inline-flex items-center px-3 py-2 text-sm font-medium">
              Voter Registration
            </router-link>
            <router-link to="/election-results" class="inline-flex items-center px-3 py-2 text-sm font-medium">
              Election Results
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showNavigation = computed(() => route.name !== 'login')
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
