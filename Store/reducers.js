import { A } from './Actions';
import { v4 } from 'uuid';

function words(state = [], action) {
    switch (action.type) {
        case A.ADD_WORD:
            return [...state, word(state, action)];
        case A.DELETE_WORD:
            return state.filter( w => w.id !== action.id);
        case A.DELETE_ALL_WORD:
            return [];
        case A.UPDATE_WORD_KOREAN:
            return state.map(w => word(w, action));
        case A.UPDATE_WORD_TRANSLATION:
            return state.map(w => word(w, action));
        default:
            return state;
    }
}

function word(state = {}, action) {
    const {id, kr, tl} = action;

    switch (action.type) {
        case A.ADD_WORD:
            return id ? {id, kr, tl} : {id: v4(), kr: '', tl: []};
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
        case A.CHANGE_LANGUAGE:
            return action.value;
        default:
            return state;
    }
}

function display(state = { kr: true, tl: true }, action) {
    switch(action.type) {
        case A.SHOW_KOREAN:
            return Object.assign({}, state, {kr: !state.kr});
        case A.SHOW_TRANSLATION:
            return Object.assign({}, state, {tl: !state.tl});
        default:
            return state;
    }
}

export {words, lang, langs, display};