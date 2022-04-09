<template>
    <header>
        <div class="header-left">
            <a v-if="props.back" class="button button-icon" href="#" @click="$router.go(-1)">
                <IconBack />
            </a>

            <span class="header-title">{{ title }}</span>
        </div>
        <div class="header-right" v-if="props.total">
            <div class="header-counter">({{ props.loaded }}/{{ props.total }})</div>
        </div>
    </header>
</template>

<script setup>
    import IconBack from './icons/IconBack.vue'

    const props = defineProps({
        title: String,
        back: Boolean,
        loaded: Number,
        total: Number
    })
</script>

<style lang="scss" scoped>
@import "@/styles/main";

header{
    background-color: $white;
}

header, .header-left{
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
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
        font-size: 1.5rem;
        font-weight: 600;
        padding: .7rem $spacing5;
    }

    &-counter{
        font-weight: 600;
        padding: .7rem $spacing5;
    }
}
</style>