import React, { useState } from 'react';
import styled from "styled-components";
import propTypes from "prop-types";
import { connect } from 'react-redux';

const Translation = styled.input`
    border: none;
    grid-area: subtitle;
    padding: 0.2rem 0;
    color: hsl(0, 0%, 50%);
    font-size: 1rem;
    width: auto;
    visibility: ${props => props.display ? 'visible' : 'hidden'};
`;
const Field = styled.div`
  display: flex;
  align-items: center;
`;

//TODO fix this
function extractTranslation(translations, lang) {
    let translation = translations.find( trans => trans.code === lang);
    return translation && translation.value || '';
}

function TranslationField({ id, tl, lang }) {
    return (
        <Field>
            <CTranslation
                id={id}
                tl={tl}
                lang={lang}
            />
        </Field>
    );
}

TranslationField.propTypes = {
    id: propTypes.any.isRequired,
    tl: propTypes.array.isRequired,
    lang: propTypes.string
};

function updateWord(value, id, lang, callback) {
    callback({type: A.UPDATE_WORD_TRANSLATION, id, tl: {lang, value} })
}

const CTranslation = connect(
    (state, {id, tl}) => ({ display: state.display.tl, value: extractTranslation(tl, state.lang) }),
    (dispatch, {id, lang}) => ({ onChange: event => updateWord(event.target.value, id, lang, dispatch )})
)(Translation);

export default React.memo(TranslationField);