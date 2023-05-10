const User = require('../../models/user');
const jwt = require('jsonwebtoken')

module.exports = {
    create
};

async function create(req, res) {
    try {
        // 1) create user
        const user = await User.create(req.body);
        // 2) create the jwt by passing in the user info for the jwt payload
        const token = createJWT(user); // creates a JSON token
        // 3) send the new jwt to the client using res.json
        res.json(token);
    } catch (error) {
        //if error, well send the error the client
        console.log(error)
        res.status(400).json(error);
    }
}

function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '24h'})
    // jwt.sign() is a special method that does two things:
    //1) creates a JSON web token with the provided payload, server secret and optional settings
    //2) cryptographically signs the token with the provided secret so it can be validated later. 
}

// function create(req, res) {
//     // //baby steps
//     // //this completes the flow from component to server and back!
//     // res.json({
//     //     user: {
//     //         name: req.body.name,
//     //         email: req.body.email
//     //     }
//     // });
// }