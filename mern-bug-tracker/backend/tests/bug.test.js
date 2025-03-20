const request=require('supertest');
const app=require('../server');
const mongoose=require('mongoose');

afterAll(()=>{
    mongoose.connection.close();
});
describe('Bug tracker API',()=>{
    it("Should create a new bug",async()=>{
        const res=await request(app)
        .post('/test/bugs')
        .send({title:`Validation issue`,description:"Form unable to validate"});
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title','Validation issue');

    })
    it("Should fetch all bugs",async()=>{
        const res=await request(app)
        .get('/test/bugs');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
})