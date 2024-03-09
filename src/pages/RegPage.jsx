import React, {useState} from 'react'
import styles from './RegPage.module.css'
import axios from 'axios';
import { useNavigate} from "react-router-dom";

import ErrorMessage from '../assets/components/ErrorMessage.jsx';


function RegPage(){
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setFile] = useState(null);

    // Проверка на пустые поля и пустые данные
    const [buttonPressed, setButtonPressed] = useState(false)
    const [emptyForm, setEmptyForm] = useState(false)

    const handleFileChange = (event) => {
        // Получаем выбранный файл
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const sendDataToBackend = async () => {
        setButtonPressed(true)
        if (projectName === '' || author === '' || image === null ){
            setEmptyForm(true)
        }
        else{
            setEmptyForm(false)
            try {
                const formData = new FormData();
                formData.append('projectName', projectName);
                formData.append('author', author);
                formData.append('image', image);

                const response = await axios.post('http://localhost:5000/api/register/', formData, {

                });
                console.log('Ответ от сервера:', response.data);

                // Очищаем поля ввода после успешной отправки
                setProjectName('');
                setAuthor('');
                setFile(null);
                navigate("/")

                await navigator.clipboard.writeText(`${response.data.id}`);

                alert(`Ваш ID: ${response.data.id}`)
                alert(`Ваш ID был успешно скопирован в буфер обмена`)
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
            }
        }

    };
    return(
        <>
            <div className={styles.reg_block}>
                <h1>Registration</h1>
                {
                    projectName === '' && buttonPressed   ? (
                        <input type="text"
                               placeholder="Project Name"
                               value={projectName}
                               onChange={(e) => setProjectName(e.target.value)}
                               className={styles.empty_input}
                        />
                    ) : (
                        <input type="text"
                               placeholder="Project Name"
                               value={projectName}
                               onChange={(e) => setProjectName(e.target.value)}
                               className={styles.base_input}/>
                    )
                }
                {
                    author === '' && buttonPressed ? (
                        <input type="text"
                               placeholder="Project Author"
                               value={author}
                               className={styles.empty_input}
                               onChange={(e) => setAuthor(e.target.value)}
                        />
                    ) : (
                        <input type="text"
                               placeholder="Project Author"
                               value={author}
                               className={styles.base_input}
                               onChange={(e) => setAuthor(e.target.value)}
                        />
                    )
                }


                <label htmlFor="fileInput" className={styles.upload_input}>
                    <span>Attach image</span>
                    <input type="file"
                           id="fileInput"
                           accept=".png"
                           onChange={handleFileChange}
                    />
                </label>
                {emptyForm && (
                    <ErrorMessage message='Заполните все поля'/>
                )}
                <span>
                    <button onClick={sendDataToBackend} className={styles.send_btn}>Send</button>
                </span>

            </div>
        </>
    );

}

export default RegPage