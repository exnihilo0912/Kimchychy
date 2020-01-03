import { createStore, combineReducers } from "redux";
import {Provider, connect} from 'react-redux';
import List from '../components/List';
import 'antd/dist/antd.css';
import '../public/styles.css';
import { dictionnary, languages } from '../Mockup/data';
import Menu from '../components/Menu';
import { words, langs, lang, display } from '../Store/reducers';
import { A } from '../Store/Actions';
import { initStorage, updateStorage} from "../Store/LocalStorage";
import { Input } from "antd";
import styled from 'styled-components';

const STORAGE_NAME = 'K_DICTIONARY';
const store = createStore(
    combineReducers({words, lang, langs, display}),
    initStorage(STORAGE_NAME) || {words: dictionnary, langs: languages, lang: 'en-us'}
);
const Search = styled(Input)`
    margin: 1rem 0;
    box-sizing: border-box;
      height: 2.8rem;
    font-size: 1.5rem;
      line-height: 2rem;
`;

const Wrapper = styled.section`
  padding: 2rem;
`;

store.subscribe( () => updateStorage(STORAGE_NAME, store.getState()));

export default class Dictionary extends React.Component{
    constructor(props) {
        super(props);
    }

    ComponentWillMount() {
        document.title = 'Dictionary';
    }

    render() {
        return (
            <Provider store={store}>
                <Wrapper>
                    <h1>Dictionnary</h1>
                    <Search/>
                    <Menu dispatch={store.dispatch} />
                    <WordList/>
                </Wrapper>
            </Provider>
        );
    }
}

const WordList = connect(
    state => ({ items: state.words })
)(List);