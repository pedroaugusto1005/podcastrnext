import '../styles/global.scss'
import { Header } from "../components/header";
import styles from '../styles/app.module.scss'
import { Player } from '../components/player';
function MyApp({ Component, pageProps }) {

    return (
        <div>
            <main>
            <Header />
            <Component {...pageProps} />
            </main>
            <Player />
        </div>
    )
}

export default MyApp