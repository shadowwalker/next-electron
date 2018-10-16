const { join } = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = (url) => {
  return isProd ? join('./static', url) : join('/static', url)
}
