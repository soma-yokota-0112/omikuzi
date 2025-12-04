import React from 'react';
import Link from 'next/link';

export default function Disclaimer() {
    return (
        <div className="min-h-screen bg-stone-100 p-8 font-serif text-stone-800 flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white p-10 rounded-sm shadow-md border-t-4 border-[#B03A2E]">
                <h1 className="text-2xl font-bold mb-8 text-[#B03A2E] text-center tracking-widest">
                    免責事項
                </h1>

                <div className="text-sm leading-relaxed space-y-6">
                    <p className="text-right text-stone-500">
                        制定日: 2025年12月1日
                    </p>
                    <p className="text-right text-stone-500">
                        開発者: ぱんぱす
                    </p>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">1. コンテンツの正確性について</h2>
                        <p>
                            当アプリで提供されるおみくじの結果、アドバイス、トリビア等のコンテンツは、古くからの伝承、信仰、または一般的な情報に基づいたものであり、その正確性、完全性、有用性、将来の結果を保証するものではありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">2. 損害等の責任について</h2>
                        <p>
                            当アプリの利用によって生じた、いかなるトラブル、損害（直接的、間接的を問わず）について、開発者は一切の責任を負いません。利用者は、自己の判断と責任において本アプリを利用するものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">3. 広告配信について</h2>
                        <p>
                            当アプリは、Google AdSenseなどの第三者配信の広告サービスを利用しています。広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報（Cookie）を使用することがあります。
                        </p>
                        <p className="mt-2">
                            また、当アプリは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">4. 著作権について</h2>
                        <p>
                            当アプリに掲載されている文章、画像、プログラム等のコンテンツの著作権は、開発者または正当な権利者に帰属します。私的使用のための複製や引用など、著作権法上認められた場合を除き、無断で複製、転用、販売などの二次利用を行うことはできません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">5. リンクについて</h2>
                        <p>
                            当アプリへのリンクは、原則として自由です。ただし、公序良俗に反するサイト、違法なサイトからのリンクはお断りいたします。
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-stone-300">
                        <h2 className="text-lg font-bold text-stone-700 mb-2">お問い合わせ先</h2>
                        <p>
                            免責事項に関するご質問は、下記にご連絡ください。
                        </p>
                        <p className="mt-4 font-bold text-[#B03A2E]">
                            panpasoma@gmail.com
                        </p>
                    </section>
                </div>
            </div>

            {/* トップへ戻るボタン */}
            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-[#B03A2E] text-white rounded-lg font-bold text-center hover:bg-[#922B21] transition-colors shadow-md inline-block"
            >
                🏠 トップに戻る
            </Link>

            <footer className="text-stone-500 text-xs mt-8">
                &copy; {new Date().getFullYear()} 今年の運勢
            </footer>
        </div>
    );
}
