import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import api from'../services/api'


export default function Home() {

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    city: '',
    state: '',
    streetAddres: '',
    number: '',
    complement: '',
    neighborhood: '',
    deviceCount: '',
    devices: [],
  })

  const [dataDevice, setDataDevice] = useState({
    type: '',
    condition: '',
  })

  const onChangeImputForm = e => setDataForm( {...dataForm, [e.target.name]: e.target.value});

  const onChangeImputDevice = e => setDataDevice( {...dataDevice, [e.target.name]: e.target.value});

  const sendInfo = async e => {
    e.preventDefault();
    console.log(dataForm.name);
    const res = await fetch('http://doar-computador-api.herokuapp.com/donation', {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers: { 'Conteny-type':'application/json'}
    });

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
        <p className={styles.status}></p>
        
        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>SEJA DOADOR &rarr;</h2>
            <p>Cadastre-se e encontre o local mais próximo onde poderá doar seu computador antigo, doar muda vidas.</p>
          </div>

          <div className={styles.card}>
            <h2>SEJA DOADOR &rarr;</h2>
            <p>Cadastre-se e encontre o local mais próximo onde poderá doar seu computador antigo, doar muda vidas.</p>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card__form}>
            <h2>Cadastro</h2>
          <form action="" onSubmit={sendInfo} className={styles.form}>
            <label htmlFor="" className={styles.label}>Nome Completo
            <input type="text" name="name" onChange={onChangeImputForm} value={dataForm.name} className={styles.input__padrao} required placeholder='Preencha seu nome completo.'/>
            </label>

            <label htmlFor="" className={styles.label}>E-mail
            <input type="text" name="email" onChange={onChangeImputForm} value={dataForm.email} className={styles.input__padrao} placeholder='Preencha seu e-mail.'/>
            </label>
            
            <label htmlFor="" className={styles.label}>Telefone
            <input type="text" name="phone" onChange={onChangeImputForm} value={dataForm.phone} className={styles.input__padrao} required placeholder='informe seu telefone.'/>
            </label>
            
            <label htmlFor="" className={styles.label}>Digite seu CEP
            <input type="text" name="zip" onChange={onChangeImputForm} value={dataForm.zip} className={styles.input__padrao} required placeholder='CEP do endereço.'/>
            </label>

            <label htmlFor="" className={styles.label}>Endereço
            <input type="text" name="streetAddres" onChange={onChangeImputForm} value={dataForm.streetAddres} className={styles.input__padrao} required/>
            </label>
            
            <div className={styles.label}>
              <label htmlFor="" >Número
              
              </label>

              <label htmlFor="" ><input type="text" name="number" onChange={onChangeImputForm} value={dataForm.number} className={styles.input__menor} required/>    Complemento       
              <input type="text" name="complement" onChange={onChangeImputForm} value={dataForm.complement} className={styles.input__menor} />
              </label>
            </div>

            <label htmlFor="" className={styles.label}>Bairro
            <input type="text" name="neighborhood" onChange={onChangeImputForm} value={dataForm.neighborhood} className={styles.input__padrao} required/>
            </label>

            <label htmlFor="" className={styles.label}>Cidade
            <input type="text" name="city" onChange={onChangeImputForm} value={dataForm.city} className={styles.input__padrao} required/>
            </label>
            
            <label htmlFor="" className={styles.label}>Estado
            <input type="text" name="state" onChange={onChangeImputForm} value={dataForm.state} className={styles.input__padrao} required/>
            </label>
            
            <label htmlFor="" className={styles.label}>Quantos equipamentos serão doados?
            <input type="number" name="deviceCount" onChange={onChangeImputForm} value={dataForm.deviceCount} className={styles.input__padrao} required/>
            </label>

            <input type="submit" value="Avançar" className={styles.input__botao} required/>
            </form>
          </div>

          <div className={styles.card__form}>
            <h2>Dados dos equipamentos doados</h2>
            <div className={styles.form__response}>
              <form action="" className={styles.form}>
                <h3>Equipamento:</h3>
              <fieldset>
                  <legend>Tipo de Equipamento:</legend>
                  <select name="type" onChange={onChangeImputDevice} value={dataDevice.type} >
                    <option value=" "></option>
                    <option value="notebook">Notebook.</option>
                    <option value="notWorking">Tem todas as partes, mas não liga mais.</option>
                    <option value="broken">Faltam peças, funciona só as vezes ou está quebrado.</option>
                  </select>
                </fieldset>

                <fieldset>
                  <legend>Estado do Equipamento:</legend>
                  <select name="condition" onChange={onChangeImputDevice} value={dataDevice.condition}  >
                    <option value=" "></option>
                    <option value="working">Tem todas as partes, liga e funciona normalmente.</option>
                    <option value="notWorking">Tem todas as partes, mas não liga mais.</option>
                    <option value="broken">Faltam peças, funciona só as vezes ou está quebrado.</option>
                  </select>
                </fieldset>


              <input type="submit" value="Enviar" className={styles.input__botao}/>
                </form>
              </div>
          </div>

        </section>

        
      </main>
      
      <footer className={styles.footer}>
          <span className={styles.logo}>Powered by Marcio Dias </span>
      </footer>
    </div>
  )
}

/*const [status, setStatus] = useState(false);
  const [statusP, setStatusP] = useState('Carregando API...');
  useEffect(() => {retornoApi()} ,[]);
  const retornoApi = async () => {
    let response = await api.get();
    setStatus(`${response.data.alive}`);
   
    if(status === 'true'){
      setStatusP(`API online`);
    }
    if(status === 'false'){
      setStatusP(`API offline`);
    }
  }*/
