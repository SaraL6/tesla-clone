import React, { useState } from 'react';
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal/Fade'




function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);



    return (

        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model x</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>
            <CustomMenu onClick={() => setBurgerStatus(true)} />



            <BurgerNav show={burgerStatus}>

                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>

                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>

            </BurgerNav>



        </Container>
    )
}

export default Header;

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center; 
justify-content:space-between; 
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;

    a {
        font-weight:500;
        text-decoration:uppercase;
        padding:0 10px;
        flex-wrap: nowrap;
        font-family: Gotham-Book;
        color:black;
    }
    @media(max-width:768px){
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    a {
        font-weight:600;
        text-decoration:uppercase;
        margin-right:10px;
        flex-wrap: nowrap;
    }
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;`

const BurgerNav = styled.div`

position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)' : 'translateY(100%)'};

-webkit-transition:all 1s ease;
   -moz-transition:all 1s ease;
    -ms-transition:all 1s ease;
     -o-transition:all 1s ease;
        transition:all 1s ease;


li{
        padding:15px 0;
        
        a{
            font-weight:600;
            font-size:14px;
            font-family: Gotham-Book;
            color:black;

        }
    }

`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;

`