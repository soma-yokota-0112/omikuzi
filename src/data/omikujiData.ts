export interface FortuneResult {
    title: string;
    poem: string;
    modernText: string;
}

export interface ItemDetail {
    name: string;
    texts: {
        [point: number]: string;
    };
}

export const FORTUNE_RESULTS: FortuneResult[] = [
    { title: '大凶', poem: '大凶の和歌：嵐吹く 荒野の果てに ひとり立ち...', modernText: '大凶の現代語訳：今は耐える時です。嵐が過ぎ去るのを待ちましょう。' },
    { title: '凶', poem: '凶の和歌：暗き夜に 道迷いし 旅人の...', modernText: '凶の現代語訳：先が見えない状況です。慎重に行動しましょう。' },
    { title: '末吉', poem: '末吉の和歌：冬枯れの 木々に春待つ 蕾かな...', modernText: '末吉の現代語訳：今はまだ成果が出ませんが、希望を持ち続けましょう。' },
    { title: '小吉', poem: '小吉の和歌：小川の 水の如くに 穏やかに...', modernText: '小吉の現代語訳：ささやかな幸せが訪れます。日常を大切に。' },
    { title: '中吉', poem: '中吉の和歌：雲晴れて 月の光の 差し込む...', modernText: '中吉の現代語訳：迷いが晴れてきます。自信を持って進みましょう。' },
    { title: '吉', poem: '吉の和歌：追い風に 帆を上げ進む 船の如...', modernText: '吉の現代語訳：順調に進みます。チャンスを逃さないように。' },
    { title: '大吉', poem: '大吉の和歌：朝日影 輝く空に 鶴の舞う...', modernText: '大吉の現代語訳：最高の運勢です。願い事が叶うでしょう。' },
];

const ITEM_NAMES = [
    '願い事', '待ち人', '失せ物', '探し物', '縁談', '恋愛', '抱え人', '旅行',
    '方位', '転居', '商売', '売買', '相場', '学問', '病気', '出産', '争事'
];

export const ITEM_DETAILS: ItemDetail[] = ITEM_NAMES.map(name => ({
    name,
    texts: {
        0: `${name}：0点（厳しい）のダミー文章。今は動かないほうが良いでしょう。`,
        1: `${name}：1点（低調）のダミー文章。慎重さが求められます。`,
        2: `${name}：2点（やや低調）のダミー文章。焦りは禁物です。`,
        3: `${name}：3点（普通）のダミー文章。可もなく不可もなく。`,
        4: `${name}：4点（やや好調）のダミー文章。少しずつ良くなります。`,
        5: `${name}：5点（好調）のダミー文章。良い兆しがあります。`,
        6: `${name}：6点（非常に好調）のダミー文章。期待して良いでしょう。`,
        7: `${name}：7点（最高）のダミー文章。素晴らしい結果が待っています。`,
    }
}));
