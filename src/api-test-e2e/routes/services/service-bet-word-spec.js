'use strict';

const ROUTE_URL = '/service/word';

describe(`route: ${ROUTE_URL} GET`, () => {
  let USER;

  it('01. get words correctly', done => {
    const filter = {
      number: 3
    };

    request.get(`${ROUTE_URL}`)
      .query(filter)
      .expect(HttpStatus.OK)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((error, response) => {
        if (error) return done(error);

        expect(response.body.length).to.equal(3);

        return done();
      });
  });
});
