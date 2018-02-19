class Controller {
  constructor(facade) {
    this.facade = facade;
  }

  create(req, res) {
    this.facade.create(req.body)
      .then(() => res.status(201).end())
      .catch(err => res.status(400).json(err.message = 'Not created'));
  }

  find(req, res, next) {
    this.facade.find()
      .then(docs => res.status(200).json(docs))
      .catch(err => next(err));
  }

  findById(req, res) {
    this.facade.findById(req.params.id)
      .then(docs => res.status(200).json(docs))
      .catch(err => res.status(400).json({ message: err.message }));
  }

  remove(req, res) {
    this.facade.remove({ _id: req.params.id })
      .then(() => res.status(200).json({ success: true }))
      .catch(err => res.status(400).json({ message: err.message }));
  }

  update(req, res) {
    this.facade.update({ _id: req.params.id }, req.body)
      .then(() => res.status(204).end())
      .catch(err => res.status(400).json({ message: err.message }));
  }
}

module.exports = Controller;
