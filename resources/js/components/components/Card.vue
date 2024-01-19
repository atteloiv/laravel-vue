<script setup>
defineProps({
    name: String,
    imageUrl: String,
    price: Number,
    ingredients: String,
    // items: Array,
});
</script>

<template>
    <div class="flex justify-center p-6">
        <div class="card">
            <img class="flex justify-center" :src="imageUrl" alt="Mochi" />
            <!-- <img class="flex justify-center" :src="imageUrl" alt="Mochi" /> -->
            <div class="description">
                <h1>{{ name }}</h1>
                <h2>{{ ingredients }}</h2>
                <p class="price">{{ price }}₽/шт</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    max-width: 400px;
    min-width: 200px;
    max-height: 1000px;
    min-height: 260px;
    margin: 10%;
    /* background-color: #f5e5e0; */
    border-radius: 10px;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
}
.card:hover {
    transform: scale(1.07);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
}
.description {
    display: grid;
    align-items: center;
    justify-items: center;
}
h1 {
    margin-top: 20px;
    margin-left: 2%;
    margin-right: 2%;
    /* margin-bottom: 2%; */
    font-family: cursive;
    font-weight: bold;
    font-size: clamp(18px, 5vw, 22px);
}
h2 {
    margin-top: 16px;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 50px;
    font-family: cursive;
    text-align: center;
    font-size: clamp(18px, 5vw, 16px);
}
.price {
    position: absolute;
    bottom: 0;
    margin-top: 5%;
    margin-bottom: 5px;
    margin-left: 2%;
    margin-right: 2%;
    font-family: cursive;
    font-size: clamp(16px, 5vw, 15px);
    /* text-align: right; */
}
img {
    /* border-top-left-radius: 0px;
    border-top-right-radius: 0px; */
    border-radius: 10px;
}
</style>
