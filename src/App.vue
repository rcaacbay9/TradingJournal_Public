<template>
  <div class="bg-gray-200 h-screen">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from './views/design/Header.vue';
import { useTradesStore } from './store/trades';

export default {
  components: {
    Header
  },
  setup() {
    const tradeStore = useTradesStore()

    tradeStore.getJournalData()

    return {tradeStore}
  }
}
</script>
