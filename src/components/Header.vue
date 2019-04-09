<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: ['title']
    }
</script>

<style scoped>
    header {
        background: black;
        color: white;
        padding: 20px;
    }
    h1 {
        margin: 0;
    }
</style>