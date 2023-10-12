import styled from "styled-components";

export const MovieCastUl = styled.ul`
 	margin: 0 20px;
    padding: 20px;
   

	border-left: 3px outset #1e90ff;
    border-bottom: 3px outset #1e90ff;
    border-radius: 0 15px;
	-moz-box-shadow: 11px 13px 20px -12px rgba(0,0,0,0.14);
	box-shadow: 11px 13px 20px -12px rgba(0,0,0,0.14);
 	transition: all 0.3s;


  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 28px;
  margin-bottom: 50px;
  list-style: none;

  li{
 width: 100px;
}

img{
	object-fit:cover;
}
`