import styled from 'styled-components'

export const  Colors = {
    "Darkcyan": "hsl(158, 36%, 37%)",
    "Cream": "hsl(30, 38%, 92%)",
    "VeryDarkBlue": "hsl(212, 21%, 14%)",
    "DarkGrayishBlue": "hsl(228, 12%, 48%)",
    "White": "hsl(0, 0%, 100%)"
}

export const Container = styled.div`
    max-width: 700px;
    height: 500px;
    background-color: ${Colors.White};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media(max-width: 800px){
        flex-direction: column;
    }
`
export const Category = styled.h4`
    text-transform: uppercase;
    font-weight: 600;
    color: ${Colors.DarkGrayishBlue};
    letter-spacing: 5px;
`
export const Title = styled.h1`
    color: ${Colors.VeryDarkBlue};
    font-family: "Fraunces", serif;
    font-weight: 800;
`

export const Text = styled.p`
    font-size:14px;
`

export const Button = styled.button`
    padding: 15px;
    background-color: ${Colors.Darkcyan};
    border: none;
    border-radius: 5px;
    color: ${Colors.White};
    cursor:pointer;
    width: 100%;

    &:hover{
        background-color: ${Colors.DarkGrayishBlue}
    }
`

export const ImageSide = styled.img`
    width: 50%;
`

export const InfoSide = styled.div`
    width: 50%;
    padding: 50px;
`

export const Price = styled.h1`
    color:${Colors.Darkcyan};
    font-family: 'Fraunces', sans-serif;
`