'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Share2, RefreshCw, Download, Copy, MessageCircle } from 'lucide-react';
import { toPng } from 'html-to-image';
import { decodeResult, encodeResult } from '@/utils/logic';
import { FORTUNE_RESULTS, ITEM_DETAILS, OMIKUJI_TRIVIA } from '@/data/omikujiData';
import { getSlugByName } from '@/data/guidanceData';

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
    const [trivia, setTrivia] = useState(OMIKUJI_TRIVIA[0]);
    const [generatedCode, setGeneratedCode] = useState<string | null>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        // Set random trivia on mount
        setTrivia(OMIKUJI_TRIVIA[Math.floor(Math.random() * OMIKUJI_TRIVIA.length)]);

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
            // Artificial delay for animation and trivia reading
            await new Promise(resolve => setTimeout(resolve, 4000));

            try {
                const res = await fetch('/api/draw');
                const json = await res.json();
                // json has fortuneIndex and scores
                const code = encodeResult(json.fortuneIndex, json.scores);
                setGeneratedCode(code);

                // Update URL without reloading
                router.replace(`/result?code=${encodeURIComponent(code)}`);

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
        const currentYear = new Date().getFullYear();
        const text = `私の${currentYear}年の運勢は【${data.fortune.title}】でした！ #今年の運勢 #おみくじアプリ`;
        const url = window.location.href;
        const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(text + '\n' + url)}`;
        window.open(shareUrl, '_blank');
    };

    const handleXShare = () => {
        if (!data) return;
        const currentYear = new Date().getFullYear();
        const text = `私の${currentYear}年の運勢は【${data.fortune.title}】でした！ #今年の運勢 #おみくじアプリ`;
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

        // Hide ads temporarily
        const adContainers = document.querySelectorAll('.js-ad-container');
        adContainers.forEach((el) => {
            (el as HTMLElement).style.display = 'none';
        });

        try {
            const dataUrl = await toPng(resultRef.current, { cacheBust: true, backgroundColor: '#f5f5f4' }); // stone-100
            const link = document.createElement('a');
            link.download = `omikuji-result-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to save image', err);
        } finally {
            // Restore ads
            adContainers.forEach((el) => {
                (el as HTMLElement).style.display = '';
            });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100 p-4">
                {/* Ad Spot (Replaces Animation) */}
                <div className="w-full max-w-sm mb-8">
                    <div className="w-full h-[250px] bg-stone-200 border border-stone-300 border-dashed flex items-center justify-center text-stone-400 text-sm">
                        スポンサーリンク (レスポンシブ)
                    </div>
                </div>

                <div className="max-w-sm w-full bg-white p-6 rounded-sm shadow-md border-t-4 border-[#B03A2E]">
                    <p className="text-center text-[#B03A2E] font-bold mb-2 text-sm">おみくじ豆知識</p>
                    <h3 className="text-center font-bold text-stone-800 mb-3">{trivia.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed text-justify">
                        {trivia.content}
                    </p>
                </div>
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
                className="w-full max-w-sm bg-[#FFFDFD] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden relative"
            >
                {/* Decorative Top Border */}
                <div className="h-2 w-full bg-[#B03A2E]"></div>

                {/* Header / Fortune Result */}
                <div className="p-6 text-center pb-2 flex flex-col items-center">
                    <p className="text-stone-500 mb-4 text-sm tracking-[0.2em]">{new Date().getFullYear()}年の運勢</p>

                    {/* Poem and Translation - Vertical Stack (Continuous) */}
                    <div className="flex flex-col items-center mb-4 gap-0 w-full">
                        {/* Poem */}
                        <div className="h-auto">
                            <p
                                className="text-lg font-medium text-stone-800 leading-[3] tracking-wider [writing-mode:vertical-rl] whitespace-normal"
                                dangerouslySetInnerHTML={{ __html: data.fortune.poem }}
                            />
                        </div>

                        {/* Divider 1: Poem <-> Translation */}
                        <div className="w-full border-t border-stone-400 border-dotted mt-2 mb-4"></div>

                        {/* Translation */}
                        <div className="h-auto">
                            <p
                                className="text-xs text-stone-700 leading-[2.5] tracking-wide [writing-mode:vertical-rl] whitespace-normal"
                                dangerouslySetInnerHTML={{ __html: data.fortune.modernText }}
                            />
                        </div>
                    </div>

                    {/* Divider 2: Translation <-> Title */}
                    <div className="w-full border-t border-stone-400 border-dotted mt-2 mb-4"></div>

                    {/* Fortune Title - Moved Below Poem */}
                    <h1 className="text-3xl font-bold text-[#B03A2E] my-3 tracking-widest">{data.fortune.title}</h1>

                    {/* Divider 3: Title <-> Details */}
                    <div className="w-full border-t border-stone-400 border-dotted mt-2 mb-4"></div>
                </div>

                {/* Details List (Horizontal Columns with Vertical Text - Right to Left) */}
                <div className="px-4 pb-8 bg-[#FFFDFD]">
                    {/* flex-row-reverse to make the first item (Ganbou) appear on the Right */}
                    {/* flex-wrap to allow wrapping on smaller screens */}
                    {/* max-w-[300px] forces a wrap after 7 items (7 * 40px = 280px + borders) */}
                    <div className="flex flex-row-reverse flex-wrap gap-0 justify-center items-stretch max-w-[280px] mx-auto">
                        {data.details.map((item, index) => {
                            const slug = getSlugByName(item.name);
                            const codeToUse = initialCode || generatedCode;
                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center ${index !== data.details.length - 1 && index !== 6 ? 'border-l border-stone-300' : ''} px-1 py-4 w-[40px] writing-vertical-rl`}
                                >
                                    {/* Item Name - Top (visually top in vertical-rl) */}
                                    <div className="flex-shrink-0 mb-3">
                                        <h3 className="font-extrabold text-[#B03A2E] text-xs tracking-wider">
                                            {slug ? (
                                                <Link
                                                    href={`/guidance/${slug}${codeToUse ? `?code=${encodeURIComponent(codeToUse)}` : ''}`}
                                                    className="hover:underline transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                item.name
                                            )}
                                        </h3>
                                    </div>
                                    {/* Item Text - Below, aligned to start */}
                                    <div className="flex-1 flex items-start justify-center">
                                        <p
                                            className="text-stone-700 text-[11px] leading-[1.3] tracking-wide [writing-mode:vertical-rl] whitespace-normal"
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Ad Spot 1 (Main) - Moved to Bottom */}
                <div className="px-4 pb-6 js-ad-container">
                    <div className="w-full h-[100px] bg-stone-100 border border-stone-200 border-dashed flex items-center justify-center text-stone-400 text-xs">
                        スポンサーリンク (レスポンシブ)
                    </div>
                </div>

            </div>

            {/* Interaction Hint - Moved Outside */}
            <p className="text-center text-xs text-stone-800 font-bold mt-2 mb-1">※項目の内容は、項目をタップすると表示されます</p>

            {/* Actions (Outside of capture area) */}
            <div className="max-w-md w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                {/* Ad Spot 2 (Sub) - Moved between buttons */}
                <div className="sm:col-span-2 flex justify-center my-2">
                    <div className="w-full h-[100px] bg-stone-100 border border-stone-300 border-dashed flex items-center justify-center text-stone-400 text-xs rounded-lg">
                        スポンサーリンク (300x100)
                    </div>
                </div>

                <Link
                    href="/"
                    className="flex items-center justify-center px-4 py-3 bg-[#B03A2E] text-white rounded-md hover:bg-[#922B21] hover:shadow-lg transition-all shadow-md sm:col-span-2 text-xs tracking-wide font-bold"
                >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    もう一度引く
                </Link>
            </div>
        </div>
    );
}
