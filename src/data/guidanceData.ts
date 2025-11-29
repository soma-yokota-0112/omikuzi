export interface GuidanceItem {
    name: string;
    slug: string;
    description: string;
}

export const GUIDANCE_DATA: Record<string, GuidanceItem> = {
    '願望': {
        name: '願望',
        slug: 'ganbou',
        description: '心に抱いている願いや望みのこと。おみくじでは、その願いが叶うかどうか、どのような心構えでいるべきかが示されます。'
    },
    '待人': {
        name: '待人',
        slug: 'machibito',
        description: '来ることを待ち望んでいる人。恋愛相手だけでなく、人生のキーパーソンや、良い知らせを持ってくる人も含みます。'
    },
    '失せ物': {
        name: '失せ物',
        slug: 'usemono',
        description: 'なくしてしまった物。物だけでなく、失った信頼や機会などを指すこともあります。見つかるかどうかの目安が示されます。'
    },
    '縁談': {
        name: '縁談',
        slug: 'endan',
        description: '結婚や婚約に関する話し合い。良縁に恵まれるか、話がスムーズに進むかどうかが記されています。'
    },
    '旅行': {
        name: '旅行',
        slug: 'ryoko',
        description: '旅立ちや遠出のこと。旅行の吉凶や、旅先での注意点、方角などが示されます。'
    },
    '商売': {
        name: '商売',
        slug: 'shobai',
        description: 'ビジネスや商いに関すること。利益が出るか、取引がうまくいくかなど、仕事運全般を指します。'
    },
    '相場': {
        name: '相場',
        slug: 'souba',
        description: '株式や投資、市場の動向。売り時か買い時か、投資のタイミングや運気が示されます。'
    },
    '学問': {
        name: '学問',
        slug: 'gakumon',
        description: '勉強や試験、資格取得に関すること。努力が実るか、試験の合否や学習の指針が示されます。'
    },
    '健康': {
        name: '健康',
        slug: 'kenkou',
        description: '身体や心の調子。病気の有無や回復の兆し、日頃気をつけるべき点などが記されています。'
    },
    '争い事': {
        name: '争い事',
        slug: 'arasoigoto',
        description: '他人との揉め事や訴訟、競争。勝敗の行方や、解決のためのヒントが示されます。'
    },
    '転居': {
        name: '転居',
        slug: 'tenkyo',
        description: '引っ越しや移転。新しい住まいや環境が良いか、引っ越しのタイミングが適切かが示されます。'
    },
    '出産': {
        name: '出産',
        slug: 'shussan',
        description: '妊娠や出産に関すること。安産かどうか、母子の健康状態などが示されます。'
    },
    '方位': {
        name: '方位',
        slug: 'houi',
        description: '吉凶の方角。何かを行う際や移動する際に、どの方角が良いか、避けるべき方角はどこかが示されます。'
    }
};

export const getSlugByName = (name: string): string | null => {
    return GUIDANCE_DATA[name]?.slug || null;
};

export const getGuidanceBySlug = (slug: string): GuidanceItem | null => {
    const item = Object.values(GUIDANCE_DATA).find(item => item.slug === slug);
    return item || null;
};
