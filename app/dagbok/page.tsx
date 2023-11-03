"use client";
import TinyEditor from "@/components/Editor";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dagbok() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("/api");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
    };
    getPosts();
  }, []);

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/dagbok/" + id, {
      method: "DELETE",
    });
    console.log(res.json());
  };

  console.log(posts);
  return (
    <div>
      <TinyEditor />
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className={"flex justify-between items-center w-100"}
        >
          <Link href={`/dagbok/${post.id}`}>
            <PostComponent post={post} />
          </Link>
          <button
            className={
              "bg-red-500 hover:bg-red-700 h-10 text-white font-bold py-2 px-4 rounded"
            }
            onClick={(e) => handleDelete(post.id)}
          >
            TA BORT
          </button>
        </div>
      ))}
    </div>
  );
}
