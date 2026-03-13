
import { NextResponse } from "next/server";

export async function GET() {
    const userId = "default_user";
    return NextResponse.json({ userId });
}