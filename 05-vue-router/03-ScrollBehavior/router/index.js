import { createRouter, createWebHistory } from 'vue-router';

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return { el: to.hash, behavior: 'smooth' };
  } else if (savedPosition) {
    return savedPosition;
  } else if (to.matched.some(record => record.meta.saveScrollPosition) && !from.matched.some(record => record.meta.saveScrollPosition)) {
    return { left: 0, top: 0, behavior: 'smooth' };
  } else if (to.matched.some(record => record.meta.saveScrollPosition) && from.matched.some(record => record.meta.saveScrollPosition)) {
    return false;
  } else {
    return { left: 0, top: 0, behavior: 'smooth' };
  }
};

export const router = createRouter({
  history: createWebHistory('/05-vue-router/03-ScrollBehavior'), scrollBehavior,

  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/PageMeetups.vue'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      redirect: { name: 'index' },
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      name: 'meetup',
      meta: {
        showReturnToMeetups: true,
        saveScrollPosition: true,
      },
      props: true,
      redirect: (to) => ({ name: 'meetup.description', params: to.params }),
      component: () => import('../views/PageMeetup.vue'),
      children: [
        {
          path: '',
          alias: 'description',
          name: 'meetup.description',
          props: true,
          component: () => import('../views/PageMeetupDescription.vue'),
        },
        {
          path: 'agenda',
          name: 'meetup.agenda',
          props: true,
          component: () => import('../views/PageMeetupAgenda.vue'),
        },
      ],
    },
  ],
});
