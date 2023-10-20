"use client";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/interfaces";
//import { dbQuery } from "@/lib/db";
import Link from "next/link";
import { useEffect, useState } from "react";

//OBS: funktionen måste vara async om hämtningen sker direkt i en serverkomponent
export default function Dagbok() {
  // const sql = "SELECT * FROM posts";
  // const posts = (await dbQuery({sql, values:[]})) as Post[];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("/api/dagbok");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post: Post) => (
        <Link key={post.id} href={`/dagbok/${post.id}`}>
          <PostComponent post={post} />
        </Link>
      ))}
    </div>
  );
}
