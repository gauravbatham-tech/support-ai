import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Settings from "@/model/settings.model";

export async function POST(req: NextRequest) {
    try {
        const { ownerId, businessName, supportEmail, knowledge } = await req.json();
        if (!ownerId) {
            return NextResponse.json({ message: "ownerId is required" }, { status: 400 })
        }
        await connectDb()
        const settings = await Settings.findOneAndUpdate({ ownerId }, { ownerId, businessName, supportEmail, knowledge }, { upsert: true, new: true })
        return NextResponse.json(settings)
    } catch (error) {
        return NextResponse.json({ message: `settings error ${error}` }, { status: 500 })
    }
}

