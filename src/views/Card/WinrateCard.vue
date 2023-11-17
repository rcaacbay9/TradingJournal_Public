<template>
    <fwb-card>
        <PieChart :chartData="testdata" :width="400" :height="250"/>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Your Winrate
            </h5>
        </div>
    </fwb-card>
</template>

<script>
import { FwbCard } from 'flowbite-vue'
import { PieChart } from 'vue-chart-3';
export default {
    components: {
        FwbCard,
        PieChart,
    },
    data() {
        return {
            testdata: {
                labels: ['Win', 'Lose',],
                datasets: [
                    {
                        data: [30, 70,],
                        backgroundColor: ['#ff0000', '#3cb371',],
                    },
                ],
            },
        }
    },
}
</script>

<style></style>