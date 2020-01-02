import { Button } from 'antd';
import Link from "next/link";
import 'antd/dist/antd.css';
import '../public/styles.css';

export default class Index extends React.Component {
    render() {
        return (
            <section>
                <h1>Titre</h1>
                <p>court paragraphe</p>
                <Link href='/dictionary'>
                    <Button>Test button</Button>
                </Link>
            </section>

        );
    }
};