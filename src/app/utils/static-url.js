const isProd = process.env.NODE_ENV === 'production'

module.exports = (url) => {
  // same reason described in next.config.js
  // this utility function must used for generating url in static folder
  return isProd ? './static/' + url : '/static/' + url
}
