import Bookstore from './BooksStoreApp.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import BooksView from './views/BooksView.vue';
import BookView from './views/BookView.vue';

export default [
  {
    path: '/bookstore',
    name: 'bookstore',
    component: Bookstore,
    children: [
      {
        path: 'books',
        name: 'books',
        component: BooksView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'book/:id',
        name: 'book',
        component: BookView,
      },
    ],
  },
];
