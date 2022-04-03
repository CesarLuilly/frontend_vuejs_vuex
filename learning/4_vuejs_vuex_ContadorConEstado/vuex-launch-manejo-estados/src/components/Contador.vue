<template>
    <div class="contador">
      <!-- Nota. El simbolo de pesos lo que va a hacer llamar al index.js que esta en la 
        carpeta de store -->
      {{ $store.state.contador }}
    </div>
</template>

<script>
export default {
    name: 'Contador'
}
</script>



