import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main >

      <h1>Header</h1>
      <div class="card" style={{'width': '18rem'}}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
<Link href={'/notes'} >
      <h1>Hellow World </h1>
      </Link>
    </main>
  )
}
