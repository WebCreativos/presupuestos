<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title class="white--text">Mis publicaciones</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined class="white--text" to="products/create">Agregar producto</v-btn>
      </v-toolbar>
      <v-card-text class="pa-0">
        <v-data-table :items="products" :headers="headers" hide-default-footer>
          <template v-slot:item.edit={item}>
            <v-btn outlined :to="`products/edit/${item.id}`">Editar</v-btn>
          </template>
          <template v-slot:item.impulsar={item}>
            <v-btn color="success darken-2" :to="`products/impulsar/${item.id}`">
              Impulsar!&nbsp;<v-icon>mdi-rocket</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
  import editProduct from '~/components/products/editProduct.vue';
  import createProduct from '~/components/products/createProduct.vue';
  export default {
    layout: 'computerLayout',
    components: {
      editProduct,
      createProduct
    },
    data() {
      return {
        tabsProducts: 0,
        compras: [],
        ventas: [],
        products: [],
        headers:[{
          text:'Nombre',
          value:'name'
        },{
          text:'Precio',
          value:'pride'
        },{
          text:'Categoria',
          value:'category.name'
        },{
          text:'Descripcion',
          value:'description'
        },{
          text:'Editar',
          value:'edit'
        },{
          text:'Impulsar',
          value:'impulsar'
        }],
        product:{},
        IDUser: this.$auth.user.id,
        uploadProduct: true,
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
      getCompras() {
        this.$axios.get(`/compras/?product.user_nin=${this.IDUser}&users.user=${this.IDUser}`)
          .then((data) => {
            this.compras = data.data
          })
      },
      getVentas() {
        this.$axios.get(`/compras/?product.user=${this.IDUser}`)
          .then((data) => {
            this.ventas = data.data
          })
      },
      setProduct(product){
        console.log(product)
        this.product = product
        this.uploadProduct = false
      },
      getProducts() {
        this.$axios.get(`/announcements/?user_id=${this.IDUser}`)
          .then((data) => {
            this.products = data.data
          })

      },
      deleteProduct(product) {
        console.log("prod")
        this.$axios.delete(`/announcements/${product.id}/`)
          .then(() => {
            this.getProducts()
          })
      }
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

    .card-active{
        border-right:5px solid #fa6243;
    }
</style>