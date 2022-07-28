<template>
    <v-app>
        <v-app-bar fixed app class="elevation-0 white ">
            <v-btn icon small>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-toolbar-title v-text="'Verificacion OTP'" class="overline grey--text" />
              <v-spacer></v-spacer>
          </v-app-bar>
      <v-main>
        <v-content  class="white fill-height">
          <nuxt />
        </v-content>
      </v-main>
    </v-app>
  </template>