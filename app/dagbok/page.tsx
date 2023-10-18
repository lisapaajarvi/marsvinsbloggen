// "use client";
import Link from "next/link";
import PostComponent from "@/components/PostComponent";
// import { useEffect, useState } from "react";
import { Post } from "@/interfaces";
import sendQuery from "@/helpers/connection";

export default async function Dagbok() {
  //const [posts, setPosts] = useState<Post[]>([]);
  const sql = "SELECT * FROM marsvinsblogg";
  const posts = await sendQuery(sql);
  console.log(posts);

  // const getPosts = () => {
  //   fetch("http://localhost:3000/dagbok/api")
  //     .then((res) => res.json())
  //     .then((data: Post[]) => {
  //       setPosts(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       throw new Error("Kan inte hämta inlägg");
  //     });
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <div className="flex flex-col align-center">
      {posts.map((post: Post) => (
        <Link key={post.id} href={`/dagbok/${post.id}`}>
          <PostComponent post={post} />
        </Link>
      ))}
    </div>
  );
}
