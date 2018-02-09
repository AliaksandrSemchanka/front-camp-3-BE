const Controller = require('../../common/controller/controller');
const Facade = require('./facade');

class blogsController extends Controller {}

module.exports = new blogsController(Facade);