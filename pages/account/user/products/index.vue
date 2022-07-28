<template>
  <v-container>
    <v-tabs v-model="tabsProducts" background-color="transparent" slider-color="primary">
      <v-tab class="font-weight-bold" active-class="activeTabs">
        Publicaciones
      </v-tab>
      <v-tab class="font-weight-bold" active-class="activeTabs">
        Intereses
      </v-tab>
      <v-tab class="font-weight-bold" active-class="activeTabs">
        Cotizaciones
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabsProducts">
      <v-tab-item>
        <v-row>
          <v-col class="col-12 col-md-12" v-if="$auth.user.announcements>0">
            <v-btn block class="rounded-lg white--text font-weight-bold" color="blue-gradient"
              @click="openDialog = true">ANUNCIAR</v-btn>
          </v-col>
          <v-card v-else class="fill-width mt-4 ml-2 mr-2 rounded-lg elevation-8" color="secondary">
            <v-card-text>
              <h2 class="text-center black--text">Ya no te quedan anuncios!</h2>
            </v-card-text>
            <v-card-actions>
              <v-btn class="rounded-lg font-weight-bold white--text" :to="`/account/user/products/comprar/`"
                color="blue-gradient" block>
                COMPRAR MAS&nbsp;<v-icon color="white">mdi-rocket</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-col class="col-12 col-md-12" v-for="product in products" :key="product.id">
            <v-card flat :to="`/products/single/${product.id}`">
              <v-card class="rounded-lg" :elevation="1">
                <v-img cover v-if="product.pictures.length>0" height="150" :src="pictureUrl(product.pictures[0])"
                  class="pa-2 heigh-vh-p width-vh-p">
                  <v-btn rounded left absolute id="heartLike" depressed class="pa-3" color="grey lighten-3"
                    @click.prevent="$router.push(`edit/${product.id}`)">
                    Editar&nbsp;<v-icon color="info">mdi-square-edit-outline</v-icon>
                  </v-btn>
                  <v-btn rounded right absolute id="heartLike" class="pa-3" depressed color="grey lighten-3"
                    :to="`/account/user/products/impulsar/${product.id}/`">
                    Impulsar&nbsp;<v-icon color="blue">mdi-rocket</v-icon>
                  </v-btn>
                </v-img>
              </v-card>
              <v-card-actions class="py-3 pl-0 pr-0 d-flex align-start">
                <v-row no-gutters>
                  <v-col class="col-12 col-md-12">
                    <h3 class="font-weight-black black--text">{{product.name}}</h3>
                  </v-col>
                  <v-col class="col-12 col-md-12"></v-col>
                </v-row>
                <v-spacer></v-spacer>
                <v-row no-gutters>
                  <v-col class="col-12 col-md-12 text-right">
                    <span class="font-weight-bold black--text">{{setCurrency(product.currency)}}
                      {{product.price}}</span>
                  </v-col>
                  <v-col class="col-12 col-md-12 text-right">
                    <span class="font-weight-light black--text caption"
                      v-if="product.category">/{{product.category.name}}</span>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="col-12 d-flex align-center" v-if="products.length  == 0">
            <v-row>
              <v-col class="col-12 col-md-12  text-center">
                <v-icon size="80">
                  mdi-emoticon-sad
                </v-icon>
              </v-col>
              <v-col class="col-12 col-md-12 text-center">
                <h3>Aun no has hecho ninguna publicacion, empieza a vender ahora!</h3>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-list>
          <singleProduct v-for="compra in compras" :prop="compra" seller :key="compra.id"></singleProduct>
        </v-list>
      </v-tab-item>
      <v-tab-item>
        <v-list>
          <singleProduct v-for="venta in ventas" :prop="venta" seller :key="venta.id"></singleProduct>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
    <pricingAnnouncementComponent v-model="openDialog"></pricingAnnouncementComponent>
  </v-container>
</template>


<script>
  import singleProduct from '~/components/dashboard/singleProduct.vue';
  import pricingAnnouncementComponent from '~/components/dashboard/pricingAnnouncementComponent.vue';
  export default {
    layout: 'withBackButton',
    components: {
      singleProduct,
      pricingAnnouncementComponent
    },
    data() {
      return {
        openDialog: false,
        tabsProducts: 0,
        compras: [],
        ventas: [],
        products: [],
        IDUser: this.$auth.user.id
      }
    },
    created() {
      this.$store.dispatch('general/setTitlePage', 'Mi cuenta')
      this.$store.dispatch('general/setShowBottomBar', true)
      this.getCompras()
      this.getProducts()
      this.getVentas()
    },
    methods: {
      pictureUrl(picture) {
        return (picture.formats.small) ? picture.formats.small.url : picture.formats.thumbnail.url
      },
      getCompras() {
        this.$axios.get(`/compras/?announcement.user_nin=${this.IDUser}&users=${this.IDUser}`)
          .then((data) => {
            this.compras = data.data
          })
      },
      getVentas() {
        this.$axios.get(`/compras/?announcement.user=${this.IDUser}`)
          .then((data) => {
            this.ventas = data.data
          })
      },
      getProducts() {
        this.$axios.get(`/announcements/?user_id=${this.IDUser}`)
          .then((data) => {
            this.products = data.data
          })

      },
    }
  }

</script>

<style>
  .v-tab {
    text-transform: none !important;
  }

  .v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon {
    min-width: 20px !important;
    margin-left: 5px !important;
  }

  .v-slide-group__prev {
    display: none !important;
  }

</style>
<style scoped>
  .activeTabs {
    color: #ff7643;

  }

</style>
