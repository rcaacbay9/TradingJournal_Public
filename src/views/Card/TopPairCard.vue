<template>
    <fwb-card>
        <PolarAreaChart :chartData="testdata" :width="400" :height="250"/>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Pair that you traded
            </h5>
        </div>
    </fwb-card>
</template>

<script>
import { FwbCard } from 'flowbite-vue'
import { PolarAreaChart } from 'vue-chart-3';
export default {
    components: {
        FwbCard,
        PolarAreaChart,
    },
    data() {
        return {
            testdata: {
                labels: ['GBPUSD', 'EURUSD'],
                datasets: [
                    {
                        data: [30, 40],
                        backgroundColor: ['#77CEFF', '#0079AF',],
                    },
                ],
            },
        }
    },
}
</script>

<style></style>