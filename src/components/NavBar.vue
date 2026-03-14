<template>
    <nav class="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            <!-- Logo -->
            <!-- <h1 class="text-2xl font-bold text-white">
                Bob's<span class="text-red-500">Gym</span>
            </h1> -->
            <div class="flex items-center gap-3">

                <img src="../assets/tus_logo.svg" alt="Royal Seekh Logo" class="h-10 w-auto object-contain" />

                <!-- <span class="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
                    Royal Seekh
                </span> -->
                <h1 class="text-2xl font-bold text-white">
                    Tushar Fitness <span class="text-red-500">Studio</span>
                </h1>

            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-8">

                <router-link to="/" class="text-gray-300 hover:text-red-500 transition">
                    Home
                </router-link>

                <router-link to="/about" class="text-gray-300 hover:text-red-500 transition">
                    About
                </router-link>

                <router-link to="/services" class="text-gray-300 hover:text-red-500 transition">
                    Services
                </router-link>

                <router-link to="/contact" class="text-gray-300 hover:text-red-500 transition">
                    Contact
                </router-link>

                <button @click="joinNow" class="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition">
                    Join Now
                </button>

            </div>

            <!-- Mobile Button -->
            <button @click="toggleMenu" class="md:hidden text-white text-2xl">
                ☰
            </button>

        </div>

        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-6 space-y-4">
            <router-link to="/" class="block text-gray-300">Home</router-link>
            <router-link to="/about" class="block text-gray-300">About</router-link>
            <router-link to="/services" class="block text-gray-300">Services</router-link>
            <router-link to="/contact" class="block text-gray-300">Contact</router-link>
        </div>

    </nav>
</template>

<script>
export default {
    name: "Navbar",

    data() {
        return {
            isOpen: false
        }
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        joinNow() {
            const phone = "919768262139"
            const message = "Hello, I want to join Tushar Gym. Please share membership details."

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

            window.open(url, "_blank")
        }
    }
}
</script>