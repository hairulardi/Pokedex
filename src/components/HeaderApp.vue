<template>
    <header>
        <div class="header-left">
            <a class="button button-icon" href="#/">
                <IconBack />
                <!-- <span class="visually-hidden">Back</span> -->
            </a>

            <span class="header-title">{{ title }}</span>
        </div>
        <div class="header-right"></div>
    </header>
</template>

<script setup>
    import IconBack from './icons/IconBack.vue'

    // defineProps({
    //     title: {
    //         type: String
    //     }
    // })
</script>

<style lang="scss" scoped>
@import "@/styles/main";

header, .header-left{
    display: flex;
    align-items: center;
    // background-color: $black;
}

.header{
    &-left{
        flex: 1 1;
    }

    &-right{
        flex: none;
        display: flex;
        align-items: center;
    }

    &-title{
        text-transform: capitalize;
        font-weight: 600;
    }
}
</style>