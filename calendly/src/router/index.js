// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import CalendarView from '../components/CalendarView.vue';
import BookingForm from '../components/BookingForm.vue';



const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: CalendarView,
  },
  {
    path: '/book',
    name: 'Book',
    component: BookingForm,
  }

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
