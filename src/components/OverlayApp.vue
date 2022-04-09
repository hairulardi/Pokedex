<template>
    <div class="app-overlay">
        <LoadersAnimation class="leader-animation"/>
    </div>
</template>

<script setup>
    import LoadersAnimation from './icons/LoadersAnimation.vue'
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.app-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1d1e22;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 576px;
    margin: 0 auto;
}

.leader-animation{
    width: 20%;
}
</style>