import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

import styles from './styles.module.scss'

export function Header() {
    const courrentDate = format(new Date(), 'EEEEEE,d MMMM',{
        locale: ptBR
    }); 
    return(
        <header className={styles.headercontainer}>
            <img src="/logo.svg" alt="podcastr" />
            <p>O melhor para você ouvir,sempre</p>
            <span>{courrentDate}</span>
        </header>
    )

}