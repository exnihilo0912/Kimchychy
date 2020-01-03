import { Input } from "antd";
import styled from 'styled-components';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import { updateSearch } from "../Store/ActionCreators";

const StyledInput = styled(Input)`
    margin: 1rem 0;
    box-sizing: border-box;
      height: 2.8rem;
    font-size: 1.5rem;
      line-height: 2rem;
`;

function Search(props) {
    return   <CSearch {...props}/>
}

Search.propTypes = {
    value: propTypes.string.isRequired
};

const CSearch = connect(
    state => ({ value: state.search }),
    dispatch => ({ onChange: ({ target }) => dispatch(updateSearch(target.value)) })
)(StyledInput);

export default Search;