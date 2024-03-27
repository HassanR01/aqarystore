import connectMongoDB from "@/libs/mongoose"
import Admin from "@/models/admins"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    const { username } = params
    await connectMongoDB()
    const admin = Admin.findOne({ userName: username })
    return NextResponse.json({admin})
}

export async function PUT(req, { params }) {
    const { username } = params
    const { newname: name, newuserName: userName, newpassword: password} = await req.json()
    await Admin.findByIdAndUpdate(username, { name, userName, password })
    return NextResponse.json({message: 'Admin updated'}, {status: 200})
}

export async function DELET(req , {params}){
    const { username } = params
    await connectMongoDB()
    await Admin.findOneAndDelete({userName: username})
    return NextResponse.json({message: "Admin Deleted"} , {status : 200})
}
