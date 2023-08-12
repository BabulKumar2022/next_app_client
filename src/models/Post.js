import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    
    desc:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        unique: true,
    },
    content:{
        type: String,
        unique: true,
    },
    username:{
        type: String,
        unique: true,
    },
},
 {timestamps: true}
 );

 const post = mongoose.models.posts || mongoose.model("posts", postSchema)

 export default post