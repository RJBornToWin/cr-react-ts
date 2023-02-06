import React from 'react';
// Styles
import { Wrapper, StyledGender } from './Card.styles';
import { Gender, GenderProps } from './Gender';

type CardProps = {
  name : string,
  imgUrl : string,
} & GenderProps;

const Card = ({name, imgUrl, gender}: CardProps) => {
  return (
    <Wrapper>
      <p>{name}</p>
      <img src={imgUrl} style={{width: "300px", height: "300px"}}></img>
      <StyledGender gender={gender}/>
    </Wrapper>
  )
}

export default Card;
