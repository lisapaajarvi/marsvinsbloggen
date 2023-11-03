import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const sql = "SELECT p.id, p.title, p.content, p.isPrivate, p.isDeleted, users.username AS author FROM posts p INNER JOIN users ON p.author = users.id"
   // "SELECT * FROM posts"
    const result  = await dbQuery({
        sql: sql,
        values: []
    });
    console.log(result)
    return NextResponse.json(result)
}

export async function POST(req: Request, res: Response) {
    const {author, title, content} = await req.json();

    const result  = await dbQuery({
        sql: 
      'INSERT INTO posts (author, title, content)VALUES (?,?,?)',
      values: [author, title, content]
    });
    console.log(result)
    return NextResponse.json(result)

}
