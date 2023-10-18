export default function PostPage({ params }: { params: { id: number } }) {
  return (
    <div>
      <p>Här läggs innehållet från post nr {params.id}</p>
    </div>
  );
}
