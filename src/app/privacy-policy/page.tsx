import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-stone-100 p-8 font-serif text-stone-800 flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white p-10 rounded-sm shadow-md border-t-4 border-[#B03A2E]">
                <h1 className="text-2xl font-bold mb-8 text-[#B03A2E] text-center tracking-widest">
                    プライバシーポリシー
                </h1>

                <div className="text-sm leading-relaxed space-y-6">
                    <p className="text-right text-stone-500">
                        制定日: 2025年12月1日
                    </p>
                    <p className="text-right text-stone-500">
                        開発者: [開発者名または会社名]
                    </p>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">第1条 個人情報の取得について</h2>
                        <p>
                            当アプリは、利用者個人を特定できる情報（氏名、住所、メールアドレス、電話番号など）を一切取得しておりません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">第2条 利用情報の取得について</h2>
                        <p className="mb-2">
                            当アプリは、サービスの品質向上および利用状況の分析のために、匿名化された以下の情報を自動的に取得する場合があります。
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>アクセス解析ツール:</strong> 当アプリは、利用状況の分析のため、Google Firebase Analytics（または Google Analytics）を使用しています。これに伴い、利用者の端末情報、利用時間、操作履歴などがGoogle社に送信される場合がありますが、<strong>個人を特定する情報は含まれません。</strong>これらの情報は、サービス改善および利用傾向の把握のためにのみ使用されます。
                            </li>
                            <li>
                                <strong>広告配信サービス:</strong> 当アプリは、収益化のため、Google AdMob（またはその他の広告ネットワーク名）などの第三者広告配信事業者を利用しています。広告配信事業者は、利用者の興味に応じた広告を表示するため、当アプリや他のウェブサイトへのアクセス情報に基づいた<strong>Cookie（クッキー）</strong>などの識別情報を利用する場合がありますが、個人を特定する目的では一切使用されません。
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">第3条 利用目的</h2>
                        <p className="mb-2">
                            当アプリが取得する利用情報（匿名化された端末情報、利用ログなど）の利用目的は、以下の通りです。
                        </p>
                        <ul className="list-disc pl-5">
                            <li>当アプリの機能改善および新機能開発のため。</li>
                            <li>利用者層の傾向を分析し、より適切な広告配信を行うため。</li>
                            <li>不具合発生時の原因究明のため。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">第4条 第三者提供および情報開示</h2>
                        <p>
                            当アプリは、利用情報について、法令に基づく場合を除き、利用者の同意なく第三者に提供することはありません。ただし、第2条に定めるアクセス解析サービスおよび広告配信サービスにおける外部送信についてはこの限りではありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">第5条 利用者の権利</h2>
                        <p>
                            利用者は、自己の情報の利用停止または削除を求める権利を有します。当アプリは個人情報を保持していませんが、利用情報の取り扱いについてご質問がある場合は、以下のお問い合わせ先にご連絡ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">第6条 著作権および免責事項</h2>
                        <p className="mb-2">
                            <strong>著作権:</strong> 当アプリに表示される和歌、翻訳文、詳細運勢、デザインの著作権は、開発者[開発者名]に帰属します。
                        </p>
                        <p>
                            <strong>免責事項:</strong> 当アプリで提供されるおみくじの結果、アドバイスは、古くからの伝承、信仰に基づいたものであり、<strong>その正確性、効果を保証するものではありません。</strong>利用者は自己の判断と責任において本アプリを利用するものとし、本アプリの結果によって生じたいかなる損害についても、開発者は一切の責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-stone-700 mb-2 border-b border-stone-300 pb-1">第7条 プライバシーポリシーの変更</h2>
                        <p>
                            当アプリは、法令の変更またはサービスの改善に伴い、本プライバシーポリシーを予告なく変更することがあります。変更後のポリシーは、当アプリ内または当アプリの公開サイトに掲載した時点から効力を発揮するものとします。
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-stone-300">
                        <h2 className="text-lg font-bold text-stone-700 mb-2">お問い合わせ先</h2>
                        <p>
                            プライバシーポリシーに関するご質問は、下記にご連絡ください。
                        </p>
                        <p className="mt-4 font-bold text-[#B03A2E]">
                            [連絡先メールアドレス]
                        </p>
                    </section>
                </div>
            </div>
            <footer className="text-stone-500 text-xs mt-8">
                &copy; {new Date().getFullYear()} 今年の運勢
            </footer>
        </div>
    );
}
