<template>
  <div class="bg-gray-950 text-white min-h-screen">

    <!-- HEADER -->
    <section class="py-14 px-2 text-center">
      <h1 class="text-5xl font-bold">
        About <span class="text-red-500">Tushar Fitness Studio</span>
      </h1>
      <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
        We help people transform their bodies and build confidence through
        world-class training programs and expert coaching.
      </p>
    </section>

    <!-- STORY -->
    <section class="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">

      <img class="rounded-2xl" , :src="image" alt="Gym Image" />

      <div>
        <h2 class="text-3xl font-bold mb-4">Our Story</h2>
        <p class="text-gray-400 mb-4">
          Tushar fitness studio started with one goal — helping people achieve their
          fitness dreams with the best environment and coaching.
        </p>

        <p class="text-gray-400">
          Our gym offers modern equipment, expert trainers, and personalized
          fitness plans that help members achieve incredible results.
        </p>
      </div>

    </section>

    <!-- STATS -->
    <section class="bg-gray-900 py-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h3 class="text-4xl font-bold text-red-500">1200+</h3>
          <p class="text-gray-400">Active Members</p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-red-500">15</h3>
          <p class="text-gray-400">Expert Trainers</p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-red-500">8</h3>
          <p class="text-gray-400">Years Experience</p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-red-500">25+</h3>
          <p class="text-gray-400">Fitness Programs</p>
        </div>

      </div>
    </section>

  </div>
</template>


<script>

import basic_image from '../assets/tus_logo.png'

export default {

  data() {
    return {
      image: basic_image
    }
  }
}


</script>