import { NextRequest, NextResponse } from "next/server";
import productSchema from "@/app/api/products/schema";

export async function GET(req: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: "Product 1", price: 100 },
		{ id: 2, name: "Product 2", price: 200 },
		{ id: 3, name: "Product 3", price: 300 }
	]);
}

export async function POST(req: NextRequest) {
	const body = await req.json();
	const validation = productSchema.safeParse(body);
	if (!validation.success) {
		return NextResponse.json({ errors: validation.error.errors }, { status: 400 });
	}
	return NextResponse.json
	({ message: "Product created successfully" }, { status: 201 });
}