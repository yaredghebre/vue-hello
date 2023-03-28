// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue;
createApp({
    data() {
        return {
            headingMessage: "Ciao! Questa è la prima lezione con VueJS.",
            subtitleMessage: "BUON DIVERTIMENTO!",
            imgSrc: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg",
            imgClass: "red"
        }
    },
    methods: {
        startAnimation() {
            if(this.imgClass === "img-grow") {
                this.imgClass = "img-shrink";
            } else {
                this.imgClass = "img-grow";
            }
        },
    }
}).mount("#app");