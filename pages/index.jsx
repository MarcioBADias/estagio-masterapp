import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import api from'../services/api'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [status, setStatus] = useState('');
  const [statusP, setStatusP] = useState('Carregando API...');
  useEffect(() => {retornoApi()});
  const retornoApi = async () => {
    let response = await api.get();
    setStatus(`${response.data.alive}`);
   
    if(status === 'true'){
      setStatusP(`API online`);
    }
    if(status === 'false'){
      setStatusP(`API offline`);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Doar Computador</title>
        <link rel="icon" href="/pc_icon.png" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Doação de computadores usados
          </h1>
        </header>
        <p className={styles.status}>{statusP}</p>
        
        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>SEJA DOADOR &rarr;</h2>
            <p>Cadastre-se e encontre o local mais próximo onde poderá doar seu computador antigo, doar muda vidas.</p>
          </div>

          <div className={styles.card}>
            <h2>COMPUTADOR SOLIDÁRIO &rarr;</h2>
            <p>Entre na lista de doação e seja contemplado por um computador amigo que irá te ajudar no dia-a-da e te ensinar novos mundos.</p>
          </div>

        </section>
      </main>
      
      <footer className={styles.footer}>
          <span className={styles.logo}>Powered by Marcio Dias </span>
      </footer>
    </div>
  )
}
