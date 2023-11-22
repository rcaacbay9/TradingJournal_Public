<template>
  <main class="flex flex-col items-center">
    <div class="flex flex-col sm:flex-row ">
      <PerformanceCard class="sm:mr-16" />
      <WinrateCard class=" sm:mr-16" />
      <TopPairCardVue class=" sm:mr-16"/>
    </div>
    <div class="flex justify-center mt-10 self-end mr-5 mb-3">
      <ModalButton />
    </div>
    <div class="w-full p-4 mr-4 ml-4">
      <TableCard  />
    </div>
  </main>
</template>


<script>
import { onMounted, ref } from 'vue';
import { useTradesStore } from '../store/trades';
import { useWinrateStore } from '../store/winrate';
import { usePairStore } from '../store/pairs'
import { usePerformanceStore } from '../store/performance'
import PerformanceCard from './Card/PerformanceCard.vue';
import WinrateCard from './Card/WinrateCard.vue'
import TopPairCardVue from './Card/TopPairCard.vue';
import TableCard from './Card/TableCard.vue';
import ModalButton from '../components/ModalButton.vue';
import { FwbButton,FwbSelect  } from 'flowbite-vue'


export default {
  components: {
    PerformanceCard,
    TopPairCardVue,
    WinrateCard,
    TableCard,
    FwbButton,
    ModalButton,
    FwbSelect
  },
  setup() {
    const tradeStore = useTradesStore()
    const winrateStore = useWinrateStore()
    const pairStore = usePairStore()
    const performance = usePerformanceStore()
    onMounted(async () => {
      await tradeStore.getJournalData();
      await winrateStore.getWinrateData();
      await pairStore.getPairData();
      await performance.getPerformanceData();
    })
  },
}

</script>
