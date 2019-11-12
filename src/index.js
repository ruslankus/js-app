import {HeaderComponent} from './components/header.component';
import {NavigationComponent} from './components/navigation.component';
import {PostComponent} from './components/posts.components';
import {CreateComponent} from './components/create.component'; 
import {FavoriteComponent} from './components/favorite.component';

new HeaderComponent('header');

const navigation = new NavigationComponent('navigation');

const posts = new PostComponent('posts');
const create = new CreateComponent('create');
const favorite = new FavoriteComponent('favorite');

navigation.registerTabs([
    { name: 'posts', component: posts },
    { name: 'create', component: create },
    { name: 'favorite', component: favorite }
]);