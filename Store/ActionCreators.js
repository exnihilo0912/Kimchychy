import { A } from './Actions';
import S from '../components/statuses';

function editTranslation(id, value, lang) {
   return  {
       type: A.UPDATE_WORD_TRANSLATION,
       id,
       tl: {code: lang, value}
   }
}

function editKorean(id, value) {
    return  {
        type: A.UPDATE_WORD_KOREAN,
        id,
        kr: value
    }
}

function updateSearch(value) {
    return {
        type: A.SEARCH,
        value
    }
}

function updateStatus(id, status) {
    let new_status;

    switch (status) {
        case S.UNKNOWN:
            new_status = S.LEARNED;
            break;
        case S.LEARNED:
            new_status = S.MASTERED;
            break;
        case S.MASTERED:
        default:
            new_status = S.UNKNOWN;
            break;
    }
    return {
        type: A.UPDATE_WORD_STATUS,
        id,
        status: new_status
    };
}

export { editTranslation, editKorean, updateSearch, updateStatus };