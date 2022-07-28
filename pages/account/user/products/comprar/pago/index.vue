<template>
  <v-container>
    <v-card>
      <v-toolbar color="primary" class="elevation-0">
        <v-toolbar-title color="primary" class="white--text">
          Metodo de pago
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
      <v-card class="py-6" outlined>
            <h4 class="text-center mb-2">{{type[this.$route.query.type].name}}</h4>
            <h1 class="text-center mb-2 secondary--text">$ {{type[this.$route.query.type].price}}</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">{{type[this.$route.query.type].days}} dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
      </v-card>
      </v-card-text>
      <creditCardForm @submitForm="submitForm($event)"></creditCardForm>
    </v-card>
  </v-container>
</template>
<script>
  import creditCardForm from "~/components/creditCardForm.vue";
  import axios from 'axios'
  export default {
    layout:'withBackButton',
    components: {
      creditCardForm,
    },
    head() {
      return {
        script: [{
          src: "https://api.siemprepago.com/v1/Scripts/PWCheckout.js?key=DbEpfH6Vj5mJ8lTRLbN7Ym_I56ONV7HQ"
        }]
      };
    },
    created() {
      this.$store.dispatch('general/setTitlePage', 'Impulsar publicacion')
      this.$store.dispatch('general/setShowBottomBar', false)
    },
    data() {
      return {
        type: {
          basic: {
            name: 'Basico',
            price: 120,
            days: 60
          },
          pro: {
            name: 'Profesional',
            price: 120,
            days: 90
          },
          commerce: {
            name: 'Comercio',
            price: 180,
            days: 120
          },
          ci:''
        },
        openModal: false,
        publicidad: {
          imagenes: []
        },
        rules: {
          requerido: [value => !!value || "Requerido."],
          email: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
          ]
        },
      }
    },
    methods: {
      submitForm(data) {
        this.$axios.post(`/announcements/impulsar/${this.$route.params.id_producto}`, {
            token: data.token,
            tarjeta: data.paymentMethod,
            ci: data.ci,
            type:this.$route.query.type,
            idProducto: this.$route.params.id_producto
          })
          .then(data => {
            this.procesando = false
            this.$router.push(`/account/user/products/impulsar/${this.$route.params.id_producto}/pago/finalizar/${data.data.id}/`);
          });

      },
    }
  }

</script>
