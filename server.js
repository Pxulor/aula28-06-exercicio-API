const app = require("./src/app")
const PORT = process.env.PORT

console.log(PORT)

app.listen(PORT, ()=>console.log("Server Up"))