<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase d-flex align-center">
        <v-img
                :src="require('./assets/logo.svg')"
                contain
                height="20"
                width="20"
        ></v-img>
        <span> &nbsp;Test Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--<v-btn flat>-->
        <span class="mr-2">by Igor Carvalho</span>
      <!--</v-btn>-->
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Home from './components/Home'

export default {
  name: 'App',
  // components: {
  //     Home
  // },
  data () {
    return {
      //
    }
  }
}
</script>
