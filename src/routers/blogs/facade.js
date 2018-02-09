const Facade = require('../../common/facade/facade');
const Blogs = require('../../models/blogs');

class blogsFacade extends Facade {}

module.exports = new blogsFacade(Blogs);
