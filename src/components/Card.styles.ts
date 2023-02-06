import styled from 'styled-components';
import { Gender } from './Gender';

export const StyledGender = styled(Gender)`
  border:1px red;
  border-radius: 5px;
  width: 20em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 340px;
  height: 420px;
  padding-bottom: 20px;
  background: lightblue;
  border-radius: 1rem;
  box-sizing: border-box;

  img {
    border-radius: 1rem;
    border: 1px solid lightcoral;
    width: 300px;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
`;
