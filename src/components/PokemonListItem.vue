<template>
    <a href="#">
        <article class="pokemon-wrapper" v-bind:class="getBgClass()">
            <img v-bind:src="props.data.artwork" alt="pokemon">

            <div class="pokemon-wrapper-body">
                <p class="pokemon-wrapper-code">{{ props.data.code }}</p>
                <h2>{{ props.data.name }}</h2>

                <figure>
                    <ul class="pokemon-wrapper-label">
                        <li v-for="(type, index) of props.data.types" v-bind:key="index" v-bind:class="getLabelClass(type)">{{ type }}</li>
                    </ul>
                </figure>
            </div>
        </article>
    </a>
</template>


<script setup>
    import { reactive } from 'vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        }
    })

    const state = reactive({
        labelClass: String,
        bgClass: String
    })

    function getBgClass(){
        let type = props.data.types[0]
        return state.bgClass = `color-bg-${type}`
    }

    function getLabelClass(type){
        return state.labelClass = `color-label-${type}`
    }
</script>


<style lang="scss" scoped>
@import "@/styles/main";

a{
    text-decoration: none;
    color: inherit;
}
.pokemon-wrapper{
    position: relative;
    // background: green;
    border-radius: 10px;
    padding: $spacing4;
    overflow: hidden;
    margin-bottom: $spacing5;

    > img {
        position: absolute;
        width: 8rem;
        height: auto;
        top: 0;
        left: 0;
    }

    &-body{
        margin-left: 135px;
    }

    h2{
        color: $black;
        margin: 0;
        text-transform: capitalize;
    }

    &-code{
        position: absolute;
        right: .1rem;
        font-size: 2.4rem;
        opacity: 0.3;
        margin: 0;
        bottom: -.5rem;
        font-weight: 500;
    }

    figure{
        margin-left: 0;
        margin-right: 0;
        margin-top: 6px;
    }

    ul.pokemon-wrapper-label{
        padding: 0;
        margin: 0;

        li{
            list-style-type: none;
            display: inline-block;
            // background: $black;
            margin-right: 5px;
            border-radius: 15px;
            padding: 4px 7px;
            font-size: .7rem;
            font-weight: 500;
            color: $white;
            text-transform: capitalize;
        }
    }
}
</style>