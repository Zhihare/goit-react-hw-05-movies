import styled from "styled-components";

export const MovieDetailsButtonBack = styled.button`
	background-color: ivory;
    border-radius: 15px 15px 0 0;
    border-color: dodgerblue;
	border-bottom-color: transparent;
    color: #75756e;
    font-size: 24px;
	transition: all 0.3s;
	margin-left: 30px;

	&:hover,
       &:focus {
       color: yellow; 	
	   background-color: black;
	}
`

export const MovieDetailsContainer = styled.div`
	display: flex;
    margin: 20px 20px;
	margin-top: 0;
    padding: 20px;
    flex-wrap: wrap;

	border-left: 3px outset #1e90ff;
    border-top: 3px outset #1e90ff;
    border-radius: 15px 0;
	-moz-box-shadow: 11px 13px 20px -12px rgba(0,0,0,0.14);
	box-shadow: 11px 13px 20px -12px rgba(0,0,0,0.14);
 	transition: all 0.3s;

	div{
		padding: 0 10px;
		font-weight: 500;
		width: 75%;
	}

	h2{
		 color: #848484;
	}

	span{
		font-weight: 400;
	}

	button{
	background-color: ivory;
    border-radius: 0 15px;
    border-color: dodgerblue;
    color: #75756e;
    font-size: 16px;
    margin-left: 2px;
	transition: all 0.3s;

	&:hover,
       &:focus {
       color: yellow; 	
	   background-color: black;
	}
	}
`