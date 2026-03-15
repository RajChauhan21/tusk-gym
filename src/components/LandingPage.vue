<script>
import NavBar from './NavBar.vue';
import bob_image from '../assets/tus_logo.png'
import InfiniteCarousel from './InfiniteCarousel.vue';
import wa from '../assets/wa_svg.svg'

export default {
    components: {
        NavBar, InfiniteCarousel
    },
    data() {
        return {
            message: '',
            members: 0,
            satisfaction: 0,
            programs: 0,
            access: 0,
            started: false,
            image: bob_image,
            waIcon:wa
        }
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting && !this.started) {
                    this.started = true
                    this.startCounters()
                }

            })

        }, { threshold: 0.5 })

        observer.observe(this.$refs.statsSection)
    },
    methods: {
        startCounters() {
            this.animateValue("members", 2500, 2000)
            this.animateValue("satisfaction", 95, 2000)
            this.animateValue("programs", 150, 2000)
            this.animateValue("access", 24, 2000)
        },
        animateValue(key, end, duration) {

            let start = 0
            const increment = end / (duration / 16)

            const counter = setInterval(() => {

                start += increment

                if (start >= end) {
                    this[key] = end
                    clearInterval(counter)
                } else {
                    this[key] = Math.floor(start)
                }

            }, 16)

        },
        joinNow(message) {
            const phone = "919768262139"
            // const message = "Hello, I want to join Bobs Gym. Please share membership details."
            this.message = message;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

            window.open(url, "_blank")
        },
        scrollToPlans() {
            const section = document.getElementById("plans")

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                })
            }
        }
    }
}
</script>

<template>
    <div class="bg-gray-950 text-white font-sans">
        <NavBar />
        <!-- HERO -->
        <!-- HERO -->
        <section class="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-gray-950 text-white">

            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                <!-- Text Content -->
                <div class="md:w-1/2 text-center md:text-left">

                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Transform Your <span class="text-red-500">Body</span>
                    </h1>

                    <p class="mt-6 text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
                        Train with the best coaches and world-class equipment.
                        Start your fitness journey today.
                    </p>

                    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <button @click="joinNow('Hello, I want to join Tushar Gym. Please share membership details.')"
                            class="px-8 py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition shadow-lg">
                            Join Now
                        </button>

                        <button @click="scrollToPlans"
                            class="px-8 py-3 border border-gray-400 rounded-xl hover:bg-gray-800 transition">
                            View Plans
                        </button>

                    </div>
                </div>

                <!-- Image -->
                <div class="md:w-1/2 flex justify-center">
                    <img :src="image" alt="Tushar Gym" class="w-full max-w-lg md:max-w-full h-auto object-contain">
                </div>

            </div>

        </section>
        <InfiniteCarousel />
        <!-- FEATURES -->
        <section class="py-8 px-6 max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-14">Our Programs</h2>

            <div class="grid md:grid-cols-3 gap-8">

                <div data-aos="fade-up" class="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
                    <h3 class="text-xl font-semibold mb-3 text-red-500">
                        Strength Training
                    </h3>
                    <p class="text-gray-400">
                        Build muscle and increase strength with our expert guided workouts.
                    </p>
                </div>

                <div data-aos="fade-up" class="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
                    <h3 class="text-xl font-semibold mb-3 text-red-500">
                        Cardio Fitness
                    </h3>
                    <p class="text-gray-400">
                        Improve endurance with HIIT, cycling and cardio training programs.
                    </p>
                </div>

                <div data-aos="fade-up" class="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
                    <h3 class="text-xl font-semibold mb-3 text-red-500">
                        Personal Coaching
                    </h3>
                    <p class="text-gray-400">
                        Get one-on-one guidance from certified trainers.
                    </p>
                </div>

            </div>
        </section>

        <!-- TRAINERS -->
        <!-- <section class="py-20 bg-gray-900 px-6">
            <h2 class="text-4xl font-bold text-center mb-14">Expert Trainers</h2>

            <div class="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

                <div data-aos="zoom-in" class="text-center">
                    <img class="w-48 h-48 mx-auto rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1" />
                    <h3 class="mt-4 text-xl font-semibold">Alex Carter</h3>
                    <p class="text-gray-400">Strength Coach</p>
                </div>

                <div data-aos="zoom-in" class="text-center">
                    <img class="w-48 h-48 mx-auto rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e" />
                    <h3 class="mt-4 text-xl font-semibold">Sophie Lee</h3>
                    <p class="text-gray-400">Yoga Trainer</p>
                </div>

                <div data-aos="zoom-in" class="text-center">
                    <img class="w-48 h-48 mx-auto rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1546484959-f4b3a0f0e3c9" />
                    <h3 class="mt-4 text-xl font-semibold">Mark Stone</h3>
                    <p class="text-gray-400">Cardio Expert</p>
                </div>

            </div>
        </section> -->

        <section class="py-20 bg-gray-900 px-6">

            <div class="max-w-7xl mx-auto text-center mb-14">
                <h2 class="text-4xl font-bold">
                    Why Choose <span class="text-red-500">Our Gym</span>
                </h2>
                <p class="text-gray-400 mt-2">
                    We provide the best environment to achieve your fitness goals.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-10">

                <div data-aos="fade-up"
                    class="bg-gray-950 p-8 rounded-2xl text-center hover:scale-110 transition duration-300">
                    <h3 class="text-xl font-semibold text-red-500 mb-3">
                        Modern Equipment
                    </h3>
                    <p class="text-gray-400">
                        Train with the latest gym equipment for maximum results.
                    </p>
                </div>

                <div data-aos="fade-up"
                    class="bg-gray-950 p-8 rounded-2xl text-center hover:scale-110 transition duration-300">
                    <h3 class="text-xl font-semibold text-red-500 mb-3">
                        Flexible Membership
                    </h3>
                    <p class="text-gray-400">
                        Choose membership plans that fit your lifestyle.
                    </p>
                </div>

                <div data-aos="fade-up"
                    class="bg-gray-950 p-8 rounded-2xl text-center hover:scale-110 transition duration-300">
                    <h3 class="text-xl font-semibold text-red-500 mb-3">
                        Friendly Environment
                    </h3>
                    <p class="text-gray-400">
                        A motivating community that keeps you consistent.
                    </p>
                </div>

            </div>

        </section>
        <!-- PRICING -->
        <section id="plans" class="py-20 px-6 max-w-7xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-14">Membership Plans</h2>

            <div class="grid md:grid-cols-2 gap-10">

                <div data-aos="fade-right" class="bg-gray-900 p-10 rounded-2xl">
                    <h3 class="text-xl font-semibold">Have-A-Look</h3>
                    <p class="text-4xl font-bold mt-4">₹300</p>
                    <p class="text-gray-400 mt-2">1 Day</p>

                    <ul class="mt-6 space-y-2 text-gray-400">
                        <li>Best for Exploring</li>
                        <li>Cost-Effective</li>
                        <li>Includes Cardio</li>
                    </ul>

                    <button
                        @click="joinNow('Hello, I want to join Bobs Gym. And want to choose 1 Day Have-A-Look Plan.')"
                        class="mt-6 w-full py-3 bg-red-500 rounded-xl hover:bg-red-600">
                        Choose Plan
                    </button>
                </div>

                <!-- <div data-aos="fade-right" class="bg-gray-900 p-10 rounded-2xl">
                    <h3 class="text-xl font-semibold">Warm-Up</h3>
                    <p class="text-4xl font-bold mt-4">₹2000</p>
                    <p class="text-gray-400 mt-2">1 month</p>

                    <ul class="mt-6 space-y-2 text-gray-400">
                        <li>Best for Beginners</li>
                        <li>Short Term Access</li>
                        <li>Includes Cardio</li>
                    </ul>

                    <button @click="joinNow('Hello, I want to join Bobs Gym. And want to choose 1 Month-Warm-Up Plan.')"
                        class="mt-6 w-full py-3 bg-red-500 rounded-xl hover:bg-red-600">
                        Choose Plan
                    </button>
                </div> -->

                <!-- <div data-aos="fade-right" class="bg-gray-900 p-10 rounded-2xl">
                    <h3 class="text-xl font-semibold">Basic</h3>
                    <p class="text-4xl font-bold mt-4">₹4500</p>
                    <p class="text-gray-400 mt-2">3 months</p>

                    <ul class="mt-6 space-y-2 text-gray-400">
                        <li>Best for Amateurs</li>
                        <li>Ready for Commitment</li>
                        <li>Includes Cardio</li>
                    </ul>

                    <button @click="joinNow('Hello, I want to join Bobs Gym. And want to choose 3 Months-Basic Plan.')"
                        class="mt-6 w-full py-3 bg-red-500 rounded-xl hover:bg-red-600">
                        Choose Plan
                    </button>
                </div> -->

                <!-- <div data-aos="fade-right" class="bg-gray-900 p-10 rounded-2xl">
                    <h3 class="text-xl font-semibold">Pro</h3>
                    <p class="text-4xl font-bold mt-4">₹6000</p>
                    <p class="text-gray-400 mt-2">6 months</p>

                    <ul class="mt-6 space-y-2 text-gray-400">
                        <li>Best for Intermediates</li>
                        <li>Being Consistent</li>
                        <li>Includes Cardio</li>
                    </ul>

                    <button @click="joinNow('Hello, I want to join Bobs Gym. And want to choose 6 Months-Pro Plan.')"
                        class="mt-6 w-full py-3 bg-red-500 rounded-xl hover:bg-red-600">
                        Choose Plan
                    </button>
                </div> -->

                <div data-aos="fade-right" class="bg-gray-900 p-10 rounded-2xl">
                    <h3 class="text-xl font-semibold">Elite</h3>
                    <p class="text-4xl font-bold mt-4">₹15000</p>
                    <p class="text-gray-400 mt-2">Yearly</p>

                    <ul class="mt-6 space-y-2 text-gray-400">
                        <li>Best for Professionals</li>
                        <li>Beast Mode - ON</li>
                        <li>Includes Cardio</li>
                    </ul>

                    <button @click="joinNow('Hello, I want to join Bobs Gym. And want to choose Yearly-Elite Plan.')"
                        class="mt-6 w-full py-3 bg-red-500 rounded-xl hover:bg-red-600">
                        Choose Plan
                    </button>
                </div>

            </div>
        </section>

        <!-- CTA -->
        <section class="py-24 bg-gradient-to-r from-red-600 to-red-500 text-center px-6">
            <h2 class="text-4xl font-bold">
                Ready to Start Your Fitness Journey?
            </h2>

            <p class="mt-4 text-lg">
                Join today and transform your life.
            </p>

            <button @click="joinNow('Hello, I want to join Tushar Gym. Please share membership details.')"
                class="mt-8 px-10 py-4 bg-black rounded-xl hover:bg-gray-900">
                Get Started
            </button>
        </section>

        <!-- stats section -->
        <section data-aos="fade-up" id="stats" ref="statsSection"
            class="bg-gray-950 py-16 px-6 border-y border-gray-800">

            <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                <div data-aos="fade-up" data-aos-delay="100" class="hover:scale-105 transition duration-300">
                    <h3 class="text-4xl font-bold text-red-500">{{ members }}</h3>
                    <p class="text-gray-400 mt-2">Active Members</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" class="hover:scale-105 transition duration-300">
                    <h3 class="text-4xl font-bold text-red-500">{{ satisfaction }}%</h3>
                    <p class="text-gray-400 mt-2">Member Satisfaction</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" class="hover:scale-105 transition duration-300">
                    <h3 class="text-4xl font-bold text-red-500">{{ programs }}</h3>
                    <p class="text-gray-400 mt-2">Training Programs</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" class="hover:scale-105 transition duration-300">
                    <h3 class="text-4xl font-bold text-red-500">{{ access }}</h3>
                    <p class="text-gray-400 mt-2">Hour Access</p>
                </div>

            </div>

        </section>
        <!-- map section -->

        <section class="bg-gray-900 py-20 px-6">

            <div class="max-w-7xl mx-auto">

                <!-- Section Heading -->
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white">
                        Visit <span class="text-red-500">Tushar Fitness Studio</span>
                    </h2>
                    <p class="text-gray-400 mt-3">
                        Come train with us and start your fitness journey today.
                    </p>
                </div>

                <!-- Content Grid -->
                <div class="grid md:grid-cols-2 gap-12 items-center">

                    <!-- LEFT SIDE INFO -->
                    <div class="space-y-6">

                        <div>
                            <h3 class="text-xl font-semibold text-red-500">Address</h3>
                            <p class="text-gray-400 mt-2">
                                <!-- BOB'S Gym, New Panvel East,<br>
                                Navi Mumbai, Maharashtra, India -->

                                Shubham complex, near petrol pump, Sector 11, <br>
                                New Panvel East, Panvel, Maharashtra 410206 <br>
                            </p>
                        </div>

                        <div>
                            <h3 class="text-xl font-semibold text-red-500">Phone</h3>
                            <p class="text-gray-400 mt-2">
                                +91 97682 62139
                            </p>
                        </div>

                        <!-- <div>
                            <h3 class="text-xl font-semibold text-red-500">Email</h3>
                            <p class="text-gray-400 mt-2">
                                contact@bobsgym.com
                            </p>
                        </div> -->

                        <div>
                            <h3 class="text-xl font-semibold text-red-500">Opening Hours</h3>
                            <p class="text-gray-400 mt-2">
                                Monday – Saturday: 5:00 AM – 10:30 PM <br>
                                Sunday: 5:00 AM – 9:00 PM
                            </p>
                        </div>

                        <!-- Directions Button -->
                        <a href="https://maps.app.goo.gl/SmMTnxmPK9eDBLKn7" target="_blank"
                            class="inline-block mt-4 bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition">
                            Get Directions
                        </a>

                    </div>

                    <!-- RIGHT SIDE MAP -->
                    <div class="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4820692131843!2d73.12049187466329!3d18.99846785440296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e95bfbb384a7%3A0x422a4eeb77eec885!2sTushar%20fitness%20studio!5e0!3m2!1sen!2sin!4v1773516096285!5m2!1sen!2sin"
                            class="w-full h-[420px]" loading="lazy"></iframe>

                    </div>

                </div>

            </div>

        </section>
        <!-- FOOTER -->
        <footer class="py-6 border-t border-gray-800 text-gray-400
         flex flex-col md:flex-row items-center
         justify-between px-6 md:px-12">

            <!-- Left -->
            <div class="text-center md:text-left text-sm">
                <p> © 2026 Tushar Fitness Studio. All rights reserved.</p>

                <p class="mt-1 text-gray-500">
                    Created by
                    <a href="https://www.linkedin.com/in/raj-chauhan-5bb540312/" target="_blank"
                        class="text-red-500 hover:text-red-400 font-medium transition">
                        Raj Chauhan
                    </a>
                </p>
            </div>

            <!-- Right -->
            <a href="https://wa.me/919768262139" target="_blank" class="mt-4 md:mt-0 flex items-center gap-2
           hover:text-green-500 transition duration-300">

                <!-- WhatsApp Icon -->
                <img :src="waIcon" class="w-6 h-6" />

                <span class="text-sm">Chat on WhatsApp</span>

            </a>

        </footer>

    </div>
</template>


<style></style>