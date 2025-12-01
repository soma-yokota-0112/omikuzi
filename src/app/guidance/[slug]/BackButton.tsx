'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function BackButton() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    if (code) {
        return (
            <Link
                href={`/result?code=${encodeURIComponent(code)}`}
                className="text-[#B03A2E] hover:underline font-bold text-sm tracking-wide bg-transparent border-none cursor-pointer inline-block"
            >
                ← 結果に戻る
            </Link>
        );
    }

    return (
        <button
            onClick={() => router.back()}
            className="text-[#B03A2E] hover:underline font-bold text-sm tracking-wide bg-transparent border-none cursor-pointer"
        >
            ← 結果に戻る
        </button>
    );
}
