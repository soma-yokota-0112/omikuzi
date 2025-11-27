const FORTUNE_RANGES = [
    { name: '大凶', max: 16 },
    { name: '凶', max: 33 },
    { name: '末吉', max: 50 },
    { name: '小吉', max: 67 },
    { name: '中吉', max: 84 },
    { name: '吉', max: 101 },
    { name: '大吉', max: 119 }, // 118 in spec, but logic uses 119 as max random
];

function getFortune(points: number) {
    if (points <= 16) return '大凶';
    if (points <= 33) return '凶';
    if (points <= 50) return '末吉';
    if (points <= 67) return '小吉';
    if (points <= 84) return '中吉';
    if (points <= 101) return '吉';
    return '大吉';
}

const counts: { [key: string]: number } = {};
const TOTAL_RUNS = 10000;

for (let i = 0; i < TOTAL_RUNS; i++) {
    const points = Math.floor(Math.random() * 120);
    const fortune = getFortune(points);
    counts[fortune] = (counts[fortune] || 0) + 1;
}

console.log('Distribution over', TOTAL_RUNS, 'runs:');
Object.keys(counts).forEach(key => {
    const percentage = (counts[key] / TOTAL_RUNS) * 100;
    console.log(`${key}: ${counts[key]} (${percentage.toFixed(2)}%)`);
});
