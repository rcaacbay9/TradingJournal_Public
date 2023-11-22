<template>
    <fwb-card>
        <LineChart :chartData="usePerformance.getPeformance" :width="400" :height="250" />
        <div class="p-5">
            <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Your Performance
            </h5>
        </div>
    </fwb-card>
</template>

<script>
import { usePerformanceStore } from '../../store/performance';
import { FwbCard } from 'flowbite-vue'
import { LineChart } from 'vue-chart-3';
export default {
    components: {
        FwbCard,
        LineChart,
    },
    setup() {
        const usePerformance = usePerformanceStore()

        return { usePerformance }
    },
}
</script>

<style></style>