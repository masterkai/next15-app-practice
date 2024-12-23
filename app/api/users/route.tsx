import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/users/schema";

export function GET(req: NextRequest) {
	return NextResponse.json("Hello, world!");
}

export async function POST(req: NextRequest) {
	const res = await req.json()
	const validation = schema.safeParse(res)
	if (!validation.success) return NextResponse.json({ error: 'name is required' }, { status: 400 })
	return NextResponse.json({ id: 1, name: res.name }, { status: 201 })
}