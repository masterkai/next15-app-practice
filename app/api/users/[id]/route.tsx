import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/users/schema";

export function GET(
	req: NextRequest,
	{ params }: { params: { id: number } }
) {
	if (params.id > 10) {
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	}
	return NextResponse.json("Hello, world!");
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: number } }
) {
	// if invalid return 400
	const body = await req.json();
	const validation = schema.safeParse(body);
	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}
	// Fetch the user from the database with the id
	// if not found return 404
	if (params.id > 10) {
		return NextResponse.json({ error: "not found" }, { status: 404 });
	}
	// update the user
	// return 200 with the updated user

	return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: number } }
) {
	// Fetch the user from the database with the id
	// if not found return 404
	if (params.id > 10) {
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	}
	// delete the user
	// return 204
	return NextResponse.json(null, { status: 204 });
}