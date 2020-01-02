import propTypes from 'prop-types';
import { Button } from "antd";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
    margin: 0 .2rem;
`;

function Menu({items}) {
    return (
        <nav>
            <List>
                {items.map( item => <ListItem><Button onClick={item.f}>{ item.text }</Button></ListItem> )}
            </List>
        </nav>
    );
}

Menu.PropTypes = {
    items: propTypes.array.isRequired
};

export default Menu;