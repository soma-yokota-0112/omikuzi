'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="text-[#B03A2E] hover:underline font-bold text-sm tracking-wide bg-transparent border-none cursor-pointer"
        >
            ← 結果に戻る
        </button>
    );
}
