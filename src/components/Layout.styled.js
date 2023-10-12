import styled from "styled-components";

export const LayoutNav = styled.nav`
margin-bottom: 20px;
	
`

export const LayoutUl = styled.ul`
list-style: none;
padding: 0 20px;
margin: 2px;

display: flex;
align-items: center;
gap: 20px;

font-size: 24px;
font-weight: 500;
list-style: none;
background-color: dodgerblue;
height: 60px;
border-radius: 15px;

    a {
      text-decoration: none; 
	  color: white;

	   &:hover,
       &:focus {
    color: yellow; 	
  }
   &.active {
      color: yellow;
    }
  }
    
`
export const LayoutLi = styled.li`
color: white;
`