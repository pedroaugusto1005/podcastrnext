import styles from './styles.module.scss'

export function Player() {
    
    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt=""/>
                <span>
                    Tocando agora
                </span>
            </header>
            <div className={styles.emptyPlayer}>
                <strong>
                    Selecione um podcast para ouvir.
                </strong>
            </div>
            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span className='incicial'>00:00</span>
                    <div className={styles.slider} >
                    <div className={styles.emptySlider} />
                    </div>
                    <div className={styles.buttons}>
                        <button type="button">
                            <img src="/shuffle.svg" alt=""/>
                        </button>
                        <button type="button">
                            <img src="/play-previus.svg" alt=""/>
                        </button>
                        <button type="button">
                            <img src="/play.svg" alt=""/>
                        </button>
                        <button type="button">
                            <img src="/play next.svg" alt=""/>
                        </button>
                        <button type="button">
                            <img src="/repeat.svg" alt=""/>
                        </button>
                        
                    </div>
                </div>
            </footer>
            
        </div>
    )

}