import connectMongoDB from "@/libs/mongoose"
import Developer from "@/models/developers"
import { NextResponse } from "next/server"

export async function GET(req , {params}){
    const { developerID } = params
    await connectMongoDB()
    const developer = await Developer.findById(developerID)
    return NextResponse.json({developer})
}

export async function PUT(req, { params }) {
    const { developerID } = params
    const { newname:name, newdescription:description, newprojects:projects, newproperties:properties, newimage:image } = await req.json()
    await connectMongoDB()
    await Developer.findByIdAndUpdate(developerID, { name, description, projects, properties, image })
    return NextResponse.json({message: 'Developer updated'}, {status: 200})
}

export async function DELETE(req , {params}){
    const { developerID } = params
    await connectMongoDB()
    await Developer.findByIdAndDelete(developerID)
    return NextResponse.json({message: 'Developer Deleted'}, {status: 200})
}
