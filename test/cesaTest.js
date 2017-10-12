/* eslint-disable no-undef */
var expect = require('chai').expect

describe('cesa', function () {
    var cesa = require('../lib/cesa')
    
    describe('凱薩編碼測試', function () {
        it('cesa.encoding(My name is Joe)', function () {
            expect(cesa.encoding('My name is Joe')).to.equal('Rd sfrj nx Otj')
        })  
    })
})

describe('cesa', function () {
    var cesa = require('../lib/cesa')
   
    describe('凱薩編碼測試', function () {
        it('cesa.decoding(Rd sfrj nx Otj)', function () {
            expect(cesa.decoding('Rd sfrj nx Otj')).to.equal('My name is Joe')
         })     
    })
})
