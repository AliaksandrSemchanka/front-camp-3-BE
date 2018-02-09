class Facade {
    constructor(model) {
        this.model = model;
    }

    create(body) {
       return this.model.create(body);
    };

    find() {
       return this.model.find()
    };

    findById(id) {
        return this.model.findById(id)
    };

    remove(query) {
       return this.model.remove({_id: query})
    };

    update(id, body) {
       return this.model.update(id, body)
    }
}

module.exports = Facade;
