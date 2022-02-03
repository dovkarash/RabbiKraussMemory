import tribute from '../views/tribute.vue'
import shiurimarticles from '../views/Shiurimarticles.vue'
import shiurimvideo from '../views/Shiurimvideo.vue'
import levaya from '../views/Levaya.vue'
import articles from '../views/Articles.vue'
import publications from '../views/Publications.vue'
import personaltributes from '../views/Personaltributes.vue'
import post from '../views/Post.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/Post',
  name: 'Post',
  component: post
}, {
  path: '/personal-tributes',
  name: 'PersonalTributes',
  component: personaltributes
}, {
  path: '/publications',
  name: 'Publications',
  component: publications
}, {
  path: '/articles',
  name: 'Articles',
  component: articles
}, {
  path: '/levaya',
  name: 'Levaya',
  component: levaya
}, {
  path: '/shiurim-video',
  name: 'ShiurimVideo',
  component: shiurimvideo
}, {
  path: '/shiurimarticles',
  name: 'ShiurimArticles',
  component: shiurimarticles
}, {
  path: '/tribute/:id',
  name: 'Tribute',
  component: tribute
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
