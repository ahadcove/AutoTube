'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyDqOdprC6idVvklBIcx8NO2k4DNi4qQG3A"',
  CLIENT_ID: '"231931804146-j8bkfelv76qhtbr4hitn195skkp5294c.apps.googleusercontent.com"',
  CLIENT_SECRET: '"LG9etnQ7XqR5Deflv_etJjE"',
  HOST: '"http://localhost:8080"'
})
