<template>
    <EasyDataTable :headers="headers" :items="tradeStore.getTradesData" border-cell buttons-pagination rows-per-page="4"
        :rows-items="[8, 12]" :loading="loading">
        <template #item-operation="item">
            <div class="flex">
                <fwb-button @click="edit(item)" color="default" class="m-1" outline square><span class="material-icons">edit</span></fwb-button>
                <fwb-button color="red" class="m-1" outline square><span
                        class="material-icons">delete_forever</span></fwb-button>
            </div>
        </template>
    </EasyDataTable>
    <!--Modal Button--> 
    <ModalEdit />
</template>

<script>
import ModalEdit from '../../components/ModalEdit.vue';
import { useTradesStore } from '../../store/trades';
import VueDatePicker from '@vuepic/vue-datepicker';
import { FwbButton, FwbModal, FwbTextarea, FwbInput, FwbSelect } from 'flowbite-vue'
export default {
    components: {
        FwbButton,
        FwbModal,
        FwbInput,
        FwbTextarea,
        FwbSelect,
        VueDatePicker,
        ModalEdit
    },
    setup() {
        const tradeStore = useTradesStore();
        const headers = [
            { text: 'PAIRS', value: 'pairs' },
            { text: 'TIME EXECUTED', value: 'time_executed' },
            { text: 'SESSION', value: 'session', sortable: true },
            { text: 'POSITION', value: 'position', sortable: true },
            { text: 'RESULT', value: 'result', sortable: true },
            { text: 'RISK REWARD(RR)', value: 'risk_reward', sortable: true, width: 75 },
            { text: 'COMMENT', value: 'comment', width: 200 },
            { text: 'Operation', value: 'operation', width: 50 },
        ];
        const edit = (item) => {
            const id = item.id
            tradeStore.editTradesData(id)
            tradeStore.showModal('editTrade')
        };
        return { tradeStore, headers, edit };
    },
    methods: {
        closeModal(modalID) {
            this.tradeStore.editTrades = {}
            this.tradeStore.closeModal(modalID)
        }
    }
};
</script>
