process.env.NODE_ENV = 'test'; // so we can test. 


const chai = require('chai')
const chaihttp = require('chai-http')
const server = require('../index.js')
const should = chai.should()
chai.use(chaihttp)





describe('Data for coins', () => {
    it('return an array of cc names-symbols', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0);
            })
        done()
    })

    it('return an array of cc names', (done) => {
        chai.request(server)
            .get('/names')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0);
            })
        done()
    })
})


describe('/graph/:crupto/:currency', () => {
    it('return infos of a cc', (done) => {
        chai.request(server)
            .get('/graph/BTC/USD')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0);
            })
        done()
    })
})

describe('/:time/:cc_value/:c_value', () => {
    it('return infos of a cc', (done) => {
        chai.request(server)
            .get('/week/BTC/USD')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(7);
            })
        done()
    })
})

// convertor.
describe('convertor.', () => {
    it('return values according to input', (done) => {
        chai.request(server)
            .get('/USD/1')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0);
            })
        done()
    })

    it('cc list', (done) => {
        chai.request(server)
            .get('/cc-list')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0);
            })
        done()
    })
})