import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Pop Shrine Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        {/* Decorative elements for pop shrine feel */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {/* Torii gate silhouette */}
          <div className="absolute top-10 left-1/4 w-32 h-24 border-8 border-red-400 rounded-t-3xl"></div>
          <div className="absolute top-10 left-1/4 -ml-8 w-48 h-3 bg-red-400 rounded-full"></div>
          <div className="absolute top-20 left-1/4 -ml-8 w-48 h-3 bg-red-400 rounded-full"></div>

          {/* Floating hearts and sparkles */}
          <div className="absolute top-20 right-20 text-4xl animate-pulse">✨</div>
          <div className="absolute bottom-40 left-10 text-3xl animate-bounce">💖</div>
          <div className="absolute top-1/3 right-1/4 text-2xl">🌸</div>
          <div className="absolute bottom-1/4 right-1/3 text-3xl animate-pulse">⛩️</div>

          {/* Soft gradient orbs */}
          <div className="absolute top-1/4 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/3 right-20 w-56 h-56 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-300 rounded-full blur-2xl opacity-40"></div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <main className="flex flex-col items-center gap-6 max-w-5xl w-full">

          {/* Title Section */}
          <div className="text-center mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 tracking-wide">
              {currentYear}年の運勢を占う
            </h1>
            <p className="text-sm text-stone-600">
              お好きなおみくじを選んでください
            </p>
          </div>

          {/* Ad Space 1: Above cards */}
          <div className="w-full max-w-2xl mb-2">
            <div className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-stone-300 rounded-xl p-4 min-h-[90px] flex items-center justify-center shadow-md">
              <p className="text-stone-400 text-sm">Google Adsense 広告枠 #1</p>
            </div>
          </div>

          {/* Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

            {/* Regular Omikuji Card */}
            <Link
              href="/result"
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl border-t-4 border-[#B03A2E] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-6xl">🎴</div>
                <h2 className="text-2xl font-bold text-[#B03A2E] tracking-widest font-serif">
                  おみくじ
                </h2>
                <p className="text-sm text-stone-700 leading-relaxed">
                  神籤（おみくじ）は、吉凶を占うだけでなく、<br />
                  その年の行動指針を示すものです<br />
                  ※神社で引くおみくじと同様の内容です
                </p>
                <div className="mt-2 px-6 py-3 bg-[#B03A2E] text-white rounded-lg text-sm font-bold tracking-wide group-hover:bg-[#922B21] transition-colors shadow-md">
                  通常のおみくじを引く
                </div>
              </div>
            </Link>

            {/* Love Omikuji Card */}
            <Link
              href="/love-result"
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-6xl">💖</div>
                <h2 className="text-2xl font-bold text-pink-500 tracking-wide" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                  恋みくじ
                </h2>
                <p className="text-sm text-pink-700 leading-relaxed" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                  恋の行方を占います💕<br />
                  運命の人との出会い、告白、デート…<br />
                  あなたの恋愛運をチェック！
                </p>
                <div className="mt-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-bold tracking-wide group-hover:from-pink-500 group-hover:to-pink-600 transition-all shadow-lg" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                  恋みくじを引く ✨
                </div>
              </div>
            </Link>

          </div>

          {/* Ad Space 2: Below cards */}
          <div className="w-full max-w-2xl mt-2">
            <div className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-stone-300 rounded-xl p-4 min-h-[90px] flex items-center justify-center shadow-md">
              <p className="text-stone-400 text-sm">Google Adsense 広告枠 #2</p>
            </div>
          </div>

        </main>

        {/* Footer */}
        <footer className="mt-8 flex flex-col items-center gap-3">
          <Link href="/privacy-policy" className="text-stone-800 hover:text-[#B03A2E] transition-colors font-bold text-sm">
            プライバシーポリシー
          </Link>
          <p className="text-stone-700 text-xs font-bold">&copy; {currentYear}</p>
        </footer>
      </div>
    </div>
  );
}
