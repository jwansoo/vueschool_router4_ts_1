import { createRouter, createWebHistory, useRoute } from 'vue-router'
import Home from '../views/Home.vue'
import sourceData from '../data.json' 
const route=useRoute()
const routes= [
  { path: '/', name: 'home', component: Home, alias:'/home'},
  {
    path:'/protected',
    name:'protected',
    components:{
      default:()=>import('../views/Protected.vue'),
      leftSidebar:()=>import('../components/Leftsidebar.vue')
    },
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login.vue')
  },
  {
    path:'/invoices',
    name:'invoices',
    components:{
     default: ()=>import('../views/Invoices.vue'),
     LeftSidebar:()=>import('../components/Leftsidebar.vue') 
    },
    meta:{requiresAuth:true}

  },
  {
    path:'/example/:id(\\d+)?',
    component:()=>import('../views/Login.vue')
  },
  {
  path: '/destination/:id/:slug',
  name:'destination.show',
  component: ()=>import('../views/DestinationShow.vue'),
  // *****impotant syntax****
  props: (route: { params: { id: string } })=>({...route.params, id:parseInt(route.params.id)}),
  beforeEnter(to, from) {
    const exists=sourceData.destinations.find(
      destination=>destination.id===parseInt(to.params.id)
          )
    if(!exists) return {
      name:'NotFound',
      params:{pathMatch:to.path.split('/').slice(1)},
      query:to.query,
      hash:to.hash
    }
  },
  children:[
    {
      path:':experienceSlug',
      name:'experience.show',
      component:()=>import('../views/ExperienceShow.vue'),
      props:(route: { params: { id: string } })=>({...route.params, id:parseInt(route.params.id)}),
    }
  ] 
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to,from,savedPosition){
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=>resolve({top:0}),300)
    })
  }
})
router.beforeEach((to,from)=>{
  if(to.meta.requiresAuth && !window.user){
    return {name:'login',query:{redirect:to.fullPath}}
  }
})

export default router
