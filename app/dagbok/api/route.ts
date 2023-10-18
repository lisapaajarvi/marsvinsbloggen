import sendQuery from '@/helpers/connection';
import { NextResponse } from 'next/server'
export async function GET() {
    const sql = "SELECT * FROM marsvinsblogg";
    const results = await sendQuery(sql)
    console.log("res", results)
    return NextResponse.json(results)
}