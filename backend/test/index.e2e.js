import _        from 'lodash'
import Promise  from 'bluebird'
import request  from 'supertest'
import Commerce from '../src/models/commerce'


describe('Commerce e2e', () => {

  afterEach(() => {
    return Promise.all([
      Commerce.deleteMany()
    ])
  })

  describe('GET /?', () => {
    it('should get error with empty query params', async() => {
      const res = await request(global.APP)
        .get('/')
        .expect(400)
        .expect('content-type', /json/)

      expect(res.body.error).to.equal('Invalid search params')
    })
  })

  describe('GET /?lat&lng', () => {
    context('when existing commerces in given location', () => {
      beforeEach(() => {
        return Promise.all([
          createCommerce({name: 'Bar Tolo', location: [-3.0010, 40.0010]}),
          createCommerce({name: 'Bar Eto',  location: [-3.0020, 40.0020]}),
          createCommerce({name: 'Bar Ucho', location: [30.0000, 40.0000]}),
        ])
      })

      it('should get the commerces', async() => {
        const latlng = {
          lat: 40.000,
          lng: -3.000,
        }

        const res = await request(global.APP)
          .get('/')
          .query(latlng)
          .expect(200)
          .expect('content-type', /json/)

        expect(res.body).to.have.lengthOf(2)

        const names = _.map(res.body, 'name')
        expect(names).to.have.members(['Bar Tolo', 'Bar Eto'])
      })
    })

    context('when non existing commerces in given location', () => {
      beforeEach(() => {
        return Promise.all([
          createCommerce({name: 'Bar Tolo', location: [-3.0010, 40.0010]}),
          createCommerce({name: 'Bar Eto',  location: [-3.0020, 40.0020]}),
          createCommerce({name: 'Bar Ucho', location: [30.0000, 40.0000]}),
        ])
      })

      it('should get empty response', async() => {
        const latlng = {
          lat: 77.7777,
          lng: 77.7777,
        }

        await request(global.APP)
          .get('/')
          .query(latlng)
          .expect(204)
      })
    })
  })

  async function createCommerce(newCommerce) {
    return Commerce.create(_.defaults(newCommerce, {
      name: 'Bar Pepe',
      description: 'Lounge bar ibicenco con coctails fashionables',
      location: [-3.0000, 40.0000],
    }))
  }
})
