'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Share2, RefreshCw } from 'lucide-react';

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

export default function ResultClient() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<FortuneData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // Artificial delay for animation
            await new Promise(resolve => setTimeout(resolve, 2000));

            try {
                const res = await fetch('/api/draw');
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error('Failed to fetch fortune', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleShare = () => {
        if (!data) return;
        const text = `私の今日の運勢は【${data.fortune.title}】でした！ #純粋おみくじ`;
        // Append fortune to URL for OGP
        const url = new URL(window.location.href);
        url.searchParams.set('f', data.fortune.title);

        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url.toString())}`;
        window.open(shareUrl, '_blank');
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
        <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8 font-serif bg-[url('/pattern-bg.png')] bg-repeat">
            <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden border-t-8 border-red-800">
                {/* Header / Fortune Result */}
                <div className="bg-red-50 p-8 text-center border-b border-red-100">
                    <p className="text-stone-500 mb-2">今日の運勢</p>
                    <h1 className="text-6xl font-bold text-red-800 mb-6">{data.fortune.title}</h1>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 max-w-lg mx-auto">
                        <p className="text-xl font-medium text-stone-800 mb-4 leading-loose">
                            {data.fortune.poem}
                        </p>
                        <div className="h-px w-16 bg-red-200 mx-auto mb-4"></div>
                        <p className="text-stone-600 text-sm">
                            {data.fortune.modernText}
                        </p>
                    </div>
                </div>

                {/* Details List */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center text-stone-800 mb-8 flex items-center justify-center">
                        <span className="h-px w-8 bg-stone-300 mr-4"></span>
                        詳細な運勢
                        <span className="h-px w-8 bg-stone-300 ml-4"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.details.map((item, index) => (
                            <div key={index} className="border-l-4 border-red-800 pl-4 py-2 bg-stone-50 rounded-r-md">
                                <h3 className="font-bold text-stone-900 mb-1">{item.name}</h3>
                                <p className="text-stone-600 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="bg-stone-50 p-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-stone-200">
                    <button
                        onClick={handleShare}
                        className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-stone-800 transition-colors w-full sm:w-auto"
                    >
                        <Share2 className="w-5 h-5 mr-2" />
                        Xでシェアする
                    </button>

                    <Link
                        href="/"
                        className="flex items-center justify-center px-6 py-3 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-50 transition-colors w-full sm:w-auto"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        もう一度引く
                    </Link>
                </div>
            </div>
        </div>
    );
}
