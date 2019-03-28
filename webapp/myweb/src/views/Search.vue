<template>
    <div>
    <v-toolbar
      color="purple"
      dark
      tabs
    >
      <v-text-field
        append-icon="mic"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
          color="transparent"
          slider-color="white"
        >
          <v-tab
            v-for="n in 3"
            :key="n"
          >
            Item {{ n }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-card>
          <v-card-text>
            {{ text }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
        
    </div>
</template>
<script>
export default {
    
}
</script>