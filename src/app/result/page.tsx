import { Metadata } from 'next';
import ResultClient from './ResultClient';
import { decodeResult } from '@/utils/logic';
import { FORTUNE_RESULTS } from '@/data/omikujiData';

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { searchParams }: Props
): Promise<Metadata> {
    const { code } = await searchParams;
    let title = 'おみくじ結果';

    if (typeof code === 'string') {
        const decoded = decodeResult(code);
        if (decoded) {
            const { fortuneIndex } = decoded;
            const fortune = FORTUNE_RESULTS[fortuneIndex];
            title = `運勢は【${fortune.title}】でした`;
        }
    }

    return {
        title: `${title} | 今年の運勢`,
        description: 'あなたの運勢を占います。',
        openGraph: {
            title: `${title} | 今年の運勢`,
            description: 'あなたの運勢を占います。',
            images: [`/api/og?code=${typeof code === 'string' ? encodeURIComponent(code) : ''}`],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | 今年の運勢`,
            description: 'あなたの運勢を占います。',
            images: [`/api/og?code=${typeof code === 'string' ? encodeURIComponent(code) : ''}`],
        },
    };
}

export default async function ResultPage({ searchParams }: Props) {
    const { code } = await searchParams;
    const codeStr = typeof code === 'string' ? code : undefined;
    return <ResultClient initialCode={codeStr} />;
}
