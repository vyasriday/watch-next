<template>
    <header>
        
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: ['title'],
        data() {
            return {
                show: true
            }
        }
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
    a {
        text-decoration: none;
    }
    .fade-enter-active, .fade-enter-leave {
        transition: all 0.3s ease-in;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: scale(0);
    }
</style>