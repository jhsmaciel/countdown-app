import React from 'react';
import ReactCountdown, {CountdownRenderProps} from 'react-countdown';

import './index.css'


interface CountdownProps {
    time: Date
}

export const Countdown: React.FC<CountdownProps> = ({ time }) => {
    return (
        <ReactCountdown
            date={time}
            intervalDelay={0}
            precision={3}
            renderer={CompCountShow}
        />
    )
}

const Title: React.FC<any> = (props) => <p style={{fontSize: "2em"}}><strong>{props.children}</strong></p>


const Label: React.FC<any> = (props) => <label>{props.children}</label>

const LabelValue: React.FC<{ label: string, value?: string | number | null}> = ({label, value}) => {
    return (
        <div>
            <Title>{value}</Title>
            <Label>{label}</Label>
        </div>
    )
}

const CompCountShow: React.FC<CountdownRenderProps> = ({days, hours, minutes, seconds, milliseconds}) => {

    return (
        <div style={{ flexDirection: "row", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
            <LabelValue 
                label="Dias"
                value={days}
            />
            <LabelValue 
                label="Horas"
                value={hours}
            />
            <LabelValue 
                label="Minutos"
                value={minutes}
            />
            <LabelValue 
                label="Segundos"
                value={seconds}
            />
            <LabelValue 
                label="Milisegundos"
                value={milliseconds}
            />
        </div>
    )
}


