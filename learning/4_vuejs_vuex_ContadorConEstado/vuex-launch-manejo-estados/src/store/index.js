import { createStore } from 'vuex'

export default createStore({
  state: {
    //va a estar la informacion que vamos a estar mostrando,
    //  podemos almacenar variables, algun cambio de informacion.
    contador: 0
  },
  getters: {
    //Son para poder entrar a la informacion del estado, para
    //  recuperar la informacion del estado.
    //La buena practica de acceder a informacion del estado, es a traves
    //  de los getters.

    cuadrado (state){
      return state.contador * state.contador;
    }
  },
  mutations: {
    //Si nosotros queremos hacer modificaciones al estado, vamos a estar
    //  utilizando mutations ya que van a ser las cosas para modificar el estado, 
    //Por ejemplo, si tenemos una variable en el estado con valor de 2, y queremos que
    //  pase a 3, entonces ese cambio lo hacemos desde mutations.
    //Las buenas practicas, las mutaciones normalmente se utilizan a si mismas, es decir, 
    //  no vamos a estar agarrando estas mutaciones y modificarlas desde los componentes.
    //La buena practicas, es que llamar a una action, y que esa action llame a la mutation, 
    //  y entonces ya se proceda con la modificacion del estado.

    subirContador(state){
      state.contador++;
    },
    bajarContador(state){
      state.contador--;
    },
    subirContadorRandom(state, random){
      state.contador += random;
    }
  },
  actions: {
    //Es algo parecido a las mutaciones, solo que en las actions si podemos tener
    //  codigo asincrono, y en las mutaciones no los podemos tener.
    //Por ejemplo, si nosotros queremos consumir un API o algo parecido, lo podemos 
    //  hacer desde este apartado de actions.
    //Como buena practica, las actions si las podemos mandar a llamar desde los diferentes 
    //  componentes.

    //vamos a mandar como objeto el commit como parametro y es la que nos va a ayudar
    //  a invocar las diferentes mutaciones.
    async subirContadorRandom( {commit} ) {
      //Consultamos el API de manera asincrona.
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');

      //Obtenermos el resultado de manera asincrona.
      const results = await res.json();

      //Miramos el resultado que nos devuelve.
      console.log(results);

      commit("subirContadorRandom", results);
    }
  },
  modules: {
    //Si nosotros porejemplo, quisieramos, que algun state, getter, mutation, action fueran
    //  especificamente para ciertas paginas, 
  }
})
