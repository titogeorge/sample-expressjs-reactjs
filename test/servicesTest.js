let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
   describe('/GET Users', () => {
      it('it should GET all the Users', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
              done();
            });
      });
  });
});

describe('Posts By User', () => {
   describe('/GET posts', () => {
      it('it should GET all the posts posted by user', (done) => {
        chai.request(server)
            .get('/posts/user/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(10);
              done();
            });
      });
  });
});

describe('Comments By Post Id', () => {
   describe('/GET Comments', () => {
      it('it should GET all the comments for the post', (done) => {
        chai.request(server)
            .get('/comments/post/9')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(5);
              done();
            });
      });
  });
});