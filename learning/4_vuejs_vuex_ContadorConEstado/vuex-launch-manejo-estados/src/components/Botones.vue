<template>
    <div class="botones">
      <!-- Para las cosas que sean de mutaciones, vamos a utilizar commit -->
      <!-- Para las cosas que sean de Acciones, vamos a utilizar dispath -->
      <button @click="$store.commit('bajarContador')"> - </button>
      <button @click="$store.commit('subirContador')"> + </button>

      <button @click="$store.dispatch('subirContadorRandom')"> + rand</button>
    </div>
</template>

<script>

export default {
    name:'Botones'
}
</script>
