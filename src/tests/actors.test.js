const request=require("supertest")
const app=require("../app")
require("../models")

let actorsId;

test("/POST", async()=>{
  const newActors={
    firstName: "jason",
    lastName: "statham",
    nationality: "estadounidense",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sensacine.com%2Factores%2Factor-28586%2F&psig=AOvVaw3kQqJIGMTqe2TIslh83y_Y&ust=1679496318661000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjIrsqh7f0CFQAAAAAdAAAAABAE",
    birthday: 1967/8/26

  }
  const res= await request(app)
  .post("/actors")
  .send(newActors)
  actorsId= res.body.id;
  expect(res.status).toBe(201)
  expect(res.body.firstName).toBe(newActors.firstName);
})

test("/GET", async()=>{
  const res= await request(app).get("/actors")
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)
})

test("/PUT", async()=>{
  const newActors={
    firstName: "jason",
    lastName: "statham",
    nationality: "estadounidense",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sensacine.com%2Factores%2Factor-28586%2F&psig=AOvVaw3kQqJIGMTqe2TIslh83y_Y&ust=1679496318661000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjIrsqh7f0CFQAAAAAdAAAAABAE",
    birthday: 1967/8/26
  }
  const res=await request(app)
  .put(`/actors/${actorsId}`)
  .send(newActors)
  expect(res.status).toBe(200)
  expect(res.body.firstName).toBe(newActors.firstName)

})

test("/DELETE",async()=>{
  const res= await request(app).delete(`/actors/${actorsId}`)
  expect(res.status).toBe(204)
})