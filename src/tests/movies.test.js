

const request=require("supertest")
const app= require("../app");
const Actors = require("../models/Actors");
const Directors = require("../models/Directors");
const Genres = require("../models/Genres");
require("../models")

let moviesId;

test("/POST", async()=>{
  const newmovies={
    name: "el transportador",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneyplus.com%2Fes-419%2Fmovies%2Fel-transportador%2F3f16RpvAz9Jw&psig=AOvVaw3Fhg8XeJcCnB2foqXCrYBR&ust=1679503301207000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCtqce77f0CFQAAAAAdAAAAABAE",
    sinopsis: "el ex militar frank martin vive lo que parece ser una vida tranquila prestando sus servicios",
    releaseYear: 2002/2/24
    
  }
  const res=await request(app)
  .post("/movies")
  .send(newmovies)
  moviesId=res.body.id;
  expect(res.status).toBe(201)
 expect(res.body.name).toBe(newmovies.name)

})

test("/GET", async()=>{
  const res=await request(app).get("/movies")
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)
  expect(res.body[0].actors).toBeDefined()
  expect(res.body[0].directors).toBeDefined()
  expect(res.body[0].genres).toBeDefined()

})

test("/PUT", async()=>{

  const newmovies={
    name: "el transportador",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneyplus.com%2Fes-419%2Fmovies%2Fel-transportador%2F3f16RpvAz9Jw&psig=AOvVaw3Fhg8XeJcCnB2foqXCrYBR&ust=1679503301207000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCtqce77f0CFQAAAAAdAAAAABAE",
    sinopsis: "el ex militar frank martin vive lo que parece ser una vida tranquila prestando sus servicios",
    releaseYear: 2002/2/24
    
  }
  const res= await request(app)
  .put(`/movies/${moviesId}`)
  .send(newmovies)
  expect(res.status).toBe(200)
  expect(res.body.name).toBe(newmovies.name)
})

test("/post/movies/:id/actors",async()=>{
  const actor= await Actors.create({
    firstName: "jason",
    lastName: "statham",
    nationality: "estadounidense",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sensacine.com%2Factores%2Factor-28586%2F&psig=AOvVaw3kQqJIGMTqe2TIslh83y_Y&ust=1679496318661000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjIrsqh7f0CFQAAAAAdAAAAABAE",
    birthday: 1967/8/26
  })
  const res= await request(app)
  .post(`/movies/${moviesId}/actors`)
  .send([actor.id])
   await actor.destroy()
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)
})

test("/POST/movies/:id/directors",async()=>{
const  director= await Directors.create({
  firstName: "corey",
  lastName: "yuen",
  nationality: "hong kong",
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.onderhond.com%2Fdirectors%2Fcorey-yuen&psig=AOvVaw135iznBXzO47GU15wjeSlj&ust=1679499129643000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOj2_oSs7f0CFQAAAAAdAAAAABAE",
  birthday: 2013/1/20
})
const res=await request(app)
.post(`/movies/${moviesId}/directors`)
.send([director.id])
await director.destroy()
expect(res.status).toBe(200)
expect(res.body).toHaveLength(1)
})

test("/POST/movies/:id/genres",async()=>{
  const genre= await Genres.create({
    name: "accion"
    
  })
  const res=await request(app)
  .post(`/movies/${moviesId}/genres`)
  .send([genre.id])
  await genre.destroy()
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)
  })


test("/delete", async()=>{
  const res=await request(app).delete(`/movies/${moviesId}`)
  expect(res.status).toBe(204)
})
