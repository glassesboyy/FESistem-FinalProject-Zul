import AboutUs from '@/views/AboutUs.vue'
import Author from '@/views/Author.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogView from '@/views/BlogView.vue'
import Category from '@/views/Category.vue'
import ContactUs from '@/views/ContactUs.vue'
import HomeView from '@/views/HomeView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component: BlogPost,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy,
    },
    {
      path: '/author',
      name: 'author',
      component: Author,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
  ],
})

export default router
