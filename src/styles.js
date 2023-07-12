import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin : 0px;
        padding : 0px;
        box-sizing:border-box;
    }
    body {
        margin-top:100px;
    }
    a {
        text-decoration:none;
    }
    #root {
        width:100%;
        height:100%;
    }

`

export const LogoLink = styled(Link)`
    height:100%;
`

export const HeaderStyle = styled.header`
    display:flex;
    justify-content:space-between;
    padding-left:50px;
    padding-right:100px;
    align-items:center;
    position:fixed;
    top:0px;
    left:0px;
    width: 100%;
    height:100px;
    background-color:white;
    box-shadow:1px 1px 10px 4px lightgray;
`

export const Logo = styled.img`
    height:100%;
    &:hover{
        cursor: pointer;
    }
`

export const MenuBtb = styled.button`
    position:relative;
    width:100px;
    height:100px;
    border:0px;
    background-color: white;
    font-size:60px;
    &:hover{
        cursor: pointer;
    }
`

export const DropDown = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    top:80px;
    left:-50px;
    width:210px;
    height:150px;
    background-color:white;
    box-shadow:0px 0px 2px 0px lightgray;
    border-radius:10px;
    z-index:11;
`
export const MenuLink = styled(Link)`
    flex:1;
    width:100%;
    display:flex;
    
    >p{
        font-size:1rem;
        display:flex;
        align-items:center;
        color:black;
        width:100%;
        text-align:left;
        border-bottom:0.1px solid lightgray;
        padding-left:1.5rem;
    }
`

export const Triangle = styled.div`
    position:absolute;
    top:70px;
    left:40px;
    width:20px;
    height:20px;
    background-color:white;
    border-top-width:0;
    box-shadow:-1px -1px 1px 0px rgba(0,0,0,0.1);
    rotate:45deg;

`

export const FooterStyle = styled.footer`
    width:100%;
    height:50px;
    display:flex;
    flex-direction:column;
    border-top:2px solid rgba(0,0,0,0.2);
    color:gray;
    justify-content:center;
    align-items:center;
    background-color:white;
`

export const MainContainer = styled.div`
    padding:5rem;
    padding-left:10rem;
    padding-right:10rem;
    width:100%;
`

export const MainStyle = styled.div`
    height:20.5rem;
    > h2 {
        padding-left: 1rem
    };
`

export const CardWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
`

export const CardStyle = styled.div`
    position:relative;
    width:25%;
    height:100%;
    padding:1rem;
    font-size:1rem;
    &:hover{
            cursor: pointer;
    }
    >img {
        width:100%;
        height:70%;
        object-fit:cover;
        border-radius:10px;
    }
    >div{
        display:flex;
        justify-content:space-between;
        &:nth-child(2) {
            >p:nth-child(1) {
                font-weight:700
            }
        }
    }
    >span:nth-child(4){
        position:absolute;
        font-size:25px;
        color:#eee;
        bottom:7rem;
        right: 1.5rem;
    }
    
`

export const ModalStyle= styled.span`
    position:fixed;
    width:100vw;
    height:100vh;
    
`