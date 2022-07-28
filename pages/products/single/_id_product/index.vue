<template>
  <v-container class="pa-0 grey blue lighten-4">
    <v-app-bar class="elevation-0">
      <v-btn icon @click="$router.go(-1)">
        <v-avatar size="35" color="white">
          <v-icon>mdi-chevron-left</v-icon>
        </v-avatar>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="pa-2 py-1 mt-2 d-flex align-center rounded-pill white">
        <span class="font-weight-bold mr-1">{{product.likes}}</span>
        <v-icon color="red" small>mdi-heart</v-icon>
      </div>
      <div class="ml-2 pa-2 py-1 mt-2 d-flex align-center rounded-pill white">
        <span class="font-weight-bold mr-1">{{product.views}}</span>
        <v-icon color="blue" small>mdi-eye</v-icon>
      </div>
    </v-app-bar>
    <div class="pa-5">
      <producto-carousel :slides="product.pictures"></producto-carousel>
    </div>
    <div class="pa-5 pb-10 rounded-t-xl mt-n5 white">

      <div class="d-flex justify-space-between align-center my-3">
        <h3>{{product.name}}</h3>
        <v-btn v-show="$auth.loggedIn" x-large id="heartLike" elevation="0" class="rounded-l-xl rounded-r-0 mr-n5"
          :color="(product.likeUser!=0)?'pink lighten-5':'grey blue lighten-4'" @click="likeOrDislike()">
          <v-icon :color="(product.likeUser!=0)?'pink accent-2':'grey blue lighten-3'">mdi-heart</v-icon>
        </v-btn>
      </div>
      <p class="pr-5 overline" v-if="product.description.length>80 && !showMore">
        {{product.description.substr(0,80)}}
      </p>
      <p v-else class="pr-5 overline">
        {{product.description}}
      </p>
      <span class="orange--text font-weight-light text-caption" v-show="product.description.length>80 && !showMore"
        @click="showMore = !showMore">
        Ver mas detalles&nbsp;&nbsp;<v-icon color="primary" size="18">mdi-chevron-right</v-icon>
      </span>
    </div>

    <div class="grey blue lighten-4 pa-5 pb-10 rounded-t-xl mt-n5">
      <div class="ml-4 mr-4">
        <h3 class="mb-4">Compartir en:</h3>
        <div class="d-flex justify-space-between align-center">
          <client-only>
            <ShareNetwork network="facebook" :url="`https://app.presupuestos.uy/products/single/${product.id}`"
              :title="`${product.name} - Presupuestos`" :description="product.description"
              :media="product.pictures[0].url" :quote="product.description.substr(0,40)">
              <v-btn fab depressed color="#3b5998">
                <v-icon size="40" color="white">
                  mdi-facebook
                </v-icon>
              </v-btn>
            </ShareNetwork>
            <ShareNetwork network="whatsapp" :url="`https://app.presupuestos.uy/products/single/${product.id}`"
              :title="`${product.name} - Presupuestos`" :description="product.description"
              :media="product.pictures[0].url" :quote="product.description.substr(0,40)">
              <v-btn fab depressed color="#25D366">
                <v-icon size="40" color="white">
                  mdi-whatsapp
                </v-icon>
              </v-btn>
            </ShareNetwork>
            <ShareNetwork network="twitter" :url="`https://app.presupuestos.uy/products/single/${product.id}`"
              :title="`${product.name} - Presupuestos`" :description="product.description"
              :media="product.pictures[0].url" :quote="product.description.substr(0,40)">
              <v-btn fab depressed color="#00acee">
                <v-icon size="40" color="white">
                  mdi-twitter
                </v-icon>
              </v-btn>
            </ShareNetwork>
          </client-only>
        </div>
      </div>
    </div>

    <div class="white rounded-t-xl pt-5 pb-10 pl-10 pr-10 mt-n5 ">
      <v-btn outlined block x-large class="rounded-lg" color="green" @click="openBottomSheet = true">
        ENVIAR MENSAJE
      </v-btn>
    </div>
    <v-bottom-sheet v-model="openBottomSheet">
      <v-card>
        <v-toolbar class="elevation-0 font-weight-light" color="primary">
          <v-toolbar-title class="white--text">Comunicate!</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-4">
          <v-btn block large color="primary" class="mb-3 white--text font-weight-light" @click="sendMessage()">
            <v-icon>mdi-email</v-icon>&nbsp;&nbsp;Mensaje interno
          </v-btn>
          <v-btn block large color="green" class="white--text font-weight-light" @click="sendWhatsapp()">
            <v-icon>mdi-whatsapp</v-icon>&nbsp;&nbsp;Whatsapp
          </v-btn>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
      <calificationsComponent :idAnnouncement="idProduct"></calificationsComponent>
  </v-container>
</template>

<script>
  import ProductoCarousel from "~/components/ProductoCarousel.vue"
  import calificationsComponent from "~/components/products/calificationsComponent.vue"
  import axios from 'axios'
  export default {
    layout: 'producto-details',
    components: {
      ProductoCarousel,
      calificationsComponent
    },
    data() {
      return {
        openBottomSheet: false,
        like: false,
        cantidad: 1,
        showMore: false,
        sell: {
          cant: 0,
          product: this.$route.params.id_product
        },
        product: {
          price: 0,
          description: '',
          pictures: [{
            url: ''
          }]

        },
        califications: [],
        idProduct: this.$route.params.id_product
      }
    },
    created() {
      this.getProduct()
      this.addView()
    },
    methods: {
      getProduct() {
        axios.get(this.$axios.defaults.baseURL + `/announcements/${this.idProduct}`)
          .then((data) => {
            this.product = data.data
            console.log(this.product)
          })
      },
      addView() {
        axios.put(this.$axios.defaults.baseURL + `/announcements/addView/${this.idProduct}/`)
          .then(() => {
            this.product.views += 1
          })
      },
      likeOrDislike() {
        if (this.product.likeUser) {
          this.$axios.delete(`/announcements/removeLike/${this.idProduct}/`).then(response => {
            this.product.likeUser = false
            this.product.likes -= 1
          })
        } else {
          this.$axios.put(`/announcements/addLike/${this.idProduct}/`).then(response => {
            this.product.likeUser = true
            this.product.likes += 1
          })
        }
      },
      async createNewChat() {
        let data = {
          announcement: this.product.id,
          status: 'Pendiente',
          users: [this.$auth.user.id, this.product.user.id],
        }
        return await this.$axios.post(`/compras/`, data)
          .then((data) => {
            return {
              content: `hola estoy interesado en ${this.product.name}`,
              participantId: this.$auth.user.id,
              channelID: data.data.id
            }
          })

      },
      sendMessage() {
        this.createNewChat().then((dataChat) => {
          this.$axios.post('/chats/', dataChat)
            .then((data) => {
              this.$router.push(`/chats/single/${dataChat.channelID}`)
            })
        });

      },
      sendWhatsapp() {
        let text = `hola estoy interesado en ${this.product.name} que esta publicado en ${location.href}`
        let phone = this.product.user.phone
        location.href = `https://api.whatsapp.com/send?phone=+598${phone}&text=${text}`
      },
    }
  }

</script>
<style scoped>
  .v-application a {
    color: transparent !important;
  }

</style>
