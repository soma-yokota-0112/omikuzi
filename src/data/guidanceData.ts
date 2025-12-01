export interface GuidanceItem {
    name: string;
    slug: string;
    description: string;
    examples?: string[];
    relatedSlugs?: string[];
}

export const GUIDANCE_DATA: Record<string, GuidanceItem> = {
    '願望': {
        name: '願望',
        slug: 'ganbou',
        description: '心に抱いている願いや望みのこと。おみくじでは、その願いが叶うかどうか、どのような心構えでいるべきかが示されます。',
        examples: ['大きな夜明け・目標の達成', '転職・昇進などのキャリア', '家族・大切な人の幸せ'],
        relatedSlugs: ['machibito', 'endan', 'shobai']
    },
    '待人': {
        name: '待人',
        slug: 'machibito',
        description: '来ることを待ち望んでいる人。恋愛相手だけでなく、人生のキーパーソンや、良い知らせを持ってくる人も含みます。',
        examples: ['恋人・結婚相手の出現', 'ビジネスパートナー', '人生を変える師匠との出会い'],
        relatedSlugs: ['endan', 'ganbou', 'ryoko']
    },
    '失物': {
        name: '失物',
        slug: 'usemono',
        description: 'なくしてしまった物。物だけでなく、失った信頼や機会などを指すこともあります。見つかるかどうかの目安が示されます。',
        examples: ['大事な物・財布・アクセサリー', '信頼関係・一度途絶えた縁', '失われたチャンス'],
        relatedSlugs: ['ganbou', 'machibito', 'houi']
    },
    '縁談': {
        name: '縁談',
        slug: 'endan',
        description: '結婚や婚約に関する話し合い。良縁に恵まれるか、話がスムーズに進むかどうかが記されています。',
        examples: ['出会い・交際の変化', '今のパートナーとの進展', '家族・親族との関係'],
        relatedSlugs: ['machibito', 'ganbou', 'shussan']
    },
    '旅行': {
        name: '旅行',
        slug: 'ryoko',
        description: '旅立ちや遠出のこと。旅行の吉凶や、旅先での注意点、方角などが示されます。',
        examples: ['観光・レジャー旅行', '出張・ビジネス旅行', '引っ越し・長期移動'],
        relatedSlugs: ['houi', 'tenkyo', 'kenkou']
    },
    '商売': {
        name: '商売',
        slug: 'shobai',
        description: 'ビジネスや商いに関すること。利益が出るか、取引がうまくいくかなど、仕事運全般を指します。',
        examples: ['新規事業・起業', '取引先との関係', '転職・就職活動'],
        relatedSlugs: ['souba', 'ganbou', 'machibito']
    },
    '相場': {
        name: '相場',
        slug: 'souba',
        description: '株式や投資、市場の動向。売り時か買い時か、投資のタイミングや運気が示されます。',
        examples: ['株式投資・資産運用', '不動産・土地購入', '事業投資・大きな購入'],
        relatedSlugs: ['shobai', 'ganbou', 'houi']
    },
    '学問': {
        name: '学問',
        slug: 'gakumon',
        description: '勉強や試験、資格取得に関すること。努力が実るか、試験の合否や学習の指針が示されます。',
        examples: ['大学・高校の入試', '資格試験・検定', '新しいスキル習得'],
        relatedSlugs: ['ganbou', 'kenkou', 'shobai']
    },
    '健康': {
        name: '健康',
        slug: 'kenkou',
        description: '身体や心の調子。病気の有無や回復の兆し、日頃気をつけるべき点などが記されています。',
        examples: ['体調管理・病気予防', 'メンタルヘルス', 'ライフスタイル改善'],
        relatedSlugs: ['gakumon', 'shussan', 'arasoigoto']
    },
    '争事': {
        name: '争事',
        slug: 'arasoigoto',
        description: '他人との揉め事や訴訟、競争。勝敗の行方や、解決のためのヒントが示されます。',
        examples: ['法庭・裁判所の争い', '職場・近隣のトラブル', '競業他社との競争'],
        relatedSlugs: ['kenkou', 'ganbou', 'shobai']
    },
    '転居': {
        name: '転居',
        slug: 'tenkyo',
        description: '引っ越しや移転。新しい住まいや環境が良いか、引っ越しのタイミングが適切かが示されます。',
        examples: ['就職・転勤に伴う引越', '結婚・同棲での移動', '生活環境の変化'],
        relatedSlugs: ['ryoko', 'houi', 'ganbou']
    },
    '出産': {
        name: '出産',
        slug: 'shussan',
        description: '妊娠や出産に関すること。安産かどうか、母子の健康状態などが示されます。',
        examples: ['妊娠・出産の時期', '母体・子どもの健康', '家族計画'],
        relatedSlugs: ['kenkou', 'endan', 'houi']
    },
    '方位': {
        name: '方位',
        slug: 'houi',
        description: '吉凶の方角。何かを行う際や移動する際に、どの方角が良いか、避けるべき方角はどこかが示されます。',
        examples: ['旅行・出張の方角', '引越し先の選定', '店舗・会社の立地'],
        relatedSlugs: ['ryoko', 'tenkyo', 'usemono']
    }
};

export const getSlugByName = (name: string): string | null => {
    return GUIDANCE_DATA[name]?.slug || null;
};

export const getGuidanceBySlug = (slug: string): GuidanceItem | null => {
    const item = Object.values(GUIDANCE_DATA).find(item => item.slug === slug);
    return item || null;
};
