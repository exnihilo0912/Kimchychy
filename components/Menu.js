import propTypes from 'prop-types';
import { Button, Select, Icon } from "antd";
import styled from "styled-components";
import {A} from "../Store/Actions";
import { connect } from 'react-redux';

const { Option } = Select;
const List = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
    width: 100%;
  display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    margin: .5rem .25rem;
`;

const StyledSelect = styled(Select)`
  width: 120px;
`;

function Menu({ langs, dispatch }) {
    return (
        <nav>
            <List>
                <ListItem>
                    <Button type="primary" size="large" shape="circle" icon="plus" onClick={ () => dispatch({type: A.ADD_WORD}) }/>
                </ListItem>
                <ListItem>
                    <Button type="danger" size="large" shape="circle" icon="delete" onClick={ () => dispatch({type: A.DELETE_ALL_WORD}) }/>
                </ListItem>
                <ListItem>
                    <Button shape="circle" size="large" onClick={ () => dispatch({type: A.SHOW_KOREAN}) }>한</Button>
                </ListItem>
                <ListItem>
                    <Button shape="circle-outline" size="large" onClick={ () => dispatch({type: A.SHOW_TRANSLATION}) }>A</Button>
                </ListItem>
                <ListItem>
                    <CSelect>
                        {langs.map( lang => <Option key={lang.code} value={lang.code}>{lang.name}</Option>)}
                    </CSelect>
                </ListItem>
            </List>
        </nav>
    );
}

Menu.PropTypes = {
    items: propTypes.array.isRequired
};

const CMenu = connect( state => ({langs: state.langs}) )(Menu);
const CSelect = connect(
    state => ({defaultValue: state.lang}),
    dispatch => ({ onChange: value => dispatch({ type: A.CHANGE_LANGUAGE, value }) })
)(StyledSelect);

export default CMenu;