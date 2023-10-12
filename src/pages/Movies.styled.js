import styled from "styled-components";

export const MoviesForm = styled.form`
    display: flex;
    justify-content: center;
	margin-bottom: 50px;

	input{
		height: 30px;
    width: 300px;
    border-radius: 15px 0;
    padding-left: 10px;
    font-size: 18px;
    background-color: ivory;
    border-color: dodgerblue;
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
