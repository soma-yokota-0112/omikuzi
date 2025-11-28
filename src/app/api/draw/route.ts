import { NextResponse } from 'next/server';
import { FORTUNE_RESULTS, ITEM_DETAILS } from '@/data/omikujiData';

export const dynamic = 'force-dynamic';

// Probability Weights (Total 100%)
// 大吉: 20%, 吉: 15%, 中吉: 14%, 小吉: 13%, 末吉: 13%, 凶: 11%, 大凶: 6%
// Order in FORTUNE_RESULTS: 大凶(0), 凶(1), 末吉(2), 小吉(3), 中吉(4), 吉(5), 大吉(6)
const WEIGHTS = [
    { index: 6, weight: 20 }, // 大吉
    { index: 5, weight: 15 }, // 吉
    { index: 4, weight: 14 }, // 中吉
    { index: 3, weight: 13 }, // 小吉
    { index: 2, weight: 13 }, // 末吉
    { index: 1, weight: 11 }, // 凶
    { index: 0, weight: 6 },  // 大凶
];

// Score Ranges per Fortune
const SCORE_RANGES: { [key: number]: { min: number, max: number } } = {
    6: { min: 5, max: 7 }, // 大吉: 5-7
    5: { min: 4, max: 7 }, // 吉: 4-7
    4: { min: 4, max: 7 }, // 中吉: 4-7
    3: { min: 2, max: 5 }, // 小吉: 2-5
    2: { min: 2, max: 5 }, // 末吉: 2-5
    1: { min: 1, max: 3 }, // 凶: 1-3
    0: { min: 0, max: 2 }, // 大凶: 0-2
};

export async function GET() {
    // 1. Determine Fortune (Weighted Random)
    const totalWeight = WEIGHTS.reduce((sum, item) => sum + item.weight, 0); // Should be 92 based on user input, but we treat as ratio
    let random = Math.random() * totalWeight;
    let fortuneIndex = 6; // Default

    for (const item of WEIGHTS) {
        if (random < item.weight) {
            fortuneIndex = item.index;
            break;
        }
        random -= item.weight;
    }

    const fortune = FORTUNE_RESULTS[fortuneIndex];

    // 2. Generate 13 scores based on Fortune
    const range = SCORE_RANGES[fortuneIndex];
    const scores = ITEM_DETAILS.map(() => {
        // Random integer between min and max (inclusive)
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    });

    // 3. Map details
    const details = ITEM_DETAILS.map((item, index) => {
        const point = scores[index];
        return {
            name: item.name,
            point,
            text: item.texts[point],
        };
    });

    return NextResponse.json({
        fortuneIndex, // Send index for easier client handling if needed
        fortune,
        details,
        scores, // Return raw scores for encoding
    });
}
