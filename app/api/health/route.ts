import { NextResponse } from "next/server";
import { db } from "@/lib/mongo";




export async function GET() {
    const collections = await db.listCollections().toArray();
    return NextResponse.json({ collections, status: "ok" });
}