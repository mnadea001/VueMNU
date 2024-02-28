import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealView from '../views/MealView.vue'
import YogaView from '../views/YogaView.vue'
import CategoryView from '../views/CategoryView.vue'
import PoseView from '../views/PoseView.vue'
import AboutView from '../views/AboutView.vue'
import QuotesView from '../views/QuotesView.vue'
import FoodView from '../views/FoodView.vue'
import IndexView from '../views/IndexView.vue'
import SourceView from '../views/SourceView.vue'
import BuddhaView from '../views/BuddhaView.vue'
import MeditationView from '../views/MeditationView.vue'
import EventsView from '../views/EventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView
    },    
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/buddha',
      name: 'buddha',
      component: BuddhaView
    },
    {
      path: '/source',
      name: 'source',
      component: SourceView
    },
    {
      path: '/index',
      name: 'index',
      component: IndexView
    },
    {
      path: '/meal/:idMeal',
      name: 'meal',
      component: MealView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/meditation',
      name: 'meditation',
      component: MeditationView
    },
    {
      path: '/yoga',
      name: 'yoga',
      component: YogaView
    },
    {
      path: '/quote',
      name: 'quote',
      component: QuotesView
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView
    }, 
    {
      path: '/pose/:id',
      name: 'pose',
      component: PoseView
    }
  ]
})

export default router
