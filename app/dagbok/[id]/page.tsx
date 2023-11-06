import { Post } from "@/interfaces";
import { dbQuery } from "@/lib/db";
import parse from "html-react-parser";
import Link from "next/link";

export default async function PostPage({ params }: { params: { id: string } }) {
  const sql =
    // längre query (men lätt att se vad som hämtas)
    // "SELECT p.id, p.title, p.content, p.isDeleted, p.isPrivate, users.username AS author FROM posts p JOIN users ON p.author = users.id WHERE p.id =" +
    // mer kompakt query för om man vill hämta allt
    "Select p.*, users.username AS author from posts p join users on p.author=users.id where p.id=" +
    parseInt(params.id);
  console.log(sql);
  const post = (await dbQuery({
    sql: sql,
    values: [],
  })) as Post[];
  console.log(post);
  const htmlContent = parse(post[0].content);
  return (
    <div>
      <p>Här visas en post med id: {params.id}</p>
      <p>
        {post[0].title} av {post[0].author}
      </p>
      {htmlContent}
      <Link href={`/dagbok/edit/${post[0].id}`}>
        <button
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-end"
          }
        >
          REDIGERA INLÄGG
        </button>
      </Link>
    </div>
  );
}
