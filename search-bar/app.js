const app = Vue.createApp({
  data() {
    return {
      images: [],
      searchQuery: '',
    }
  },
  methods: {
    async searchImages() {
      const API_KEY = 'API_KEY';
      const url = `https://api.unsplash.com/search/photos?query=${this.searchQuery}&per_page=4&client_id=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      const images = data.results.map(result => result.urls.regular);
      this.images = images;
    },
  },
  template: `
  <div>
    <form id="form" @submit.prevent="searchImages">
      <input type="search" id="searchbar" v-model="searchQuery" placeholder="Search for images">
      <span id="image-choice">
          All images
          <span class="material-symbols-outlined">
              keyboard_arrow_down
          </span>
      </span>
      <button id="search-button">
        <span class="material-symbols-outlined" id="search-icon">search</span>
        Search
      </button>
    </form>
    <div id="images">
      <img v-for="(image, index) in images" :src="image" :key="index" class="image">
    </div>
  </div>
`
});

app.mount('#app');
