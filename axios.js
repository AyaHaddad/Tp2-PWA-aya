import axios from 'axios'

export default {
    data() {
        return {
        name: null,
    }
    },
    mounted() {
      axios
      .get('https://swapi.dev/api//people/80/')
      .then(reponse => {
        this.name = reponse;
        console.log(this.name) 
      })
    }
}