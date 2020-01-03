import React, { useState, useEffect } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import TranslationField from './TranslationField';
import { connect } from 'react-redux';
import {Icon} from 'antd';

const ListElem = styled.li`
  display: grid;
    grid-template-columns: 0.9fr 0.1fr;
    grid-template-areas: "title plus" "subtitle plus";
  border: 1px solid #e1e1e1;
    border-radius: 10px;
  padding: 1rem 1rem 1rem 3rem;
  margin: 1rem 0;
  background-color: white;
  position: relative;

  &::after {
    content: "";
    width: 3rem;
    height: 2.2rem;
    background-color: #efefef;
    border: 5px solid white;
    border-radius: 90px;
    position: absolute;
    top: calc(2rem);
    left: -1.3rem;
  }
`;
const Korean = styled.input`
  border: none;
  grid-area: title;
  padding: 0.2rem 0;
  font-weight: bold;
  font-size: 1rem;
  visibility: ${props => props.display ? 'visible' : 'hidden'};
`;

const Opt = styled.div`
  grid-area: plus;
  display: flex;
  align-items: center;
  color: dodgerblue;
`;

function ListItem({ id, kr, tl = [] }) {
    const [kr_value, updateKrValue] = useState(kr);

    return (
        <ListElem>
            <CKorean value={kr_value} onChange={e => updateKrValue(e.target.value) } />
            <TranslationField id={id} tl={tl}/>
            <Opt>1</Opt>
        </ListElem>
    );
}

ListItem.propTypes = {
    kr: propTypes.string.isRequired,
    tl: propTypes.array.isRequired,
    lang: propTypes.string
};

const CKorean = connect(state => ({display: state.display.kr}))(Korean);

export default React.memo(ListItem);
