var jwt = require('jsonwebtoken');

const secret = "__s3nh4!!!"
const payload = {
    sub: '123',
    iss: 'example.com',
    aud: 'api.example.com'
}


let token = jwt.sign(payload, secret, {
    expiresIn: "1h"
})

console.log(token)