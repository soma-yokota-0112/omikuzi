'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Share2, RefreshCw, Download, Copy, MessageCircle } from 'lucide-react';
import { toPng } from 'html-to-image';
import { decodeResult, encodeResult } from '@/utils/logic';
import { FORTUNE_RESULTS, ITEM_DETAILS } from '@/data/omikujiData';

interface FortuneData {
    totalPoints: number;
    fortune: {
        title: string;
        poem: string;
        modernText: string;
    };
    details: {
        name: string;
        point: number;
        text: string;
    }[];
}

interface Props {
    initialCode?: string;
}

export default function ResultClient({ initialCode }: Props) {
    const [loading, setLoading] = useState(!initialCode);
    const [data, setData] = useState<FortuneData | null>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const init = async () => {
            if (initialCode) {
                // Decode existing code
                const decoded = decodeResult(initialCode);
                if (decoded) {
                    const { fortuneIndex, scores } = decoded;
                    const fortune = FORTUNE_RESULTS[fortuneIndex];
                    const details = ITEM_DETAILS.map((item, index) => ({
                        name: item.name,
                        point: scores[index],
                        text: item.texts[scores[index]],
                    }));
                    // totalPoints is not really used for logic anymore, but we can sum it up if needed
                    const totalPoints = scores.reduce((a, b) => a + b, 0);

                    setData({ totalPoints, fortune, details });
                    setLoading(false);
                    return;
                }
            }

            // Fetch new result if no code or invalid code
            // Artificial delay for animation
            await new Promise(resolve => setTimeout(resolve, 2000));

            try {
                const res = await fetch('/api/draw');
                const json = await res.json();
                // json has fortuneIndex and scores
                const code = encodeResult(json.fortuneIndex, json.scores);

                // Update URL without reloading
                router.replace(`/result?code=${code}`);

                setData(json);
            } catch (error) {
                console.error('Failed to fetch fortune', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [initialCode, router]);

    const handleLineShare = () => {
        if (!data) return;
        const text = `私の今日の運勢は【${data.fortune.title}】でした！ #純粋おみくじ`;
        const url = window.location.href;
        const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(text + '\n' + url)}`;
        window.open(shareUrl, '_blank');
    };

    const handleXShare = () => {
        if (!data) return;
        const text = `私の今日の運勢は【${data.fortune.title}】でした！ #純粋おみくじ`;
        const url = window.location.href;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    };

    const handleCopyUrl = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('URLをコピーしました！');
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const handleSaveImage = async () => {
        if (resultRef.current === null) {
            return;
        }

        try {
            const dataUrl = await toPng(resultRef.current, { cacheBust: true, backgroundColor: '#f5f5f4' }); // stone-100
            const link = document.createElement('a');
            link.download = `omikuji-result-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to save image', err);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100">
                <div className="animate-bounce">
                    <div className="w-32 h-48 bg-red-800 mx-auto rounded-lg shadow-inner flex items-center justify-center border-2 border-yellow-600 animate-shake">
                        <span className="text-white text-2xl font-bold writing-vertical-rl">御神籤</span>
                    </div>
                </div>
                <p className="mt-8 text-xl text-stone-600 font-serif animate-pulse">
                    運命を紐解いています...
                </p>
                <style jsx>{`
          @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
          }
          .animate-shake {
            animation: shake 0.5s infinite;
          }
        `}</style>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="min-h-screen bg-stone-200 py-8 px-4 sm:px-6 lg:px-8 font-serif bg-[url('/pattern-bg.png')] bg-repeat flex flex-col items-center">
            {/* Main Paper Container */}
            <div
                ref={resultRef}
                id="omikuji-paper-content"
                className="max-w-md w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden relative"
            >
                {/* Decorative Top Border */}
                <div className="h-2 w-full bg-[#B03A2E]"></div>

                {/* Header / Fortune Result */}
                <div className="p-6 text-center">
                    <p className="text-stone-500 mb-2 text-[10px] tracking-[0.2em]">今日の運勢</p>
                    <h1 className="text-5xl font-bold text-[#B03A2E] mb-4 tracking-widest">{data.fortune.title}</h1>

                    <div className="bg-stone-50 p-4 mx-auto border border-stone-100">
                        <p className="text-lg font-medium text-stone-800 leading-normal tracking-wide writing-vertical-rl mx-auto h-32">
                            {data.fortune.poem}
                        </p>
                        <div className="h-px w-full bg-[#B03A2E]/20 mx-auto my-2"></div>
                        <p className="text-stone-600 text-[11px] leading-normal text-left">
                            {data.fortune.modernText}
                        </p>
                    </div>
                </div>

                {/* Details List (Single Column) */}
                <div className="px-8 pb-8 bg-white">
                    <div className="flex flex-col space-y-3">
                        {data.details.map((item, index) => (
                            <div key={index} className="flex flex-col border-l border-stone-400 border-dotted pl-3 py-0.5">
                                <h3 className="font-bold text-stone-800 text-xs mb-0.5">{item.name}</h3>
                                <p className="text-stone-600 text-[11px] leading-tight">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Seal (Visual flair) */}
                <div className="pb-6 text-center">
                    <div className="inline-block border border-[#B03A2E] text-[#B03A2E] text-[10px] px-2 py-1 rounded-sm opacity-50">
                        純粋おみくじ
                    </div>
                </div>
            </div>

            {/* Ad Placeholder (Monetization) */}
            <div className="max-w-md w-full mt-6 bg-stone-100 border border-stone-300 p-4 text-center rounded-lg">
                <p className="text-xs text-stone-400 mb-2">スポンサーリンク</p>
                <div className="w-full h-[250px] bg-stone-200 flex items-center justify-center text-stone-400 text-sm">
                    広告スペース (300x250)
                </div>
            </div>

            {/* Actions (Outside of capture area) */}
            <div className="max-w-md w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                    onClick={handleXShare}
                    className="flex items-center justify-center px-4 py-3 bg-black text-white rounded-md hover:bg-stone-800 transition-colors shadow-sm text-xs tracking-wide"
                >
                    <Share2 className="w-4 h-4 mr-2" />
                    Xでシェア
                </button>

                <button
                    onClick={handleLineShare}
                    className="flex items-center justify-center px-4 py-3 bg-[#06C755] text-white rounded-md hover:bg-[#05b34c] transition-colors shadow-sm text-xs tracking-wide"
                >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    LINEでシェア
                </button>

                <button
                    onClick={handleSaveImage}
                    className="flex items-center justify-center px-4 py-3 bg-stone-600 text-white rounded-md hover:bg-stone-700 transition-colors shadow-sm text-xs tracking-wide"
                >
                    <Download className="w-4 h-4 mr-2" />
                    画像を保存
                </button>

                <button
                    onClick={handleCopyUrl}
                    className="flex items-center justify-center px-4 py-3 bg-stone-500 text-white rounded-md hover:bg-stone-600 transition-colors shadow-sm text-xs tracking-wide"
                >
                    <Copy className="w-4 h-4 mr-2" />
                    URLをコピー
                </button>

                <Link
                    href="/"
                    className="flex items-center justify-center px-4 py-3 border border-[#B03A2E] text-[#B03A2E] rounded-md hover:bg-red-50 transition-colors shadow-sm sm:col-span-2 mt-2 text-xs tracking-wide"
                >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    もう一度引く
                </Link>
            </div>
        </div>
    );
}
