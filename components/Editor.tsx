"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { Post } from "@/interfaces";
import { redirect } from "next/navigation";
import router from "next/router";

type Props = { post?: Post };
function TinyEditor({ post }: Props) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [editing, setEditing] = useState(true);

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleEditorChange = (content: string) => {
    setContent(content);
  };

  const editPost = async (post: Post) => {
    const updatedPost = {
      title: title,
      content: content,
    };
    console.log(updatedPost);
    await fetch("http://localhost:3000/api/dagbok/" + post.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTitle("");
        setContent("");
        setEditing(false);
      });
  };

  const save = async () => {
    if (post) {
      editPost(post);
    } else if (content && title) {
      const newPost = {
        author: 2,
        title: title,
        content: content,
      };
      console.log(newPost);
      await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTitle("");
          setContent("");
        });
    } else {
      console.log("Du måste skriva något här!");
    }
  };

  if (post && !editing) {
    redirect(`/dagbok/${post.id}`);
  }

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Skriv din titel här!"
        value={title}
        onChange={handleTitleChange}
      />
      <Editor
        id="editor"
        apiKey={process.env.NEXT_PUBLIC_TINY_KEY}
        value={content}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          menubar: false,
          placeholder: "Skriv ditt inlägg här!",
          toolbar:
            "undo redo | formatselect | " +
            "bold italic forecolor backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-end"
        }
        onClick={save}
      >
        SPARA
      </button>
    </div>
  );
}

export default TinyEditor;
