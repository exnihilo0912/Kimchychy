import { createStore, combineReducers } from "redux";
import {Provider, connect} from 'react-redux';
import List from '../components/List';
import 'antd/dist/antd.css';
import '../public/styles.css';
import { dictionnary, languages } from '../Mockup/data';
import Menu from '../components/Menu';
import { words, langs, lang } from '../Store/reducers';
import { A } from '../Store/Actions';

const store = createStore(
    combineReducers({words, lang, langs}),
    {words: dictionnary, languages}
);

const MenuItems = [
    {text: 'Add', f: () => store.dispatch({type: A.ADD_WORD})},
    {text: 'Remove All', f: () => store.dispatch({type: A.DELETE_ALL_WORD})},
    {text: 'Hide Korean', f: () => store.dispatch({type: ''})},
    {text: 'Hide Translation', f: () => store.dispatch({type: ''})},
];

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
                <section>
                    <h1>Dictionnary</h1>
                    <Menu items={MenuItems}/>
                    <WordList/>
                </section>
            </Provider>
        );
    }
}

const WordList = connect(
    state => ({ items: state.words })
)(List);