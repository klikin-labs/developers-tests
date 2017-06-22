'use strict'

/* jshint -W079 */
const chai  = require('chai')
const sinon = require('sinon')

chai.use(require('sinon-chai'))
chai.use(require('chai-as-promised'))

global.expect = chai.expect
global.sinon  = sinon
