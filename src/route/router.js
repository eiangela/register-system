import { createRouter, createWebHistory } from 'vue-router';
import ParentRegistrationView from '../views/ParentRegistrationView.vue'
import ChildsRegistrationView from '../views/ChildsRegistrationView.vue'

const routes = [{
        path: "/",
        name: "initial",
        component: () => import("@/views/InitialCheckView.vue"),
    },
    {
        path: "/parent",
        name: "parent",
        component: ParentRegistrationView
    },
    {
        path: "/childs",
        name: "childs",
        component: ChildsRegistrationView
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;