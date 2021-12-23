// Style your elements here

import styled from 'styled-components'

export const PrimeVideoPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: #000000;
`

export const PrimeVideoImg = styled.img`
  height: 40vh;
`

export const ActionMoviesHead = styled.h1`
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 20px;
`
export const ComedyHead = styled(ActionMoviesHead)``

export const MoviesCon = styled.div`
  width: 100%;
  padding: 100px;
`
