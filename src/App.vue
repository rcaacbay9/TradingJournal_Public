<template>
  <div class="bg-gray-200 h-screen">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from './views/design/Header.vue';

export default {
  components: {
    Header
  },


}
</script>
