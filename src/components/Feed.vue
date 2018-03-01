<template>
  <div class="feed">
    <p>I'm the feed 😎</p>
    <router-link to="/Post">Check out a post 🤓</router-link>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </div>
</template>

<script>

export default {
  name: 'Feed',
  resource: 'BlogFeed',

  data() {
    return {
      posts: [
        { title: 'Hiiii', id: '0' },
        { title: 'We\'re test posts', id: '1' },
      ],
    };
  },
};
</script>
