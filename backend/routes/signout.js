const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./../models/usuario');
const app = express();

 
app.post('/signout', function (req, res) {
  try {
    req.session = null;
    return res.status(200).json({
      ok: true,
      message: "You've been signed out!"
    })
  } catch (err) {
    this.next(err);
  }
})

module.exports = app;