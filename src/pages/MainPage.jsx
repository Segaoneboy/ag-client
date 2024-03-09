import styles from './MainPage.module.css'
import { useNavigate } from 'react-router-dom';
import Header from "../assets/components/Header.jsx";
import axios from 'axios';
import React, {useState} from "react";

function MainPage(){
    const navigate =  useNavigate();
    const [id, setId] = useState('')
    const [data, setData] = useState('')
    const handleClick = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/api/search?id=${id}`);
            if(response.data){
                navigate(`/info?id=${id}`)
            }else{
                navigate('/error')
            }

        } catch(error){
            console.log('Error')
        }
    }

    const handleEnterPress = async (e) => {
        if(e.key === 'Enter' ){
            await handleClick()
        }
    };


    return(
        <>
            <Header/>
            <main>
                <div className={styles.main_block}>
                    <h1>Поиск проекта</h1>
                    <div className={styles.search_block}>
                        <input className={styles.main_search_input}
                               value={id}
                               type="text"
                               placeholder="Введите id"
                               onChange={e => setId(e.target.value)}
                               onKeyDown={handleEnterPress}
                        />
                        <button onClick={handleClick} className={styles.main_btn}>Search</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainPage