<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Text from "./components/Text.vue";
// import Futer from "./components/Futer.vue";

export default {
    mounted() {
        console.log("Component mounted.");
    },
    components: { Card, Header, Text },
};
</script>

<template>
    <div class="container">
        <div class="flex flex-wrap justify-evenly">
            <div>
                <h1>Для оформления заказа</h1>

                <div class="flex justify-evenly items-center mt-10">
                    <a
                        href="https://web.telegram.org/a/#814282110"
                        target="_blank"
                    >
                        <img
                            class="w-10 ml-6"
                            src="/img/contacts/phone.svg"
                            alt=""
                        />
                    </a>
                    <p>+7 951 982 0329</p>
                </div>

                <div class="flex justify-evenly items-center mt-10">
                    <a
                        href="https://web.telegram.org/a/#814282110"
                        target="_blank"
                    >
                        <img class="w-10" src="/img/contacts/tg3.svg" alt="" />
                    </a>
                    <p>@Yuliya6960</p>
                </div>

                <h2>Пиши напрямую мне</h2>
                <h3>Я на связи в любое разумное время</h3>
            </div>
            <img class="mochi" src="/img/contacts/contacts1.png" alt="" />
        </div>
    </div>
</template>

<style scoped>
h1 {
    margin-top: 20px;
    margin-left: 30px;
    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: 35px;
    font-weight: bold;
    color: rgb(228, 101, 92);
}
h2 {
    margin-top: 50px;
    margin-left: 30px;
    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: 22px;
    color: rgb(237, 169, 148);
}
h3 {
    margin-top: 5px;
    margin-left: 30px;

    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: 22px;
    color: rgb(237, 169, 148);
}
p {
    /* margin-top: 85px; */
    margin-left: 10px;
    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: clamp(16px, 5vw, 24px);
    color: rgb(228, 101, 92);
    white-space: nowrap;
}
.mochi {
    margin-top: 50px;
    margin-bottom: 100px;
    max-width: 400px;
    min-width: 200px;
    max-height: 300px;
    min-height: 100px;
}
.container {
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
}
</style>
