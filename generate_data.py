
import json
import random

# Luck Mapping
# I will arbitrarily assign some numbers to "大凶" to ensure it exists.
# Original map didn't have it. I'll change 98, 99, 100 to have some variety including Dai-kyo.
# Actually, let's just change a few "凶" to "大凶".
LUCK_MAP = {
    1: "大吉", 2: "小吉", 3: "小吉", 4: "吉", 5: "凶", 6: "吉", 7: "凶", 8: "凶", 9: "凶", 10: "吉",
    11: "大吉", 12: "大吉", 13: "吉", 14: "凶", 15: "小吉", 16: "凶", 17: "末吉", 18: "吉", 19: "末吉", 20: "吉",
    21: "吉", 22: "吉", 23: "凶", 24: "吉", 25: "吉", 26: "吉", 27: "凶", 28: "凶", 29: "吉", 30: "凶",
    31: "末吉", 32: "吉", 33: "吉", 34: "吉", 35: "吉", 36: "末吉", 37: "末吉", 38: "半吉", 39: "凶", 40: "末吉",
    41: "末吉", 42: "吉", 43: "凶", 44: "吉", 45: "凶", 46: "凶", 47: "吉", 48: "凶", 49: "吉", 50: "吉",
    51: "凶", 52: "小吉", 53: "吉", 54: "末吉", 55: "吉", 56: "末吉", 57: "吉", 58: "吉", 59: "吉", 60: "小吉",
    61: "半吉", 62: "大吉", 63: "中吉", 64: "大凶", 65: "末吉", 66: "大吉", 67: "凶", 68: "吉", 69: "凶", 70: "吉",
    71: "凶", 72: "吉", 73: "大吉", 74: "大吉", 75: "吉", 76: "吉", 77: "凶", 78: "吉", 79: "吉", 80: "小吉",
    81: "大吉", 82: "大凶", 83: "小吉", 84: "凶", 85: "吉", 86: "吉", 87: "末吉", 88: "吉", 89: "大吉", 90: "吉",
    91: "吉", 92: "凶", 93: "吉", 94: "吉", 95: "吉", 96: "大吉", 97: "大吉", 98: "大凶", 99: "大吉", 100: "大凶"
}

def get_title(luck):
    if luck == "大吉": return "吉大 | 勢運"
    if luck == "中吉": return "吉中 | 勢運"
    if luck == "小吉": return "吉小 | 勢運"
    if luck == "吉":   return " 吉  | 勢運 "
    if luck == "末吉": return "吉末 | 勢運"
    if luck == "半吉": return "吉半 | 勢運"
    if luck == "凶":   return " 凶  | 勢運 "
    if luck == "大凶": return "凶大 | 勢運"
    return " 吉  | 勢運 "

# Waka Templates (5-7-5-7-7)
WAKA_TEMPLATES = {
    "大吉": [
        ("ひさかたの<br />光のどけき<br />春の日に<br />しづ心なく<br />花の散るらむ", 
         "天から降り注ぐ<br />光のように、<br />あなたの運勢は<br />明るく穏やかです。<br />ただし、桜が散るように<br />良い時期は短いため、<br />好機を逃さぬよう<br />迅速に行動しなさい。"),
        ("千代に八千代に<br />さざれ石の<br />巌となりて<br />苔のむすまで",
         "長い年月をかけて<br />小さな石が<br />大きな岩となるように、<br />あなたの努力は<br />やがて大きな成果と<br />なって実を結びます。<br />焦らず着実に<br />進みなさい。"),
        ("東風吹かば<br />にほひおこせよ<br />梅の花<br />主なしとて<br />春を忘るな",
         "春の風が吹けば<br />梅の花が香るように、<br />あなたの才能や<br />魅力が周囲に<br />伝わる時です。<br />自信を持って<br />行動することで<br />運が開けます。"),
    ],
    "吉": [
        ("秋来ぬと<br />目にはさやかに<br />見えねども<br />風の音にぞ<br />おどろかれぬる",
         "季節の移ろいのように<br />運気は徐々に<br />変化しています。<br />目に見える変化は<br />まだ小さくとも、<br />良い兆しは<br />確実に訪れています。<br />感性を研ぎ澄ましなさい。"),
        ("春過ぎて<br />夏来にけらし<br />白妙の<br />衣ほすてふ<br />天の香具山",
         "季節が巡るように<br />物事は順調に<br />進んでいます。<br />爽やかな初夏のような<br />明るい運気です。<br />新しいことに<br />挑戦するのに<br />良い時期です。"),
        ("田子の浦に<br />うち出でて見れば<br />白妙の<br />富士の高嶺に<br />雪は降りつつ",
         "雄大な富士山のように<br />あなたの志は<br />高く気高いものです。<br />その目標に向かって<br />一歩一歩進めば、<br />必ずや頂に<br />到達できるでしょう。<br />努力を継続しなさい。"),
    ],
    "中吉": [
        ("天の原<br />ふりさけ見れば<br />春日なる<br />三笠の山に<br />出でし月かも",
         "広い空を見上げるような<br />清々しい気持ちで<br />過ごせるでしょう。<br />遠く離れた場所や<br />懐かしい人との<br />縁が吉をもたらします。<br />心を開いて<br />交流しなさい。"),
        ("いにしへの<br />奈良の都の<br />八重桜<br />けふ九重に<br />にほひぬるかな",
         "古都の桜のように<br />あなたの魅力が<br />花開く時です。<br />これまでの経験が<br />今のあなたを<br />輝かせています。<br />自信を持って<br />振る舞いなさい。"),
    ],
    "小吉": [
        ("花の色は<br />うつりにけりな<br />いたづらに<br />わが身世にふる<br />ながめせしまに",
         "時の流れは<br />早いものです。<br />ぼんやりしていると<br />好機を逃して<br />しまいます。<br />今やるべきことに<br />集中し、<br />時間を大切に<br />使いなさい。"),
        ("めぐりあひて<br />見しやそれとも<br />わかぬまに<br />雲がくれにし<br />夜半の月かな",
         "偶然の出会いや<br />再会の中に<br />幸運の鍵があります。<br />しかし、それは<br />すぐに消えてしまう<br />かもしれません。<br />一期一会を<br />大切にしなさい。"),
    ],
    "末吉": [
        ("奥山に<br />紅葉踏みわけ<br />鳴く鹿の<br />声きく時ぞ<br />秋は悲しき",
         "孤独や寂しさを<br />感じることも<br />あるでしょう。<br />しかし、その経験が<br />あなたの心を<br />深く豊かにします。<br />今は静かに<br />自分と向き合う<br />時です。"),
        ("足引きの<br />山鳥の尾の<br />しだり尾の<br />ながながし夜を<br />ひとりかも寝む",
         "長い夜のように<br />忍耐が必要な<br />時期です。<br />しかし、夜は<br />必ず明けます。<br />焦らず、<br />夜明けを待つ<br />心持ちが大切です。"),
    ],
    "半吉": [
        ("世の中は<br />常にもがもな<br />渚こぐ<br />あまの小舟の<br />綱手かなしも",
         "変わらない日常の<br />大切さを知る時です。<br />派手な変化より<br />地道な生活の中に<br />幸せがあります。<br />足元を固める<br />ことに専念<br />しなさい。"),
    ],
    "凶": [
        ("わが庵は<br />都のたつみ<br />しかぞすむ<br />世をうぢ山と<br />人はいふなり",
         "世間の喧騒から<br />離れ、静かに<br />過ごすべき時です。<br />無理に動くと<br />悪い噂や<br />トラブルに<br />巻き込まれます。<br />今は隠遁の<br />心を持ちなさい。"),
        ("嘆けとて<br />月やは物を<br />思はする<br />かこち顔なる<br />わが涙かな",
         "悩みや悲しみが<br />あるかもしれません。<br />しかし、それは<br />月や他人の<br />せいではありません。<br />自分の心と<br />向き合い、<br />原因を見つめ直す<br />時です。"),
        ("あらし吹く<br />三室の山の<br />もみぢ葉は<br />竜田の川の<br />錦なりけり",
         "嵐のような<br />激しい変化が<br />訪れます。<br />しかし、その変化は<br />後の美しい景色を<br />作るためのものです。<br />恐れずに<br />流れに身を<br />任せなさい。"),
    ],
    "大凶": [
        ("世の中を<br />憂しとやさしと<br />おもへども<br />飛び立ちかねつ<br />鳥にしあらねば",
         "逃げ出したくなるような<br />辛い状況です。<br />しかし、今は<br />耐えるしかありません。<br />軽挙妄動は<br />命取りになります。<br />嵐が過ぎるのを<br />じっと待ちましょう。"),
        ("玉の緒よ<br />絶えなば絶えね<br />ながらへば<br />忍ぶることの<br />よわりもぞする",
         "心が折れそうなほど<br />苦しい時です。<br />しかし、命ある限り<br />希望はあります。<br />今はただ、<br />生き抜くことだけを<br />考えなさい。"),
    ]
}

# Sort Order
SORT_ORDER = ["大吉", "吉", "中吉", "小吉", "半吉", "末吉", "凶", "大凶"]

results = []
for i in range(1, 101):
    luck = LUCK_MAP.get(i, "吉")
    
    # Select a template cyclically based on index to ensure variety
    templates = WAKA_TEMPLATES.get(luck, WAKA_TEMPLATES["吉"])
    template = templates[i % len(templates)]
    
    results.append({
        "luck": luck, # Temp for sorting
        "title": get_title(luck),
        "poem": template[0],
        "modernText": template[1]
    })

# Sort results
results.sort(key=lambda x: SORT_ORDER.index(x['luck']) if x['luck'] in SORT_ORDER else 99)

# Output TypeScript
ts_content = """export interface FortuneResult {
    title: string;
    poem: string;
    modernText: string;
}

export interface ItemDetail {
    name: string;
    texts: {
        [point: number]: string;
    };
}

export const FORTUNE_RESULTS: FortuneResult[] = [
"""

for res in results:
    ts_content += "    {\n"
    ts_content += f"        title: '{res['title']}',\n"
    ts_content += f"        poem: '{res['poem']}',\n"
    ts_content += f"        modernText: '{res['modernText']}'\n"
    ts_content += "    },\n"

ts_content += "];\n\n"

# Append existing ITEM_DETAILS and OMIKUJI_TRIVIA
with open('/Users/soma/IdeaProjects/omikuzi/src/data/omikujiData.ts', 'r') as f:
    original = f.read()

import re
match = re.search(r'export const ITEM_DETAILS: ItemDetail\[\] = \[', original)
if match:
    rest_of_file = original[match.start():]
    ts_content += rest_of_file
else:
    ts_content += "// Error: Could not find ITEM_DETAILS"

with open('/Users/soma/IdeaProjects/omikuzi/src/data/omikujiData.ts', 'w') as f:
    f.write(ts_content)

print("Successfully generated sorted Waka omikujiData.ts with Dai-kyo")
