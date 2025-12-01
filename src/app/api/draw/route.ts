import { NextResponse } from 'next/server';
import { FORTUNE_RESULTS, ITEM_DETAILS } from '@/data/omikujiData';

export const dynamic = 'force-dynamic';

// Score Ranges per Fortune (Parsed from Title)
const SCORE_RANGES: { [key: string]: { min: number, max: number } } = {
    '大吉': { min: 5, max: 7 },
    '吉': { min: 4, max: 7 },
    '中吉': { min: 4, max: 7 },
    '小吉': { min: 2, max: 5 },
    '末吉': { min: 2, max: 5 },
    '半吉': { min: 2, max: 4 },
    '凶': { min: 1, max: 3 },
    '大凶': { min: 0, max: 2 },
};

export async function GET() {
    // 1. Determine Fortune (Uniform Random 1/100)
    // Indexes 0 to 99
    const fortuneIndex = Math.floor(Math.random() * 100);
    const fortune = FORTUNE_RESULTS[fortuneIndex];

    // 2. Determine Score Range based on Title
    let luckLevel = '吉'; // Default
    if (fortune.title.includes('大吉')) luckLevel = '大吉';
    else if (fortune.title.includes('中吉')) luckLevel = '中吉';
    else if (fortune.title.includes('小吉')) luckLevel = '小吉';
    else if (fortune.title.includes('末吉')) luckLevel = '末吉';
    else if (fortune.title.includes('半吉')) luckLevel = '半吉';
    else if (fortune.title.includes('大凶')) luckLevel = '大凶';
    else if (fortune.title.includes('凶')) luckLevel = '凶';
    else if (fortune.title.includes('吉')) luckLevel = '吉';

    const range = SCORE_RANGES[luckLevel] || SCORE_RANGES['吉'];

    // 3. Generate 13 scores based on Fortune
    const scores = ITEM_DETAILS.map(() => {
        // Random integer between min and max (inclusive)
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    });

    // 4. Map details
    const details = ITEM_DETAILS.map((item, index) => {
        const point = scores[index];
        return {
            name: item.name,
            point,
            text: item.texts[point],
        };
    });

    return NextResponse.json({
        fortuneIndex,
        fortune,
        details,
        scores,
    });
}
