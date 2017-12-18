'use strict'
const merge = require('webpack-merge')
const keysEnv = require('./keys.env')

module.exports = merge(keysEnv, {
  NODE_ENV: '"production"',
})