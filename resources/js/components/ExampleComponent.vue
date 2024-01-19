<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Text from "./components/Text.vue";
import Footer from "./components/Footer.vue";

export default {
    mounted() {
        console.log("Component mounted.");
    },
    components: { Card, Header, Text, Footer },
};
</script>

<template>
    <div class="wrapper">
        <Header class="header"></Header>
        <div class="main">
            <router-view></router-view>
        </div>
        <Footer class="footer"></Footer>
    </div>
</template>

<style scoped>
html,
body {
    height: 100%;
}
.wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.footer {
    margin-top: auto;
}
</style>
