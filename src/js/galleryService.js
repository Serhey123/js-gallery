const key = '31608339-0446588eb00af9daeb22c7801';

export default {
  searchQuery: '',
  page: 1,
  fetchGallery() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`,
    )
      .then(res => res.json())
      .then(data => {
        this.page += 1;
        return data;
      });
  },

  resetPage() {
    this.page = 1;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
