<template>
  <v-bottom-navigation fixed grow light app shift height="70px" class="bottomNavBar rounded-t-xl elevation-2 secondary">
    <v-btn icon color="secondary"  to="/" exact>
      <span>
        <v-avatar size="5" color="primary"></v-avatar>
      </span>
      <v-icon color="primary">mdi-store-outline</v-icon>
    </v-btn>
      <v-btn icon color="secondary" value="saved" v-if="$auth.loggedIn"  to="/account/user/products/likes" exact>
        <span>
          <v-avatar size="5" color="primary"></v-avatar>
        </span>
        <v-icon color="primary">mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn icon value="messages" color="secondary" to="/chats" v-if="$auth.loggedIn" exact>
        <span>
          <v-avatar size="5" color="primary"></v-avatar>
        </span>
        <v-icon color="primary">mdi-chat-processing-outline</v-icon>
      </v-btn>
    <v-btn :to="($auth.loggedIn)?'/account/user/':'/account/login'" icon color="secondary" exact>
      <span>
        <v-avatar size="5" color="primary"></v-avatar>
      </span>
      <v-icon color="primary">mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }

  }

</script>

<style scoped>
  .secondary-two {
    background:#3F51B5!important
  }

</style>
