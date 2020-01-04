import { A } from './Actions';
import { v4 } from 'uuid';
import S from '../components/statuses';

function words(state = [], action) {
    switch (action.type) {
        case A.ADD_WORD:
            return [...state, word(state, action)];
        case A.DELETE_WORD:
            return state.filter( w => w.id !== action.id);
        case A.DELETE_ALL_WORD:
            return [];
        case A.UPDATE_WORD_KOREAN:
        case A.UPDATE_WORD_TRANSLATION:
        case A.UPDATE_WORD_STATUS:
            return state.map(w => word(w, action));
        default:
            return state;
    }
}

function updateTranslation(id, trans, new_trans) {
    return new_trans.code === trans.code ? new_trans : trans;
}

function word(state = {}, action) {
    const {id, kr, tl, status} = action;

    switch (action.type) {
        case A.ADD_WORD:
            return id ? {id, kr, tl, status} : {id: v4(), kr: '', tl: [{code: 'en-us', value: ''}, {code: 'fr-fr', value: ''}], status: S.UNKNOWN};
        case A.UPDATE_WORD_TRANSLATION:
            if(id !== state.id)
                return state;
            return Object.assign({}, state, {tl: state.tl.map(trans => updateTranslation(id, trans, tl))});
        case A.UPDATE_WORD_KOREAN:
            if(id !== state.id)
                return state;
            return Object.assign({}, state, { kr } );
        case A.UPDATE_WORD_STATUS:
            if(id !== state.id)
                return state;
            return Object.assign({}, state, { status });
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

function search(state = '', action) {
    switch(action.type) {
        case A.SEARCH:
            return action.value;
        default:
            return state;
    }
}

export {words, lang, langs, display, search};