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
          <div className="bg-stone-100/50 p-3 rounded-md mt-2">
            <p className="text-sm text-stone-700 font-medium leading-relaxed tracking-wide">
              神籤（おみくじ）は吉凶を占うだけでなく<br />
              {currentYear}年の行動指針を示すものです<br />
              <span className="text-xs text-stone-500 mt-2 block">神社で引くおみくじと同様の内容にしています</span>
            </p>
          </div>
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
          className="group relative inline-flex items-center justify-center w-full px-8 py-5 text-xl font-bold text-white transition-all duration-200 bg-[#B03A2E] rounded-lg shadow-[0_4px_0_#7f1d1d] hover:shadow-[0_2px_0_#7f1d1d] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] tracking-widest"
        >
          おみくじを引く
        </Link>
      </main>

      <footer className="mt-12 flex flex-col items-center gap-3">
        <Link href="/privacy-policy" className="text-stone-800 hover:text-[#B03A2E] transition-colors font-bold text-sm">
          プライバシーポリシー
        </Link>
        <p className="text-stone-700 text-xs font-bold">&copy; {currentYear}</p>
      </footer>
    </div>
  );
}
