import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const upload = React.lazy(() => import('./upload'));

const Article = React.lazy(() => import('./Demo/Articles/getArticle'));
const CreateArticle = React.lazy(() => import('./Demo/Articles/createArticle'));
const UpdateArticle = React.lazy(() => import('./Demo/Articles/updateArticle'));

const CreateBook = React.lazy(() => import('./Demo/Books/createBook'));
const UpdateBook = React.lazy(() => import('./Demo/Books/updateBook'));
const Books = React.lazy(() => import('./Demo/Books/getBook'));

const CreateDiy = React.lazy(() => import('./Demo/Diys/createDiy'));
const UpdateDiy = React.lazy(() => import('./Demo/Diys/updateDiy'));
const Diys = React.lazy(() => import('./Demo/Diys/getDiy'));

const CreateFashion = React.lazy(() => import('./Demo/Fashions/createFashion'));
const UpdateFashion = React.lazy(() => import('./Demo/Fashions/updateFashion'));
const Fashions = React.lazy(() => import('./Demo/Fashions/getFashions'));

const CreateFood = React.lazy(() => import('./Demo/Food/createFood'));
const UpdateFood = React.lazy(() => import('./Demo/Food/updateFood'));
const Foods = React.lazy(() => import('./Demo/Food/getFood'));

const CreateInspire = React.lazy(() => import('./Demo/Inspires/createInspire'));
const UpdateInspire = React.lazy(() => import('./Demo/Inspires/updateInspire'));
const Inspires = React.lazy(() => import('./Demo/Inspires/getInspire'));

const CreateMovie = React.lazy(() => import('./Demo/Movies/createMovie'));
const UpdateMovie = React.lazy(() => import('./Demo/Movies/updateMovie'));
const Movies = React.lazy(() => import('./Demo/Movies/getMovie'));

const CreatePromo = React.lazy(() => import('./Demo/Promotions/createPromo'));
//const UpdatePromo = React.lazy(() => import('./Demo/Promotions/updatePromo'));
const Promos = React.lazy(() => import('./Demo/Promotions/getPromo'));
const PromosByDate = React.lazy(() => import('./Demo/Promotions/getPromoByDate'));

const CreateRecipe = React.lazy(() => import('./Demo/Recipe/createRecipe'));
const UpdateRecipe = React.lazy(() => import('./Demo/Recipe/updateRecipe'));
const Recipes = React.lazy(() => import('./Demo/Recipe/getRecipe'));

const CreateSinger = React.lazy(() => import('./Demo/Singer/createSinger'));
const UpdateSinger = React.lazy(() => import('./Demo/Singer/updateSinger'));
const Singers = React.lazy(() => import('./Demo/Singer/getSinger'));

const CreateSong = React.lazy(() => import('./Demo/Song/createSong'));
const UpdateSong = React.lazy(() => import('./Demo/Song/updateSong'));
const Songs = React.lazy(() => import('./Demo/Song/getSong'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/upload/default', exact: true, name: 'Upload', component: upload },

    { path: '/list/all/articles', exact: true, name: 'Articles', component: Article },
    { path: '/create/article', exact: true, name: 'Create Article', component: CreateArticle },
    { path: '/update/article', exact: true, name: 'Update Article', component: UpdateArticle },
    
    { path: '/create/book', exact: true, name: 'Create Book', component: CreateBook },
    { path: '/update/book', exact: true, name: 'Update Book', component: UpdateBook },
    { path: '/list/all/books', exact: true, name: 'Books', component: Books },

    { path: '/create/diy', exact: true, name: 'Create DIY', component: CreateDiy },
    { path: '/update/diy', exact: true, name: 'Update DIY', component: UpdateDiy },
    { path: '/list/all/diys', exact: true, name: 'DIYs', component: Diys },

    { path: '/create/fashion', exact: true, name: 'Create Fashion', component: CreateFashion },
    { path: '/update/fashion', exact: true, name: 'Update Fashion', component: UpdateFashion },
    { path: '/list/all/fashions', exact: true, name: 'Fashions', component: Fashions },

    { path: '/create/food/category', exact: true, name: 'Create Food Category', component: CreateFood },
    { path: '/update/food/category', exact: true, name: 'Update Food Category', component: UpdateFood },
    { path: '/list/all/food/categories', exact: true, name: 'Food Categories', component: Foods },

    { path: '/create/inspire', exact: true, name: 'Create Inspire', component: CreateInspire },
    { path: '/update/inspire', exact: true, name: 'Update Inspire', component: UpdateInspire },
    { path: '/list/all/inspires', exact: true, name: 'Inspires', component: Inspires },

    { path: '/create/movie', exact: true, name: 'Create Movie', component: CreateMovie },
    { path: '/update/movie', exact: true, name: 'Update Movie', component: UpdateMovie },
    { path: '/list/all/movies', exact:true, name: 'Movies', component: Movies },

    { path: '/create/promo', exact: true, name: 'Create Promo', component: CreatePromo },
    { path: '/list/all/promos', exact: true, name: 'Promotions', component: Promos },
    { path: '/get/promo/by/date', exact: true, name: 'Promos By Date', component: PromosByDate },

    { path: '/create/recipe', exact: true, name: 'Create Recipe', component: CreateRecipe },
    { path: '/update/recipe', exact: true, name: 'Update Recipe', component: UpdateRecipe },
    { path: '/list/all/recipes', exact: true, name: 'Recipes', component: Recipes },

    { path: '/create/singer', exact: true, name: 'Create Singer', component: CreateSinger },
    { path: '/update/singer', exact: true, name: 'Update Singer', component: UpdateSinger },
    { path: '/list/all/singers', exact: true, name: 'Singers', component: Singers },

    { path: '/create/song', exact: true, name: 'Create Song', component: CreateSong },
    { path: '/update/song', exact: true, name: 'Update Song', component: UpdateSong },
    { path: '/list/all/songs', exact: true, name: 'Songs', component: Songs },

    

];

export default routes;