import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';


chai.use(chaiHttp);
chai.should();

describe('user', ()=>{
  describe('POST /', ()=> {
    it("should create new user", done=>{
      chai.request(app)
        .post('/register')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
});