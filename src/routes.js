import Home from './components/Home'
// import Menu from './components/Menu'
const Menu = () => import('./components/Menu')
// import About from './components/About'
const About = () => import(/* webpackChunkName: "menuGroup" */ './components/About')
import Delivery from './components/Delivery'
import OrderingGuide from './components/Ordering'
// import Contact from './components/Contact'
const Contact = () => import(/* webpackChunkName: "menuGroup" */ './components/Contact')
import Admin from './components/Admin'
import History from './components/History'

export const routes = [
  { path: '/', name: 'homeLink', components: {
    default: Home,
    'ordering-guide': OrderingGuide,
    'delivery': Delivery,
    'history': History
    // this could be an interesting way to show multiple charts and graphs
  } },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/contact', name: 'contactLink', component: Contact },
  { path: '/admin', name: 'adminLink', component: Admin,
    beforeEnter: (to, from, next) => {
      // alert('This area is not for you');
      next();
    }
  },
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: '/history', name: 'historyLink', component: History },
    { path: '/delivery', name: 'deliveryLink', component: Delivery },
    { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide },
  ]},
  { path: '*', redirect: '/'} // covering for unrecognized URL
]

