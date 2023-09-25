import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
const GET = async (request) =>{
    try{
        await connect()
        const posts = await Post.find()
        return new NextResponse(posts,{status: 200})
    }catch(err){
        return new NextResponse("Database err",{status: 500})
    }
}
export default GET;