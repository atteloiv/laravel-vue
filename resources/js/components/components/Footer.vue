<script>
// import Header from "./components/Header.vue";
// import Card from "./components/Card.vue";
// import Text from "./components/Text.vue";
// // import Futer from "./components/Futer.vue";

// export default {
//     mounted() {
//         console.log("Component mounted.");
//     },
//     components: { Card, Header, Text },
// };
</script>

<template>
    <div class="container">
        <div>
            <hr />
        </div>
        <div class="ml-10">
            <div>
                <h1>Для оформления заказа</h1>

                <div class="contact">
                    <div class="flex justify-start items-center mt-10">
                        <a href="tel:+79519820329" target="_blank">
                            <img
                                class="w-6"
                                src="/img/contacts/phone.svg"
                                alt=""
                            />
                        </a>
                        <!-- <p>+7 951 982 0329</p> -->
                        <a class="text" href="tel:+79519820329"
                            >+7 951 982 0329</a
                        >
                    </div>
                </div>

                <div class="contact">
                    <div class="flex justify-start items-center mt-10">
                        <a href="https://t.me/Yuliya6960" target="_blank">
                            <img
                                class="w-6"
                                src="/img/contacts/tg3.svg"
                                alt=""
                            />
                        </a>
                        <!-- <p>@Yuliya6960</p> -->
                        <a class="text" href="https://t.me/Yuliya6960"
                            >@Yuliya6960</a
                        >
                    </div>
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
    margin-left: 3%;
    margin-right: 5%;
    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: 25px;
    color: rgb(228, 101, 92);
}
h2 {
    margin-top: 50px;
    margin-left: 3%;
    margin-right: 5%;
    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: 22px;
    color: rgb(228, 101, 92);
}
h3 {
    margin-top: 5px;
    margin-left: 3%;
    margin-right: 5%;

    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: 22px;
    color: rgb(228, 101, 92);
}
p {
    /* margin-top: 85px; */
    margin-left: 5%;
    margin-right: 5%;
    /* font-family: "Lucida Console", Courier, monospace; */
    font-family: cursive;
    font-size: clamp(16px, 5vw, 24px);
    color: rgb(228, 101, 92);
    white-space: nowrap;
}
.text {
    /* margin-top: 85px; */
    margin-left: 5%;
    margin-right: 5%;
    font-family: cursive;
    font-size: clamp(16px, 5vw, 24px);
    color: rgb(228, 101, 92);
    white-space: nowrap;
}
img {
    margin-left: 3%;
}
.contact {
    margin-left: 3%;
}
.mochi {
    margin-left: 3%;
    margin-right: 5%;
    margin-top: 50px;
    margin-bottom: 20px;
    max-width: 200px;
    min-width: 50px;
    max-height: 300px;
    min-height: 50px;
}
.container {
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
}
hr {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    border: 1px solid rgb(228, 101, 92);
}
</style>
