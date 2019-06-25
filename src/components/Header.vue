<template>
    <header>
        <router-link to="/">
            <img src="../assets/images/logo.png" />
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
       box-shadow: 2px 2px 2px darkgrey
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
    a img {
        width: 25%;
        padding: 8px 6px;
    }
    .fade-enter-active, .fade-enter-leave {
        transition: all 0.3s ease-in;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: scale(0);
    }

    @media(max-width: 600px) {
        a img {
            width: 40%;
            
        }
    }
</style>