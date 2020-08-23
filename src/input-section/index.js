import React, { useState } from 'react';
import './styles.css';


function InputSection(props) {
    const { onUpdate } = props;
    const [jsonData, setJsonData] = useState('');
    const [yearValue, setYearValue] = useState('');
    const [yearFieldError, setYearFieldError] = useState('');
    const [jsonFieldError, setJsonFieldError] = useState('');
    const [showData, setShowData] = useState(true);

    const getNameInitials = (name) => {
        var nameArray = name.split(' ');
        let nameInitial = "";
        for (let i = 0; i < nameArray.length; i++) { nameInitial += (nameArray[i]).charAt(0); }
        return nameInitial;
    }

    const compare = (a, b) => {
        let comparison = 0;
        if (a.age > b.age) {
            comparison = 1;
        } else if (a.age < b.age) {
            comparison = -1;
        }
        return comparison;
    }

    const handleUpdateButton = () => {
        if (!jsonData) { setJsonFieldError('Please enter data'); return; }
        else if (!yearValue) { setYearFieldError('Please enter year'); return; }
        if (showData) {
            const daysData = [];
            const data = JSON.parse(jsonData.replace(/name/g, '"name"').replace(/birthday/g, '"birthday"'));
            data.forEach((item) => {
                const birthDate = new Date(item.birthday);
                birthDate.setFullYear(parseInt(yearValue));
                const day = (birthDate.getDay() + 6) % 7; // To denote 0 by Monday
                if (!daysData[day])
                    daysData[day] = [];
                daysData[day].push({ name: getNameInitials(item.name), birthday: item.birthday, age: new Date().getFullYear() - new Date(item.birthday).getFullYear() });
            })
            daysData.forEach((item, index) => {
                item.sort(compare);
            })
            onUpdate(daysData);
        }
        else {
            setYearValue('');
            setJsonData('');
            onUpdate([])
        };
        setShowData(!showData);
    }

    return (
        <div className="inputSectionRoot">
            <div className="jsonInputContainer">
                <textarea className="inputField" rows={28} value={jsonData} onChange={(e) => { setJsonFieldError(''); setJsonData(e.target.value) }}></textarea>
                <div className="errorMessage">{jsonFieldError}</div>
            </div>
            <div className="yearUpdateContainer">
                <div>
                    <div className="yearLabel">Year</div>
                    <input className="inputField yearInput" type="text" pattern="[0-9]*" value={yearValue} onChange={(e) => { setYearFieldError(''); setYearValue(e.target.value) }} />
                    <div className="errorMessage">{yearFieldError}</div>
                </div>
                <button className="updateButton" onClick={() => handleUpdateButton()}>UPDATE</button>
            </div>
        </div>
    );
}

export default InputSection;
