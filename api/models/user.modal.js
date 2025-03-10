import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    avatar:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s'
    },

},
    { timestamps: true});
     const user = mongoose.model('user',userSchema);
     export default user;