import styled from 'styled-components'

export const PostTag = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  color: #ef4565;
  margin: 0;
  letter-spacing: 1px;
  padding: 6px;
  @media (max-width: 760px) {
    font-size: 12px;
  }
`
export const PostContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 20px;
  color: #094067;
`

export const PostDate = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
  align-items: start;
`

export const PostMonth = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 20px;
  margin: 0;
  letter-spacing: 6px;
 
`

export const PostDay = styled.p`
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  font-size: 40px;
  margin: 0;
  letter-spacing: 7px;

`

export const PostTitle = styled.h1`
font-family: 'Mukta', sans-serif;
font-weight: bold;
  font-size: 26px;
  margin: 0;
  letter-spacing: 7px;

`
