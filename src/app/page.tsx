import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[url('/pattern-bg.png')] bg-repeat">
      <main className="flex flex-col items-center gap-8 max-w-sm w-full bg-white/90 backdrop-blur-sm p-10 rounded-sm shadow-2xl border-t-4 border-[#B03A2E]">
        <h1 className="text-5xl font-bold tracking-[0.3em] text-[#B03A2E] mb-2 writing-vertical-rl h-48 mx-auto">
          御神籤
        </h1>
        <p className="text-sm text-stone-600 leading-loose tracking-wider">
          運命を紐解く<br />
          静寂のひととき
        </p>

        <Link
          href="/result"
          className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-medium text-white transition-all duration-300 bg-[#B03A2E] rounded-sm hover:bg-[#922B21] shadow-md hover:shadow-lg tracking-widest mt-4"
        >
          運勢を占う
        </Link>
      </main>

      <footer className="mt-16 text-stone-500 text-sm">
        &copy; 2024 純粋おみくじ
      </footer>
    </div>
  );
}
