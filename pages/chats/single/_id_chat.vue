<template>
  <v-container class="pa-0 height-chat">
    <chat-component v-if="compra.users" :compra="compra" :idChat="idChat"></chat-component>
  </v-container>
</template>
<script>
  import chatComponent from '~/components/chat-component.vue';
  export default {
    layout: 'withBackButton',
    components: {
      chatComponent
    },
    data() {
      return {
        compra: {
          product: {}
        },
        idChat: this.$route.params.id_chat
      }
    },
    created() {
      this.$store.dispatch('general/setShowBottomBar', false)
      this.getCompra()
    },
    methods: {
      getCompra() {
        this.$axios.get(`/compras/${this.idChat}`)
          .then((data) => {
            this.$store.dispatch('general/setTitlePage', data.data.announcement.name)
            this.compra  = data.data
          })
      }
    }
  }
</script>

<style scoped>
  .height-chat {
    height: calc(100vh - 56px);
  }
</style>