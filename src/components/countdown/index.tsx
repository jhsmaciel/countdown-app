import React from 'react';
import ReactCountdown, { CountdownTimeDelta } from 'react-countdown';

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

const Title: React.FC<any> = (props) => <p style={{ fontSize: "2em" }}><strong>{props.children}</strong></p>


const Label: React.FC<any> = (props) => <label>{props.children}</label>

const LabelValue: React.FC<{ label: string, value?: string | number | null }> = ({ label, value }) => {
    return (
        <div>
            <Title>{value}</Title>
            <Label>{label}</Label>
        </div>
    )
}

const Units: Array<{
    key: keyof CountdownTimeDelta,
    label: string
}> = [{
    key: 'days',
    label: 'Dia'
},
{
    key: 'hours',
    label: "Hora"
},
{
    key: 'minutes',
    label: "Minuto"
},
{
    key: 'seconds',
    label: "Segundo"
},
{
    key: 'milliseconds',
    label: "Milisegundo"
}];

const CompCountShow: React.FC<CountdownTimeDelta> = (props) => {

    function isPlural(item: number): boolean {
        return item > 1;
    }

    return (
        <div style={{ flexDirection: "row", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
            {Units.map(unit => <LabelValue
                label={isPlural(props[unit.key] as number) ? (unit.label + "s") : unit.label}
                value={props[unit.key] as number}
            />)}
        </div>
    )
}


