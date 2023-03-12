import React from 'react';
import styles from '../pages/home.module.css'

const Home = () => {
  return(
    <>
      <section className={`container-fluid ${styles.height}`}>
        <div className='row text-center'>
          <div>
            <h1>Soy una homepage.</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;