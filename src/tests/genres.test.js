

const request=require("supertest")
const app= require("../app")
require("../models")

let genresId;

test("/POST", async()=>{
  const newGenres={
    name: "accion"
    
  }
  const res=await request(app)
  .post("/genres")
  .send(newGenres)
  genresId=res.body.id;
  expect(res.status).toBe(201)
 expect(res.body.name).toBe(newGenres.name)

})

test("/GET", async()=>{
  const res=await request(app).get("/genres")
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)

})

test("/PUT", async()=>{

  const newGenres={
   name: "corey",
   
  }
  const res= await request(app)
  .put(`/genres/${genresId}`)
  .send(newGenres)
  expect(res.status).toBe(200)
  expect(res.body.name).toBe(newGenres.name)
})

test("/delete", async()=>{
  const res=await request(app).delete(`/genres/${genresId}`)
  expect(res.status).toBe(204)
})
