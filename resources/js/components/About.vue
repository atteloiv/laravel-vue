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
    <div class="description">
        <div class="items">
            <div class="text">
                <h1>Меня зовут Юля</h1>
                <h2>
                    Я с удовольствием изготовлю для вас вкусные и полезные
                    веганские моти, которые порадуют вас своим разнообразием и
                    неповторимым вкусом. В своей работе я придерживаюсь трёх
                    принципов:
                </h2>

                <!-- <div class="flex flex-row"> -->
                <!-- <p>
                        Попробовать<img
                            class="h-5 mt-2"
                            src="/img/menu/downarrow.svg"
                            alt=""
                        />
                    </p> -->

                <!-- </div> -->
            </div>

            <div>
                <img class="girl" src="/img/about/girl.png" alt="" />
            </div>
        </div>
    </div>
    <div class="container">
        <div>
            <!-- <Text></Text> -->
            <div class="flex flex-wrap justify-evenly mt-16 px-8">
                <div class="p-8">
                    <img class="mochi" src="/img/about/cute.png" alt="" />
                    <h3 class="flex justify-center mt-4">Необычно</h3>
                    <h4 class="flex justify-center">
                        Моти — традиционное японское сладкое блюдо из риса.
                    </h4>
                </div>
                <div class="p-8">
                    <img class="mochi" src="/img/about/cat.png" alt="" />
                    <h3 class="flex justify-center mt-4">Этично</h3>
                    <h4 class="flex justify-center">
                        Моти полностью веганские и без глютена. В них нет
                        добавленного сахара и животных компонентов.
                    </h4>
                </div>
                <div class="p-8">
                    <img class="mochi" src="/img/about/family.png" alt="" />
                    <h3 class="flex justify-center mt-4">Вкусно</h3>
                    <h4 class="flex justify-center">
                        Мои моти обладают нежным вкусом, а аромат не оставит
                        никого равнодушным. Искренне верю, что мои моти станут
                        полезной и вкусной альтернативой обычным сладостям.
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    margin-top: 10%;
    margin-left: 5%;
    font-family: cursive;
    font-size: clamp(20px, 5vw, 30px);
    font-weight: bold;
    text-align: left;
    max-width: 260px;
    min-width: 150px;
}

h2 {
    margin-top: 10px;
    margin-left: 5%;
    font-family: cursive;
    font-size: clamp(16px, 5vw, 20px);
    text-align: left;
    max-width: 260px;
    min-width: 150px;
}
.mochi {
    max-width: 300px;
    min-width: 50px;
    max-height: 200px;
    min-height: 20px;
    margin-left: auto;
    margin-right: auto;
    /* height: 50px; */
}
.container {
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
}
.description {
    position: relative;
    background-color: #f5e5e0;
    max-height: 1500px;
    min-height: 100px;
    width: 100%;
}
.items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.girl {
    margin-bottom: 0px;
    margin-right: 0px;
    max-height: 500px;
    min-height: 100px;
    /* margin-top: 5%; */
}

.text {
    margin-left: auto;
    margin-right: auto;
}
h3 {
    margin-left: 5%;
    /* margin-top: 20%; */
    margin-bottom: 10%;
    max-width: 500px;
    min-width: 150px;
    font-family: cursive;
    font-size: clamp(20px, 5vw, 40px);
    text-align: left;
    font-weight: bold;
}
h4 {
    margin-left: 5%;
    margin-bottom: 25%;
    max-width: 500px;
    min-width: 150px;
    font-family: cursive;
    font-size: clamp(16px, 5vw, 20px);
    text-align: left;
}

@media (min-width: 1900px) {
    h1 {
        margin-top: 10%;
        margin-left: 5%;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 60px);
        font-weight: bold;
        text-align: left;
        max-width: 1000px;
        min-width: 150px;
    }

    h2 {
        margin-top: 5%;
        margin-bottom: 10%;
        margin-left: 5%;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 40px);
        text-align: left;
        max-width: 1000px;
        min-width: 150px;
    }
    .girl {
        margin-bottom: 0px;
        max-height: 700px;
        min-height: 100px;
    }
}
@media (min-width: 1500px) and (max-width: 1900px) {
    h1 {
        margin-top: 10%;
        margin-left: 5%;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 60px);
        font-weight: bold;
        text-align: left;
        max-width: 800px;
        min-width: 150px;
    }

    h2 {
        margin-top: 5%;
        margin-bottom: 10%;
        margin-left: 5%;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 30px);
        text-align: left;
        max-width: 800px;
        min-width: 150px;
    }
    .girl {
        margin-bottom: 0px;
        max-height: 600px;
        min-height: 100px;
    }
}
@media (min-width: 1200px) and (max-width: 1500px) {
    h1 {
        margin-top: 10%;
        margin-left: 10%;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 50px);
        font-weight: bold;
        text-align: left;
        max-width: 700px;
        min-width: 150px;
    }

    h2 {
        margin-top: 5%;
        margin-bottom: 10%;
        margin-left: 10%;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 25px);
        text-align: left;
        max-width: 700px;
        min-width: 150px;
    }
    .girl {
        margin-bottom: 0px;
        max-height: 500px;
        min-height: 100px;
    }
}
@media (min-width: 900px) and (max-width: 1200px) {
    h1 {
        margin-top: 10%;
        margin-left: 10%;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 40px);
        font-weight: bold;
        text-align: left;
        max-width: 500px;
        min-width: 150px;
    }

    h2 {
        margin-top: 5%;
        margin-bottom: 10%;
        margin-left: 10%;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 23px);
        text-align: left;
        max-width: 500px;
        min-width: 150px;
    }
    .girl {
        margin-bottom: 0px;
        max-height: 400px;
        min-height: 100px;
    }
    .mochi {
        max-width: 150px;
        min-width: 50px;
        max-height: 300px;
        min-height: 20px;
        margin-left: auto;
        margin-right: auto;
        /* height: 50px; */
    }
    h3 {
        margin-left: 5%;
        /* margin-top: 20%; */
        margin-bottom: 10%;
        max-width: 300px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 40px);
        text-align: left;
        font-weight: bold;
    }
    h4 {
        margin-left: 5%;
        margin-bottom: 25%;
        max-width: 300px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 20px);
        text-align: left;
    }
}
@media (min-width: 765px) and (max-width: 900px) {
    h1 {
        margin-top: 10%;
        /* margin-right: 7%; */
        margin-left: 7%;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 35px);
        font-weight: bold;
        text-align: left;
        max-width: 400px;
        min-width: 150px;
    }

    h2 {
        margin-top: 5%;
        margin-bottom: 10%;
        /* margin-right: 7%; */
        margin-left: 7%;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 20px);
        text-align: left;
        max-width: 400px;
        min-width: 150px;
    }
    .girl {
        margin-bottom: 0px;
        max-height: 350px;
        min-height: 100px;
    }
    .mochi {
        max-width: 150px;
        min-width: 50px;
        max-height: 300px;
        min-height: 20px;
        margin-left: auto;
        margin-right: auto;
        /* height: 50px; */
    }
    h3 {
        margin-left: 5%;
        /* margin-top: 20%; */
        margin-bottom: 10%;
        max-width: 300px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 40px);
        text-align: left;
        font-weight: bold;
    }
    h4 {
        margin-left: 5%;
        margin-bottom: 25%;
        max-width: 300px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 20px);
        text-align: left;
    }
}
@media (min-width: 450px) and (max-width: 765px) {
    h1 {
        margin-top: 10%;
        margin-left: 7%;
        margin-right: 7%;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 35px);
        font-weight: bold;
        text-align: left;
        max-width: 550px;
        min-width: 150px;
    }

    h2 {
        margin-top: 5%;
        margin-bottom: 10%;
        margin-left: 7%;
        margin-right: 7%;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 20px);
        text-align: left;
        max-width: 550px;
        min-width: 150px;
    }
    .girl {
        margin-bottom: 0px;
        max-height: 600px;
        min-height: 100px;
    }
    .mochi {
        max-width: 150px;
        min-width: 50px;
        max-height: 200px;
        min-height: 20px;
        margin-left: auto;
        margin-right: auto;
        /* height: 50px; */
    }
    h3 {
        margin-left: 5%;
        /* margin-top: 20%; */
        margin-bottom: 10%;
        max-width: 200px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 30px);
        text-align: left;
        font-weight: bold;
    }
    h4 {
        margin-left: 5%;
        margin-bottom: 25%;
        max-width: 200px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 20px);
        text-align: left;
    }
}
@media (min-width: 200px) and (max-width: 450px) {
    h1 {
        margin-top: 10%;
        margin-left: 7%;
        margin-right: 7%;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 30px);
        font-weight: bold;
        text-align: left;
        max-width: 400px;
        min-width: 150px;
    }

    h2 {
        margin-top: 5%;
        margin-bottom: 10%;
        margin-left: 7%;
        margin-right: 7%;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 20px);
        text-align: left;
        max-width: 400px;
        min-width: 150px;
    }
    .girl {
        margin-bottom: 0px;
        max-height: 400px;
        min-height: 100px;
    }
    .mochi {
        max-width: 150px;
        min-width: 50px;
        max-height: 200px;
        min-height: 20px;
        margin-left: auto;
        margin-right: auto;
        /* height: 50px; */
    }
    h3 {
        margin-left: 5%;
        /* margin-top: 20%; */
        margin-bottom: 10%;
        max-width: 200px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(20px, 5vw, 30px);
        text-align: left;
        font-weight: bold;
    }
    h4 {
        margin-left: 5%;
        margin-bottom: 25%;
        max-width: 200px;
        min-width: 150px;
        font-family: cursive;
        font-size: clamp(16px, 5vw, 20px);
        text-align: left;
    }
}
</style>
