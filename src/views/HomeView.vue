<template>
  <main class="flex flex-col items-center">
    <div class="flex flex-col sm:flex-row ">
      <PerformanceCard class="mr-16" />
      <WinrateCard class="mr-16" />
      <TopPairCardVue />
    </div>
    <div class="flex justify-end mt-10 self-end mr-5">
      <!-- <fwb-button color="green">Add Trades</fwb-button> -->
      <ModalButton />
    </div>
    <div class="flex flex-col sm:flex-row w-full">
      <TableCard class="mb-4 sm:mb-0 sm:ml-4 w-full mt-3 mr-4" :trades="trades"/>
    </div>
  </main>
</template>


<script>
import { onMounted, ref } from 'vue';
import { useTradesStore } from '../store/trades';
import PerformanceCard from './Card/PerformanceCard.vue';
import WinrateCard from './Card/WinrateCard.vue'
import TopPairCardVue from './Card/TopPairCard.vue';
import TableCard from './Card/TableCard.vue';
import ModalButton from '../components/ModalButton.vue';
import { FwbButton } from 'flowbite-vue'


export default {
  components: {
    PerformanceCard,
    TopPairCardVue,
    WinrateCard,
    TableCard,
    FwbButton,
    ModalButton
  },
  setup() {
    const tradeStore = useTradesStore()
    const trades = ref([]);
    
    onMounted(async () => {
      await tradeStore.getJournalData();
      trades.value = tradeStore.getTradesData;
    })

    return { tradeStore, trades }
  },
  data() {
    return {
    }
  },
}

</script>
