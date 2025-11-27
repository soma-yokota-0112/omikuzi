import { Metadata } from 'next';
import ResultClient from './ResultClient';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { searchParams }: Props
): Promise<Metadata> {
    const fortune = searchParams.f;
    const title = typeof fortune === 'string' ? `運勢は【${fortune}】でした` : 'おみくじ結果';

    return {
        title: `${title} | 純粋おみくじ`,
        description: 'あなたの運勢を占います。',
        openGraph: {
            title: `${title} | 純粋おみくじ`,
            description: 'あなたの運勢を占います。',
            images: [`/api/og?title=${encodeURIComponent(typeof fortune === 'string' ? fortune : '')}`],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | 純粋おみくじ`,
            description: 'あなたの運勢を占います。',
            images: [`/api/og?title=${encodeURIComponent(typeof fortune === 'string' ? fortune : '')}`],
        },
    };
}

export default function ResultPage() {
    return <ResultClient />;
}
