(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4997], {
        21777: (e, a, i) => {
            var t = {
                "./ar.ts": [63882, 3882],
                "./bg.ts": [31166, 1166],
                "./cs.ts": [63331, 3331],
                "./da.ts": [22654, 2654],
                "./de.ts": [46770, 6770],
                "./el.ts": [59548, 9548],
                "./en.ts": [93386],
                "./es.ts": [59937, 9937],
                "./fi.ts": [71776, 1776],
                "./fr.ts": [84633, 4633],
                "./hi.ts": [91098, 1098],
                "./hr.ts": [9007, 9007],
                "./hu.ts": [52302, 2302],
                "./id.ts": [59408, 9408],
                "./it.ts": [92256, 2256],
                "./ja.ts": [31404, 1404],
                "./ko.ts": [18263, 8263],
                "./ms.ts": [23337, 3337],
                "./nl.ts": [10711, 711],
                "./no.ts": [26474, 6474],
                "./pl.ts": [26945, 6945],
                "./pt.ts": [62649, 2649],
                "./ro.ts": [20918, 918],
                "./ru.ts": [5952, 5952],
                "./sk.ts": [20891, 891],
                "./sv.ts": [47148, 7148],
                "./ta.ts": [39886, 9886],
                "./tl.ts": [52365, 2365],
                "./tr.ts": [95467, 5467],
                "./uk.ts": [97321, 7321],
                "./vi.ts": [40304, 304],
                "./zh.ts": [87055, 7055]
            };

            function s(e) {
                if (!i.o(t, e)) return Promise.resolve().then(() => {
                    var a = Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                });
                var a = t[e],
                    s = a[0];
                return Promise.all(a.slice(1).map(i.e)).then(() => i(s))
            }
            s.keys = () => Object.keys(t), s.id = 21777, e.exports = s
        },
        44997: (e, a, i) => {
            "use strict";
            i.r(a), i.d(a, {
                default: () => K
            });
            var t = i(4155),
                s = i(67145),
                l = i(75489);
            let r = async e => {
                    let {
                        audioElement: a,
                        config: i,
                        voiceId: t,
                        modelId: s,
                        speed: l = 1
                    } = e, r = {
                        text: i.text,
                        model_id: s,
                        voice_settings: {
                            speed: l
                        }
                    }, n = "".concat("https://api.elevenlabs.io", "/v1/text-to-speech/").concat(t, "?allow_unauthenticated=1"), o = await fetch(n, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(r)
                    });
                    if (o.ok && null !== o.body) {
                        let e = await o.blob(),
                            i = new FileReader;
                        i.onload = () => {
                            a.src = i.result
                        }, i.readAsDataURL(e)
                    } else {
                        let {
                            detail: e
                        } = await o.json();
                        throw e
                    }
                },
                n = {
                    quota_exceeded: {
                        title: "Quota Exceeded",
                        description: "You have reached the limit of available requests on the landing page. You can continue, for free, by signing-up to the platform."
                    },
                    system_busy: {
                        title: "Sytem Busy",
                        description: "The system is currently experiencing unusually high levels of activity. Please try again later."
                    }
                },
                o = {
                    News: {
                        name: "News"
                    },
                    Narration: {
                        name: "Narration"
                    },
                    Characters: {
                        name: "Characters"
                    },
                    Conversational: {
                        name: "Conversational"
                    }
                },
                c = {
                    Mai: {
                        name: "Mai",
                        tags: [],
                        voiceId: "2vT8WlUXV1qBtgiLZdSb",
                        image: "daniel.webp"
                    },
                    Nhung: {
                        name: "Nhung",
                        tags: [],
                        voiceId: "jpmnSYDOADVEpZksbLmc",
                        image: "charlie.webp"
                    },
                    Trung: {
                        name: "Trung",
                        tags: [],
                        voiceId: "ueSxRO0nLF1bj93J2hVt",
                        image: "charlotte.webp"
                    },
                    Ojaswi: {
                        name: "Ojaswi",
                        tags: [],
                        voiceId: "3JDquces8E8bkmvbh6Bc",
                        image: "sarah.webp"
                    },
                    Meera: {
                        name: "Meera",
                        tags: [],
                        voiceId: "gCr8TeSJgJaeaIoV4RWH",
                        image: "alice.webp"
                    },
                    Andrej: {
                        name: "Andrej",
                        tags: [],
                        voiceId: "bYqmvVkXUBwLwYpGHGz3",
                        image: "laura.webp"
                    },
                    Angela: {
                        name: "Angela",
                        tags: [],
                        voiceId: "Pid5DJleNF2sxsuF6YKD",
                        image: "callum.webp"
                    },
                    Slobodan: {
                        name: "Slobodan",
                        tags: [],
                        voiceId: "adxhr4Ei7ASJ3Cz7fxwX",
                        image: "daniel.webp"
                    },
                    Maja: {
                        name: "Maja",
                        tags: [],
                        voiceId: "0jvpZ98RZwx5FBOSZAc3",
                        image: "alice.webp"
                    },
                    Peter: {
                        name: "Peter",
                        tags: [],
                        voiceId: "JCNhnuny412iVIvPSTD4",
                        image: "charlotte.webp"
                    },
                    Julian: {
                        name: "Julian",
                        tags: [],
                        voiceId: "kzrsjZhHCumKqmkJl486",
                        image: "will.webp"
                    },
                    Hana: {
                        name: "Hana",
                        tags: [],
                        voiceId: "2qbJHyAaz7tHCfVZS6z3",
                        image: "charlie.webp"
                    },
                    Thomas: {
                        name: "Thomas",
                        tags: [],
                        voiceId: "C43bq5qXRueL1cBQEOt3",
                        image: "callum.webp"
                    },
                    Sissel: {
                        name: "Sissel",
                        tags: [],
                        voiceId: "ZKutKtutnlbOxDxkNlhk",
                        image: "lily.webp"
                    },
                    Mathias: {
                        name: "Mathias",
                        tags: [],
                        voiceId: "ygiXC2Oa1BiHksD3WkJZ",
                        image: "charlie.webp"
                    },
                    Ondrej: {
                        name: "Ondřej",
                        tags: [],
                        voiceId: "nCmK9bolkZa2wzrAjnEe",
                        image: "sarah.webp"
                    },
                    Marcus: {
                        name: "Marcus",
                        tags: [],
                        voiceId: "0Taf9YpPJZOyehNCOJu1",
                        image: "charlie.webp"
                    },
                    Petr: {
                        name: "Petr",
                        tags: [],
                        voiceId: "NHv5TpkohJlOhwlTCzJk",
                        image: "will.webp"
                    },
                    Kyriakos: {
                        name: "Kyriakos ",
                        tags: [],
                        voiceId: "6z1Ks05MOtac6wYNh9PJ",
                        image: "chris.webp"
                    },
                    Niki: {
                        name: "Niki ",
                        tags: [],
                        voiceId: "AnNshXL08po8KEaf53gz",
                        image: "charlotte.webp"
                    },
                    Fatsis: {
                        name: "Fatsis",
                        tags: [],
                        voiceId: "cuab90umcstNgL8U7orz",
                        image: "callum.webp"
                    },
                    Oleksii: {
                        name: "Oleksii",
                        tags: [],
                        voiceId: "MajbwhPMg2mRJJCesMAF",
                        image: "alice.webp"
                    },
                    Anton: {
                        name: "Anton",
                        tags: [],
                        voiceId: "GVRiwBELe0czFUAJj0nX",
                        image: "laura.webp"
                    },
                    Olena: {
                        name: "Olena",
                        tags: [],
                        voiceId: "ARxhnQPZCfSLpMBASSii",
                        image: "alice.webp"
                    },
                    Magyar: {
                        name: "Magyar ",
                        tags: [],
                        voiceId: "TumdjBNWanlT3ysvclWh",
                        image: "charlotte.webp"
                    },
                    Antonia: {
                        name: "Antonia",
                        tags: [],
                        voiceId: "3z9q8Y7plHbvhDZehEII",
                        image: "charlie.webp"
                    },
                    Corina: {
                        name: "Corina",
                        tags: [],
                        voiceId: "gbLy9ep70G3JW53cTzFC",
                        image: "laura.webp"
                    },
                    Jora: {
                        name: "Jora",
                        tags: [],
                        voiceId: "OlBp4oyr3FBAGEAtJOnU",
                        image: "alice.webp"
                    },
                    Tulipe: {
                        name: "Tulipe",
                        tags: [],
                        voiceId: "ngiiW8FFLIdMew1cqwSB",
                        image: "callum.webp"
                    },
                    Eva: {
                        name: "Eva",
                        tags: [],
                        voiceId: "djUbJhnXETnX31p3rgun",
                        image: "charlie.webp"
                    },
                    Sara: {
                        name: "Sara",
                        tags: [],
                        voiceId: "KHCvMklQZZo0O30ERnVn",
                        image: "sarah.webp"
                    },
                    Alexander: {
                        name: "Alexander ",
                        tags: [],
                        voiceId: "UPeEHhD60Z9Djsbwmmy4",
                        image: "charlotte.webp"
                    },
                    Anders: {
                        name: "Anders",
                        tags: [],
                        voiceId: "x0u3EW21dbrORJzOq1m9",
                        image: "alice.webp"
                    },
                    Sofie: {
                        name: "Sofie",
                        tags: [],
                        voiceId: "4xkUqaR9MYOJHoaC1Nak",
                        image: "callum.webp"
                    },
                    Johannes: {
                        name: "Johannes",
                        tags: [],
                        voiceId: "2dhHLsmg0MVma2t041qT",
                        image: "laura.webp"
                    },
                    Jonas: {
                        name: "Jonas",
                        tags: [],
                        voiceId: "e6OiUVixGLmvtdn2GJYE",
                        image: "laura.webp"
                    },
                    Adam: {
                        name: "Adam",
                        tags: [],
                        voiceId: "x0u3EW21dbrORJzOq1m9",
                        image: "alice.webp"
                    },
                    Sanna: {
                        name: "Sanna ",
                        tags: [],
                        voiceId: "aSLKtNoVBZlxQEMsnGL2",
                        image: "chris.webp"
                    },
                    Pawel: {
                        name: "Pawel",
                        tags: [],
                        voiceId: "zzBTsLBFM6AOJtkr1e9b",
                        image: "george.webp"
                    },
                    Aneta: {
                        name: "Aneta",
                        tags: [],
                        voiceId: "Pid5DJleNF2sxsuF6YKD",
                        image: "will.webp"
                    },
                    Damian: {
                        name: "Damian",
                        tags: [],
                        voiceId: "S1JKkpuAQNsowB8ZvKRO",
                        image: "jessica.webp"
                    },
                    Cavit: {
                        name: "Cavit",
                        tags: [],
                        voiceId: "Y2T2O1csKPgWgyuKcU0a",
                        image: "laura.webp"
                    },
                    Eda: {
                        name: "Eda",
                        tags: [],
                        voiceId: "mBUB5zYuPwfVE6DTcEjf",
                        image: "chris.webp"
                    },
                    Cem: {
                        name: "Cem",
                        tags: [],
                        voiceId: "D1xRw7f8ZHedI7xJgfvz",
                        image: "callum.webp"
                    },
                    Johan: {
                        name: "Johan ",
                        tags: [],
                        voiceId: "AVIlLDn2TVmdaDycgbo3",
                        image: "charlotte.webp"
                    },
                    Peeters: {
                        name: "Peeters",
                        tags: [],
                        voiceId: "gC9jy9VUxaXAswovchvQ",
                        image: "alice.webp"
                    },
                    Ruth: {
                        name: "Ruth",
                        tags: [],
                        voiceId: "YUdpWWny7k5yb4QCeweX",
                        image: "alice.webp"
                    },
                    Luca: {
                        name: "Luca",
                        tags: [],
                        voiceId: "UlwxMDtxqMDYmG6pk2q6",
                        image: "sarah.webp"
                    },
                    Linda: {
                        name: "Linda",
                        tags: [],
                        voiceId: "3DPhHWXDY263XJ1d2EPN",
                        image: "lily.webp"
                    },
                    Giovanni: {
                        name: "Giovanni",
                        tags: [],
                        voiceId: "fzDFBB4mgvMlL36gPXcz",
                        image: "will.webp"
                    },
                    Suara: {
                        name: "Suara",
                        tags: [],
                        voiceId: "4RK3Moe6TpBQ4otXBFtc",
                        image: "charlie.webp"
                    },
                    Andra: {
                        name: "Andra",
                        tags: [],
                        voiceId: "gP7FRCgEZ8Lr3rnyGgpw",
                        image: "alice.webp"
                    },
                    Tri: {
                        name: "Tri ",
                        tags: [],
                        voiceId: "lFjzhZHq0NwTRiu2GQxy",
                        image: "charlotte.webp"
                    },
                    Bo: {
                        name: "Bo",
                        tags: [],
                        voiceId: "ZZ4xhVcc83kZBfNIlIIz",
                        image: "daniel.webp"
                    },
                    Hyuk: {
                        name: "Hyuk",
                        tags: [],
                        voiceId: "ZJCNdZEjYwkOElxugmW2",
                        image: "alice.webp"
                    },
                    Felix: {
                        name: "Felix",
                        tags: [],
                        voiceId: "sRk0zCqhS2Cmv0bzx5wA",
                        image: "alice.webp"
                    },
                    Mintimer: {
                        name: "Mintimer",
                        tags: [],
                        voiceId: " Dvfxihpdb69LFIkmih0k",
                        image: "jessica.webp"
                    },
                    Artem: {
                        name: "Artem",
                        tags: [],
                        voiceId: "blxHPCXhpXOsc7mCKk0P",
                        image: "callum.webp"
                    },
                    Hamid: {
                        name: "Hamid",
                        tags: [],
                        voiceId: "A9ATTqUUQ6GHu0coCz8t",
                        image: "chris.webp"
                    },
                    Hmida: {
                        name: "Hmida",
                        tags: [],
                        voiceId: "JjTirzdD7T3GMLkwdd3a",
                        image: "charlie.webp"
                    },
                    Geza: {
                        name: "G\xe9za",
                        tags: [],
                        voiceId: "372NsdHr6qutUh2JE8DJ",
                        image: "lily.webp"
                    },
                    Sana: {
                        name: "Sana",
                        tags: [],
                        voiceId: "mRdG9GYEjJmIzqbYTidv",
                        image: "chris.webp"
                    },
                    Kozy: {
                        name: "Kozy",
                        tags: [],
                        voiceId: "RBnMinrYKeccY3vaUxlZ",
                        image: "will.webp"
                    },
                    Sakura: {
                        name: "Sakura",
                        tags: [],
                        voiceId: "RBnMinrYKeccY3vaUxlZ",
                        image: "callum.webp"
                    },
                    Otani: {
                        name: "Otani",
                        tags: [],
                        voiceId: "3JDquces8E8bkmvbh6Bc",
                        image: "sarah.webp"
                    },
                    Niander: {
                        name: "Niander",
                        tags: [],
                        voiceId: "bAFkvitDGeDMmqo9gJzO",
                        image: "alice.webp"
                    },
                    Mila: {
                        name: "Mila",
                        tags: [],
                        voiceId: "dCnu06FiOZma2KVNUoPZ",
                        image: "jessica.webp"
                    },
                    Emilia: {
                        name: "Emilia",
                        tags: [],
                        voiceId: "Dt2jDzhoZC0pZw5bmy2S",
                        image: "will.webp"
                    },
                    Martin: {
                        name: "Martin",
                        tags: [],
                        voiceId: "FNOttooGMYDRXmqkQ0Fz",
                        image: "sarah.webp"
                    },
                    Claire: {
                        name: "Claire",
                        tags: [],
                        voiceId: "6vTyAgAT8PncODBcLjRf",
                        image: "charlie.webp"
                    },
                    Nicolas: {
                        name: "Nicolas",
                        tags: [],
                        voiceId: "aQROLel5sQbj1vuIVi6B",
                        image: "charlotte.webp"
                    },
                    Eleguar: {
                        name: "Eleguar",
                        tags: [],
                        voiceId: "T7QGPtToiqH4S8VlIkMJ",
                        image: "laura.webp"
                    },
                    Valeria: {
                        name: "Valeria",
                        tags: [],
                        voiceId: "9oPKasc15pfAbMr7N6Gs",
                        image: "daniel.webp"
                    },
                    Dan: {
                        name: "Dan",
                        tags: [],
                        voiceId: "9F4C8ztpNUmXkdDDbz3J",
                        image: "chris.webp"
                    },
                    Coco: {
                        name: "Coco",
                        tags: [],
                        voiceId: "WuLq5z7nEcrhppO0ZQJw",
                        image: "george.webp"
                    },
                    MartinLi: {
                        name: "Martin Li",
                        tags: [],
                        voiceId: "WuLq5z7nEcrhppO0ZQJw",
                        image: "brian.webp"
                    },
                    Liang: {
                        name: "Liang",
                        tags: [],
                        voiceId: "FjfxJryh105iTLL4ktHB",
                        image: "bill.webp"
                    },
                    Keren: {
                        name: "Keren",
                        tags: [],
                        voiceId: "33B4UnXyTNbgLmdEDh5P",
                        image: "eric.webp"
                    },
                    Adriano: {
                        name: "Adriano",
                        tags: [],
                        voiceId: "hwnuNyWkl9DjdTFykrN6",
                        image: "matilda.webp"
                    },
                    Monika: {
                        name: "Monika",
                        tags: [],
                        voiceId: "1qEiC6qsybMkmnNdVMbK",
                        image: "sarah.webp"
                    },
                    Raju: {
                        name: "Raju",
                        tags: [],
                        voiceId: "zT03pEAEi0VHKciJODfn",
                        image: "jessica.webp"
                    },
                    Will: {
                        name: "Will",
                        tags: [],
                        voiceId: "bIHbv24MWmeRgasZH58o",
                        image: "will.webp"
                    },
                    Jessica: {
                        name: "Jessica",
                        tags: [],
                        voiceId: "cgSgspJ2msm6clMCkdW9",
                        image: "jessica.webp"
                    },
                    Laura: {
                        name: "Laura",
                        tags: [],
                        voiceId: "FGY2WhTYpPnrIDTdsKH5",
                        image: "laura.webp"
                    },
                    Eric: {
                        name: "Eric",
                        tags: [],
                        voiceId: "cjVigY5qzO86Huf0OWal",
                        image: "eric.webp"
                    },
                    Sarah: {
                        name: "Sarah",
                        tags: [o.News],
                        voiceId: "EXAVITQu4vr4xnSDxMaL",
                        image: "sarah.webp",
                        imageFace: "sarah.webp"
                    },
                    Matilda: {
                        name: "Matilda",
                        tags: [o.Narration],
                        voiceId: "XrExE9yKIg1WjnnlVkGX",
                        image: "matilda.webp",
                        imageFace: "matilda.webp"
                    },
                    Lily: {
                        name: "Lily",
                        tags: [o.Narration],
                        voiceId: "pFZP5JQG7iQjIQuC4Bku",
                        image: "lily.webp",
                        imageFace: "lily.webp"
                    },
                    Liam: {
                        name: "Liam",
                        tags: [o.Narration],
                        voiceId: "TX3LPaxmHKxFdv7VOQHJ",
                        image: "liam.webp",
                        imageFace: "liam.webp"
                    },
                    George: {
                        name: "George",
                        tags: [o.Narration],
                        voiceId: "JBFqnCBsd6RMkjVDRZzb",
                        image: "george.webp",
                        imageFace: "george.webp"
                    },
                    Daniel: {
                        name: "Daniel",
                        tags: [o.News],
                        voiceId: "onwK4e9ZLuTAKqWW03F9",
                        image: "daniel.webp",
                        imageFace: "daniel.webp"
                    },
                    Chris: {
                        name: "Chris",
                        tags: [o.Conversational],
                        voiceId: "iP95p4xoKVk53GoZ742B",
                        image: "chris.webp",
                        imageFace: "chris.webp"
                    },
                    Charlotte: {
                        name: "Charlotte",
                        tags: [o.Characters],
                        voiceId: "XB0fDUnXU5powFXDhCwa",
                        image: "charlotte.webp",
                        imageFace: "charlotte.webp"
                    },
                    Charlie: {
                        name: "Charlie",
                        tags: [o.Conversational],
                        voiceId: "IKne3meq5aSn9XLyUdCD",
                        image: "charlie.webp",
                        imageFace: "charlie.webp"
                    },
                    Callum: {
                        name: "Callum",
                        tags: [o.Characters],
                        voiceId: "N2lVS1w4EtoT3dr4eOWO",
                        image: "callum.webp",
                        imageFace: "callum.webp"
                    },
                    Alice: {
                        name: "Alice",
                        tags: [o.News],
                        voiceId: "Xb7hH8MSUJpSbSDYk0k2",
                        image: "alice.webp",
                        imageFace: "alice.webp",
                        useCase: "news"
                    },
                    Bill: {
                        name: "Bill",
                        tags: [o.Narration],
                        voiceId: "pqHfZKP75CvOlQylNhV4",
                        image: "bill.webp",
                        imageFace: "bill.webp"
                    },
                    Brian: {
                        name: "Brian",
                        tags: [o.Narration],
                        voiceId: "nPczCjzI2devNBz1zQrb",
                        image: "brian.webp",
                        imageFace: "brian.webp",
                        useCase: "narration"
                    },
                    River: {
                        name: "River",
                        voiceId: "SAz9YHcvj6GT2YYXdXww",
                        image: "river.webp",
                        tags: []
                    },
                    Aria: {
                        name: "Aria",
                        voiceId: "9BWtsMINqrJLrRacOk9x",
                        image: "aria.webp",
                        tags: []
                    },
                    Roger: {
                        name: "Roger",
                        voiceId: "CwhRBWXzGAHq8TQ4Fs17",
                        image: "roger.webp",
                        tags: []
                    }
                },
                d = {
                    en: [c.Brian, c.Alice, c.Bill, c.Callum, c.Charlie, c.Charlotte, c.Chris, c.Daniel, c.Eric, c.George, c.Jessica, c.Laura, c.Liam, c.Lily, c.Matilda, c.Sarah, c.Will],
                    it: [c.Alice, c.Lily, c.Matilda, c.River],
                    fr: [c.Alice, c.Aria, c.Jessica, c.Laura, c.Matilda, c.Sarah, c.Bill, c.Callum, c.Chris, c.Eric, c.George, c.Roger, c.Will, c.River],
                    ar: [c.Alice, c.Charlotte, c.Jessica, c.Laura, c.Matilda, c.Sarah, c.Bill, c.Brian, c.Chris, c.George],
                    jp: [c.Alice, c.Jessica, c.George],
                    vi: [c.Alice, c.Liam],
                    zh: [c.Aria, c.Charlotte, c.Jessica, c.Laura, c.Lily, c.Sarah, c.Bill, c.Brian, c.Charlie, c.Will, c.River],
                    cs: [c.Charlotte, c.Jessica, c.Lily, c.Bill, c.George, c.Liam, c.Will],
                    de: [c.Jessica, c.Laura, c.Lily, c.Matilda, c.Bill, c.Brian, c.Daniel, c.Eric, c.Liam, c.Roger, c.Will],
                    nl: [c.Lily, c.Brian, c.Roger],
                    es: [c.Sarah, c.River, c.George, c.Eric, c.Matilda, c.Lily, c.Brian, c.Aria],
                    hu: [c.Sarah, c.Eric],
                    pt: [c.Brian, c.Charlie, c.Chris, c.Eric, c.Liam, c.Will, c.River],
                    sk: [c.Brian, c.Eric, c.Will],
                    tl: [c.Charlie, c.George, c.Will],
                    "": [c.Alice, c.Jessica, c.Laura, c.Lily, c.Matilda, c.Sarah, c.Bill, c.Brian, c.Eric, c.George, c.Liam, c.Will, c.River]
                };
            var m = i(12109),
                u = i(16812),
                g = i(67393),
                h = i(52956),
                p = i(93386);
            async function v(e) {
                try {
                    return (await i(21777)("./".concat(e, ".ts"))).default
                } catch (e) {
                    return
                }
            }
            async function w(e) {
                try {
                    return (await i(21777)("./".concat(e, ".ts"))).perUseCase
                } catch (e) {
                    return
                }
            }
            var x = i(78165),
                f = i(93),
                b = i(45327),
                y = i(86732),
                j = i(19018),
                I = i(84297),
                k = i(1412),
                C = i(46375),
                N = i(74034),
                S = i(16899),
                E = i(40030),
                L = i(98450),
                T = i(97387),
                B = i(81497),
                R = i(92459),
                A = i(79428),
                F = i(30927),
                z = i(55924),
                _ = i(31259),
                J = i(96431);

            function D(e, a) {
                if (e) {
                    if ("xl" === a && e.imageFace && "string" == typeof e.imageFace) return {
                        src: "/assets/images/voices/faces/".concat(e.imageFace)
                    };
                    if ("xl" === a && e.imageFace && "string" != typeof e.imageFace) return {
                        resource: e.imageFace
                    };
                    if (e.image && "string" == typeof e.image) return {
                        src: "/assets/images/voices/orbs/".concat(e.image)
                    };
                    if (e.image && "string" != typeof e.image) return {
                        resource: e.image
                    }
                }
            }
            let O = e => {
                    let {
                        voices: a,
                        selectedVoiceId: i,
                        setSelectedVoiceId: s,
                        setRegenerate: l,
                        selectedLanguageUseCasePrompts: r
                    } = e, n = (0, E.useTranslations)("TTS");
                    return (0, t.jsxs)("div", {
                        className: "bg-dark scrollbar-none hidden w-2/6 shrink-0 flex-col gap-5 overflow-y-auto p-12 lg:flex",
                        children: [(0, t.jsx)("p", {
                            className: "f-ui-03 text-lightest mb-12 ml-8",
                            children: n("widget.voices")
                        }), (0, t.jsx)(x.bL, {
                            className: (0, j.cn)(""),
                            onValueChange: e => {
                                s(e), l(!0)
                            },
                            value: i,
                            children: a.map(e => {
                                var a, s, l, n;
                                return (0, t.jsxs)(x.q7, {
                                    className: "focus:outline-darkest relative w-full rounded-lg p-12",
                                    value: e.voiceId,
                                    children: [i === e.voiceId && (0, t.jsx)(S.Uu, {
                                        className: (0, j.cn)("bg-default border-default absolute inset-0 rounded-xl border"),
                                        layoutId: "tts-selected-voice"
                                    }), (0, t.jsxs)("div", {
                                        className: (0, j.cn)("relative z-10 flex flex-wrap items-center justify-between"),
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex items-center gap-10 ",
                                            children: [(0, t.jsx)(R.e, {
                                                className: "border-0",
                                                height: 20,
                                                image: D(e, "md"),
                                                size: "sm",
                                                width: 20
                                            }), (0, t.jsx)("span", {
                                                className: "f-ui-06 uppercase",
                                                children: e.name
                                            })]
                                        }), (null == e ? void 0 : null === (a = e.tags) || void 0 === a ? void 0 : a.length) !== 0 && (0, t.jsx)("div", {
                                            className: "flex flex-wrap items-center gap-4",
                                            children: (null == r ? void 0 : r[null !== (s = e.useCase) && void 0 !== s ? s : ""]) && (0, t.jsx)(m.E, {
                                                className: (0, j.cn)("bg-dark", i === e.voiceId ? "text-default" : "text-lightest"),
                                                children: null == r ? void 0 : r[null !== (l = e.useCase) && void 0 !== l ? l : ""].title
                                            }, null == r ? void 0 : r[null !== (n = e.useCase) && void 0 !== n ? n : ""].title)
                                        })]
                                    })]
                                }, e.voiceId)
                            })
                        })]
                    })
                },
                M = e => {
                    let {
                        className: a,
                        text: i,
                        setText: s,
                        setRegenerate: l
                    } = e, r = (0, E.useTranslations)("TTS");
                    return (0, t.jsx)("textarea", {
                        className: (0, j.cn)("scrollbar-none flex-1 resize-none bg-none px-16 py-16 outline-none lg:px-24", a),
                        onChange: e => {
                            s(e.target.value), l(!0)
                        },
                        placeholder: r("widget.placeholder"),
                        value: i
                    })
                },
                G = e => {
                    let {
                        language: a,
                        setSelectedLanguage: i,
                        sortedLanguages: s,
                        variant: l = "default",
                        showSelectedLabel: r = !1
                    } = e, n = (0, E.useTranslations)("TTS");
                    return (0, t.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: ["sidebar" === l && (0, t.jsx)("div", {
                            className: "f-ui-04",
                            children: n("widget.language")
                        }), (0, t.jsxs)(z.l6, {
                            onValueChange: e => i(e),
                            value: null == a ? void 0 : a.value,
                            children: [(0, t.jsx)(z.bq, {
                                className: (0, j.cn)("gap-8 ps-10", "sidebar" === l && "w-full"),
                                children: (0, t.jsx)(z.yv, {
                                    "aria-label": null == a ? void 0 : a.label,
                                    children: (0, t.jsxs)("div", {
                                        className: "flex items-center gap-8",
                                        children: [(null == a ? void 0 : a.value) && (0, t.jsx)(g.default, {
                                            locale: a.value,
                                            size: 20
                                        }), ("sidebar" === l || r) && (null == a ? void 0 : a.label)]
                                    })
                                })
                            }), (0, t.jsx)(z.gC, {
                                className: "max-h-[350px]",
                                children: s.map(e => {
                                    let {
                                        label: a,
                                        value: i
                                    } = e;
                                    return (0, t.jsx)(z.eb, {
                                        icon: (0, t.jsx)(g.default, {
                                            locale: i,
                                            size: 20
                                        }),
                                        value: i,
                                        children: a
                                    }, i)
                                })
                            })]
                        })]
                    })
                },
                P = e => {
                    let {
                        hasScrolled: a,
                        scrollContainerRef: i,
                        selectedLanguagePrompts: s,
                        setText: l,
                        generate: r,
                        playingState: n,
                        noPadding: o = !1
                    } = e;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("div", {
                            className: "pointer-events-none z-10 h-full w-0 select-none",
                            children: (0, t.jsx)("div", {
                                className: (0, j.cn)("h-full w-80 bg-gradient-to-r from-white to-transparent transition-opacity duration-200", a ? "opacity-100" : "opacity-0")
                            })
                        }), (0, t.jsx)("div", {
                            className: (0, j.cn)("scrollbar-none relative flex gap-8 overflow-scroll", !o && "py-16 pe-16"),
                            ref: i,
                            children: null == s ? void 0 : s.map(e => {
                                let {
                                    title: a,
                                    icon: i,
                                    text: s
                                } = e;
                                return (0, t.jsx)(A.$, {
                                    disabled: "loading" === n,
                                    iconName: i,
                                    iconPosition: I.F.BEFORE,
                                    onClick: () => {
                                        l(s), r(s)
                                    },
                                    variant: "outline",
                                    children: a
                                }, a)
                            })
                        }), (0, t.jsx)("div", {
                            className: "pointer-events-none relative z-10 mr-10 ms-auto hidden h-full w-0 select-none lg:block",
                            children: (0, t.jsx)("div", {
                                className: "-ml-80 h-full w-80 bg-gradient-to-r from-transparent to-white"
                            })
                        })]
                    })
                },
                q = e => {
                    let {
                        text: a,
                        className: i,
                        maxCharacters: s
                    } = e;
                    return (0, t.jsxs)("span", {
                        className: (0, j.cn)("f-ui-05 tabular-nums", a.length > s && "text-negative", i),
                        children: [a.length, "/", s]
                    })
                },
                V = e => {
                    let {
                        className: a,
                        maxCharacters: i,
                        playingState: s,
                        playHandler: l,
                        text: r,
                        variant: n,
                        showLabel: o = !1
                    } = e;
                    return (0, t.jsx)(A.$, {
                        className: (0, j.cn)("p-0", "sidebar" === n ? "w-full" : o ? "ml-16 w-fit px-12" : "ml-16 w-40", a),
                        disabled: !r || "loading" === s || r.length > i,
                        onClick: l,
                        children: (0, t.jsxs)("span", {
                            className: "flex items-center gap-8",
                            children: [(0, t.jsx)(F.I, {
                                name: _.z[s]
                            }), ("sidebar" === n || o) && ("playing" === s ? "Pause" : "Play")]
                        }, s)
                    })
                },
                H = e => {
                    let {
                        audioElementRef: a,
                        text: i,
                        regenerate: s,
                        variant: l
                    } = e, r = !i || s;
                    return (0, t.jsx)(A.$, {
                        "aria-label": "Download generated speech",
                        className: (0, j.cn)("p-0", "sidebar" === l ? "w-full" : "ml-12 w-40", r && "opacity-50"),
                        disabled: r,
                        onClick: () => {
                            var e;
                            let i = null === (e = a.current) || void 0 === e ? void 0 : e.src;
                            if (!i) return;
                            let t = document.createElement("a");
                            t.href = i, t.download = "ElevenLabs_Text_to_Speech_audio.mp3", document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        },
                        variant: "outline",
                        children: (0, t.jsxs)("span", {
                            className: "flex items-center gap-8",
                            children: [(0, t.jsx)(F.I, {
                                name: I.k.DOWNLOAD_20
                            }), "sidebar" === l && "Download"]
                        })
                    })
                },
                U = e => {
                    var a;
                    let {
                        voices: i,
                        selectedVoice: s,
                        selectedVoiceId: l,
                        setSelectedVoiceId: r,
                        size: n,
                        variant: o = "default",
                        showTags: c = !1
                    } = e, d = (0, E.useTranslations)("TTS");
                    return (0, t.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: ["sidebar" === o && (0, t.jsx)("div", {
                            className: "f-ui-04",
                            children: d("widget.voice")
                        }), (0, t.jsxs)(z.l6, {
                            onValueChange: e => r(e),
                            value: l,
                            children: [(0, t.jsx)(z.bq, {
                                className: (0, j.cn)("w-[180px]", "sidebar" === o && "w-full"),
                                icon: (0, t.jsx)(R.e, {
                                    height: 20,
                                    image: D(s, n),
                                    size: "xs",
                                    width: 20
                                }),
                                children: (0, t.jsx)(z.yv, {
                                    children: null !== (a = null == s ? void 0 : s.name) && void 0 !== a ? a : ""
                                })
                            }), (0, t.jsx)(z.gC, {
                                className: "max-h-[350px]",
                                children: i.map(e => {
                                    var a, i;
                                    return (0, t.jsxs)(z.eb, {
                                        icon: (0, t.jsx)(R.e, {
                                            height: 20,
                                            image: D(e, n),
                                            size: "xs",
                                            width: 20
                                        }),
                                        value: e.voiceId,
                                        children: [e.name, c && (null == e ? void 0 : null === (a = e.tags) || void 0 === a ? void 0 : a.length) !== 0 && (0, t.jsx)("div", {
                                            className: "ml-8 inline-flex flex-wrap gap-4",
                                            children: null == e ? void 0 : null === (i = e.tags) || void 0 === i ? void 0 : i.map(e => (0, t.jsx)(m.E, {
                                                className: "bg-overlay-dark",
                                                children: e.name
                                            }, e.name))
                                        })]
                                    }, e.voiceId)
                                })
                            })]
                        })]
                    })
                },
                Z = e => {
                    let {
                        value: a,
                        setValue: i
                    } = e, s = (0, E.useTranslations)("TTS");
                    return (0, t.jsxs)("div", {
                        className: "flex flex-col gap-12",
                        children: [(0, t.jsx)("div", {
                            className: "f-ui-04",
                            children: s("widget.speed")
                        }), (0, t.jsx)(b.Q, {
                            max: 1.2,
                            min: .7,
                            onValueChange: e => i(e[0]),
                            step: .01,
                            value: [a]
                        })]
                    })
                },
                W = () => {
                    let e = (0, E.useTranslations)("TTS");
                    return (0, t.jsxs)("div", {
                        className: "z-1 absolute flex h-full w-full overflow-hidden",
                        children: [(0, t.jsxs)("svg", {
                            className: "absolute top-0 w-full",
                            fill: "none",
                            height: "378",
                            viewBox: "0 0 1090 378",
                            width: "1090",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, t.jsx)("g", {
                                filter: "url(#filter0_f_668_524)",
                                opacity: "0.4",
                                children: (0, t.jsx)("rect", {
                                    fill: "#406BFC",
                                    height: "502",
                                    rx: "200",
                                    width: "502",
                                    x: "711",
                                    y: "-248"
                                })
                            }), (0, t.jsx)("g", {
                                filter: "url(#filter1_f_668_524)",
                                opacity: "0.4",
                                children: (0, t.jsx)("rect", {
                                    fill: "#8EABEF",
                                    height: "646",
                                    rx: "200",
                                    width: "646",
                                    x: "138",
                                    y: "-514"
                                })
                            }), (0, t.jsx)("g", {
                                filter: "url(#filter2_f_668_524)",
                                opacity: "0.4",
                                children: (0, t.jsx)("rect", {
                                    fill: "#D4F5FA",
                                    height: "369",
                                    rx: "184.5",
                                    width: "369",
                                    x: "-68",
                                    y: "-139"
                                })
                            }), (0, t.jsxs)("defs", {
                                children: [(0, t.jsxs)("filter", {
                                    "color-interpolation-filters": "sRGB",
                                    filterUnits: "userSpaceOnUse",
                                    height: "750",
                                    id: "filter0_f_668_524",
                                    width: "750",
                                    x: "587",
                                    y: "-372",
                                    children: [(0, t.jsx)("feFlood", {
                                        "flood-opacity": "0",
                                        result: "BackgroundImageFix"
                                    }), (0, t.jsx)("feBlend", { in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        mode: "normal",
                                        result: "shape"
                                    }), (0, t.jsx)("feGaussianBlur", {
                                        result: "effect1_foregroundBlur_668_524",
                                        stdDeviation: "62"
                                    })]
                                }), (0, t.jsxs)("filter", {
                                    "color-interpolation-filters": "sRGB",
                                    filterUnits: "userSpaceOnUse",
                                    height: "894",
                                    id: "filter1_f_668_524",
                                    width: "894",
                                    x: "14",
                                    y: "-638",
                                    children: [(0, t.jsx)("feFlood", {
                                        "flood-opacity": "0",
                                        result: "BackgroundImageFix"
                                    }), (0, t.jsx)("feBlend", { in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        mode: "normal",
                                        result: "shape"
                                    }), (0, t.jsx)("feGaussianBlur", {
                                        result: "effect1_foregroundBlur_668_524",
                                        stdDeviation: "62"
                                    })]
                                }), (0, t.jsxs)("filter", {
                                    "color-interpolation-filters": "sRGB",
                                    filterUnits: "userSpaceOnUse",
                                    height: "617",
                                    id: "filter2_f_668_524",
                                    width: "617",
                                    x: "-192",
                                    y: "-263",
                                    children: [(0, t.jsx)("feFlood", {
                                        "flood-opacity": "0",
                                        result: "BackgroundImageFix"
                                    }), (0, t.jsx)("feBlend", { in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        mode: "normal",
                                        result: "shape"
                                    }), (0, t.jsx)("feGaussianBlur", {
                                        result: "effect1_foregroundBlur_668_524",
                                        stdDeviation: "62"
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "z-2 absolute flex h-full w-full flex-col items-center justify-center p-16 text-center backdrop-blur-xl ",
                            children: [(0, t.jsx)("p", {
                                className: "f-subhead-01 mb-8 max-w-lg",
                                children: e("widget.quota_exceeded_title")
                            }), (0, t.jsx)("p", {
                                className: "f-ui-02 mb-24 max-w-lg text-base",
                                children: e("widget.quota_exceeded_description")
                            }), (0, t.jsx)(f.N, {
                                asButton: !0,
                                href: "/app/sign-up",
                                size: "lg",
                                children: e("widget.quota_exceeded_button")
                            })]
                        })]
                    })
                };

            function K(e) {
                var a, i, o, c, m, g, x, f, b, R;
                let {
                    voices: z,
                    model: _ = "eleven_multilingual_v2",
                    size: D = "md",
                    customTtsGenerator: K,
                    useNewUi: X,
                    variant: Y = "default",
                    useVoiceBasedPrompts: Q = !1
                } = e, {
                    hasScrolled: $,
                    scrollContainerRef: ee
                } = (0, J.A)(), ea = (0, T.useRef)(null), ei = (0, T.useRef)(null), et = (0, E.useTranslations)("TTS"), [es, el] = (0, T.useState)(!0), er = (0, L.sf)(), en = (0, E.useLocale)(), [eo, ec] = (0, T.useState)(en), ed = h.Je.find(e => {
                    let {
                        value: a
                    } = e;
                    return a === eo
                }), em = (null == ed ? void 0 : ed.value) || "", [eu, eg] = (0, T.useState)(p.default), eh = d[em] || d[""], ep = (null == z ? void 0 : z.length) > 0 ? z : eh, [ev, ew] = (0, T.useState)(ep[0].voiceId), ex = ep.find(e => {
                    let {
                        voiceId: a
                    } = e;
                    return a === ev
                }), [ef, eb] = (0, T.useState)(Q && (null === (a = p.perUseCase[null !== (g = null == ex ? void 0 : ex.useCase) && void 0 !== g ? g : ""]) || void 0 === a ? void 0 : a.text) || et("widget.placeholder")), [ey, ej] = (0, T.useState)(p.perUseCase), [eI, ek] = (0, T.useState)(1), [eC, eN] = (0, T.useState)(!1), [eS, eE] = (0, T.useState)("original"), eL = (0, T.useRef)(null), eT = (0, y.al)(), eB = (0, y.v6)(), eR = X ? 1e3 : 500, [eA, eF] = (0, T.useState)(!1), ez = (0, L._C)("tts-widget-quota-exceeded-overlay");
                (0, T.useEffect)(() => {
                    em && ew(ep[0].voiceId)
                }, [em, ep]), (0, T.useEffect)(() => {
                    Q ? w(em).then(e => {
                        ej(e)
                    }) : v(em).then(e => {
                        var a;
                        eg(e), eb((null == e ? void 0 : null === (a = e[0]) || void 0 === a ? void 0 : a.text) || "")
                    })
                }, [em, Q]), (0, T.useEffect)(() => {
                    if (Q) {
                        var e;
                        let a = null == ey ? void 0 : ey[null !== (e = null == ex ? void 0 : ex.useCase) && void 0 !== e ? e : ""];
                        eb(a ? a.text : "")
                    }
                }, [eo, ey, ex, Q]), (0, T.useEffect)(() => {
                    el(!0)
                }, [eo, ev]);
                let e_ = [h.Je.find(e => "en" === e.value), ...h.Je.filter(e => "eleven_multilingual_v2" !== _ || !["hu", "no", "vi"].includes(e.value)).filter(e => "en" !== e.value).sort((e, a) => e.label.localeCompare(a.label))],
                    [eJ, eD] = (0, T.useState)("idle");
                async function eO(e) {
                    if (ea.current) {
                        eD("loading");
                        try {
                            (0, s.r)(l.U.landing_page_tts_audio_generated, {
                                text: e || ef,
                                voice_name: null == ex ? void 0 : ex.name,
                                voice_id: null == ex ? void 0 : ex.voiceId,
                                model_id: _
                            }), K ? await K({
                                voiceId: ev,
                                config: {
                                    text: e || ef
                                },
                                modelId: _,
                                audioElement: ea.current
                            }) : await r({
                                voiceId: ev,
                                config: {
                                    text: e || ef
                                },
                                modelId: _,
                                audioElement: ea.current,
                                speed: eI
                            }), eD("idle")
                        } catch (e) {
                            if ("object" == typeof e && null !== e && "status" in e) {
                                let a = e.status;
                                ["quota_exceeded", "system_busy"].includes(a) ? (er.capture("marketing_website_interactive_demo_error", {
                                    error_status: a,
                                    product: "tts"
                                }), "test" === ez && "quota_exceeded" === a ? eF(!0) : B.o.error(n[a].title, {
                                    description: n[a].description
                                })) : B.o.error("Something went wrong", {
                                    description: "It looks like there was an issue while generating. Please try again later."
                                })
                            } else B.o.error("Something went wrong", {
                                description: "It looks like there was an issue while generating. Please try again later."
                            });
                            setTimeout(() => {
                                eD("idle")
                            }, 1e3)
                        }
                        el(!1)
                    }
                }

                function eM() {
                    if (ea.current) switch (eJ) {
                        case "idle":
                        case "paused":
                            es ? eO() : ea.current.play();
                            break;
                        case "playing":
                            ea.current.pause()
                    }
                }

                function eG() {
                    if (!ed || !eu) return;
                    let e = eu[0].text;
                    eb(e), eO(e)
                }
                return (0, T.useEffect)(() => (document.addEventListener("sample", eG), () => {
                    document.removeEventListener("sample", eG)
                }), []), (0, T.useEffect)(() => {
                    if (eC && ei.current) {
                        document.body.style.overflow = "hidden";
                        let e = ei.current.getBoundingClientRect();
                        eL.current = {
                            height: e.height,
                            left: e.left,
                            top: e.top,
                            width: e.width
                        }, eE("popping"), setTimeout(() => {
                            eE("full-screen")
                        }, 50)
                    } else !eC && eL.current && (eE("popping-back"), setTimeout(() => {
                        eE("original"), eL.current = null, document.body.style.overflow = "auto"
                    }, 300))
                }, [eC]), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("audio", {
                        autoPlay: !0,
                        className: "h-24 w-24 border",
                        onEnded: () => eD("idle"),
                        onPause: () => eD("paused"),
                        onPlay: () => eD("playing"),
                        ref: ea
                    }), (0, t.jsxs)(S.Uu, {
                        animate: {
                            position: "original" === eS ? "relative" : "fixed",
                            top: "full-screen" === eS ? 0 : null !== (x = null === (i = eL.current) || void 0 === i ? void 0 : i.top) && void 0 !== x ? x : "auto",
                            left: "full-screen" === eS ? 0 : null !== (f = null === (o = eL.current) || void 0 === o ? void 0 : o.left) && void 0 !== f ? f : "auto",
                            width: "full-screen" === eS ? "100vw" : null !== (b = null === (c = eL.current) || void 0 === c ? void 0 : c.width) && void 0 !== b ? b : "100%",
                            height: "full-screen" === eS ? "100vh" : null !== (R = null === (m = eL.current) || void 0 === m ? void 0 : m.height) && void 0 !== R ? R : "100%",
                            zIndex: "original" === eS ? "auto" : 9999
                        },
                        className: "bg-default flex overflow-hidden",
                        initial: !1,
                        ref: ei,
                        transition: {
                            duration: .2 * ("original" !== eS && "popping" !== eS),
                            type: "popping-back" === eS ? "tween" : "spring",
                            stiffness: 400,
                            damping: 25,
                            restDelta: .001
                        },
                        children: [eA && (0, t.jsx)(W, {}), X ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsxs)("div", {
                                className: "flex w-full flex-col overflow-x-hidden",
                                children: [(0, t.jsx)(M, {
                                    className: "p-36 lg:px-36",
                                    setRegenerate: el,
                                    setText: eb,
                                    text: ef
                                }), (0, t.jsx)(u.h, {
                                    className: "order-1 mx-0 lg:order-none",
                                    mediaElement: ea.current || null
                                }), (0, t.jsxs)("div", {
                                    className: "relative flex items-center p-16 md:p-24",
                                    children: [eT && (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)(G, {
                                            language: ed,
                                            setSelectedLanguage: ec,
                                            sortedLanguages: e_
                                        }), (0, t.jsx)(F.I, {
                                            className: (0, j.cn)("mx-8 shrink-0", !eu && "hidden"),
                                            name: I.k.CHEVRON_RIGHT_16
                                        })]
                                    }), (0, t.jsx)(P, {
                                        generate: eO,
                                        hasScrolled: $,
                                        noPadding: !0,
                                        playingState: eJ,
                                        scrollContainerRef: ee,
                                        selectedLanguagePrompts: eu,
                                        setText: eb
                                    }), !eT && (0, t.jsx)(q, {
                                        className: "ms-auto",
                                        maxCharacters: eR,
                                        text: ef
                                    })]
                                }), eT && (0, t.jsxs)("div", {
                                    className: "order-2 flex items-center justify-between gap-12 p-16",
                                    children: [(0, t.jsx)(U, {
                                        selectedVoice: ex,
                                        selectedVoiceId: ev,
                                        setSelectedVoiceId: ew,
                                        size: D,
                                        voices: ep
                                    }), (0, t.jsx)(q, {
                                        className: "ms-auto",
                                        maxCharacters: eR,
                                        text: ef
                                    }), (0, t.jsx)(V, {
                                        className: "ml-0",
                                        maxCharacters: eR,
                                        playHandler: eM,
                                        playingState: eJ,
                                        text: ef
                                    })]
                                })]
                            }), !eT && (0, t.jsxs)("div", {
                                className: "relative flex w-2/5 flex-col gap-20 overflow-y-auto border-l border-solid p-24",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex items-center gap-8",
                                        children: [(0, t.jsx)(k.A, {
                                            size: 16
                                        }), (0, t.jsx)("span", {
                                            className: "f-ui-03",
                                            children: et("widget.voice_settings")
                                        })]
                                    }), (0, t.jsx)(A.$, {
                                        className: "h-40 w-40 p-0",
                                        onClick: () => eN(!eC),
                                        size: "sm",
                                        variant: "outline",
                                        children: eC ? (0, t.jsx)(C.A, {
                                            size: 16
                                        }) : (0, t.jsx)(N.A, {
                                            size: 16
                                        })
                                    })]
                                }), (0, t.jsx)(U, {
                                    selectedVoice: ex,
                                    selectedVoiceId: ev,
                                    setSelectedVoiceId: ew,
                                    showTags: !0,
                                    size: D,
                                    variant: "sidebar",
                                    voices: ep
                                }), (0, t.jsx)(G, {
                                    language: ed,
                                    setSelectedLanguage: ec,
                                    sortedLanguages: e_,
                                    variant: "sidebar"
                                }), (0, t.jsx)(Z, {
                                    setValue: ek,
                                    value: eI
                                }), (0, t.jsxs)("div", {
                                    className: "mt-auto flex gap-8",
                                    children: [(0, t.jsx)(H, {
                                        audioElementRef: ea,
                                        regenerate: es,
                                        text: ef,
                                        variant: "sidebar"
                                    }), (0, t.jsx)(V, {
                                        maxCharacters: eR,
                                        playHandler: eM,
                                        playingState: eJ,
                                        text: ef,
                                        variant: "sidebar"
                                    })]
                                })]
                            })]
                        }) : (0, t.jsxs)("div", {
                            className: (0, j.cn)("flex w-full", "v1.5" === Y && "bg-dark p-8"),
                            children: ["v1.5" === Y && (0, t.jsx)(O, {
                                selectedLanguageUseCasePrompts: ey,
                                selectedVoiceId: ev,
                                setRegenerate: el,
                                setSelectedVoiceId: ew,
                                voices: ep
                            }), (0, t.jsxs)("div", {
                                className: (0, j.cn)("flex flex-grow flex-col overflow-x-hidden", "v1.5" === Y && "bg-default rounded-lg"),
                                children: [(0, t.jsx)(M, {
                                    setRegenerate: el,
                                    setText: eb,
                                    text: ef
                                }), (0, t.jsx)(u.h, {
                                    className: "order-1 lg:order-none lg:mx-20",
                                    mediaElement: ea.current || null
                                }), (0, t.jsxs)("div", {
                                    className: "relative flex items-center px-16 lg:px-24",
                                    children: [("default" === Y || eB) && (0, t.jsx)("div", {
                                        className: "py-16",
                                        children: (0, t.jsx)(G, {
                                            language: ed,
                                            setSelectedLanguage: ec,
                                            showSelectedLabel: "v1.5" === Y,
                                            sortedLanguages: e_
                                        })
                                    }), "default" === Y && (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)(F.I, {
                                            className: (0, j.cn)("mx-8 shrink-0", !eu && "hidden"),
                                            name: I.k.CHEVRON_RIGHT_16
                                        }), (0, t.jsx)(P, {
                                            generate: eO,
                                            hasScrolled: $,
                                            playingState: eJ,
                                            scrollContainerRef: ee,
                                            selectedLanguagePrompts: eu,
                                            setText: eb
                                        })]
                                    }), eB && (0, t.jsxs)("div", {
                                        className: "ml-auto flex items-center",
                                        children: [(0, t.jsx)(q, {
                                            maxCharacters: eR,
                                            text: ef
                                        }), (0, t.jsx)(V, {
                                            maxCharacters: eR,
                                            playHandler: eM,
                                            playingState: eJ,
                                            showLabel: "v1.5" === Y,
                                            text: ef
                                        }), "v1.5" === Y && (0, t.jsx)(H, {
                                            audioElementRef: ea,
                                            regenerate: es,
                                            text: ef
                                        })]
                                    })]
                                }), !eB && (0, t.jsxs)("div", {
                                    className: "order-2 flex flex-wrap items-center gap-12 p-16",
                                    children: [(0, t.jsx)(U, {
                                        selectedVoice: ex,
                                        selectedVoiceId: ev,
                                        setSelectedVoiceId: ew,
                                        size: "v1.5" === Y ? "md" : D,
                                        voices: ep
                                    }), "v1.5" === Y && (0, t.jsx)(G, {
                                        language: ed,
                                        setSelectedLanguage: ec,
                                        showSelectedLabel: !1,
                                        sortedLanguages: e_
                                    }), (0, t.jsxs)("div", {
                                        className: "ml-auto flex items-center gap-8",
                                        children: [(0, t.jsx)(q, {
                                            className: "ms-auto",
                                            maxCharacters: eR,
                                            text: ef
                                        }), (0, t.jsx)(V, {
                                            className: "ml-0",
                                            maxCharacters: eR,
                                            playHandler: eM,
                                            playingState: eJ,
                                            text: ef
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        78165: (e, a, i) => {
            "use strict";
            i.d(a, {
                bL: () => _,
                q7: () => J
            });
            var t = i(97387),
                s = i(51113),
                l = i(93371),
                r = i(17439),
                n = i(78273),
                o = i(11567),
                c = i(58170),
                d = i(42912),
                m = i(84838),
                u = i(63222),
                g = i(53591),
                h = i(4155),
                p = "Radio",
                [v, w] = (0, r.A)(p),
                [x, f] = v(p),
                b = t.forwardRef((e, a) => {
                    let {
                        __scopeRadio: i,
                        name: r,
                        checked: o = !1,
                        required: c,
                        disabled: d,
                        value: m = "on",
                        onCheck: u,
                        form: g,
                        ...p
                    } = e, [v, w] = t.useState(null), f = (0, l.s)(a, e => w(e)), b = t.useRef(!1), y = !v || g || !!v.closest("form");
                    return (0, h.jsxs)(x, {
                        scope: i,
                        checked: o,
                        disabled: d,
                        children: [(0, h.jsx)(n.sG.button, {
                            type: "button",
                            role: "radio",
                            "aria-checked": o,
                            "data-state": k(o),
                            "data-disabled": d ? "" : void 0,
                            disabled: d,
                            value: m,
                            ...p,
                            ref: f,
                            onClick: (0, s.m)(e.onClick, e => {
                                o || null == u || u(), y && (b.current = e.isPropagationStopped(), b.current || e.stopPropagation())
                            })
                        }), y && (0, h.jsx)(I, {
                            control: v,
                            bubbles: !b.current,
                            name: r,
                            value: m,
                            checked: o,
                            required: c,
                            disabled: d,
                            form: g,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            b.displayName = p;
            var y = "RadioIndicator",
                j = t.forwardRef((e, a) => {
                    let {
                        __scopeRadio: i,
                        forceMount: t,
                        ...s
                    } = e, l = f(y, i);
                    return (0, h.jsx)(g.C, {
                        present: t || l.checked,
                        children: (0, h.jsx)(n.sG.span, {
                            "data-state": k(l.checked),
                            "data-disabled": l.disabled ? "" : void 0,
                            ...s,
                            ref: a
                        })
                    })
                });
            j.displayName = y;
            var I = e => {
                let {
                    control: a,
                    checked: i,
                    bubbles: s = !0,
                    ...l
                } = e, r = t.useRef(null), n = (0, u.Z)(i), o = (0, m.X)(a);
                return t.useEffect(() => {
                    let e = r.current,
                        a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (n !== i && a) {
                        let t = new Event("click", {
                            bubbles: s
                        });
                        a.call(e, i), e.dispatchEvent(t)
                    }
                }, [n, i, s]), (0, h.jsx)("input", {
                    type: "radio",
                    "aria-hidden": !0,
                    defaultChecked: i,
                    ...l,
                    tabIndex: -1,
                    ref: r,
                    style: { ...e.style,
                        ...o,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            };

            function k(e) {
                return e ? "checked" : "unchecked"
            }
            var C = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                N = "RadioGroup",
                [S, E] = (0, r.A)(N, [o.RG, w]),
                L = (0, o.RG)(),
                T = w(),
                [B, R] = S(N),
                A = t.forwardRef((e, a) => {
                    let {
                        __scopeRadioGroup: i,
                        name: t,
                        defaultValue: s,
                        value: l,
                        required: r = !1,
                        disabled: m = !1,
                        orientation: u,
                        dir: g,
                        loop: p = !0,
                        onValueChange: v,
                        ...w
                    } = e, x = L(i), f = (0, d.jH)(g), [b, y] = (0, c.i)({
                        prop: l,
                        defaultProp: s,
                        onChange: v
                    });
                    return (0, h.jsx)(B, {
                        scope: i,
                        name: t,
                        required: r,
                        disabled: m,
                        value: b,
                        onValueChange: y,
                        children: (0, h.jsx)(o.bL, {
                            asChild: !0,
                            ...x,
                            orientation: u,
                            dir: f,
                            loop: p,
                            children: (0, h.jsx)(n.sG.div, {
                                role: "radiogroup",
                                "aria-required": r,
                                "aria-orientation": u,
                                "data-disabled": m ? "" : void 0,
                                dir: f,
                                ...w,
                                ref: a
                            })
                        })
                    })
                });
            A.displayName = N;
            var F = "RadioGroupItem",
                z = t.forwardRef((e, a) => {
                    let {
                        __scopeRadioGroup: i,
                        disabled: r,
                        ...n
                    } = e, c = R(F, i), d = c.disabled || r, m = L(i), u = T(i), g = t.useRef(null), p = (0, l.s)(a, g), v = c.value === n.value, w = t.useRef(!1);
                    return t.useEffect(() => {
                        let e = e => {
                                C.includes(e.key) && (w.current = !0)
                            },
                            a = () => w.current = !1;
                        return document.addEventListener("keydown", e), document.addEventListener("keyup", a), () => {
                            document.removeEventListener("keydown", e), document.removeEventListener("keyup", a)
                        }
                    }, []), (0, h.jsx)(o.q7, {
                        asChild: !0,
                        ...m,
                        focusable: !d,
                        active: v,
                        children: (0, h.jsx)(b, {
                            disabled: d,
                            required: c.required,
                            checked: v,
                            ...u,
                            ...n,
                            name: c.name,
                            ref: p,
                            onCheck: () => c.onValueChange(n.value),
                            onKeyDown: (0, s.m)(e => {
                                "Enter" === e.key && e.preventDefault()
                            }),
                            onFocus: (0, s.m)(n.onFocus, () => {
                                var e;
                                w.current && (null === (e = g.current) || void 0 === e || e.click())
                            })
                        })
                    })
                });
            z.displayName = F, t.forwardRef((e, a) => {
                let {
                    __scopeRadioGroup: i,
                    ...t
                } = e, s = T(i);
                return (0, h.jsx)(j, { ...s,
                    ...t,
                    ref: a
                })
            }).displayName = "RadioGroupIndicator";
            var _ = A,
                J = z
        },
        93386: (e, a, i) => {
            "use strict";
            i.r(a), i.d(a, {
                default: () => s,
                perUseCase: () => l
            });
            var t = i(84297);
            let s = [{
                    title: "Tell a story",
                    icon: t.k.BOOK_20,
                    text: "In the ancient land of Eldoria, where the skies were painted with shades of mystic hues and the forests whispered secrets of old, there existed a dragon named Zephyros. Unlike the fearsome tales of dragons that plagued human hearts with terror, Zephyros was a creature of wonder and wisdom, revered by all who knew of his existence."
                }, {
                    title: "Introduce a podcast",
                    icon: t.k.MIC_20,
                    text: "Welcome to Eleven Degrees, your gateway to the cutting edge of innovation and the world of technology. I’m your host, Sam, and each week, we explore the latest trends, breakthroughs, and the people shaping the future of technology."
                }, {
                    title: "Create a video voiceover",
                    icon: t.k.VIDEO_20,
                    text: "Hey there! Did you know that in a room of just 23 people, there’s a 50% chance that two of them share the same birthday? Sounds crazy, right? This is called the Birthday Paradox!"
                }],
                l = {
                    narration: {
                        title: "Narration",
                        text: "In the ancient land of Eldoria, where the skies were painted with shades of mystic hues and the forests whispered secrets of old, there existed a dragon named Zephyros. Unlike the fearsome tales of dragons that plagued human hearts with terror, Zephyros was a creature of wonder and wisdom, revered by all who knew of his existence."
                    },
                    news: {
                        title: "News",
                        text: "Good evening and welcome to the 6 o'clock news. I'm Sarah Johnson reporting live from downtown. Breaking news tonight: scientists have announced a major breakthrough in renewable energy technology that could revolutionize how we power our homes and businesses. The development comes after years of research and represents what experts are calling a 'quantum leap' in sustainable energy solutions."
                    },
                    audiobook: {
                        title: "Audiobook",
                        text: "The old house stood at the end of a winding lane, its windows like tired eyes gazing out at the world. Sarah paused at the gate, her heart racing as memories flooded back. Twenty years had passed since she'd last set foot on this property, yet the scent of wild roses still hung in the air, exactly as she remembered from her childhood summers."
                    },
                    voiceover: {
                        title: "Voiceover",
                        text: "Discover a world where innovation meets elegance. Introducing the Aurora Series - our most advanced collection yet. With cutting-edge technology wrapped in sleek, sustainable design, these devices don't just perform, they inspire. Aurora - illuminating the path to tomorrow, available worldwide this Friday."
                    },
                    conversational: {
                        title: "Conversational",
                        text: "Hey there! I was thinking we could grab coffee this weekend at that new place downtown. I heard they have these amazing pastries that are absolutely to die for. What do you think? Are you free Saturday morning, or would Sunday work better for you?"
                    },
                    customerSupport: {
                        title: "Customer Support",
                        text: "Thank you for contacting ElevenLabs support. I understand you're having trouble with your voice synthesis project. Don't worry, we're here to help. Could you please provide your account email and describe the specific issue you're experiencing? This will help us troubleshoot the problem more effectively."
                    },
                    mathsTutor: {
                        title: "Maths Tutor",
                        text: "Today we're going to explore the fascinating world of quadratic equations. Think of them as mathematical puzzles that describe curves rather than straight lines. When we solve the equation ax\xb2 + bx + c = 0, we're actually finding the points where this curve crosses the x-axis. Let me show you a simple method to find these solutions."
                    }
                }
        }
    }
]);