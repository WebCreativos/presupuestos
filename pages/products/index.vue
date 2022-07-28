<template>
  <v-container>
    <bannerSell class="mt-n4"></bannerSell>
    <v-row>
      <v-col class="col-12 col-md-12">
        <v-btn block color="primary" @click="modalCategories = true">
          <v-icon>mdi-filter-variant</v-icon>&nbsp;Categorias
        </v-btn>
      </v-col>
      <v-col class="col-12 col-md-12" v-for="(product,index) in filterProducts" :key="product.id">
        <v-card outlined class="rounded-lg" :to="`/products/single/${product.id}`">
          <div :elevation="1">
            <v-img v-if="product.pictures.length>0" height="200" cover :src="pictureUrl(product.pictures[0])"
              class="pa-2 heigh-vh-p width-vh-p p-relative">
              <div class="d-flex justify-space-between flex-column" style="height:100%">
                <div class="d-flex justify-space-between">
                  <v-btn depressed left absolute rounded small color="primary" v-if="product.destacado">
                    <v-icon size="15">fa-star</v-icon>&nbsp;&nbsp;Destacado
                  </v-btn>
                  <v-btn x-small v-if="$auth.loggedIn" fab right absolute id="heartLike" elevation="0" color="#eceff14d"
                    @click="likeOrDislike(product, index)">
                    <v-icon :color="(product.likeUser!=0)?'pink accent-2':'grey blue lighten-3'">mdi-heart</v-icon>
                  </v-btn>
                </div>
                <div class="d-flex justify-start">
                  <v-chip style="width:50px" small icon color="primary">
                    <span class="font-weight-bold mr-1">{{product.views}}</span>
                    <v-icon color="white" small>mdi-eye</v-icon>
                  </v-chip>
                </div>
              </div>
            </v-img>
          </div>
          <v-card-actions class="py-3 d-flex align-start">
            <v-row no-gutters>
              <v-col class="col-12 col-md-12">
                <h4 class="font-weight-black black--text">{{product.name}}</h4>
              </v-col>
              <v-col class="col-12 col-md-12"></v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-row no-gutters>
              <v-col class="col-12 col-md-12 text-right">
              </v-col>
              <v-col class="col-12 col-md-12 text-right">
                <span class="font-weight-bold black--text caption"
                  v-if="product.category">/{{product.category.name}}</span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="modalCategories">
      <v-card>
        <v-toolbar color="primary" class="elevation-0 white--text">
          <v-toolbar-title>Categorias</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-list>
            <template v-for="category in categories">
              <v-list-item :key="category.id" @click="pushCategory(category)">
                <v-list-item-title>{{category.name}}</v-list-item-title>
                <v-list-item-action>
                  <v-icon>mdi-plus</v-icon>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import bannerSell from '~/components/bannerSell.vue'
  import axios from 'axios'
  export default {
    components: {
      bannerSell
    },
    data() {
      return {
        modalCategories: false,
        categories: [],
        products: []
      }
    },
    created() {
      this.getProducts()
      this.getCategories()
    },
    methods: {
      pictureUrl(picture) {
        if (picture.formats) {
          return (picture.formats.small) ? picture.formats.small.url : picture.formats.thumbnail.url
        } else {
          return `https://compraventa.nyc3.digitaloceanspaces.com/upload/${picture.hash}${picture.ext}`
        }
      },
      likeOrDislike(product, index) {
        if (product.likeUser) {
          this.$axios.delete(`/announcements/removeLike/${product.id}/`).then(response => {
            this.$set(this.products, index, {
              ...product,
              likeUser: 0
            })
          })
        } else {
          this.$axios.put(`/announcements/addLike/${product.id}/`).then(response => {
            this.$set(this.products, index, {
              ...product,
              likeUser: 1
            })
          })
        }
      },
      pushCategory(category) {
        this.$router.push({
          query: {
            category: category.id
          }
        })
        this.modalCategories = false
      },
      getCategories() {
        axios.get(this.$axios.defaults.baseURL + '/categories/?_sort=name:ASC')
          .then((data) => {
            this.categories = data.data
          })
      },
      getProducts() {
        this.products = []
        let params = {
          _sort: 'destacado:desc'
        }
        if (this.$route.query.q) {
          params.q = this.$route.query.q
        }
        if (this.$route.query.category) {
          params.category = this.$route.query.category
        }
        if (this.$route.query.destacado) {
          params.destacado = true
        }

        axios.get(this.$axios.defaults.baseURL + `/announcements/`, {
            params: params
          })
          .then((data) => {
            this.products = data.data
          })
      }
    },
    computed: {
      filterProducts() {
        return this.products.sort((a, b) => {
          if (a.destacado) {
            return -1;
          }

          return 1;
        })

      }
    },
    watch: {
      "$route.query.q": function () {
        this.getProducts()
      },
      "$route.query.category": function () {
        this.getProducts()
      },
      "$route.query.destacado": function () {
        this.getProducts()
      }


    }

  }

</script>
