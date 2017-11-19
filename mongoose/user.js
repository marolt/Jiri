import mongoose from 'mongoose';

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    is_admin: Boolean,
    name: String,
    email: String,
    password: String,
    company: String,
}, { collection: "Jiri" });

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

export default User
