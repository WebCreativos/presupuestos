<template>     
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-12" v-for="(like,index) in likes" :key="like.id">
        <v-card flat v-if="like.product.id">
          <v-card class="rounded-lg" :elevation="1"  :to="`/products/single/${like.product.id}`">
            <v-img cover v-if="like.product.pictures.length>0" height="150"
              :src="like.product.pictures[0].formats.thumbnail.url" class="pa-2 heigh-vh-p width-vh-p"
              :to="`/products/single/${like.product.id}`">
              <v-btn x-small v-if="$auth.loggedIn" fab right absolute id="heartLike" elevation="0" color="#eceff14d"
                @click="disLike(like, index)"> 
                <v-icon :color="(like.product.likeUser!=0)?'pink accent-2':'grey blue lighten-3'">mdi-heart</v-icon>
              </v-btn>
            </v-img>
          </v-card>
          <v-card-actions class="py-3 pl-0 pr-0 d-flex align-start">
            <v-row no-gutters>
              <v-col class="col-12 col-md-12">
                <h3 class="font-weight-black black--text">{{like.product.name}}</h3>
              </v-col>
              <v-col class="col-12 col-md-12"></v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-row no-gutters>
              <v-col class="col-12 col-md-12 text-right">
                <span class="font-weight-bold black--text">${{like.product.price}}</span>
              </v-col>
              <v-col class="col-12 col-md-12 text-right">
                <span class="font-weight-light black--text caption"
                  v-if="like.product.category">/{{like.product.category.name}}</span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  export default {
    middleware:'auth',
    layout: 'withBackButton',
    data() {
      return {
        likes: []
      }
    },
    created() {
        this.$store.dispatch('general/setShowBottomBar',true)
        this.$store.dispatch('general/setTitlePage','Me gustaron')
      this.getProducts()
    },
    methods: {
      disLike(like, index) {
          this.$axios.delete(`/likes/${like.id}/`).then(response => {
              this.$delete(this.likes,index)
          })
      },
      getProducts() {
        this.$axios.get('/products/likes/?user=' + this.$auth.user.id)
          .then((data) => {
            this.likes = data.data
          })
      }
    }
  }
</script>