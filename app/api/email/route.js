import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";

export async function POST(request) {
  await ConnectDB(); 
  try {
    const formData = await request.formData();
    const emailData = {
      email: `${formData.get('email')}`,
    }
    await EmailModel.create(emailData);
    return NextResponse.json({ success: true, msg: "Email Subscribed" });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}

export async function GET(request) {
  await ConnectDB(); 
  try {
    const emails = await EmailModel.find({});
    return NextResponse.json({ success: true, emails });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}

export async function DELETE(request) {
  await ConnectDB(); 
  try {
    const id = request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Email Deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}
