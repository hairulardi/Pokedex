<template>
    <header>
        <div class="header-left">
            <a v-if="props.back" class="button button-icon" href="#" @click="$router.go(-1)">
                <IconBack />
            </a>

            <span class="header-title">{{ title }}</span>
        </div>
        <div class="header-right"></div>
    </header>
</template>

<script setup>
    import IconBack from './icons/IconBack.vue'

    const props = defineProps({
        title: String,
        back: Boolean
    })
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
        padding: $spacing3 $spacing5;
    }
}
</style>