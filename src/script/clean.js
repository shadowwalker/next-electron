const del = require("del")

const patterns = [
  "app/.next",
  "../build"
]

del(patterns, { force: true }).then(paths => {
  console.log("Deleted files and folders:\n", paths.join("\n"))
})