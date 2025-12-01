import { getGuidanceBySlug, GUIDANCE_DATA } from '@/data/guidanceData';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BackButton from './BackButton';

export async function generateStaticParams() {
    return Object.values(GUIDANCE_DATA).map((item) => ({
        slug: item.slug,
    }));
}

export default async function GuidancePage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const { slug } = await params;
    const { code } = await searchParams;
    const codeStr = typeof code === 'string' ? code : undefined;
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

                {/* Examples Section */}
                {item.examples && item.examples.length > 0 && (
                    <div className="mb-8 border-t border-stone-300 pt-6">
                        <h3 className="text-sm font-bold text-stone-700 mb-3">具体例</h3>
                        <ul className="text-sm text-stone-600 space-y-2">
                            {item.examples.map((example, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#B03A2E] mr-2">•</span>
                                    <span>{example}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Related Items Section */}
                <div className="mb-8 border-t border-stone-300 pt-6">
                    <h3 className="text-sm font-bold text-stone-700 mb-4">あわせて読みたい</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {(() => {
                            // Get all items except current one
                            const allItems = Object.values(GUIDANCE_DATA).filter(g => g.slug !== slug);
                            // Shuffle array
                            const shuffled = allItems.sort(() => 0.5 - Math.random());
                            // Take first 3
                            const relatedItems = shuffled.slice(0, 3);

                            return relatedItems.map((relatedItem) => (
                                <Link
                                    key={relatedItem.slug}
                                    href={`/guidance/${relatedItem.slug}${codeStr ? `?code=${encodeURIComponent(codeStr)}` : ''}`}
                                    className="text-xs text-[#B03A2E] hover:underline transition-colors text-center py-2 px-3 border border-stone-300 rounded-sm hover:border-[#B03A2E]"
                                >
                                    {relatedItem.name} →
                                </Link>
                            ));
                        })()}
                    </div>
                </div>

                {/* Main Ad Slot - Reduced size */}
                <div className="w-full mb-8">
                    <div className="w-full h-[200px] bg-stone-100 border border-stone-200 border-dashed flex items-center justify-center text-stone-400 text-sm">
                        スポンサーリンク (レスポンシブ)
                    </div>
                </div>

                <div className="text-center">
                    <BackButton />
                </div>
            </div>

            <footer className="text-stone-500 text-xs mt-8">
                &copy; {new Date().getFullYear()} 今年の運勢
            </footer>
        </div>
    );
}
