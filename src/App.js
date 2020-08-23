import React, { useState } from 'react';
import InputSection from './input-section';
import DaysCardSection from './days-card-section';
import './App.css';


function App() {
    const [daysCardData, setDaysCardData] = useState();
    return (
        <div className="App">
            <div className="root">
                <div>
                    <div className="headerText">Birthday Cal</div>
                </div>
                <div>
                    <DaysCardSection daysCardData={daysCardData} />
                </div>
                <div>
                    <InputSection onUpdate={(data) => setDaysCardData(data)} />
                </div>
            </div>
        </div>
    );
}

export default App;
