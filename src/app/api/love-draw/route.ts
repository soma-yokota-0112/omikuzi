import { NextResponse } from 'next/server';
import { LOVE_FORTUNE_RESULTS } from '@/data/loveOmikujiData';

export async function GET() {
    // ランダムに1つの運勢を選択
    const randomIndex = Math.floor(Math.random() * LOVE_FORTUNE_RESULTS.length);
    const fortune = LOVE_FORTUNE_RESULTS[randomIndex];

    return NextResponse.json({
        fortuneIndex: randomIndex,
        fortune,
    });
}
