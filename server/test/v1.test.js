import chai from 'chai';
import chaiHttp from 'chai-http';
import supertest from 'supertest';

chai.use(chaiHttp);
chai.should();
chai.expect();

describe('user', () => {
  describe('Register', () => {
    it('should create new user', (done) => {
      chai
        .request('http://localhost:8081/api/v1')
        .post('/register')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Login', () => {
    it('should check if user exist', (done) => {
      supertest('http://localhost:8081/api/v1/')
        .post('/login')
        .set('Accept', 'application/json')
        .send({
          email: 'bro',
          password: '123'
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((res) => {
          res.body.email.should.equal('bro');
          done();
        });
    });
  });
});
