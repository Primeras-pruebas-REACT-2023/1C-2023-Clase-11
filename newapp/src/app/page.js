import Image from 'next/image'          // Es parte de React
import styles from './page.module.css'  // Es parte de React
import Botoon from './App/Boton'        // El boton y yo
import Ta_lindo from './App/Saludo'     // Cartelito cheto
import Reproduccion from './App/Video'  // Reproduce un video con React

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
         <Ta_lindo texto = "Wally!" numero = "39"></Ta_lindo>
      </div>
      Hola wally
      <div>
         <Botoon></Botoon>
      </div>
      <Reproduccion width = "320" height = "240" url ="https://www.w3schools.com/tags/movie.mp4" type = "video/mp4"></Reproduccion>
      <Reproduccion  url ="https://www.w3schools.com/tags/movie.mp4"  ></Reproduccion>
      <Reproduccion  url ="https://www.w3schools.com/tags/movie.mp4"  ></Reproduccion>
      <Reproduccion  url ="https://www.w3schools.com/tags/movie.mp4"  ></Reproduccion>
    </main>
  )
}
