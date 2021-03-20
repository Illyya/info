module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/info/'
    : '/',
    outputDir: 'docs'
}