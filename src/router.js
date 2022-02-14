import { createRouter, createWebHistory } from "vue-router";
    import DataTableDemo from "./DataTableDemo.vue"

    export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: DataTableDemo }]
});