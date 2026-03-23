import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import BlogModel from "@/lib/models/BlogModel";
import { ConnectDB } from "@/lib/config/db";
import {writeFile} from 'fs/promises'

export async function POST(request) {
  await ConnectDB(); 
  try {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');

    if (!image) {
      return NextResponse.json({ success: false, msg: "No image" });
    }

    const cleanName = image.name.replaceAll(" ", "_");
    const bytes = await image.arrayBuffer();
    const uint8Array = new Uint8Array(bytes);

    const filePath = path.join(process.cwd(), 'public', `${timestamp}_${cleanName}`);
    fs.writeFileSync(filePath, uint8Array);

    const imgUrl = `/${timestamp}_${cleanName}`;
    const blogData = {
      title: `${formData.get('title')}`,
      description: `${formData.get('description')}`,
      category: `${formData.get('category')}`,
      author: `${formData.get('author')}`,
      image: imgUrl,
      authorimage: `${formData.get('authorimage')}`
    }
    await BlogModel.create(blogData);
    console.log("Blog Saved");
    return NextResponse.json({ success: true, msg: "Blog added" });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, msg: error.message });
  }
}

export async function GET(request) {
  await ConnectDB(); 

  try {
    const blogId = request.nextUrl.searchParams.get('id');

    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ success: true, blogs });
    }

  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ success: false, msg: error.message });
  }
}

//api to delete blog
export async function DELETE(request) {
  await ConnectDB(); 
  try {
    const id = request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    
    fs.unlink(`./public${blog.image}`, () => {}); 
    await BlogModel.findByIdAndDelete(id);
    
    return NextResponse.json({ success: true, msg: "Blog deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}