import { createStore, combineReducers } from "redux";
import {Provider, connect} from 'react-redux';
import List from '../components/List';
import 'antd/dist/antd.css';
import '../public/styles.css';
import { dictionnary, languages } from '../Mockup/data';
import Menu from '../components/Menu';
import { words, langs, lang, display, search } from '../Store/reducers';
import Search from '../components/Search';
import Layout from '../components/Layout';
import { initStorage, updateStorage} from "../Store/LocalStorage";

import styled from 'styled-components';

const STORAGE_NAME = 'K_DICTIONARY';
const store = createStore(
    combineReducers({words, lang, langs, display, search}),
    initStorage(STORAGE_NAME) || {words: dictionnary, langs: languages, lang: 'en-us', search: ''}
);


const Wrapper = styled.section`
    padding-bottom: 4rem;
`;

const FixedContainer = styled.section`
    position: fixed;
    max-height: 4rem;
    bottom: 0;
    background-color: white;
    border-top: 1px solid #c1c1c1;
    width: 100vw;
    left: 0;
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
                <Layout>
                    <Wrapper>
                        <Search/>
                        <List/>
                        <FixedContainer>
                            <Menu dispatch={store.dispatch} />
                        </FixedContainer>
                    </Wrapper>
                </Layout>
            </Provider>
        );
    }
}