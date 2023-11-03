import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string }} ) {
    const {id} = params;
    console.log(id)
    const sql = "SELECT p.id, p.title, p.content, p.isPrivate, p.isDeleted, users.username AS author FROM posts p INNER JOIN users ON p.author = users.id WHERE p.id = " + parseInt(id)
    const result  = await dbQuery({
        sql: sql,
        values: []
    });
    return NextResponse.json(result)
}

export async function PATCH(req: Request, { params }: { params: { id: string }} ) {
    const {id} = params;
    const {title, content} = await req.json();
    console.log(title)
    const result  = await dbQuery({
        sql: "UPDATE posts SET title=?, content=? WHERE id = " + parseInt(id),
        values: [title, content]
    });
    return NextResponse.json(result)

}

export async function DELETE(req: Request, { params }: { params: { id: string }} ) {
    const {id} = params;
    console.log(id)
    const result  = await dbQuery({
        sql: "DELETE FROM posts WHERE id = " + parseInt(id),
        values: []
    });
    return NextResponse.json(result)

}