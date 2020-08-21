
import { Layout } from '../components/Layout.js'
import {Home, Login, notFound} from '../pages'
import {Page1, Page2} from '../pages'

const routes = [
  {
    path: '/',
    allwaysShow: true,
    hidden: false,
    component: Layout,
    children: [
      {
        path: '/home',
        allwaysShow: true,
        hidden: false,
        mata: {
          title: 'home',
          menuIcon: ''
        },
        component: Home
      },
      {
        path: '/page1',
        allwaysShow: true,
        hidden: false,
        mata: {
          title: 'page1',
          menuIcon: ''
        },
        component: Page1
      },
      {
        path: '/page2',
        allwaysShow: true,
        hidden: false,
        mata: {
          title: 'page2',
          menuIcon: ''
        },
        component: Page2
      },
    ]
  },
  {
    path: '/login',
    allwaysShow: true,
    hidden: false,
    mata: {
      title: 'login',
      menuIcon: ''
    },
    component: Login
  },
  {
    path: '/notFound',
    allwaysShow: true,
    hidden: false,
    mata: {
      title: 'notFound',
      menuIcon: ''
    },
    component: notFound
  },
]

export default routes