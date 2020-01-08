import { A } from '../../../Store/Actions';
import { words } from '../../../Store/reducers';

describe("words reducer", () => {
    test.todo("ADD WORD success");
    it("ADD WORDS", () => {
        const state = [];
        const action = {
            type: A.ADD_WORD,
            id: 1,
            kr: "보다",
            tl: [
                { code: "en-us", value: "to see" },
                { code: "fr-fr", value: "voir" }
            ],
            status: 'LEARNED'
        };
        const result = words(state, action);

        expect(result).toEqual([
            {
                id: 1,
                kr: "보다",
                tl: [
                    { code: "en-us", value: "to see" },
                    { code: "fr-fr", value: "voir" }
                ],
                status: 'LEARNED'
            }
        ]);
    })
});