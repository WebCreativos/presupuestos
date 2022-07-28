<template>
  <v-container>
    <v-list three-line>
      <v-list-item v-for="compra in compras" :key="compra.id" :to="`/chats/single/${compra.id}`" class="chat-card">
        <v-btn fab absolute right bottom depressed x-small v-show="compra.unread_messages>0"
          color="primary font-weight-bold mb-5">
          {{compra.unread_messages}}
        </v-btn>
        <v-list-item-avatar size="60" color="grey lighten-2" class="pa-3" v-if="compra.announcement.pictures">
          <v-img :src="compra.announcement.pictures[0].formats.thumbnail.url" contain class="rounded-lg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="d-flex justify-space-between">
            <span class="font-weight-bold">{{compra.announcement.name}}</span>

          </v-list-item-title>
          <v-list-item-subtitle v-html="compra.last_chat.message"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="pt-2">
          <span
            class="font-weight-light text-tolowercase body-2">{{date(compra.last_chat.created_at).toLowerCase()}}</span>
            <v-row no-gutters>
          <v-btn x-small fab depressed class="mt-3" @click.stop.prevent="deleteChat(compra.id)">
            <v-icon color="red">mdi-delete</v-icon> 
          </v-btn>
            </v-row>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <div class="fill-height d-flex justify-center align-center" v-if="compras.length==0">
      <v-row class="mb-16">
        <v-col class="col-12 col-md-12 text-center">
          <v-icon size="40">mdi-emoticon-sad</v-icon>
        </v-col>
        <v-col class="col-12 col-md-12 text-center font-weight-bold">
          Aun no tienes conversaciones
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import moment from 'moment'
  export default {
    layout: 'withBackButton',
    components: {},
    data() {
      return {
        compras: []
      }
    },
    created() {
      this.$store.dispatch('general/setTitlePage', 'Mensajes')
      this.$store.dispatch('general/setShowBottomBar', true)
      this.getChats()
    },

    methods: {
      date(date) {
        return moment(date).format('LT')
      },
      deleteChat(id) {
        let c = confirm("Esta seguro que desea eliminar esta conversacion ? ")
        if (!c) {
          return
        }
        this.$axios.delete(`/compras/${id}/`)
          .then((data) => {
            this.getChats()
          })
      },
      getChats() {
        this.$axios.get(`/compras/?users=${this.$auth.user.id}`)
          .then((data) => {
            this.compras = data.data
          })
      }
    }
  }

</script>

<style scoped>
  .fill-height {
    height:calc(100vh - 126px)!important
  }

</style>
