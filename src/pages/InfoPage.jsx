import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../assets/components/Header.jsx";
import styles from './InfoPage.module.css';

function InfoPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/info/?id=${id}`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);



    return (
        <>
            <Header />
            <main>
                <div className={styles.card}>
                    <div className={styles.card_block_img}>
                        {data && <img src={`http://localhost:5000${data.imageUrl}`} alt="Image" />}
                    </div>
                    <div className={styles.card_block_info}>
                        <p>
                            Author: {data ? data.author : 'Loading...'} <br />
                            ProjectName: {data ? data.projectName : 'Loading...'} <br />
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default InfoPage;
