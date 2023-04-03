const users = require("../data/index");

module.exports = {
  listUsers: (req, res) => {
    res.json(users);
  },

  showUser: (req, res) => {
    const userRecord = users.find((user) => user.id === parseInt(req.params.id));
    if(!userRecord) {
      res.status(404).send('User not found') 
      return;
    } 
    res.json(userRecord);
  },

  createUser: (req, res) => {
    const user = {
      id: users.length + 1,
      ...req.body,
    };
    users.push(user);
    res.json(user);
  },

  updateUser: (req, res) => {
    let updateRow = users.find((user) => user.id === parseInt(req.params.id));
    if(!updateRow) {
      res.status(404).send('User not found')
      return;
      // res.sendStatus(404)
      // res.status(404).json({error: 'User not found'})

    }
    const index = users.indexOf(updateRow)
    let updatedUser = {
        ...updateRow,
        ...req.body,
    }
    users.splice(index, 1, updatedUser)
    res.json(updatedUser)
  },

 deleteUser: (req, res) => {
    let updatedRow = users.find((user) => user.id === parseInt(req.params.id))
    if(!updatedRow) {
      res.status(404).send('Cannot delete a User that does not exist')
      return;
    }
    let index = users.indexOf(updatedRow)
    users.splice(index, 1)
    res.send('deleted')
 }
};
