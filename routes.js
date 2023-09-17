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
        method: "GET",
        path: "/user",
        handler: (request, h) => {
            return h.response('User Created').code(201)
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
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload
            return `Welcome ${username}!`
        }
    },
    {
        method: "POST",
        path: "/admin/{token?}",
        handler: (request, h) => {
          const { username, password } = request.payload;
          const { token } = request.params;
          const { lang } = request.query;
      
          if (username === 'midori' && password === 'midori' && token !== '') {
            const greeting = lang === 'id' ? 'Halo' : 'Hello';
            const response = h.response(`${greeting}, ${username}. You are logged in as Admin with password: ${password} and token: ${token}`);
            response.type('application/json');
            response.header('X-Custom', 'some-value');
            return response;
          } else {
            const response = h.response('Kamu tidak bisa login');
            response.type('application/json');
            response.header('X-Custom', 'some-value');
            const errorMessage = lang === 'id' ? 'Username atau Password yang anda masukkan salah' : 'Username or Password that you have entered are wrong';
            return response.code(400).message(errorMessage);
          }
        },
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