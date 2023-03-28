// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue;
createApp({
    data() {
        return {
            headingMessage: "Ciao! Questa è la prima lezione con VueJS.",
            imgSrc: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg"
        }
    },
    methods: {
        startAnimation() {
            this.headingMessage = "img-animation"
        }
    }
}).mount("#app");