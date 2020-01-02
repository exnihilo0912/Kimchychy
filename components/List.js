import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import ListItem from "./ListItem";

const List_ = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  width: 20rem;
`;

function List({ items = [], lang }) {
    return (
        <List_>
            {items && items.map((item, i) => <ListItem key={i} {...item} lang={lang} />)}
        </List_>
    );
}

List.propTypes = {
    items: propTypes.array.isRequired,
    lang: propTypes.string
};

export default React.memo(List);
