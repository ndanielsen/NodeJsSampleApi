var express = require('express');
var router = express.Router();

//router.get('/', (req, res) => res.send('Hello World!'))

var users = new Object();

//Post: Create a user
router.post('/', function(req, res) {
  var user = users[req.body.Username];
  if(user == null)
  {
    var user = {
      FirstName : req.body.FirstName,
      LastName : req.body.LastName,
      PhoneNumber : req.body.PhoneNumber,
      Username : req.body.Username
    }
    users[req.body.Username] = user;

    var success = {
      Message : "User '" + req.body.FirstName + "' with Username '" + req.body.Username + "' was created successfuly"
    }
    res.status(200);
    res.send(success);
  }
  else
  {
    var error = {
      Message : "Username '" + req.body.Username + "' already exists!"
    }
    res.status(409);
    res.send(error);
  }
})

//Get: Get a user
router.get('/:id', function(req, res) {
  var user = users[req.params.id];
  if(user == null)
  {
    var message = {
      Message : "Username '" + req.params.id + "' was not found!"
    }
    res.status(404);
    res.send(message);
  }
  else
  {
    res.status(200);
    res.send(user);
  }
})

//Put: Edit a user
router.put('/:id', function(req, res) {
  var user = users[req.params.id];
  if(user == null)
  {
    var message = {
      Message : "Username '" + req.params.id + "' was not found!"
    }
    res.status(404);
    res.send(message);
  }
  else
  {
    if(req.body.FirstName != null )
    {
      user.FirstName = req.body.FirstName;
    }
    if(req.body.LastName != null )
    {
      user.LastName = req.body.LastName;
    }
    if(req.body.PhoneNumber != null )
    {
      user.PhoneNumber = req.body.PhoneNumber;
    }
 
    var message = {
      Message : "User '" + req.params.id + "' was modified."
    }
    res.status(200);
    res.send(message);
  }
})

//Delete: Delete a user
router.delete('/:id', function(req, res) {
  var user = users[req.params.id];
  if(user == null)
  {
    var message = {
      Message : "Username '" + req.params.id + "' was not found!"
    }
    res.status(404);
    res.send(message);
  }
  else
  {
    users[req.params.id] = null;
    var message = {
      Message : "User '" + req.params.id + "' was deleted."
    }
    res.status(200);
    res.send(message);
  }
})

//Purge: Clear all records
router.purge('/', function(req, res) {
  var message = {
    //Object.keys(dictionary).length
    Message : "All users were deleted." // users.keys.length + " number of users were deleted."
  }
  res.status(200);
  res.send(message);
  users = new Object();
})

module.exports = router;
