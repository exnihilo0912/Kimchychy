import propTypes from 'prop-types';
import { Button, Select } from "antd";
import styled from "styled-components";
import {A} from "../Store/Actions";
import { connect } from 'react-redux';

const { Option } = Select;
const List = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
`;
const ListItem = styled.li`
    margin: 0 .2rem;
`;

const StyledSelect = styled(Select)`
  width: 120px;
`;

function Menu({ langs, dispatch }) {
    return (
        <nav>
            <List>
                <ListItem>
                    <Button onClick={ () => dispatch({type: A.ADD_WORD}) }>Add</Button>
                </ListItem>
                <ListItem>
                    <Button onClick={ () => dispatch({type: A.DELETE_ALL_WORD}) }>Remove All</Button>
                </ListItem>
                <ListItem>
                    <Button onClick={ () => dispatch({type: A.SHOW_KOREAN}) }>Toggle Korean</Button>
                </ListItem>
                <ListItem>
                    <Button onClick={ () => dispatch({type: A.SHOW_TRANSLATION}) }>Toggle Translation</Button>
                </ListItem>
                <StyledSelect defaultValue={langs[0].code} onChange={ value => dispatch({ type: A.CHANGE_LANGUAGE, value })}>
                    {langs.map( lang => <Option value={lang.code}>{lang.name}</Option>)}
                </StyledSelect>
            </List>
        </nav>
    );
}

Menu.PropTypes = {
    items: propTypes.array.isRequired
};

const CMenu = connect( state => ({langs: state.langs}) )(Menu);

export default CMenu;