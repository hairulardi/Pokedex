<template>
    <HeaderApp :back="true" v-if="state.data.types" v-bind:class="getBgClass(state.data.types[0])"/>

    <div class="page-content">
        <div class="pokemon-detail-head" v-if="state.data.types" v-bind:class="getBgClass(state.data.types[0])">
            <p class="pokemon-detail-code">{{ state.data.code }}</p>
            <h2 class="pokemon-detail-name">{{ state.data.name }}</h2>

            <figure>
                <ul class="pokemon-wrapper-label">
                    <li v-for="(type, index) of state.data.types" v-bind:key="index" v-bind:class="getLabelClass(type)">{{ type }}</li>
                </ul>
            </figure>

            <div class="pokemon-detail-image">
                <img :src="state.data.artwork" :alt="state.data.name">
            </div>
        </div>

        <div class="pokemon-detail-panel">
            <div class="panel">
                <h3>About</h3>

                <dl class="list">
                    <dt class="list-label">Height</dt>
                    <dd class="list-value">{{ state.data.height }} m</dd>
                    <dt class="list-label">Weight</dt>
                    <dd class="list-value">{{ state.data.weight }} kg</dd>
                    <dt class="list-label">Abilities</dt>
                    <dd class="list-value list-value-abilities" v-if="state.data.abilities">{{ state.data.abilities.join(', ') }}</dd>
                </dl>

                <h3>Stats</h3>

                <ul v-if="state.data.stats">
                    <li v-for="(stat, index) of state.data.stats" v-bind:key="index">
                        <figure class="statbar">
                            <figcaption>
                                <span class="statbar__label">{{ stat.name }}</span>
                                <span class="statbar__value">{{ stat.value }}</span>
                            </figcaption>
                            <span class="statbar__bar">
                                <span class="statbar__bar__value" :style="{ 'width': stat.value + '%' }"></span>
                            </span>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { onMounted, reactive } from 'vue';
    import PokemonService from '@/services/PokemonService.js';
    import HeaderApp from '@/components/HeaderApp.vue';

    const props = defineProps({
        pokemon: {
            type: String,
            required: true
        }
    })

    const state = reactive({ 
        data: Object
    })

    onMounted(() => {
        getPokemonByName(props.pokemon)
    })

    function getPokemonByName(name) {
        PokemonService.getPokemonByName(name).then(response => {
            // console.log(response);
            state.data = response
        });
    }

    function getLabelClass(type){
        return `color-label-${type}`
    }

    function getBgClass(type){
        return `color-bg-${type}`
    }
</script>


<style lang="scss" scoped>
@import "@/styles/main";

.page-content{
    padding: 0 $spacing5 $spacing3;
}

h3{
    margin-top: 40px;
}

.pokemon-detail-head{
    margin-left: -$spacing5;
    margin-right: -$spacing5;
    margin-bottom: $spacing5;
    padding: 0 $spacing5;
    // background: green;
    border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
    // min-height: 20rem;
}

.pokemon-detail-code{
    margin: 0;
    font-weight: 600;
}

.pokemon-detail-name{
    margin: .5rem 0 .7rem;
    text-transform: capitalize;
}

figure{
    margin: 0;
}


.pokemon-detail-image{
    display: flex;
    justify-content: center;
    padding: 0 1.5rem;
    padding: 0 $spacing5;;
    position: relative;

    > img{
        width: 85%;
        margin-bottom: -30px;
        z-index: 2;
    }
}

dl.list{
    display: grid;
    font-size: .875rem;
    grid-template-columns: 6rem 1fr;
    margin-bottom: 1rem;

    .list-label, .list-value {
        padding: .5rem 0;
    }

    .list-value-abilities{
        text-transform: capitalize;
    }
}
</style>