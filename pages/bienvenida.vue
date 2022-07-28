<template>
    <v-container class="d-flex flex-column justify-space-between align-center " style="height: 100%;">
        <div>
            <v-img
        src="logo.jpg"
        max-width="100px"
        >
        </v-img>
        </div>
        <div>
            <v-carousel
            
            :continuous="false"
            :cycle="false"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
            hide-controls
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >

                <v-img
                :src="slide"
                max-width="300"
                ></v-img>
                </v-carousel-item>
            </v-carousel>
        </div>

        <div class="full-width">
            <v-btn large class="white--text rounded-lg font-weight-light elevation-0" 
            color="primary" block to="/account/login" >Continuar</v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                slides: [
                    "https://picsum.photos/510/300?random",
                    "https://picsum.photos/510/300?random",
                    "https://picsum.photos/510/300?random"
                ]
            }
        }
    }
</script>