const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
    }
});

userSchema.pre('save', async function(next){
    // 'this' is the user doc
    if(!this.isModified('password')) return next();// get us out of here; dont hash the password again.
    //update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS); 
    return next() //return modified version of the document with the hashed.salted password to be saved to db

});

module.export = mongoose.model('User', userScehma);