import styled from "styled-components";

export const HomeH1 = styled.h1`
    	text-align: center;
	    color: #848484;
		margin-bottom: 28px;
`

export const HomeUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 28px;
  margin-top: 0;
  margin-bottom: 50px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const HomeLi = styled.li`
width: 200px;

border: 3px outset #1e90ff;
-moz-box-shadow: 11px 13px 20px -12px rgba(0,0,0,0.14);
box-shadow: 11px 13px 20px -12px rgba(0,0,0,0.14);
 transition: all 0.3s;

  &:hover,
       &:focus {
       color: yellow; 	
	   transform: scale(1.05) ;
      -webkit-transform: scale(1.05) ;
     -moz-transform: scale(1.05) ;
	}

img{
	width:200px;
}
  a {
      text-decoration: none; 
	  color: black;

	  display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  p{
	padding: 0 5px ;
  }
    

	
	 
`