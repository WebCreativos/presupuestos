<template>
        <div>
            <v-carousel
            :value="valueCarousel"
            :show-arrows="false"
            hide-delimiters
            delimiter-icon="mdi-minus"
            height="300"
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                contain
                 :src="slide.url" 
                >
                </v-carousel-item>
            </v-carousel>

            <div class="mt-5 d-flex justify-center  pl-5 pr-5">
                
                <v-card
                    v-for="(slide, i) in slides"
                    :key="i"
                    class=" rounded-lg elevation-0 ml-1 mr-1"
                    @click="changeSelectedPicture(i)"
                    v-if="slide.formats"
                >
                    <v-img
                    :class="(i == valueCarousel)?'selected-card':''"
                    :src="slide.formats.thumbnail.url" 
                    height="50"
                    width="50"
                    ></v-img>
                </v-card>
            </div>
        </div>
</template>

<script>
    export default {
        props: {
            slides: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                valueCarousel: 0,
            }
        },
        methods: {
            changeSelectedPicture(e) {
                this.valueCarousel = e
            },
            pictureUrl(picture){
                console.log(picture)
                return `https://compraventa.nyc3.digitaloceanspaces.com/upload/${picture.hash}${picture.ext}`
            }
        }
    }
</script>

<style scoped>
    .selected-card {
        border: 2px solid orange !important;
    }
</style>