import { A } from './Actions';

function words(state = [], action) {
    switch (action.type) {
        case A.ADD_WORD:
            return [...state, word(state, action)];
        case A.DELETE_WORD:
            return state.filter( w => w.id !== action.id);
        case A.DELETE_ALL_WORD:
            return [];
        case A.EDIT_WORD_KOREAN:
            return state.map(w => word(w, action));
        case A.EDIT_WORD_TRANSLATION:
            return state.map(w => word(w, action));
        default:
            return state;
    }
}

function word(state = {}, action) {
    const {id, kr, tl} = action;

    switch (action.type) {
        case A.ADD_WORD:
            return id ? {id, kr, tl} : {id: null, kr: '', tl: []};
        default:
            return state;
    }
}

function langs(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

function lang(state = '', action) {
    switch (action.type) {
        default:
            return state;
    }
}

export {words, lang, langs};