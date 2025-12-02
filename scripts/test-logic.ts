const WEIGHTS = [
    { name: '大吉', weight: 20 },
    { name: '吉', weight: 15 },
    { name: '中吉', weight: 14 },
    { name: '小吉', weight: 13 },
    { name: '末吉', weight: 13 },
    { name: '凶', weight: 11 },
    { name: '大凶', weight: 6 },
];

const counts: { [key: string]: number } = {};
const TOTAL_RUNS = 10000;

for (let i = 0; i < TOTAL_RUNS; i++) {
    const totalWeight = WEIGHTS.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    let fortune = '大吉';

    for (const item of WEIGHTS) {
        if (random < item.weight) {
            fortune = item.name;
            break;
        }
        random -= item.weight;
    }
    counts[fortune] = (counts[fortune] || 0) + 1;
}

console.log('Distribution over', TOTAL_RUNS, 'runs:');
Object.keys(counts).forEach(key => {
    const percentage = (counts[key] / TOTAL_RUNS) * 100;
    console.log(`${key}: ${counts[key]} (${percentage.toFixed(2)}%)`);
});
