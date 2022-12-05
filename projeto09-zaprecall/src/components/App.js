import { useState } from 'react';
import logo from '../assets/img/logo.png';
import Home from './Home';

export default function App () {
    const [visible, setVisible] = useState(true);

    return(
        <>
            {visible ? (<Home />) : (
            <div className="home">
                <img src={logo} alt="logo" />
                    <h1>Zap Recall</h1>
                <button onClick={() => setVisible(true)}>Iniciar Recall</button>
            </div>)}
        </>
 
        
    )
}