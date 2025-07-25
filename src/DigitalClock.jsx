import React, {useState, useEffect} from "react";

function DigitalClock(){
    const [time,setTime] = useState(new Date());

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours>=12 ? "PM" : "AM";

        hours = hours%12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }
    function formatDate(){
        let month = time.getMonth()+1;
        let day = time.getDate();
        let year = time.getFullYear();

        return `${padZero(month)}/${padZero(day)}/${year}`;

    }

    function padZero(number){
        return (number < 10 ? "0":"")+number;
    }

    return(<div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span><br/>
                <span>{formatDate()}</span>
            </div>
    </div>);
}

export default DigitalClock