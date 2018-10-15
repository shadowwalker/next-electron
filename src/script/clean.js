const del = require('del')

const patterns = [
  'app/.next',
  'public',
  'dist'
]

del(patterns).then(paths => {
  console.log('Deleted files and folders:\n', paths.join('\n'))
})
