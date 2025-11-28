import { ImageResponse } from 'next/og';
import { decodeResult } from '@/utils/logic';
import { FORTUNE_RESULTS } from '@/data/omikujiData';

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    let title = searchParams.get('title') || 'おみくじ';

    if (code) {
        const decoded = decodeResult(code);
        if (decoded) {
            const { fortuneIndex } = decoded;
            title = FORTUNE_RESULTS[fortuneIndex].title;
        }
    }

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundImage: 'linear-gradient(to bottom right, #fef2f2, #fee2e2)',
                    border: '20px solid #991b1b',
                    fontFamily: '"Noto Serif JP", serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '40px 80px',
                        borderRadius: '20px',
                        border: '4px solid #b91c1c',
                    }}
                >
                    <div
                        style={{
                            fontSize: 40,
                            color: '#57534e',
                            marginBottom: 20,
                            fontWeight: 'bold',
                        }}
                    >
                        今日の運勢
                    </div>
                    <div
                        style={{
                            fontSize: 120,
                            fontWeight: 900,
                            color: '#991b1b',
                            lineHeight: 1.2,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            color: '#78716c',
                            marginTop: 30,
                        }}
                    >
                        純粋おみくじ
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
