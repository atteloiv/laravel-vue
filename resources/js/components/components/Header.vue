<script></script>

<template>
    <header class="py-1">
        <div class="flex justify-center items-center mb-8">
            <!-- <div class=""> -->
            <div class="">
                <router-link class="text" to="/"
                    ><img class="" src="/img/logo.png" alt="" />
                </router-link>
            </div>
            <div class="">
                <router-link class="text" to="/"
                    ><p class="logo">Mama Mochi</p>
                </router-link>
            </div>
            <!-- </div> -->
        </div>
        <div class="menu">
            <div class="">
                <router-link class="text" to="/">Меню</router-link>
                <router-link class="text" to="/about">Обо мне</router-link>
                <!-- <router-link class="text" to="/contacts">Контакты</router-link> -->
            </div>
        </div>
    </header>
</template>

<style scoped>
.logo {
    color: rgb(237, 169, 148);
    font-size: 28px;
    /* font-weight: bold; */
    margin-left: 6px;
    white-space: nowrap;
}
.menu {
    margin-bottom: 40px;
    margin-top: -20px;
    color: rgb(228, 101, 92);
    font-size: clamp(16px, 5vw, 24px);
    font-family: cursive;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
}
.text {
    padding: 0 4%;
    transition: transform 0.3s;
}
.text:hover {
    transform: scale(2.1);
    color: rgb(237, 169, 148);
}

h1 {
    color: rgb(237, 169, 148);
    font-size: 18px;
}
img {
    min-height: 50px;
    min-width: 76px;
    max-height: 50px;
    max-width: 76px;
}
</style>
