import React, { useState } from 'react';
import styled from "styled-components";
import propTypes from "prop-types";

const Translation = styled.input`
    border: none;
    grid-area: subtitle;
    padding: 0.2rem 0;
    color: hsl(0, 0%, 50%);
    font-size: 1rem;
    width: auto;
`;
const Field = styled.div`
  display: flex;
  align-items: center;
`;

//TODO fix this
function extractTranslation(translations) {
    return translations[0] ? translations[0].value : '';
}

function TranslationField({ tl, lang }) {
    const [tl_value, updateTlValue] = useState(extractTranslation(tl));
    const [language, updateLanguage] = useState(lang);

    if(lang !== language) {
        updateTlValue(extractTranslation(tl));
        updateLanguage(lang);
    }

    return (
        <Field>
            <Translation
                value={tl_value}
                onChange={e => updateTlValue(e.target.value)}
            />
        </Field>
    );
}

TranslationField.propTypes = {
    tl: propTypes.array.isRequired,
    lang: propTypes.string
};

export default React.memo(TranslationField);