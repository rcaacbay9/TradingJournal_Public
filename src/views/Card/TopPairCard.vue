<template>
    <fwb-card>
        <PolarAreaChart :chartData="pairStore.getPair" :width="400" :height="250" />
        <div class="p-5">
            <div class="flex justify-center"></div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Pairs that you traded
            </h5>
        </div>
    </fwb-card>
</template>

<script>
import { usePairStore } from '../../store/pairs';
import { FwbCard } from 'flowbite-vue'
import { PolarAreaChart } from 'vue-chart-3';
export default {
    components: {
        FwbCard,
        PolarAreaChart,
    },
    setup() {
        const pairStore = usePairStore()

        return { pairStore }

    },
}
</script>

<style></style>