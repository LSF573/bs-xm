import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index';
import upload from '@/components/upload'
import my from '@/components/my'
import login from '@/components/login'
import limit from '@/components/limit'
import free from '@/components/free'
import order from '@/components/order'
import issue from '@/components/issue'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },{
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/login',
      name: 'login',
      component: login 
    },{
      path: '/limit',
      name: 'limit',
      component: limit 
    },{
      path: '/free',
      name: 'free',
      component: free 
    },{
        path: '/order',
        name: 'order',
        component: order 
    },{
      path: '/issue',
      name: 'issue',
      component: issue 
    },{
      path: '/detail',
      name: 'detail',
      component: detail 
    }
  ]
})
