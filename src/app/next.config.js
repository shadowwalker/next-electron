const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // in production, electron use file:// protocol to load local resources.
  // next.js by default use absolute path to load dynamic files, therefore
  // file:////foo/bar will not work in file protocol. However,
  // file:///./foo/bar will enable it to use relative path
  assetPrefix: isProd ? './' : '/'
}
