import Layout from "../components/Layout";
import Pill from "../components/Pill";
import { Button, Icon } from 'antd';
import Link from "next/link";
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../public/styles.css';

const Pills = styled.div`
  display: flex;
  justify-content: center;
`;

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Pills>
                    {[60, 10, 20, 30].map( (item, i) => <Pill icon={<Icon type="star"/>} value={item} /> )}
                </Pills>
                <Link href='/dictionary'>
                    <Button type="primary">Dictionnaire</Button>
                </Link>
                <div>
                    Statistiques
                </div>
            </Layout>

        );
    }
};