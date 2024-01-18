import styled from 'styled-components'

export const AdminBody = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: #5f6c7b;
`

export const AdminHeading = styled.h1`
  font-family: 'Karla', sans-serif;
  font-size: 32px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  text-align: center;
  color: #094067;
  @media (max-width: 760px) {
    font-size: 24px;
  }
`

export const AdminSub = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-align: center;
  color: #094067;
  @media (max-width: 760px) {
    font-size: 18px;
  }
`

export const AdminP = styled.p`
  font-family: 'Mukta', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  color: #094067;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`

export const FormFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  @media (max-width: 760px) {
    flex-direction: column;
    gap: 20px;
  }
`
