import LoveResultClient from './LoveResultClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '恋愛みくじ結果 | 今年の運勢',
    description: '恋愛運を占うおみくじの結果です。運命の人との出会い、告白、デート運などをチェック！',
};

export default function LoveResultPage() {
    return <LoveResultClient />;
}
