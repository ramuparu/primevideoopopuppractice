// Style your elements here

import styled from 'styled-components'

export const MovieItemPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const ThumbNailCard = styled.div``

export const ThumbNailImageUrl = styled.img`
  height: 300px;
  width: 300px;
  margin-right: 20px;
`

export const ActionPopupCard = styled.div`
  background-color: white;
  border-radius: 2px;
  width: 700px;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const ActionPopupCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;
`

export const ComedyPopupCard = styled(ActionPopupCard)``

export const ComedyPopupCloseBtn = styled(ActionPopupCloseBtn)``
