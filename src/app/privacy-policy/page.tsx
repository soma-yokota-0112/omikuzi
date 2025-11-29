import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-stone-100 p-8 font-serif text-stone-800">
            <div className="max-w-2xl mx-auto bg-white p-10 rounded-sm shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-[#B03A2E]">プライバシーポリシー</h1>
                <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                        当サイト（以下、「当サイト」と言います。）は、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」と言います。）を定めます。
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-2 text-stone-700">1. 個人情報の収集について</h2>
                    <p>
                        当サイトでは、Googleを含む第三者配信事業者がCookieを使用して、ユーザーのウェブサイトでの閲覧履歴に基づく広告を配信します。
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-2 text-stone-700">2. 広告について</h2>
                    <p>
                        当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                    </p>

                    <div className="mt-10 pt-6 border-t border-stone-200">
                        <Link href="/" className="text-[#B03A2E] hover:underline">
                            ← トップページに戻る
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
