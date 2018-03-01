export default {
  feed() {
    return {
      path: '/feed.json',
      resolve: response => response.results,
    };
  },
};
