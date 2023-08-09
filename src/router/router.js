import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path:'/',
    name:'home-page',
    component:() => import('@/views/HomePage.vue')
  },
  {
    path:'/register',
    name:'register',
    meta:{layout:'auth'},
    component:() => import('@/views/RegisterPage.vue')
  },
  {
    path:'/login',
    name:'login',
    meta:{layout:'auth'},
    component:() => import('@/views/LoginPage.vue')
  },
  {
    path:'/profile',
    name:'profile-page',
    meta:{layout:'main'},
    component:() => import('@/views/ProfilePage.vue'),
    children:[
      {
        path:'/profile/profile-favorites',
        name:'profile-favorites',
        component:() => import('@/views/ProfileFavoritesPage.vue')
      },
      {
        path:'/profile/profile-reviews',
        name: 'profile-reviews',
        component:() => import('@/views/ProfileReviewsPage.vue')
      },
      {
        path:'/profile/profile-beweries',
        name:'profile-beweries',
        component:() => import('@/views/ProfileBeweriesPage.vue')
      },
      {
        path:'/profile/profile-shops',
        name:'profile-shops',
        component:() => import('@/views/ProfileShopsPage.vue')
      },
    ]
  },
  {
    path:'/favorite',
    name:'favorite-place-page',
    meta:{layout:'main'},
    component:() => import('@/views/FavoritePlicesPage.vue')
  },
  {
    path:'/news',
    name:'news-page',
    meta:{layout:'main'},
    component:() => import('@/views/NewsPage.vue')
  },
  {
    path:'/reviews',
    name:'reviews-page',
    meta:{layout:'main'},
    component:() => import('@/views/ReviewsPage.vue')
  },
  {
    path:'/beer',
    name:'beer-page',
    meta:{layout:'main'},
    component:() => import('@/views/BeerPage.vue')
  },
  {
    path:'/breweries',
    name:'beweries-page',
    meta:{layout:'main'},
    component:() => import('@/views/BreweriesPage.vue')
  },
  {
    path:'/feedback',
    name:'feedback-page',
    meta:{layout:'main'},
    component:() => import('@/views/FeedbackPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
