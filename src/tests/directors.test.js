
const request=require("supertest")
const app= require("../app")
require("../models")

let directorsId;

test("/POST", async()=>{
  const newDirectors={
    firstName: "corey",
    lastName: "yuen",
    nationality: "hong kong",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.onderhond.com%2Fdirectors%2Fcorey-yuen&psig=AOvVaw135iznBXzO47GU15wjeSlj&ust=1679499129643000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOj2_oSs7f0CFQAAAAAdAAAAABAE",
    birthday: 2013/1/20
  
  }
  const res=await request(app)
  .post("/directors")
  .send(newDirectors)
  directorsId=res.body.id;
  expect(res.status).toBe(201)
 expect(res.body.firstName).toBe(newDirectors.firstName)

})

test("/GET", async()=>{
  const res=await request(app).get("/directors")
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)

})

test("/PUT", async()=>{

  const newDirectors={
    firstName: "corey",
    lastName: "yuen",
    nationality: "hong kong",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.onderhond.com%2Fdirectors%2Fcorey-yuen&psig=AOvVaw135iznBXzO47GU15wjeSlj&ust=1679499129643000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOj2_oSs7f0CFQAAAAAdAAAAABAE",
    birthday: 2013/1/20
  }
  const res= await request(app)
  .put(`/directors/${directorsId}`)
  .send(newDirectors)
  expect(res.status).toBe(200)
  expect(res.body.firstName).toBe(newDirectors.firstName)
})

test("/delete", async()=>{
  const res=await request(app).delete(`/directors/${directorsId}`)
  expect(res.status).toBe(204)
})

