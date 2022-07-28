<template>
  <Chat v-if="participants.length>0" :participants="participants" :myself="myself" :messages="messages"
    placeholder="Tu mensaje..." :profilePictureConfig="profilePictureConfig" :colors="colors" :border-style="borderStyle" hide-close-button :display-header="false"
    :send-images="false" @onMessageSubmit="sendMessage">
  </Chat>
</template>
<script>
  import {
    Chat
  } from 'vue-quick-chat'
  import 'vue-quick-chat/dist/vue-quick-chat.css';
  import Pusher from 'pusher-js';
  export default {
    props: {
      idChat: String,
      compra: {
        type: Object,
        default: {
          users: {},
          product: {}
        }
      }
    },
    components: {
      Chat
    },
    data() {
      return {
        participants: [],
        messages: [],
        colors: {
          message: {
            myself: {
              bg: '#f5f6f9',
              text: '#545454'
            },
            others: {
              bg: '#fb4141',
              text: '#fff'
            },
            messagesDisplay: {
              bg: '#ffffff'
            }
          },
          submitIcon: '#b91010',
          submitImageIcon: '#b91010',
        },
            profilePictureConfig: {
                others: false,
                myself: false,
            },
        myself:{},
        borderStyle: {
          topLeft: "0",
          topRight: "0",
          bottomLeft: "0",
          bottomRight: "0",
        },

      }
    },
    created() {
      this.pusherConnect()
      this.getChats()
    },
    mounted() {
      this.setParticipants()
    },
    methods: {
      async setParticipants() {
        this.participants = await this.compra.users.map((user)=>{
          return {
            name:user.first_name,
            id:user.id
          }
        })
        this.myself = await this.participants.find((user) => this.$auth.user.id == user.id)
      },

      async pusherConnect() {
        var pusher = new Pusher('bea379d627e6564fc761', {
          cluster: 'us2'
        });
        var vm = this
        var channel = pusher.subscribe(this.idChat);
        var presenceChannel = pusher.subscribe('presence-'+this.idChat);
          console.log(presenceChannel.members.count)

        channel.bind('new-message', (data) => {
          if (data.user != this.$auth.user.id)
            vm.messages.push({
              content: data.message,
              myself: false,
              participantId: data.user,
              timestamp: new Date
            })
        });

      },
      getChats() {
        this.$axios.get(`/chats/?compra=${this.idChat}`)
          .then(async(data) => {
            this.messages = await data.data.map((msg) => {
              let data = {}
              data.myself = (msg.user.id == this.$auth.user.id) ? true : false
              data.content = msg.message
              data.participantId = msg.user.id
              data.timestamp = msg.created_at
              return data
            })
          })
      },
      sendMessage(e) {
        let data = {
          ...e,
          'channelID': this.idChat
        }
        this.$axios.post('/chats/', data)
          .then((data) => {
            this.messages.push({
              content: data.data.message,
              myself: true,
              participantId: this.$auth.user.id,
              timestamp: new Date
            })
          })
      },

    }
  }

</script>
<style scoped>
  .height-chat {
    height: calc(100vh - 150px);
    overflow-y: auto;
  }

</style>

<style lang="scss">
.quick-chat-container {
  .container-message-manager {
    height: 45px;
    background: #f7f7f7;
    margin: 10px;
    border-radius: 30px;
    box-shadow: none;

    .icon-send-message {
      margin-top: 5px;
    }
  }
  .message-input{
    margin-top: 5px;
  }
  background:white;
}
</style>
