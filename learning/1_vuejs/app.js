const app = Vue.createApp({
    data() {
        return {
            //  //Declaracion de variables.
            nombre: 'Cesar',
            apellido:'Garcia',
            email: 'cesarluilly.garcia@hotmail.com',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/46.jpg'
        }
    },
    //  Objeto de metodos.
    methods: {
        async cambiarUsuario() {

            //En lugar de utilizar promesas, vamos a utilizar await.
            //Y aqui cuando tenemos una funcion asincrona, lo que va a hacer
            //  es que hasta despues de ejecutar fetch que es asincrona, va a seguir con
            //  la siguiente linea de codigo y como tambien es asincrona, hasta despues de 
            //  completarlo, va a seguir con la linea de codigo.
            const res = await fetch('https://randomuser.me/api/');

            //Obtenemos el resultado.
            const { results } = await res.json();

            console.log(results);

            //  //This es para hacer referencia a los datos
            //  // iniciales que tenemos.
            console.log(this.nombre);

            this.nombre = results[0].name.first;
            this.apellido = results[0].name.last;
            this.email = results[0].email;
            this.genero = results[0].gender;
            this.foto = results[0].picture.large;
        },
        imprimirAlgo() {
            console.log('******** Metodo ImprimirAlgo ********');
        }
    }
});

//  Montamos la app.
app.mount('#app');