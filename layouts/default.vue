<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg w-full">
            <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 class="text-xl md:text-3xl font-bold">CodeCraftCloud</h1>
                <nav class="hidden md:flex space-x-6">
                    <a href="/" class="text-white font-semibold px-4 hover:underline">Home</a>
                    <a href="/about" class="text-white font-semibold px-4 hover:underline">About</a>
                    <a href="/services" class="text-white font-semibold px-4 hover:underline">Services</a>
                    <a href="/contact" class="text-white font-semibold px-4 hover:underline">Contact</a>
                </nav>
                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button type="button" @click="toggleMenu"
                        class="text-white focus:outline-none focus:ring-2 focus:ring-white">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div v-if="isMenuOpen" class="md:hidden">
                <nav class="flex flex-col space-y-2 px-4 py-4 bg-blue-600">
                    <a href="/" class="text-white font-semibold px-4 hover:underline">Home</a>
                    <a href="/about" class="text-white font-semibold px-4 hover:underline">About</a>
                    <a href="/services" class="text-white font-semibold px-4 hover:underline">Services</a>
                    <a href="/contact" class="text-white font-semibold px-4 hover:underline">Contact</a>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow">
            <div>
                <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> -->
                <NuxtPage />
                <!-- </div> -->
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-blue-900 text-white py-6 mt-12 w-full">
            <div class="max-w-7xl mx-auto text-center space-y-4 px-4">
                <p>&copy; 2024 CodeCraftCloud. All rights reserved.</p>
                <p class="text-sm">Privacy Policy | Terms of Service</p>
                <div>
                    <a href="#" class="text-blue-400 hover:text-white">Facebook</a> |
                    <a href="#" class="text-blue-400 hover:text-white">Twitter</a> |
                    <a href="#" class="text-blue-400 hover:text-white">Instagram</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>