import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 220px;
  padding: 20px;
  min-height: 300px;
  color: #094067;
  @media (max-width: 760px) {
    width: 300px;
  }
`
export const FlowOder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`
export const FlowImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`
export const FlowTitle = styled.h2`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
  margin: 0;
  letter-spacing: 3px;
  color: #094067;
  width: 80%;
`
export const FlowContent = styled.p`
  font-family: 'Mukta', sans-serif;
  font-size: 20px;
  margin: 0;
  color: #5f6c7b;
`
