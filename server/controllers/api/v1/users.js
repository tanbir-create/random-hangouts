const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.signUp = function(req, res){

    if(req.body.password != req.body.confirmPassword){
        return res.status(422).json({
            message: "passwords don't match"
        });
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            return res.status(500).json({
                message: "Error finding user while signing up"
            });
        }

        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    return res.status(500).json({
                        message: "Error in creating user while signing up"
                    })
                }

                return res.status(200).json({
                    message: "New user signed up"
                });
            });
        }else{
            return res.status(400).json({
                message: "User already signed up"
            })
            
        }
    })

}

module.exports.createSession = async function(req, res){

    try {
        let user = await User.findOne({email: req.body.email});

        if(!user || user.password != req.body.password){
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }

        return res.status(200).json({
            message: "jwtToken",
            data: {
                token: jwt.sign(user.toJSON(), 'todohashcode', {expiresIn: 300000})
            }
        });

    } catch (err) {
        console.log("*****", err);
        return res.status(500, {
            message: "Internal Server Error"
        });
    }
}

