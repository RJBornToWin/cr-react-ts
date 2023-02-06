import React from 'react';

export type GenderProps = {
    gender : 'f'|'F'|'m'|'M'|'female'|'male'|'Female'|'Male';
}

export const Gender: React.FC<GenderProps> = (props) => {
    return <p>{props.gender.toLowerCase() == 'f'|| props.gender.toLowerCase() == 'female' ? "She/Her" : "He/Him"}</p>
    
}