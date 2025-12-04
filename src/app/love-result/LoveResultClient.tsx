'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Share2, MessageCircle } from 'lucide-react';
import { LOVE_TRIVIA } from '@/data/loveTriviaData';

export default function LoveResultClient() {
    const [data, setData] = useState<LoveFortune | null>(null);
    const [loading, setLoading] = useState(true);
    const [trivia, setTrivia] = useState(LOVE_TRIVIA[0]);

    useEffect(() => {
        // Set random trivia on mount
        setTrivia(LOVE_TRIVIA[Math.floor(Math.random() * LOVE_TRIVIA.length)]);

        const init = async () => {
            setLoading(true);

            // Artificial delay for animation and trivia reading
            await new Promise(resolve => setTimeout(resolve, 4000));

            try {
                const res = await fetch('/api/love-draw');
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error('Failed to fetch love fortune', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, []);

    const handleLineShare = () => {
        if (!data) return;
        const currentYear = new Date().getFullYear();
        const text = `私の${currentYear}年の恋愛運は【${data.fortune.title}】でした！ #恋愛みくじ #今年の運勢`;
        const url = window.location.href;
        const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(text + '\n' + url)}`;
        window.open(shareUrl, '_blank');
    };

    const handleXShare = () => {
        if (!data) return;
        const currentYear = new Date().getFullYear();
        const text = `私の${currentYear}年の恋愛運は【${data.fortune.title}】でした！ #恋愛みくじ #今年の運勢`;
        const url = window.location.href;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    };


    if (loading || !data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-white p-4">
                <div className="w-full max-w-md">
                    {/* Loading Animation */}
                    <div className="text-center mb-6">
                        <div className="text-6xl mb-4 animate-bounce">💖</div>
                        <p className="text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                            恋の運勢を占い中...
                        </p>
                        <div className="flex gap-2 justify-center">
                            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-75"></div>
                            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>

                    {/* Ad Space */}
                    <div className="mb-6">
                        <div className="bg-pink-50 border-2 border-dashed border-pink-200 rounded-xl p-4 min-h-[100px] flex items-center justify-center">
                            <p className="text-pink-400 text-sm">Google Adsense 広告枠</p>
                        </div>
                    </div>

                    {/* Trivia */}
                    {trivia && (
                        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-200">
                            <h3 className="text-lg font-bold text-pink-500 mb-3 flex items-center gap-2" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                                <span>💡</span>
                                <span>{trivia.title}</span>
                            </h3>
                            <p className="text-sm text-pink-900 leading-relaxed" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                                {trivia.content}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center py-8 px-4 bg-gradient-to-br from-pink-100 via-pink-50 to-white">

            {/* Main Result Card */}
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden mb-6 border-4 border-pink-300">

                {/* Header with decorative pattern */}
                <div className="h-3 w-full bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300"></div>

                {/* Title Section */}
                <div className="p-8 text-center bg-gradient-to-b from-pink-50 to-white">
                    <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-3" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                        {data.fortune.title}
                    </h1>
                </div>

                {/* Message Section */}
                <div className="px-8 py-6">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-6 border-2 border-pink-200">
                        <p
                            className="text-base leading-relaxed text-pink-900 text-center"
                            style={{
                                fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif"
                            }}
                            dangerouslySetInnerHTML={{ __html: data.fortune.message }}
                        />
                    </div>
                </div>

                {/* ラッキーアイテムセクション */}
                <div className="px-8 py-6 bg-gradient-to-b from-pink-50 to-white border-t-2 border-pink-100">
                    <h3 className="text-xl font-bold text-pink-600 mb-4 text-center flex items-center justify-center gap-2" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                        <span>🎁</span>
                        <span>ラッキーアイテム</span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {data.fortune.luckyItems.map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-pink-100 to-pink-200 px-4 py-2 rounded-full border-2 border-pink-300 shadow-sm">
                                <p className="text-sm font-bold text-pink-700" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 詳細運勢セクション - 2列 */}
                <div className="px-6 py-4 bg-gradient-to-b from-white to-pink-50">
                    {/* 2列グリッドレイアウト */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {data.fortune.details.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-4 border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-md"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl">{getDetailEmoji(detail.name)}</span>
                                    <h3 className="text-lg font-bold text-pink-600" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                                        {detail.name}
                                    </h3>
                                </div>
                                <p className="text-sm text-pink-900 leading-relaxed" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                                    {detail.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom decoration */}
                <div className="h-3 w-full bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300"></div>
            </div>

            {/* Ad Space 1: Google Adsense */}
            <div className="w-full max-w-2xl mb-4">
                <div className="bg-pink-50 border-2 border-dashed border-pink-200 rounded-xl p-4 min-h-[100px] flex items-center justify-center">
                    <p className="text-pink-400 text-sm">Google Adsense 広告枠</p>
                </div>
            </div>

            {/* SNS Share Buttons */}
            <div className="w-full max-w-2xl mb-4">
                <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-pink-200">
                    <p className="text-center text-sm font-bold text-pink-600 mb-3" style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}>
                        結果をシェアしよう！💕
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleLineShare}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-[#06C755] text-white rounded-lg font-bold hover:bg-[#05b04d] transition-all shadow-md hover:shadow-lg"
                            style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}
                        >
                            <MessageCircle size={20} />
                            <span>LINEでシェア</span>
                        </button>
                        <button
                            onClick={handleXShare}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                            style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}
                        >
                            <Share2 size={20} />
                            <span>Xでシェア</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Ad Space 2: Affiliate (Matching Apps & Fortune Telling) */}
            <div className="w-full max-w-2xl mb-4">
                <div className="bg-purple-50 border-2 border-dashed border-purple-200 rounded-xl p-4 min-h-[120px] flex items-center justify-center">
                    <p className="text-purple-400 text-sm text-center">
                        アフィリエイト広告枠<br />
                        <span className="text-xs">(マッチングアプリ・占いサービス)</span>
                    </p>
                </div>
            </div>

            {/* Action Button - Top Page Only */}
            <div className="w-full max-w-2xl mb-6">
                <Link
                    href="/"
                    className="block px-6 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold text-center hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                    style={{ fontFamily: "'Rounded Mplus 1c', 'M PLUS Rounded 1c', sans-serif" }}
                >
                    🏠 トップに戻る
                </Link>
            </div>

            {/* Footer */}
            <footer className="text-pink-400 text-xs mt-4">
                © {new Date().getFullYear()} 今年の運勢
            </footer>
        </div>
    );
}

// Helper function
function getDetailEmoji(name: string): string {
    const emojiMap: Record<string, string> = {
        '運命度': '⭐',
        '出会い': '🌟',
        '相性': '💞',
        '告白': '💌',
        'デート': '🎀',
        '片想い': '💝',
        '復縁': '🔄',
        'ライバル': '⚔️',
        '結婚': '💍',
        '恋の試練': '🔥',
    };
    return emojiMap[name] || '💖';
}

interface LoveFortune {
    fortuneIndex: number;
    fortune: {
        title: string;
        message: string;
        imageUrl?: string;
        luckyItems: string[];
        details: Array<{
            name: string;
            text: string;
        }>;
    };
}
