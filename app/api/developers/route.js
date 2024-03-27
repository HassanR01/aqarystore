import connectMongoDB from "@/libs/mongoose"
import Developer from "@/models/developers"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { name, description, projects, properties, visitors } = await req.json()
    await connectMongoDB()
    await Developer.create({ name, description, projects, properties, visitors })
    return NextResponse.json({ message: 'Developer created' }, { status: 200 })
}