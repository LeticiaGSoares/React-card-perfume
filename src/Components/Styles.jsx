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
    height: 600px;
    background-color: ${Colors.White};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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
export const Button = styled.button`
    padding: 10px 30px;
    background-color: ${Colors.Darkcyan};
    border: none;
    border-radius: 10px;
    color: ${Colors.White};
`

export const ImageSide = styled.div`
    width: 400px;
`