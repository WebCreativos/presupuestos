<template>
  <v-list-group class="pa-0 single-product" color="black">
    <template v-slot:activator>
      <v-btn absolute right bottom class="mb-3" v-show="prop.unread_messages>0" x-small color="transparent" fab depressed>
        <v-icon color="primary darken-1">mdi-chat-alert</v-icon>
      </v-btn>
      <v-list-item-content>
        <v-list-item-title class="d-flex justify-space-between">
          <span class="font-weight-semi-bold black--text">{{prop.announcement.name}}</span>
        </v-list-item-title>
        <v-list-item-subtitle class="d-flex justify-space-between">
          <div>
            <p class="mb-1">{{formatDate(prop.created_at)}}</p>
            <p class="primary--text">#{{prop.id}}</p>
          </div>
          <div>
            <span class="font-weight-semi-bold" :class="{
                          'info--text':prop.status=='Pendiente',
                          'red--text':prop.status=='Fallida',
                          'primary--text':prop.status=='Realizada',
                          }">{{prop.status}}</span>
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
    </template>

    <v-list-item>
      <v-list-item-content class="d-block">
        <v-btn depressed color="info" :to="`/chats/single/${prop.id}`">
          Chat&nbsp;<v-icon v-show="prop.unread_messages>0" class="fas" color="white">fa-exclamation</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
    <template v-slot:appendIcon>
      <v-icon class="mb-14">mdi-chevron-down</v-icon>
    </template>
  </v-list-group>

</template>

<script>
  import moment from 'moment';
  export default {
    props: {
      prop: Object,
      seller: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      formatDate(date) {
        return moment(date).locale("es").fromNow()
      },

    }
  }
</script>

<style scoped>
  .single-product {
    border-bottom: 1px solid #00000014;
  }
</style>