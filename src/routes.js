import Registration from './components/authentication/Registration.vue';
import Login from './components/authentication/Login.vue';
import CrudServices from './components/Services/CrudServices.vue';
import Home from './components/Home/Home.vue';



export const routes = [
    { path: '', component: Home },
    { path: '/registration', component: Registration },
    { path: '/login', component: Login },
    { path: '/crudServices', component: CrudServices },
];
