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
              あなたの{currentYear}年の運勢をおみくじで占ってみよう
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

          {/* Detailed Introduction Section (AdSense Compliance) */}
          <div className="w-full max-w-3xl mt-8 mb-4 px-4">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-stone-200">
              <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-6 text-center tracking-wide border-b pb-4 border-stone-200">
                いつでも、どこでも、運命をその手に。<br className="md:hidden" />「デジタルおみくじ 2025」
              </h2>

              <div className="space-y-6 text-stone-700 leading-relaxed text-sm md:text-base">
                <p>
                  当サイトは、あなたの2025年をより豊かにするための「デジタルおみくじプラットフォーム」です。神社で引くような本格的な運勢診断を、スマホ一つでいつでもどこでも体験できます。
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-100">
                  <h3 className="font-bold text-[#B03A2E] mb-2 flex items-center gap-2">
                    <span className="text-lg">1.</span> 本格おみくじ＆シェア機能
                  </h3>
                  <p className="text-stone-600 pl-6">
                    伝統的なおみくじの重みはそのままに、デジタルならではの利便性を追求しました。診断結果は美しい画像として出力され、保存や印刷も可能です。SNSで友人と結果をシェアして、今年の運勢を見せ合いながら盛り上がりましょう。
                  </p>
                </div>

                <div className="bg-pink-50 rounded-xl p-5 border border-pink-100">
                  <h3 className="font-bold text-pink-500 mb-2 flex items-center gap-2">
                    <span className="text-lg">2.</span> 恋の行方を占う「恋みくじ」
                  </h3>
                  <p className="text-stone-600 pl-6">
                    「今の恋」に特化した特別な診断をご用意しました。片思い、復縁、出会い……あなたの状況に合わせたアドバイスと、告白成功へと導くユニークなラッキーアイテムを提案します。もし結果が微妙でも大丈夫。「納得いくまで引き直せる」のもデジタルならでは。ポジティブな気持ちになるまで、何度でも運命をアップデートしてください。
                  </p>
                </div>

                <p className="text-center font-medium text-stone-800 pt-2">
                  あなたの背中をそっと押すメッセージが、ここにあります。
                </p>

                <p className="text-xs text-stone-500 text-center border-t border-stone-200 pt-4 mt-4">
                  年末年始にどうしてもおみくじを引けない人もいらっしゃると思います。そんな方に是非、手軽に活用していただけると嬉しいです！
                </p>
              </div>
            </div>
          </div>

        </main>

        {/* Footer */}
        <footer className="mt-8 flex flex-col items-center gap-3">
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-stone-800 hover:text-[#B03A2E] transition-colors font-bold text-sm">
              プライバシーポリシー
            </Link>
            <Link href="/disclaimer" className="text-stone-800 hover:text-[#B03A2E] transition-colors font-bold text-sm">
              免責事項
            </Link>
          </div>
          <p className="text-stone-700 text-xs font-bold">&copy; {currentYear}</p>
        </footer>
      </div>
    </div>
  );
}
