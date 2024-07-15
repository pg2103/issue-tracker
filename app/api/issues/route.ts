import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { createIssueSchema } from '@/app/validationSchemas';


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }
    // Await the prisma.issue.create call
    const newIssue = await prisma.issue.create({
        data: {
            title: validation.data.title,
            description: validation.data.description
        }
    });
    return NextResponse.json(newIssue, { status: 201 });
}