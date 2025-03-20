import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient(); // Reuse Prisma instance

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        await prisma.career.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json({ message: "Career entry deleted successfully" });
    } catch (error) {
        console.error("Error deleting career:", error);
        return NextResponse.json({ error: "Failed to delete career" }, { status: 500 });
    }
}
