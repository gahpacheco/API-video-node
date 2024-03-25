import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

server.post('/videos', async (request, reply) =>{
    
    const {title, description, duration} = request.body


    await database.create({
        title, 
        description,
        duration
    })

    return reply.status(201).send()
})

server.get('/videos', async () =>{

    const search = request.query.search

    const videos = await database.list(search)

    return videos
})

server.put('/videos/:id', (request, reply) =>{
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.updtate(videoId, {
        title,
        description,
        duration
    })

})

server.delete('/', () =>{
    return 'Hello Wolrd!'
})


server.listen({
    port: 3333,
})
