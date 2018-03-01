export default {
  post() {
    return {
      path: '/posts/',
      resolve: response => response.results,
    };
  },
};
