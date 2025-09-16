import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/TrangChu/index.vue'),
        meta: { layout: "blank" },
    },
    {
        path : '/admin',
        component: ()=>import('../components/Admin/Login/LoginAdmin.vue'),
        meta: { layout: "blank" },
    },
    {
        path : '/admin/Dashboard',
        component: ()=>import('../components/Admin/Dashboard/index.vue'),
        meta : {'layout' : 'default' }
    },
    {
        path : '/admin/tongquan',
        component: ()=>import('../components/Admin/TongQuan/index.vue'),
        meta : {'layout' : 'default' }
    },
    {
        path : '/admin/lichsugiaodich',
        component: ()=>import('../components/Admin/LichSuGiaoDich/index.vue'),
        meta : {'layout' : 'default' }
    },
    {
        path : '/admin/baocao',
        component: ()=>import('../components/Admin/BaoCao/index.vue'),
        meta : {'layout' : 'default' }
    },
    {
        path : '/admin/quanlikhachhang',
        component: ()=>import('../components/Admin/QuanLiKhachHang/index.vue'),
        meta : {'layout' : 'default' }
    },

   //  ================Client===================
    {
        path : '/client-login',
        component: ()=>import('../components/Client/Login/index.vue'),
        meta : {'layout' : 'client' }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router