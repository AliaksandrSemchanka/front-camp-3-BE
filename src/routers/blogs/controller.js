const Controller = require('../../common/controller/controller');
const Facade = require('./facade');

class BlogsController extends Controller {}

module.exports = new BlogsController(Facade);
