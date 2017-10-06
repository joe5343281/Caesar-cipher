/* eslint-disable no-undef */
var expect = require('chai').expect

describe('cesa', function () {
    var cesa = require('../lib/cesa')
    
    describe('凱薩編碼測試', function () {
        it('cesa.encoding(My name is Joe)', function () {
            expect(cesa.encoding('My name is Joe')).to.equal('Rd sfrk nx otk')
        })  
    })
})

describe('cesa', function () {
    var cesa = require('../lib/cesa')
   
    describe('凱薩編碼測試', function () {
        it('cesa.decoding(Rd sfrk nx otk', function () {
            expect(cesa.decoding('Rd sfrk nx otk')).to.equal('My name is Joe')
         })     
    })
})
