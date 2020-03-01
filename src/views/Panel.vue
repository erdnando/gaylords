<template>

<!--  -->
<!--  -->
 <v-container fluid>
    <v-card :height="alturaForma" class="overflow-hidden" elevation="14">
       <lito />
      <v-navigation-drawer permanent v-model="drawer" width="430"
        color="primary" :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant" :right="right"
        :src="bg" absolute dark>
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title style="font-size:20px;">Acomodo basado en amarres</v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item  link>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-size:18px;margin-bottom:10px">Productos</v-list-item-title>
                       <!-- contenido -->
                         <v-card>
                            <v-text-field  :light="verdadero"
                            :dense="verdadero" v-model="search" append-icon="mdi-magnify"
                             label="Buscar" solo color="success" background-color="white" hide-details
                            ></v-text-field>
                            <v-data-table style="background-color: #1976d2 !important;"
                            :dense="verdadero" :disable-pagination="verdadero" :hide-default-footer="verdadero" :disable-sort="verdadero"
                            :headers="headers" :items="desserts" :search="search"
                            ></v-data-table>
                        </v-card>
                       <!-- contenido -->
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item  link>
            <v-list-item-icon>
              <v-icon>mdi-image</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-size:18px">Gaylords</v-list-item-title>
                       <!-- contenido -->
                         <v-card style="background-color: #1976d2 !important;">
                            <v-radio-group  v-model="radios" :mandatory="false" style="background-color: #1976d2 !important;">
                            <v-radio label="G3 - Peso: 800 Kgs. 2.5 m" value="radio-1"></v-radio>
                            <v-radio label="G3.1 - Peso: 400 Kgs. 1 m" value="radio-2"></v-radio>
                            <v-radio label="G3.2 - Peso: 400 Kgs. 2.1 m" value="radio-2"></v-radio>
                            </v-radio-group>
                            
                        </v-card>
                       <!-- contenido -->
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>              

</template>

<script>
  import Lito from '../views/Lito'

  export default {
    name: 'Panel',
    data() {
    return {
        verdadero:true,
      alturaForma:'0px',
      drawer: true,
      radios: null,
        items: [
          { title: 'Productos', icon: 'mdi-view-dashboard' },
          { title: 'Gaylords', icon: 'mdi-image' },
        ],
        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: true,
        miniVariant: true,
        expandOnHover: true,
        background: false,
        search: '',
        headers: [
          {text: 'Código',value: 'codigo',},
          { text: 'Clave', value: 'clave' },
          { text: 'Tipo', value: 'tipo' }
        ],
        desserts: [
          {
            codigo: '17158',
            clave: 'PCAY',
            tipo: 'T'
          },
          {
             codigo: '19684',
            clave: 'CAY-G',
            tipo: 'L'
          },
          {
             codigo: '17174',
            clave: 'PCAL',
            tipo: 'J'
          },
          {
             codigo: '17153',
            clave: 'PCAY-F',
            tipo: 'I'
          },
          {
             codigo: '17164',
            clave: 'PCAY-P',
            tipo: 'O'
          },
          
        ],
    }
  },
  methods:{
   onWindowResize(){
        this.alturaForma = (window.innerHeight-90)+'px';
    },
  },
   mounted() {
       this.$nextTick(function() {
         window.addEventListener('resize', () => {this.onWindowResize()})
         this.onWindowResize();
       })
  },
   computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
    components: {
      Lito,
    },
  }
</script>
<style scoped>

</style>