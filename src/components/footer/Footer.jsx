import React from 'react';
import styles from '../footer/footer.module.css'

const Footer = () => {
  return(
    <>
      <section className={`container-fluid bg-dark ${styles.height}`}>
        <div className='row justify-content-center align-items-center text-center text-white'>
          <div className='col-5 mt-5'>
            <h2>RollingCode</h2>
          </div>
          <div className='col-5 mt-5'>
            <h2>RollingCode</h2>
          </div>
        </div>
      </section>
    </>
  )
};

export default Footer;