<template>
    <EasyDataTable :headers="headers" :items="tradeStore.getTradesData" border-cell
        buttons-pagination rows-per-page="4" :rows-items="[8, 12]" />
</template>

<script>
import { useTradesStore } from '../../store/trades';
export default {
    setup() {
        const tradeStore = useTradesStore();
        const headers = [
            { text: 'PAIRS', value: 'pairs' },
            { text: 'TIME EXECUTED', value: 'time_executed' },
            { text: 'SESSION', value: 'session' },
            { text: 'POSITION', value: 'position' },
            { text: 'RESULT', value: 'result' },
            { text: 'RISK REWARD(RR)', value: 'risk_reward', sortable: true },
            { text: 'COMMENT', value: 'comment', width: 200 },
        ];
        return { tradeStore, headers};
    },
};
</script>
