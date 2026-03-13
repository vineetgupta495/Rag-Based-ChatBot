import { NextResponse } from 'next/server';

import { db } from '@/lib/mongo'

export async function GET(req: Request) {
    const userId = "default_user";

    const items = await db
        .collection("vault_items")
        .find({ userId })
        .toArray();

    return NextResponse.json(items);
}




export async function POST(req: Request) {
    const userId = "default_user";

    const body = await req.json();

    if (!body.title || !body.payload) {
        return NextResponse.json(
            { error: "Invalid data" },
            { status: 400 }
        );
    }

    const now = new Date();

    const item = {
        userId,
        title: body.title,
        website: body.website ?? "",
        payload: body.payload, // encrypted blob (for now fake)
        createdAt: now,
        updatedAt: now,
    };

    await db.collection("vault_items").insertOne(item);

    return NextResponse.json({ success: true });
}
