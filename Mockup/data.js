const dictionnary = [
    {
        id: 0,
        kr: "보다",
        tl: [
            { code: "en-us", value: "to see" },
            { code: "fr-fr", value: "voir" }
        ],
        status: 'LEARNED'
    },
    {
        id: 1,
        kr: "가다",
        tl: [
            { code: "en-us", value: "to go" },
            { code: "fr-fr", value: "aller" }
        ],
        status: 'UNKNOWN'
    },
    {
        id: 2,
        kr: "자다",
        tl: [
            { code: "en-us", value: "to sleep" },
            { code: "fr-fr", value: "dormir" }
        ],
        status: 'UNKNOWN'
    }
];

const languages = [
    {code: 'en-us', name: 'english'},
    {code: 'fr-fr', name: 'français'},
];



export { dictionnary, languages };
