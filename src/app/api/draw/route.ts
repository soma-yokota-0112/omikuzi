import { NextResponse } from 'next/server';
import { FORTUNE_RESULTS, ITEM_DETAILS } from '@/data/omikujiData';

export const dynamic = 'force-dynamic';

export async function GET() {
    // 1. Random total points (0-119)
    const totalPoints = Math.floor(Math.random() * 120);

    // 2. Determine Fortune
    let fortuneIndex = 0;
    if (totalPoints <= 16) fortuneIndex = 0; // 大凶 (0-16)
    else if (totalPoints <= 33) fortuneIndex = 1; // 凶 (17-33)
    else if (totalPoints <= 50) fortuneIndex = 2; // 末吉 (34-50)
    else if (totalPoints <= 67) fortuneIndex = 3; // 小吉 (51-67)
    else if (totalPoints <= 84) fortuneIndex = 4; // 中吉 (68-84)
    else if (totalPoints <= 101) fortuneIndex = 5; // 吉 (85-101)
    else fortuneIndex = 6; // 大吉 (102-118... wait, 102-119 actually since max is 119)
    // Requirement says: 大吉: 102 〜 118. But totalPoints is 0-119.
    // If totalPoints is 119, it should also be 大吉.
    // The ranges are 17 points each.
    // 0-16 (17)
    // 17-33 (17)
    // 34-50 (17)
    // 51-67 (17)
    // 68-84 (17)
    // 85-101 (17)
    // 102-118 (17) -> This covers up to 118.
    // What about 119? The prompt says "0 to 119 integer".
    // And ranges end at 118.
    // Let's assume 119 is also 大吉 or there's a typo in requirements.
    // Given 7 * 17 = 119. So 0 to 118 is 119 numbers.
    // But 0-119 is 120 numbers.
    // If I strictly follow ranges:
    // 102-118 is 大吉.
    // 119 is undefined?
    // I will include 119 in 大吉 to be safe and cover the full random range.

    const fortune = FORTUNE_RESULTS[fortuneIndex];

    // 3. Determine 17 items details (0-7 points each)
    const details = ITEM_DETAILS.map(item => {
        const point = Math.floor(Math.random() * 8); // 0-7
        return {
            name: item.name,
            point,
            text: item.texts[point],
        };
    });

    return NextResponse.json({
        totalPoints,
        fortune,
        details,
    });
}
