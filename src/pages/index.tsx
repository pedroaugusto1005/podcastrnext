import {GetStaticProps} from 'next'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api';
import { convertDurationToFileString } from '../utils/convertDurationToFileString';
import styles from './home.module.scss';

type Episodes={
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: number;
  url: string;
  publishedAt: string;
  


}

type HomeProps = {
  lastEpisodes: Episodes[];
  otherEpisodes: Episodes[];
}  

export default function Home({ lastEpisodes, otherEpisodes}: HomeProps){
    return (
      <div className={styles.homepage}>
        <section className={styles.lastEpisodes}>
        <h2>
          Ultimos lançamentos
        </h2>
          <ul>
            {lastEpisodes.map(episodes=>{
              return(
                <li>
                  <a href="">{episodes.title}</a>
                </li>
              )
            })}
          </ul>
        </section>

        <section className={styles.othersEpisodes}>
            <h2>
              outros podcasts
            </h2>
            <ul>
              
            </ul>
        </section>
      </div>
    )
}
export const getStaticProps: GetStaticProps= async ()=>{
  const {data} = await api.get('episodes',{
    params: {
        _limit: 12,
        _sort: 'published_at',
        _order: 'desc' 
  }
})
  const episodes= data.map(episode=>{

    return{
      id:episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishadAt: format (parseISO(episode.published_at),'d ,MMM, yy',{ locale: ptBR}),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToFileString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
      

    }
  })
  const lastEpisodes= episodes.slice(0,2);
  const othersEpisodes= episodes.slice(2,episodes.length);

  return{
    props: {
        lastEpisodes,
        othersEpisodes,
    },
    revalidate: 60*60*8
  }
}