import React, { useState } from 'react';
import styled from "styled-components";
import propTypes from "prop-types";
import { connect } from 'react-redux';
import { editTranslation } from "../Store/ActionCreators";

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

function extractTranslation(translations, lang) {
    let translation = translations.find( trans => trans.code === lang);
    return translation && translation.value || '';
}

function TranslationField({ id, tl }) {
    return (
        <Field>
            <CTranslation
                id={id}
                tl={tl}
            />
        </Field>
    );
}

TranslationField.propTypes = {
    id: propTypes.any.isRequired,
    tl: propTypes.array.isRequired,
};

const CTranslation = connect(
    (state, {tl}) => ({ display: state.display.tl, value: extractTranslation(tl, state.lang), lang: state.lang }),
    dispatch => ({d: dispatch}),
    (state, dispatch, own) => ({
        ...state,
        ...dispatch,
        ...own,
        onChange({ target }) {
            dispatch.d(editTranslation(own.id, target.value, state.lang));
        }
    })
)(Translation);

export default React.memo(TranslationField);