import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import ListItem from "./ListItem";
import { connect } from 'react-redux';

const StyledList = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  width: 20rem;
`;

function List({ words }) {
    return (
        <StyledList>
            {words && words.map((word, i) => <ListItem key={i} {...word} />)}
        </StyledList>
    );
}

List.propTypes = {
    items: propTypes.array.isRequired,
};

const CList = connect(
    state => ({
        words: !state.search ? state.words : state.words.filter( w => w.tl.find( trans => trans.code === state.lang).value.indexOf(state.search) >= 0)
    })
)(List);

export default CList;
