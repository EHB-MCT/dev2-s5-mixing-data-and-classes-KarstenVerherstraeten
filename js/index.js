"use strict";
import joke from './Jokes.js';

const app = {
    
    items: [],
    init() {
        this.getData();
    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any')
        .then(incommingJoke => incommingJoke.json())
        .then(function(joke){
            console.log(joke);

            joke.forEach(function(joke) {
                const jokeHTML = `
                
                
                <div class="item-field">Setup:\n${joke.setup}</div>
                <div class="item-field">delivery: \n${joke.delivery}</div>
            
                    
            
          `
          document.querySelector('.item').insertAdjacentHTML('beforeend',jokeHTML )
            });
        })
        
    },
    onSearch() {
    },
    render(message) {

        
    }

}

app.init()
