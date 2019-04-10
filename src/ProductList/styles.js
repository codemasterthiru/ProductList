import styled from 'styled-components'
import { deviceMinWidth, deviceMaxWidth } from './MediaQueries'

const Container = styled.div`
    background-color: #e0e0e0;
    width: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
`
const Product = styled.div`
    background-color: #fff;
    margin: 5px;
    padding: 10px;
    font-size: 18px;
    text-align: center;
    position: relative;
`
const Image = styled.img`
    width: 50%;
`
const Title = styled.div`
    font-family: "Allerta Stencil", Sans-serif;

    @media ${deviceMaxWidth.mobileL} {
        font-size: 10px;
    }
    @media ${deviceMaxWidth.tablet} {
        font-size: 14px;
    }
`
const Price = styled.div`
    display: inline-block;
    position: absolute;
    top: 0px;
    right: 0px;
    background: #36e8c7c2;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
`

export {
    Container,
    Product,
    Image,
    Title,
    Price,
}