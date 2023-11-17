<template>
    <!-- <pre>{{ items }}</pre> -->
    <EasyDataTable :headers="headers" :items="trades" border-cell buttons-pagination rows-per-page="4"
        :rows-items="[8, 12]" />
</template>

<script>
import axios from 'axios';
// import { ref } from 'vue';
export default {
    props: {
        getTrades: Function,
        trades: Array
    },
    data() {
        return {
            headers: [
                { text: 'PAIRS', value: 'pairs' },
                { text: 'TIME EXECUTED', value: 'time_executed' },
                { text: 'SESSION', value: 'session' },
                { text: 'POSITION', value: 'position' },
                { text: 'RESULT', value: 'result' },
                { text: 'RISK REWARD(RR)', value: 'risk_reward', sortable: true },
                { text: 'COMMENT', value: 'comment', width: 200 },
            ],
        };
    },

};
</script>
