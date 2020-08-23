import React from 'react';
import './styles.css';

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const colors = ['#565c79', '#9ed429', '#c97d99', '#79cae5', '#e54e2a', '#0e61cf', '#f160aa', '#2acbfb']

function DaysCardSection(props) {
    const { daysCardData } = props;

    const getDimension = (length) => {
        const dimension = 150 / (Math.ceil(Math.sqrt(length)));
        return dimension;
    }

    return (
        <div className="cardsSectionRoot">
            {daysOfWeek.map((day, dayNo) => (
                <div className="dayCard" key={day}>
                    <div className="dayNameContainer">
                        <div className="dayName">{day}</div>
                    </div>

                    {daysCardData && daysCardData[dayNo] ?
                        <div className="personNamesContainer">
                            <div className="flexWrap">
                                {daysCardData[dayNo].map((person, index) => (
                                    <div
                                        className="personContainer"
                                        key={index}
                                        style={{
                                            backgroundColor: colors[index % 8],
                                            width: getDimension(daysCardData[dayNo].length),
                                            height: getDimension(daysCardData[dayNo].length)
                                        }}
                                    >
                                        {person.name}
                                    </div>))}
                            </div>
                        </div> :
                        <div className="noBdayContainer ">
                            <div className="greyText">&bull; &bull;</div>
                            <div className="greyText">&sim;</div>
                        </div>}
                </div>
            ))
            }
        </div>

    );
}

export default DaysCardSection;
