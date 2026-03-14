<template>
    <section class="py-12 overflow-hidden bg-gray-950">

        <!-- Heading -->
        <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white">
                Inside <span class="text-red-500">Tushar Fitness Studio</span>
            </h2>
            <p class="text-gray-400 mt-2 max-w-xl mx-auto px-1">
                Take a look at our modern gym space, professional equipment,
                and the Healthy Transformations where members grow and train every day.
            </p>
        </div>

        <!-- Carousel -->
        <div class="relative w-full overflow-hidden">

            <div class="carousel-track flex gap-6">

                <div v-for="(img, index) in duplicatedImages" :key="index" class="carousel-item relative">

                    <img :src="img" class="w-full h-full object-cover rounded-2xl shadow-lg" />

                    <!-- Overlay text -->
                    <!-- <div
                        class="absolute bottom-0 left-0 right-0 bg-black/50 text-gray-200 text-sm p-3 rounded-b-2xl text-center">
                        Train Hard • Stay Strong
                    </div> -->

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import bobs_1 from '../assets/tus_1.png';
import bobs_2 from '../assets/tus_2.png';
import bobs_3 from '../assets/tus_3.png';
import bobs_5 from '../assets/tus_5.png';
import bobs_6 from '../assets/tus_6.png';


export default {
    name: "ImageCarousel",

    data() {
        return {
            images: [
                bobs_1,
                bobs_2,
                bobs_3,
                bobs_5,
                bobs_6
            ]
        };
    },

    computed: {
        duplicatedImages() {
            return [...this.images, ...this.images];
        }
    }
};
</script>

<style scoped>
.carousel-track {
    width: max-content;
    animation: scroll 15s linear infinite;
}

.carousel-item {
    min-width: 220px;
    height: 250px;
}

@media (min-width:768px) {
    .carousel-item {
        min-width: 250px;
        height: 280px;
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.carousel-track:hover {
    animation-play-state: paused;
}
</style>