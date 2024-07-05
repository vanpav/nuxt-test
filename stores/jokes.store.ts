import { defineStore } from "pinia";

interface State {
  joke: Joke | null;
}

type Joke = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

export const useJokesStore = defineStore('jokes', {
  state: (): State => {
    return {
      joke: null,
    } 
  },

  actions: {
    async fetchJoke() {
      const data = await $fetch<Joke>('https://official-joke-api.appspot.com/random_joke');      
      this.joke = data;

      console.log(import.meta.server ? 'server' : 'client')
      return this.joke;
    }
  }
})