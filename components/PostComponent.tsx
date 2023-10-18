import { Post } from "@/interfaces";
interface Props {
  post: Post;
}
export default function PostComponent(props: Props) {
  return (
    <div
      className="bg-yellow-50 rounded-lg 
    m-2 p-4 w-full"
    >
      <h3 className="text-xl text-blue-600">
        {props.post.title} av {props.post.author}
      </h3>
      <p>{props.post.content}</p>
    </div>
  );
}
