<template>
    <header>
        <router-link to="/">
            <h3> What Next ??</h3>
        </router-link>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    header {
        background: rgb(104, 103, 105);
        color: white;
        padding: 10px;
        box-shadow: 1px 1px 3px;
    }
    h3 {
        margin: 0;
        font-size: 28px;
        letter-spacing: 2px;
    }

    a {
        text-decoration: none;
        color: unset;
    }
    .fade-enter-active, .fade-enter-leave {
        transition: all 0.3s ease-in;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: scale(0);
    }
</style>