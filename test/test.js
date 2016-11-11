var request = request('supertest');
var app = require('../app.js');

describe('GET /', function () {,
   it('respond with hello world', function(done) {
      requst(app).get('/').expect('hello Jenkins',done);
 });
 });
