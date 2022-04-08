<template>
    <div class="page-content">
        <PokemonListItem v-for="(item, index) of state.data" v-bind:key="index" v-bind:data="item" />
    </div>
</template>

<script setup>
    import { onMounted, reactive } from 'vue';
    import PokemonListItem from './PokemonListItem.vue';
    import PokemonService from '@/services/PokemonService.js';

    const state = reactive({ 
        data: Array
    })

    onMounted(() => {
        getPokemonList()
    })

    function getPokemonList() {
        PokemonService.getPokemonList().then(response => {
            console.log(response);
            state.data = response
        });
    }
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.page-content{
    padding: 0 $spacing5;
}
</style>