<template>
  <v-row>
    <v-avatar size="50" v-if="message.me">
      <v-img></v-img>
    </v-avatar>
    <div class="pa-3 rounded-xl" 
    :class="{
        'rounded-br-0 orange white--text':message.me,
        'rounded-bl-0 grey':!message.me,
        }">
      <span>
        {{message.message}}
      </span>
    </div>
    <v-avatar size="50" v-if="!message.me">
      <v-img></v-img>
    </v-avatar>
  </v-row>
</template>

<script>
  export default {
    props: {
      message: Object,
    }
  }
</script>

<style scoped>
</style>