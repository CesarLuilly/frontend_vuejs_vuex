<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="contador">
      {{contador}}
    </div>
    <div class="botones">
      <button @click="bajarContador()">-</button>
      <button @click="subirContador()">+</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  data(){
    return  {
      contador : 0
    }
  },
  methods: {
    bajarContador(){
      this.contador--;
    },
    subirContador(){
      this.contador++;
    }
  }
}
</script>

<style>
  div {
    margin-bottom: 10px;
  }
  
  .contador{
    font-size: 80px;
  }

  .botones button{
    font-size: 40px;
    width: 100px;
    margin: 0px 10px;
  }
</style>