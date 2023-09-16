const Hapi = require("@hapi/hapi")
const Route = require("./routes")

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    })

    server.route(Route)

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         // return 'Hello World!'
    //         return 'Home Page'
    //     }
    // })

    // server.route({
    //     method: 'GET',
    //     path: '/about',
    //     handler: (request, h) => {
    //         return 'About Page'
    //     }
    // })

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}
// console.log('Halo, kita akan belajar membuat server menggunakan Hapi');

init()