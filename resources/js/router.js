import { createRouter, createWebHashHistory } from "vue-router";
import Menu from "./components/Menu.vue";
// import Сontacts from "./components/Сontacts.vue";
import About from "./components/About.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: Menu },
        // { path: "/contacts", component: Сontacts },
        { path: "/about", component: About },
    ],
});
