import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Layout from './Layout/layout';
import styles from './Welcome.module.css'
import axios from 'axios'


export default function Welcome({currentUserName}) {
  const [showFriendMenu, setShowFriendMenu] = useState(false);

  const handleShowNotifications= () =>{
    console.log("yo")
  }

  const handleShowFriendMenu= () =>{
    setShowFriendMenu(!showFriendMenu)
  }
  return (
    <>

    {/* <h1>welcome </h1> */}
    

    <div className={styles.container}>

    <div className={`inner-container ${styles.inner_container}`}>
              <main className={styles.main}>
        

          <div className={styles.welcome_grid }>
            <h1 className={styles.title}>
              Hey, {currentUserName}!
            </h1>

            <p className={styles.description}>
              Get started by selecting a chat
            </p>


            
          
          
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://peegee.netlify.app"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Developed by {'  '} 
          <span className="ml-1">
             PeeGee
          </span>
        </a>
      </footer>
      
    </div>

      
    </>
  )
}
