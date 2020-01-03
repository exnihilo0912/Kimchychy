import { createStore, combineReducers } from "redux";
import {Provider, connect} from 'react-redux';
import List from '../components/List';
import 'antd/dist/antd.css';
import '../public/styles.css';
import { dictionnary, languages } from '../Mockup/data';
import Menu from '../components/Menu';
import { words, langs, lang, display, search } from '../Store/reducers';
import Search from '../components/Search';
import { initStorage, updateStorage} from "../Store/LocalStorage";

import styled from 'styled-components';

const STORAGE_NAME = 'K_DICTIONARY';
const store = createStore(
    combineReducers({words, lang, langs, display, search}),
    initStorage(STORAGE_NAME) || {words: dictionnary, langs: languages, lang: 'en-us', search: ''}
);


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
                    <List/>
                </Wrapper>
            </Provider>
        );
    }
}