import chai           from 'chai'
import sinon          from 'sinon'
import sinonChai      from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import {server}       from './helpers'

chai.use(sinonChai)
chai.use(chaiAsPromised)

global.expect = chai.expect
global.sinon  = sinon

before(function() {
  this.timeout(30000)
  return server.start()
})

afterEach(function() {
  sinon.restore()
})

after(function() {
  return server.stop()
})
