import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  width: 20rem;
`;

function List({ items = [], lang }) {
    return (
        <StyledList>
            {items && items.map((item, i) => <ListItem key={i} {...item} />)}
        </StyledList>
    );
}

List.propTypes = {
    items: propTypes.array.isRequired,
};

export default React.memo(List);
