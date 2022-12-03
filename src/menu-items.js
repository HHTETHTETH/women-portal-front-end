export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'upload',
                    title: 'Upload',
                    type: 'item',
                    url: '/upload/default',
                    icon: 'feather icon-upload',
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-page',
            children: [
                {
                    id: 'basic1',
                    title: 'Articles',
                    type: 'collapse',
                    icon: 'feather icon-activity',
                    children: [
                        {
                            id: 'articles-list',
                            title: 'List Of Articles',
                            type: 'item',
                            url: '/list/all/articles'
                        },
                        {
                            id: 'create-article',
                            title: 'Create Article',
                            type: 'item',
                            url: '/create/article'
                        },
                        {
                            id: 'update-article',
                            title: 'Update Article',
                            type: 'item',
                            url: '/update/article'
                        },
                    ]
                },
                {
                    id: 'basic2',
                    title: 'Book',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    children: [
                        {
                            id: 'books-list',
                            title: 'List Of Books',
                            type: 'item',
                            url: '/list/all/books'
                        },
                        {
                            id: 'create-book',
                            title: 'Create Book',
                            type: 'item',
                            url: '/create/book'
                        },
                        {
                            id: 'update-book',
                            title: 'Update Book',
                            type: 'item',
                            url: '/update/book'
                        },
                    ]
                },
                {
                    id: 'basic3',
                    title: 'DIY',
                    type: 'collapse',
                    icon: 'feather icon-diy',
                    children: [
                        {
                            id: 'diys-list',
                            title: 'List Of DIYs',
                            type: 'item',
                            url: '/list/all/diys'
                        },
                        {
                            id: 'create-diy',
                            title: 'Create DIY',
                            type: 'item',
                            url: '/create/diy'
                        },
                        {
                            id: 'update-diy',
                            title: 'Update DIY',
                            type: 'item',
                            url: '/update/diy'
                        },
                    ]
                },
                {
                    id: 'basic4',
                    title: 'Fashion',
                    type: 'collapse',
                    icon: 'feather icon-fashion',
                    children: [
                        {
                            id: 'fashions-list',
                            title: 'List Of Fashions',
                            type: 'item',
                            url: '/list/all/fashions'
                        },
                        {
                            id: 'create-fashion',
                            title: 'Create Fashion',
                            type: 'item',
                            url: '/create/fashion'
                        },
                        {
                            id: 'update-fashion',
                            title: 'Update Fashion',
                            type: 'item',
                            url: '/update/fashion'
                        },
                    ]
                },
                {
                    id: 'basic5',
                    title: 'Food',
                    type: 'collapse',
                    icon: 'feather icon-cutlery',
                    children: [
                        {
                            id: 'food-list',
                            title: 'List Of Food Categories',
                            type: 'item',
                            url: '/list/all/food/categories'
                        },
                        {
                            id: 'create-food',
                            title: 'Create Food Category',
                            type: 'item',
                            url: '/create/food/category'
                        },
                        {
                            id: 'update-food',
                            title: 'Update Food Category',
                            type: 'item',
                            url: '/update/food/category'
                        },
                    ]
                },
                {
                    id: 'basic6',
                    title: 'Inspires',
                    type: 'collapse',
                    icon: 'feather icon-star',
                    children: [
                        {
                            id: 'inspires-list',
                            title: 'List Of Inspires',
                            type: 'item',
                            url: '/list/all/inspires'
                        },
                        {
                            id: 'create-inspire',
                            title: 'Create Inspire',
                            type: 'item',
                            url: '/create/inspire'
                        },
                        {
                            id: 'update-inspire',
                            title: 'Update Inspire',
                            type: 'item',
                            url: '/update/inspire'
                        },
                    ]
                },
                {
                    id: 'basic7',
                    title: 'Movie',
                    type: 'collapse',
                    icon: 'feather icon-film',
                    children: [
                        {
                            id: 'movies-list',
                            title: 'List Of Movies',
                            type: 'item',
                            url: '/list/all/movies'
                        },
                        {
                            id: 'create-movie',
                            title: 'Create Movie',
                            type: 'item',
                            url: '/create/movie'
                        },
                        {
                            id: 'update-movie',
                            title: 'Update Movie',
                            type: 'item',
                            url: '/update/movie'
                        },
                    ]
                },
                {
                    id: 'basic8',
                    title: 'Promotion',
                    type: 'collapse',
                    icon: 'feather icon-calendar',
                    children: [
                        {
                            id: 'promotions-list',
                            title: 'List Of Promotion',
                            type: 'item',
                            url: '/list/all/promos'
                        },
                        {
                            id: 'create-promotion',
                            title: 'Create Promotion',
                            type: 'item',
                            url: '/create/promo'
                        },
                        {
                            id: 'get-promo-by-date',
                            title: 'Get Promotion By Date',
                            type: 'item',
                            url: '/get/promo/by/date'
                        },
                    ]
                },
                {
                    id: 'basic9',
                    title: 'Recipe',
                    type: 'collapse',
                    icon: 'feather icon-life-buoy',
                    children: [
                        {
                            id: 'recipes-list',
                            title: 'List Of Recipes',
                            type: 'item',
                            url: '/list/all/recipes'
                        },
                        {
                            id: 'create-recipe',
                            title: 'Create Recipe',
                            type: 'item',
                            url: '/create/recipe'
                        },
                        {
                            id: 'update-recipe',
                            title: 'Update Recipe',
                            type: 'item',
                            url: '/update/recipe'
                        },
                    ]
                },
                {
                    id: 'basic10',
                    title: 'Singer',
                    type: 'collapse',
                    icon: 'feather icon-user',
                    children: [
                        {
                            id: 'singers-list',
                            title: 'List Of Singers',
                            type: 'item',
                            url: '/list/all/singers'
                        },
                        {
                            id: 'create-singer',
                            title: 'Create Singer',
                            type: 'item',
                            url: '/create/singer'
                        },
                        {
                            id: 'update-singer',
                            title: 'Update Singer',
                            type: 'item',
                            url: '/update/singer'
                        },
                    ]
                },
                {
                    id: 'basic11',
                    title: 'Song',
                    type: 'collapse',
                    icon: 'feather icon-music',
                    children: [
                        {
                            id: 'songs-list',
                            title: 'List Of Songs',
                            type: 'item',
                            url: '/list/all/songs'
                        },
                        {
                            id: 'create-song',
                            title: 'Create Song',
                            type: 'item',
                            url: '/create/song'
                        },
                        {
                            id: 'update-song',
                            title: 'Update Song',
                            type: 'item',
                            url: '/update/song'
                        },
                    ]
                },
            ]
        },
    ]
}