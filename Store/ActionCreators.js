import { A } from './Actions';

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

export { editTranslation, editKorean, updateSearch };