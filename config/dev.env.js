'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyDqOdprC6idVvklBIcx8NO2k4DNi4qQG3A"',
  CLIENT_ID: '"231931804146-450ql9kfkptj0h6o258a93hp7nemqo30.apps.googleusercontent.com"',
  CLIENT_SECRET: '"s0T0bPbXjtcP_4IFYZlMXlPw"'
})
