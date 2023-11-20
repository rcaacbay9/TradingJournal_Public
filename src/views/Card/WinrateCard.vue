<template>
    <fwb-card>
        <PieChart :chartData="tradeStore.getWinrate" :width="400" :height="250" :options="options" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Your Winrate:
                <div :class="{'text-red-500' : tradeStore.winrate < 50, 'text-green-400' : tradeStore.winrate > 50}">{{ tradeStore.winrate }}%</div>
            </h5>
        </div>
    </fwb-card>
</template>

<script>
import { ref } from 'vue'
import { useTradesStore } from '../../store/trades';
import { FwbCard } from 'flowbite-vue'
import { PieChart } from 'vue-chart-3';
export default {
    components: {
        FwbCard,
        PieChart,
    },
    setup() {
        const tradeStore = useTradesStore();
        const options = ref({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Winrate'
                },
            },
        });

        return { tradeStore, options }
    },
}
</script>