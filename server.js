const express = require("express")
const { User, Animal, Service } = require("./models")

const app = express()
app.use(express.json())

const port = 3000

app.use("/home", express.static('./index.html'))
app.use("/index.css", express.static('./index.css'))
app.use("/script.js", express.static('./script.js'))
app.use("/service", express.static('./service.html'))
app.use("/service.css", express.static('./service.css'))
app.use("/scriptService.js", express.static('./scriptService.js'))
app.use("/animal", express.static('./animal.html'))
app.use("/animal.css", express.static('./animal.css'))
app.use("/scriptAnimal.js", express.static('./scriptAnimal.js'))
app.use("/atendimento", express.static('./atendimento.html'))
app.use("/atendimento.css", express.static('./atendimento.css'))
app.use("/scriptAtendimento.js", express.static('./scriptAtendimento.js'))


app.get('/api/user', async (request, response) => {
    const users = await User.findAll()

    response.json(users)
})
app.post('/api/user', async (request, response) => {
    const newUser = {
        name: request.body.name,
        birthDate: request.body.birthDate,
        email: request.body.email,
        cpf: request.body.cpf,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    const user =  await User.create(newUser)

    response.json(user)
})

app.get('/api/service',async (request, response) => {
    const service = await Service.findAll()
    response.json(service)
})
app.post('/api/service',async (request, response) => {
    const newService = {
        nameService: request.body.nameService,
        price: request.body.price,
        duration: request.body.duration,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    const service =  await Service.create(newService)
    response.json(service)
})

app.get('/api/animal', async (request, response) => {
    const animal = await Animal.findAll()

    response.json(animal)
})
app.post('/api/animal',async (request, response) => {
    const newAnimal = {
        name: request.body.name,
        breed:request.body.breed,
        age: request.body.age,
        weight: request.body.weight,
        owner_name: request.body.owner_name,
        is_vacinated: request.body.is_vacinated,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    const animal =  await Animal.create(newAnimal)

    response.json(animal)
})

app.get('/api/atendimento', (request, response) => {
    response.json(atendimento)
})
app.post('/api/atendimento', (request, response) => {
    const newAtendimento = {
        serviceType: request.body.serviceType,
        animal: request.body.animal,
        scheduledDate: request.body.scheduledDate,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    response.json(newAtendimento)
})

app.listen(port, () => {
    console.log(`Servidor está rodando em
     http://localhost:${port}`)
})