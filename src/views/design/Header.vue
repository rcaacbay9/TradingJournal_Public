<template>
    <fwb-navbar>
        <template #logo>
            <fwb-navbar-logo alt="Logo" image-url="/src/assets/stock.png" >
                Journalistic
            </fwb-navbar-logo>
        </template>
        <template #default="{ isShowMenu }">
            <fwb-navbar-collapse :is-show-menu="isShowMenu" >
            </fwb-navbar-collapse>
        </template>
        <template #right-side>
            <fwb-button>
                Hello There!
            </fwb-button>
        </template>
    </fwb-navbar>
</template>

<script>
import { FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo, } from 'flowbite-vue'

export default {
    components: {
        FwbButton,
        FwbNavbar,
        FwbNavbarCollapse,
        FwbNavbarLink,
        FwbNavbarLogo,
    },


}
</script>
