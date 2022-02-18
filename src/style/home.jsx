import styled from 'styled-components'


export const Body = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    max-width: 1800px;
    margin:0;
    padding:0;
    background-color:#d8eefe;
    color: #5f6c7b;
    `

export const HeroImg = styled.img`
    width: 500px;
    background-image: url(hero.svg);
    background-repeat: no-repeat;
    background-size: 400px;
    background-position: bottom center;
    @media (max-width: 900px) {
        width: 300px;
        background-size: 300px;
       }
`


export const Logo = styled.h1`
    font-family: 'Staatliches', cursive;
    font-size: 32px;
    letter-spacing: 5px;
    text-align: center;
    padding: 20px 0;
    color: #3da9fc;
    margin:0;
    padding: 30px;
    background-image: url(cloudy.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250px;
    text-shadow: 0 1px 0 #ccc, 
               0 1px 0 #c9c9c9,
               0 2px 0 #bbb,
               0 3px 0 #b9b9b9,
               0 3px 0 #aaa,
               0 3px 0 rgba(0,0,0,.1),
               0 0 0 rgba(0,0,0,.1),
               0 1px 0 rgba(0,0,0,.3),
               0 2px 0 rgba(0,0,0,.2),
               0 3px 0 rgba(0,0,0,.25),
               0 3px 0 rgba(0,0,0,.2),
               0 3px 0 rgba(0,0,0,.15);
  animation: float_2979 3s linear infinite;
  transform-origin: 50% 50%;
  @keyframes float_2979 {
  0% { transform: translateY(0) }
  33.33333% { transform: translateY(-6px) }
  66.66667% { transform: translateY(0) }
  100% { transform: translateY(0) }
}
  @media (max-width: 900px) {
        font-size: 26px;
        background-size: 200px;
       }

`

export const HeroHeading = styled.h1`
    font-family: 'Karla', sans-serif;
letter-spacing: 1px;
line-height: 50px;
 font-size: 28px;
 color: #094067;
 @media (max-width: 765px) {
  line-height: 35px;
  font-size: 25px;

       }
`

export const HeroP = styled.p`
 font-family: 'Mukta', sans-serif;

    font-size: 18px;
    color:#5f6c7b;
    margin: 0;
    padding-bottom: 30px;
    @media (max-width: 765px) {
  font-size: 16px;

       }
`

export const CalenderTitle = styled.h2`
    position: relative;
    font-family: 'Karla', sans-serif;
    color:#094067;
    text-align: center;
    letter-spacing: 5px;
    background-color: rgb(255,255,255,0.5);
  padding: 1.5rem 2rem;
  border-bottom: 3px solid #094067;
  border-left: 3px solid #094067;
  border-radius: 20px;
  
&:before {
  position: absolute;
  right: 50px;
  bottom: -21px;
  width: 0;
  height: 0;
  content: '';
  border-width: 21px 21px 0 0;
  border-style: solid;
  border-color: #5f6c7b transparent transparent transparent;
}

&:after {
  position: absolute;
  right: 54px;
  bottom: -14px;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 14px 0 0;
  border-style: solid;
  border-color: #ef4565 transparent transparent transparent;
}
@media (max-width: 765px) {
        letter-spacing: 2px;
        font-size: 20px;
       }
`


export const CopyRight = styled.p`
 font-family: 'Mukta', sans-serif;
 `
