<template>
    <fwb-card>
        <PieChart :chartData="winrateStore.getWinrate" :width="400" :height="250" :options="options" />
        <div class="p-5">
            <div class="flex justify-center">
                <h3>Total Trades: {{  winrateStore.totalTrades}} </h3>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Your Winrate:
                <div :class="{'text-red-500' : winrateStore.winrate < 50, 'text-green-400' : winrateStore.winrate > 50}">{{ winrateStore.winrate }}%</div>
            </h5>
        </div>
    </fwb-card>
</template>

<script>
import { ref } from 'vue'
import { useWinrateStore } from '../../store/winrate';
import { FwbCard } from 'flowbite-vue'
import { PieChart } from 'vue-chart-3';
export default {
    components: {
        FwbCard,
        PieChart,
    },
    setup() {
        const winrateStore = useWinrateStore();
        return { winrateStore }
    },
}
</script>