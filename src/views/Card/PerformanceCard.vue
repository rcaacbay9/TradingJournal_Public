<template>
    <fwb-card>
        <LineChart :chartData="testdata" :width="400" :height="250" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Your Performance
            </h5>
        </div>
    </fwb-card>
</template>

<script>
import { FwbCard } from 'flowbite-vue'
import { LineChart } from 'vue-chart-3';
export default {
    components: {
        FwbCard,
        LineChart,
    },
    data() {
        return {
            testdata: {
                labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
                datasets: [
                    {
                        data: [30, 40, 60, 70, 5],
                        backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                    },
                ],
            },
        }
    },
}
</script>

<style></style>