const os = require('os')

//info abpout current user
const user = os.userInfo()
console.log(user)

// returns system uptime
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentos = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentos)