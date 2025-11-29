import { getGuidanceBySlug, GUIDANCE_DATA } from '@/data/guidanceData';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BackButton from './BackButton';

export async function generateStaticParams() {
    return Object.values(GUIDANCE_DATA).map((item) => ({
        slug: item.slug,
    }));
}

export default async function GuidancePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = getGuidanceBySlug(slug);

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-stone-100 p-8 font-serif text-stone-800 flex flex-col items-center">
            <div className="max-w-md w-full bg-white p-10 rounded-sm shadow-md border-t-4 border-[#B03A2E]">
                <h1 className="text-2xl font-bold mb-6 text-[#B03A2E] text-center tracking-widest">
                    {item.name}とは？
                </h1>

                <div className="text-stone-700 leading-relaxed text-justify mb-8">
                    {item.description}
                </div>

                {/* Main Ad Slot */}
                <div className="w-full mb-8">
                    <div className="w-full h-[250px] bg-stone-100 border border-stone-200 border-dashed flex items-center justify-center text-stone-400 text-sm">
                        スポンサーリンク (レスポンシブ)
                    </div>
                </div>

                <div className="text-center">
                    <BackButton />
                </div>
            </div>

            {/* Sub Ad Slot (Footer) */}
            <div className="mt-8 mb-4">
                <div className="w-[300px] h-[100px] bg-stone-200 border border-stone-300 border-dashed flex items-center justify-center text-stone-400 text-xs rounded-lg">
                    スポンサーリンク (300x100)
                </div>
            </div>

            <footer className="text-stone-500 text-xs">
                &copy; {new Date().getFullYear()} 今年の運勢
            </footer>
        </div>
    );
}
