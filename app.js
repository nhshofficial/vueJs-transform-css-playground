Vue.createApp({
    data() {
        // default
        return {
            perspective : 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            
        }
    },
    computed: {
        // change and assign value
        box() {
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }
        }
    },
    methods: {
        // reset to default method
        reset() {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        // copy method
        copyCode() {
            // create element input box
            let tempText = document.createElement("input");
            // assigning values
            tempText.value = `transform: perspective(${this.perspective}px); rotateX(${this.rotateX}deg); rotateY(${this.rotateY}deg); rotateZ(${this.rotateZ}deg);
            `;
            // appending
            document.body.appendChild(tempText);
            // select values to copy
            tempText.select();
            // copy
            document.execCommand('copy');
            // remove input box
            document.body.removeChild(tempText);
            alert(`Text Copied - ${tempText.value}`);

        }
    },
}).mount('#app')