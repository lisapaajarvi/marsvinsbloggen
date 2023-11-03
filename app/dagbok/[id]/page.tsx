import Editor from "@/components/Editor";
import { Post } from "@/interfaces";
import { dbQuery } from "@/lib/db";
import parse from "html-react-parser";
import Link from "next/link";

export default async function PostPage({ params }: { params: { id: string } }) {
  const sql =
    "SELECT p.id, p.title, p.content, p.isPrivate, p.isDeleted, users.username AS author FROM posts p INNER JOIN users ON p.author = users.id WHERE p.id =" +
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
      <button>DELETE</button>
      <Link href={`/dagbok/edit/${post[0].id}`}>
        <button>EDIT</button>
      </Link>
    </div>
  );
}
