<template>

    <section class="src-components-formulario">
        <div class="jumbotron">
            <h2> Final Nicolas De Filpo</h2>
            <hr>
          
                <div class="form-group">
                   
                    <input type="text" placeholder="Ingrese texto" class="form-control"  v-model="v.f.texto.$model">
                </div>

                
                <div v-if="v.f.texto.$error && v.f.texto.$dirty" class="alert alert-danger mt-1">
                    <div v-if="v.f.texto.required.$invalid">Este campo es requerido</div>
                </div>
     

      <h3>{{coding(v.f.texto.$model)}}</h3>
    </div>
    </section>

</template>

<script>

import { required, } from '@vuelidate/validators'

import {useVuelidate} from '@vuelidate/core'

import filtros from '../filtros.js'


export default {
  name: 'src-components-formulario',
  mixins: [filtros],
  props: [],
  mounted() {
  },

  created(){

  const rules= {
    f: {
  texto: {
        required,
   
      },
  
    }
  }
        const f = this.f
        this.v = useVuelidate(rules, {f})

  },
   components: {
  },
  data() {
    return {
      f: {
        texto: '',
      },
      v:null, 

    }
  },
  
  methods: {

    resetCasillas() {
      this.v.f.nombre.$model = ''
      this.v.f.descripcion.$model = ''
      this.v.f.importe.$model = ''
    }

  },
  computed: {

  }
}

</script>

<style scoped lang="css">

  .jumbotron {
    background-color: rgb(184, 123, 25);
    color: white;
  }

  hr {
    background-color: #ddd;
    border: 3px solid
  }


</style>
