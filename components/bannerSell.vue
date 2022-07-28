<template>
    <v-row class="banner-sell">
        <v-col class="col-12 text-center font-weight-bold white--text">
            Publicá tu servicio ahora
        </v-col>
        <v-col class="col-12 text-center">
            <v-btn  rounded depressed v-if="$auth.loggedIn" @click="openDialog = true" color="primary font-weight-bold">PUBLICA AHORA!</v-btn>
            <v-btn  rounded depressed v-else to="/account/login" color="primary font-weight-bold">PUBLICA AHORA!</v-btn>
        </v-col>
        <pricingAnnouncementComponent v-model="openDialog"></pricingAnnouncementComponent>
    </v-row>
</template>


<script>
  import pricingAnnouncementComponent from '~/components/dashboard/pricingAnnouncementComponent.vue';
    export default{
        components:{
            pricingAnnouncementComponent
        },
        data() {
            return{
                openDialog: false
            }
        }
    }
</script>
<style scoped>
.banner-sell{
    background:linear-gradient(90deg,#fdda61,#108bc8);
    margin-left: -12px;
    margin-right: -12px;
}
</style>