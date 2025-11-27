import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[url('/pattern-bg.png')] bg-repeat">
      <main className="flex flex-col items-center gap-8 max-w-md w-full bg-white/80 backdrop-blur-sm p-12 rounded-xl shadow-xl border-4 border-red-800">
        <h1 className="text-4xl font-bold tracking-widest text-red-800 mb-4">
          おみくじ
        </h1>
        <p className="text-lg text-stone-700 leading-relaxed">
          古来より伝わる運勢占い。<br />
          あなたの今日の運命を<br />
          紐解いてみませんか。
        </p>

        <div className="my-8">
          <div className="w-32 h-48 bg-red-800 mx-auto rounded-lg shadow-inner flex items-center justify-center border-2 border-yellow-600">
            <span className="text-white text-2xl font-bold writing-vertical-rl">御神籤</span>
          </div>
        </div>

        <Link
          href="/result"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-red-700 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          おみくじを引く
        </Link>
      </main>

      <footer className="mt-16 text-stone-500 text-sm">
        &copy; 2024 純粋おみくじ
      </footer>
    </div>
  );
}
