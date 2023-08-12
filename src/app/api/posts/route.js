import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "../../../models/Post";
// import post from "../../../models/Post";

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



export const POST = async (request) =>{
    const body = await request.json();
    const newPost = new Post(body)
   
        
        console.log(newPost)
    try {
        await connect();
        await newPost.insertOne();
        
        return new NextResponse("Post created", {status: 201});
    }
     catch (err) {
        return new NextResponse("Database Error", {status: 500});
    }

    // return new NextResponse("It is work", {status: 200});
}