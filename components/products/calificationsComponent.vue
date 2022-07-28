<template>
  <div class="grey blue lighten-4 pa-5 pb-10 rounded-t-xl mt-n5">
    <v-row>
      <v-col class="col-12">
        <h3 class="mb-4">Calificaciones</h3>
      </v-col>
      <v-col class="col-12 col-md-12">
        <v-rating class="d-flex justify-space-between" length="5" color="yellow lighten-1" v-model="calification.stars">
        </v-rating>
      </v-col>
      <v-col class="col-12 col-md-12">
        <v-text-field rounded outlined hide-details label="Email" v-model="calification.email">
        </v-text-field>
      </v-col>

      <v-col class="col-12 col-md-12">
        <v-textarea rounded outlined name="input-7-4" hide-details label="Comentario" v-model="calification.comment">
        </v-textarea>
      </v-col>
      <v-col class="col-12 col-md-12">
        <v-btn class="pt-3 pb-3 elevation-0 white--text" height="50" color="primary" @click="setScoreAndComment()"
          rounded block>Enviar</v-btn>
      </v-col>
      <v-col class="col-12">
        <v-list three-line class="grey blue lighten-4">
          <template v-for="(cal, index) in califications">
            <v-list-item :key="index" class="grey blue lighten-4">
              <v-list-item-avatar>
                <v-icon>fa-user</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="cal.email"></v-list-item-title>
                <v-list-item-title>
                  <v-rating class="d-flex justify-space-between"  length="5" color="yellow lighten-1" readonly
                    v-model="cal.stars">
                  </v-rating>

                </v-list-item-title>
                <v-list-item-subtitle v-html="cal.comment"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="index"></v-divider>
          </template>
        </v-list>
      </v-col>
    </v-row>
    <v-snackbar color="primary" v-model="calificacionEnviada">Calificacion enviada!</v-snackbar>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      idAnnouncement: Number
    },
    data() {
      return {
        calification: {
          stars: 1,
        },
        califications: [],
        rating: 4.5,
        comentario: "",
        calificacionEnviada: false
      }
    },
    created() {
      this.getCalifications()
    },
    methods: {
      getCalifications() {
        axios.get(this.$axios.defaults.baseURL + `/califications/?announcement=${this.idAnnouncement}`)
          .then((data) => {
            this.califications = data.data
          })
      },
      setScoreAndComment() {
        this.calification.announcement = this.idAnnouncement

        axios.post(this.$axios.defaults.baseURL + `/califications/`, this.calification)
          .then((data) => {
            this.getCalifications()
            this.calificacionEnviada = true
          })

      }
    }

  }

</script>
