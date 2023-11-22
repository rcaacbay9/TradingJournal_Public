<template>
    {{ tradeStore.editTradeData }}
</template>

<script>
import { ref } from 'vue';
import { useTradesStore } from '../store/trades';
export default {
    setup() {
        const tradeStore = useTradesStore()
        const data = ref({
            pairs: '',
            time_executed: '',
            session: '',
            position: '',
            result: '',
            risk_reward: '',
            comment: '',
        })
        return { tradeStore, data }
    }
}
</script>

<style></style>