import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "../../../models/Post";


export const GET = async (request) =>{
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    try {
        await connect();
        const posts = await Post.find(username && {username});
        return new NextResponse(JSON.stringify(posts), {status: 200});
    }
     catch (err) {
        return new NextResponse("Database Error", {status: 500});
    }

    // return new NextResponse("It is work", {status: 200});
}



// export const POST = async (request) =>{
//     const body = await request.json();
//     const newPost = new Post(body)
   
        
//         console.log(newPost)
//     try {
//         await connect();
//         await newPost.create();
        
//         return new NextResponse("Post created", {status: 201});
//     }
//      catch (err) {
//         return new NextResponse("Database Error", {status: 500});
//     }

//     // return new NextResponse("It is work", {status: 200});
// }

// create post
export async function POST(request){
    const {title, desc, image, content,username} = await request.json()
    await connect();
    await Post.create({title, desc, image, content,username});
    return NextResponse.json({message: "Add post create"}, {status: 200})
}

//get all post
// export async function GET(){
//     await connect();
//     const allPost = await Post.find();
//     NextResponse.json({allPost});
// }