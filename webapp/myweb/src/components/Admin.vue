<template>
    <nav>
        <v-toolbar app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title  class=" grey-text">
              <span class ="front-light">Tech</span>
              <span>Bk</span>
          </v-toolbar-title >
          <v-spacer></v-spacer>
          <v-btn flat>
              <span>Post  </span>
              <v-icon right>message</v-icon>
          </v-btn>
          <v-btn flat>
              <span>Log out</span>
              <v-icon right>exit_to_app</v-icon>
          </v-btn>
         </v-toolbar>

        <v-navigation-drawer app temporary v-model="drawer" class="cyan lighten-1">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/admin.jpg" alt="">
                    </v-avatar>
                    <p class="white--text.subheading mt-1">
                               Admin
                        </p>
                </v-flex>
            </v-layout>
            
            <v-flex>

            </v-flex>
            
            <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="items" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
        </v-navigation-drawer>
        
    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer:true,
            items: [
        { title: 'Homepage', icon: 'dashboard' },
        { title: 'Post Approval', icon: 'gavel' }
      ],
      
        }
    },
    
}
</script>