<script>
import { onMounted } from "vue";
import axios from "axios";

// import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
// import Text from "./components/Text.vue";
// import Futer from "./components/Futer.vue";

export default {
    mounted() {
        console.log("Component mounted.");
    },
    components: { Card },
};

// defineProps({
//     items: Array,
// });
</script>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const items = ref([]);

onMounted(async () => {
    // axios
    //     .get("http://127.0.0.1:8000/api/mochi")
    //     .then((resp) => console.log(resp.data));

    try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/mochi");

        items.value = data;
        console.log(items.value.data);
    } catch (err) {
        console.log(err);
    }
});

defineProps({
    items: Array,
    name: String,
    imageUrl: String,
    price: Number,
    ingredients: String,
});
</script>

<template>
    <div>
        <div class="description">
            <div class="items">
                <div>
                    <img class="mochi" src="/img/menu/3Dmochi41.png" alt="" />
                </div>

                <div class="text">
                    <h1>Веганские моти в Тюмени</h1>
                    <h2>
                        Вкусные моти, приготовленные вручную с использованием
                        только самых свежих и качественных ингредиентов.
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
            </div>

            <!-- <div class="wave" style="overflow: hidden">
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style="
                        fill: #ffffff;
                        width: 100%;
                        height: 67px;
                        transform: rotate(180deg) scaleX(-1);
                    "
                >
                    <path
                        d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
                    />
                </svg>
            </div> -->
        </div>

        <div class="container">
            <div class="flex flex-wrap justify-center p-16 -mt-1">
                <!-- <Card
                    name="равыта"
                    imageUrl="/img/card/lime4.jpg"
                    price="654"
                />
                <Card
                    name="равыта"
                    imageUrl="/img/card/lime4.jpg"
                    price="654"
                />
                <Card
                    v-for="item in items"
                    :key="item.id"
                    :name="item.name"
                    :imageUrl="item.image"
                    price="5565"
                /> -->
                <Card
                    imageUrl="/img/card/soon.jpg"
                    name="Арахис карамель"
                    ingredients="обжаренный арахис, семена льна, кунжут, тыквенные семечки,
                    кокосовая стружка, кэроб, какао порошок, сироп топинамбура,
                    финики, ягоды годжи, какао тертое, какао масло, кокосовое
                    молоко, фисташка"
                    price="100"
                ></Card>
                <Card
                    imageUrl="/img/card/mint.jpg"
                    name="Мятное мороженое"
                    ingredients="шоколад (какао тертое, какао масло, сироп топинамбура, кокосовое молоко), фруктовое пюре (груша + корица/ апельсин + лимон/ малина), сироп топинамбура, вода, агар-агар"
                    price="100"
                ></Card>
                <Card
                    imageUrl="/img/card/lime4.jpg"
                    name="Мак лимон"
                    ingredients="фундук, веган-шоколад, сироп топинамбура, мука зелёной гречки, какао порошок, сухое кокосовое молоко, соль"
                    price="100"
                ></Card>
                <Card
                    imageUrl="/img/card/soon.jpg"
                    name="Малина кокос"
                    price="100"
                ></Card>
                <Card
                    imageUrl="/img/card/soon.jpg"
                    name="Банан шоколад"
                    ingredients="обжаренный арахис, семена льна, кунжут, тыквенные семечки,
                    кокосовая стружка, кэроб, какао порошок, сироп топинамбура,
                    финики, ягоды годжи, какао тертое, какао масло, кокосовое
                    молоко, фисташка"
                    price="100"
                ></Card>
                <Card
                    imageUrl="/img/card/soon.jpg"
                    name="Двойная черника"
                    price="100"
                ></Card>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
.wave {
    position: absolute;
    bottom: 0;
    width: 100%;
}
.items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.mochi {
    margin-bottom: 10%;
    margin-left: 0px;
    max-height: 800px;
    /* min-height: 250px; */
    margin-top: 10%;
}

.text {
    margin-left: auto;
    margin-right: auto;
}
h1 {
    margin-left: 5%;
    margin-right: 5%;
    /* margin-top: 20%; */
    margin-bottom: 10%;
    max-width: 600px;
    min-width: 150px;
    font-family: cursive;
    font-size: clamp(20px, 5vw, 60px);
    text-align: left;
    font-weight: bold;
}
h2 {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 10%;
    max-width: 600px;
    min-width: 150px;
    font-family: cursive;
    font-size: clamp(16px, 5vw, 30px);
    text-align: left;
}
p {
    margin-right: 5%;
    margin-bottom: 15%;
    max-width: 500px;
    min-width: 150px;
    font-family: cursive;
    font-size: clamp(16px, 5vw, 20px);
    text-align: right;
}

@media (min-width: 1900px) {
    h1 {
        margin-right: 5%;
        margin-bottom: 10%;
        max-width: 1000px;
        min-width: 500px;
        font-size: clamp(50px, 3vw, 70px);
    }
    h2 {
        margin-right: 5%;
        margin-bottom: 25%;
        max-width: 1000px;
        min-width: 500px;
        font-size: clamp(36px, 3vw, 40px);
    }
}
@media (min-width: 1500px) and (max-width: 1900px) {
    h1 {
        margin-right: 5%;
        margin-bottom: 10%;
        max-width: 650px;
        min-width: 300px;
        font-size: clamp(20px, 3vw, 60px);
    }
    h2 {
        margin-right: 5%;
        margin-bottom: 25%;
        max-width: 650px;
        min-width: 300px;
        font-size: clamp(16px, 3vw, 30px);
    }
    .mochi {
        margin-bottom: 10%;
        margin-left: 0px;
        /* max-height: 800px;
        min-height: 6700px; */
        max-height: 800px;
        min-height: 600px;
        margin-top: 5%;
    }
}
@media (min-width: 1200px) and (max-width: 1500px) {
    h1 {
        margin-right: 5%;
        margin-bottom: 10%;
        max-width: 500px;
        min-width: 300px;
        font-size: clamp(20px, 3vw, 60px);
    }
    h2 {
        margin-right: 5%;
        margin-bottom: 25%;
        max-width: 500px;
        min-width: 300px;
        font-size: clamp(16px, 3vw, 30px);
    }
    .mochi {
        max-height: 600px;

        margin-top: 5%;
    }
}
@media (min-width: 900px) and (max-width: 1200px) {
    h1 {
        margin-right: 5%;
        margin-bottom: 10%;
        max-width: 400px;
        min-width: 300px;
        font-size: clamp(20px, 3vw, 40px);
    }
    h2 {
        margin-right: 5%;
        margin-bottom: 25%;
        max-width: 400px;
        min-width: 300px;
        font-size: clamp(16px, 3vw, 25px);
    }
    .mochi {
        padding-right: 5%;
        max-height: 450px;
        min-height: 300px;
    }
}
@media (min-width: 765px) and (max-width: 900px) {
    h1 {
        margin-right: 5%;
        margin-bottom: 10%;
        margin-top: 10%;
        max-width: 350px;
        min-width: 250px;
        font-size: clamp(20px, 3vw, 40px);
    }
    h2 {
        margin-right: 5%;
        margin-bottom: 25%;
        max-width: 350px;
        min-width: 250px;
        font-size: clamp(16px, 3vw, 25px);
    }
    .mochi {
        padding-right: 5%;
        max-height: 400px;
        min-height: 300px;
    }
}
@media (min-width: 450px) and (max-width: 765px) {
    h1 {
        margin-right: 5%;
        margin-bottom: 10%;
        max-width: 500px;
        min-width: 300px;
        font-size: clamp(30px, 3vw, 50px);
    }
    h2 {
        margin-right: 5%;
        margin-bottom: 25%;
        max-width: 500px;
        min-width: 300px;
        font-size: clamp(20px, 3vw, 40px);
    }
    .mochi {
        padding-right: 5%;
        max-height: 800px;
        min-height: 100px;
    }
}
@media (min-width: 200px) and (max-width: 450px) {
    h1 {
        margin-right: 5%;
        margin-bottom: 10%;
        max-width: 350px;
        min-width: 150px;
        font-size: clamp(20px, 3vw, 40px);
    }
    h2 {
        margin-right: 5%;
        margin-bottom: 25%;
        max-width: 350px;
        min-width: 150px;
        font-size: clamp(20px, 3vw, 30px);
    }
    .mochi {
        padding-right: 5%;
        max-height: 800px;
        min-height: 100px;
    }
}
</style>
