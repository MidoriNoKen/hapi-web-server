const routes = [
    // {
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Homepage'
    //     }
    // },
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            const { name, location } = request.query
            return `Hello, ${name} from ${location}.`
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman ini tidak bisa diakses dengan method tersebut'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page'
        }
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const { username = 'stranger' } = request.params
            return `Hello, ${username}!`
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'stranger' } = request.params
            const { lang } = request.query

            if (lang === 'id') {
                return `Halo, ${name}!`
            }
            return `Hello, ${name}!`
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman ini tidak bisa diakses dengan method tersebut'
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak dapat ditemukan!'
        }
    }
]

module.exports = routes