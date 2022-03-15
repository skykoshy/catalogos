import VueRouter from 'vue-router'

const Home = () => import('./components/Home.vue')
const Login = () => import('./components/Login.vue')
//importamos los componentes para la gestion de las tareas
const Mostrar = () => import('./components/catalogo/Mostrar.vue')


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'mostrarCatalogos',
        path: '/catalogos',
        component: Mostrar,
        meta:{'requiresAuth':true}
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
    
    
]

