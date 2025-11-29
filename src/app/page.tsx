import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[url('/pattern-bg.png')] bg-repeat">
      <main className="flex flex-col items-center gap-6 max-w-sm w-full bg-white/90 backdrop-blur-sm p-10 rounded-sm shadow-2xl border-t-4 border-[#B03A2E]">

        <div className="flex flex-col items-center mb-2">
          <h2 className="text-xl font-bold text-stone-600 mb-2 tracking-widest">
            あなたの{currentYear}年の運勢は？
          </h2>
          <h1 className="text-6xl font-bold tracking-widest text-[#B03A2E] mb-4 font-serif">
            御神籤
          </h1>
          <p className="text-sm text-stone-700 font-medium leading-relaxed tracking-wide">
            神籤（おみくじ）は、吉凶を占うだけでなく、<br />
            {currentYear}年の行動指針を示すものです。
          </p>
        </div>

        <div className="w-full my-2 flex flex-col items-center gap-4">
          <p className="font-bold text-[#B03A2E] text-lg tracking-widest animate-pulse">
            さあ、御神籤を<br />
            引いてみましょう！
          </p>
          <div className="w-full h-[100px] bg-stone-100 border border-stone-200 border-dashed flex items-center justify-center text-stone-400 text-xs">
            スポンサーリンク (レスポンシブ)
          </div>
        </div>

        <Link
          href="/result"
          className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#B03A2E] rounded-md hover:bg-[#922B21] shadow-md hover:shadow-lg tracking-widest"
        >
          運勢を占う
        </Link>
      </main>

      <footer className="mt-12 text-stone-500 text-sm flex flex-col items-center gap-3">
        <Link href="/privacy-policy" className="hover:underline hover:text-stone-700 transition-colors font-medium">
          プライバシーポリシー
        </Link>
        <p>&copy; {currentYear}</p>
      </footer>
    </div>
  );
}
