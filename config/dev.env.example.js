'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '""',
  CLIENT_ID: '""',
  CLIENT_SECRET: '""',
  HOST: '"http://localhost:4200"'
})
