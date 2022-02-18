import styled from 'styled-components'

export const SlugHeading = styled.h1`
  font-family: 'Staatliches', cursive;
  font-size: 36px;
  text-align: center;
  color: #094067;
  margin: 0;
  padding: 20px;
  letter-spacing: 5px;
  @media (max-width: 760px) {
    font-size: 26px;
  }
`

export const SlugSub = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 22px;
  color: #094067;
  margin: 0;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 10px;
  @media (max-width: 760px) {
    font-size: 18px;
  }
`

export const SlugConteiner = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  background-color: #fff;
  padding: 20px;
  align-items: center;
  width: 80%;
  margin: auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  @media (max-width: 760px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const DetailContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  align-items: center;
  @media (max-width: 760px) {
    gap: 5px;
  }
`


export const BtnContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`
