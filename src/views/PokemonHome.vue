<template v-if="showPage">
    <HeaderApp title="Pokedex" :loaded="pokemonData.length" :total="total"/>

    <div class="page-content" ref="scrollComponent">
        <PokemonListItem v-for="(item, index) of pokemonData" v-bind:key="index" v-bind:data="item" />

        <div v-if="pokemonData.length < total" class="loading-bar">
            Loading...
        </div>
    </div>
</template>

<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import HeaderApp from '@/components/HeaderApp.vue';
    import PokemonListItem from '@/components/PokemonListItem.vue';
    import PokemonService from '@/services/PokemonService.js';

    const showPage = ref(false);
    const scrollComponent = ref(null);
    const pokemonData = ref([]);
    const onActiveLoad = ref(false);
    const nextPage = ref(null);
    const total = ref(0)

    onMounted(() => {
        getPokemonList();
        window.addEventListener("scroll", handleScroll);
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
    })

    const getPokemonList = () => {
        PokemonService.getPokemonList().then(response => {
            pokemonData.value = response.data;
            nextPage.value = response.next;
            total.value = response.total;
            showPage.value = true;
        });
    }

    const handleScroll = () => {
        let element = scrollComponent.value;
        let bottom = element.getBoundingClientRect().bottom

        if ( (bottom < window.innerHeight) && !onActiveLoad.value && (pokemonData.value.length < total.value) ) {
            onActiveLoad.value = true;
            
            PokemonService.getPokemonList(nextPage.value).then(response => {
                pokemonData.value.push(...response.data);
                nextPage.value = response.next;
                onActiveLoad.value = false;

                // console.log(pokemonData.value)
            });
        }
    };

</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.loading-bar{
    text-align: center;
    font-weight: 600;
    padding: 0 0 $spacing4;
}
</style>