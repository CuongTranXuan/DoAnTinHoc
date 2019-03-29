<template>
  <nav>
      <v-toolbar color="#FFFFFF">
          <v-toolbar-title  class=" grey-text">
              <span class ="front-light">Tech</span>
              <span>Bk</span>
          </v-toolbar-title >
          <v-spacer></v-spacer>
          <v-text-field  v-model="search" label="Search..." clean><!-- Biểu tượng search -->
            </v-text-field> 
          <v-btn flat color="grey"> <!-- Biểu tượng forum -->
            <span>Forum</span>
            <v-icon right>forum</v-icon>
          </v-btn>
          <v-btn flat color="grey"> <!-- Biểu tượng news -->
            <span>News</span>
            <v-icon right>library_books</v-icon>
          </v-btn>
          <v-btn flat color="grey"> <!-- Biểu tượng sign up -->
             <Signup/>
           </v-btn>
          <v-btn flat color="grey"><!-- Biểu tượng login -->
            <Login/>
          </v-btn>
 
      </v-toolbar>
      {{user}}
  </nav>
</template>

<script>
import Login from './Login'
import Signup from './Signup'
import getApi from '../../Api/GetAPI.js'
export default {
  components :{ Login,Signup},
  data(){
    return{
      links: [
        {icon:'Search',route:'/Search'}
      ],
      user: []
    }
  },
  mounted(){
    this.getUser()
  },
  methods: {
    async getUser(){
      const response = await getApi.fetchGet()
      this.user = response.data
    }
  }
}
</script>
