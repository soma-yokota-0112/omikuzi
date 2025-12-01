import { FORTUNE_RESULTS } from '@/data/omikujiData';

// 13 items * 7 points max = 91 points max
export const MAX_POINTS = 91;

// Weighted ranges based on user requirements
const FORTUNE_RANGES = [
    { max: 5, index: 0 },   // 大凶: 0-5 (6)
    { max: 16, index: 1 },  // 凶: 6-16 (11)
    { max: 29, index: 2 },  // 末吉: 17-29 (13)
    { max: 42, index: 3 },  // 小吉: 30-42 (13)
    { max: 56, index: 4 },  // 中吉: 43-56 (14)
    { max: 71, index: 5 },  // 吉: 57-71 (15)
    { max: 91, index: 6 },  // 大吉: 72-91 (20)
];

// Top-Down Logic: Fortune is determined first, then scores.
// Encoding: [FortuneIndex (1 digit)][Score1]...[Score13]
// Since FortuneIndex is 0-6, it fits in 1 digit.
// Scores are 0-7, so they fit in 1 digit.
// Total length: 1 + 13 = 14 digits.

export interface DecodedResult {
    fortuneIndex: number;
    scores: number[];
}

export function encodeResult(fortuneIndex: number, scores: number[]): string {
    // Use a separator to handle variable length fortuneIndex
    const rawString = `${fortuneIndex}-${scores.join('')}`;
    if (typeof window !== 'undefined') {
        return btoa(rawString);
    } else {
        return Buffer.from(rawString).toString('base64');
    }
}

export function decodeResult(code: string): DecodedResult | null {
    try {
        let rawString = '';
        if (typeof window !== 'undefined') {
            rawString = atob(code);
        } else {
            rawString = Buffer.from(code, 'base64').toString('ascii');
        }

        // Expected format: "INDEX-SCORES"
        // INDEX: number
        // SCORES: 13 digits (0-7)

        const parts = rawString.split('-');
        if (parts.length !== 2) {
            // Fallback for backward compatibility or invalid format
            // Try parsing as old format if length is 14 and starts with 0-6?
            // But old format was broken for >9 index anyway.
            return null;
        }

        const fortuneIndex = parseInt(parts[0], 10);
        const scoresStr = parts[1];

        if (isNaN(fortuneIndex) || scoresStr.length !== 13 || !/^[0-7]{13}$/.test(scoresStr)) {
            return null;
        }

        const scores = scoresStr.split('').map(Number);

        return { fortuneIndex, scores };
    } catch (e) {
        return null;
    }
}
