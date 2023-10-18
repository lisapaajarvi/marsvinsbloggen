export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center h-full min-h-[calc(100vh-6rem)] w-screen  bg-blue-100 ">
      <div className="bg-purple-200 w-full max-w-screen-lg flex p-4 justify-center">
        {children}
      </div>
    </main>
  );
}
