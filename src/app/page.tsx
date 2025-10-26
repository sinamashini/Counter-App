import Counter from "@/components/counter/Counter";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Next.js Counter</h1>
      <Counter initialCount={0} />
    </main>
  );
}
