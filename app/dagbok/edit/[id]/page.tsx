import TinyEditor from "@/components/Editor";
import { Post } from "@/interfaces";
import { dbQuery } from "@/lib/db";

export default async function Dagbok({ params }: { params: { id: string } }) {
  const sql = "SELECT * FROM posts WHERE posts.id =" + parseInt(params.id);
  console.log(sql);
  const post = (await dbQuery({
    sql: sql,
    values: [],
  })) as Post[];
  console.log(post);
  return <div>{post ? <TinyEditor post={post[0]} /> : <p>loading...</p>}</div>;
}
