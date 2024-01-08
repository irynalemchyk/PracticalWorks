import styled from "styled-components";
// styled-components це набір стилізованих компонентів, які використовують бібліотеку styled-components в реакті

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Box = styled.div`
	padding: 5% 2.5%;
	background: rgb(43, 52, 54);
	width: 100%;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	margin-right: 50px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 100px;
`;

export const Row = styled.div`
	display: grid;
    grid-template-columns: repeat(4, minmax(185px, 1fr));
	grid-gap: 0px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
