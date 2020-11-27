import styled, { css } from 'styled-components/macro';
import { BackgroundColor, TextColor, Flex, Sizing, ifProp } from './lib';

export const HeadingStyle = css`
	font-family: ${({ theme }) => theme.fonts.heading};
	font-weight: 800;
	color: ${({ theme }) => theme.colors.white};
	${({ cursor }) => ifProp(cursor, `cursor: ${cursor};`)}
	${TextColor};
	${Sizing};
`;

export const TextStyle = css`
	font-family: ${({ theme }) => theme.fonts.text};
	color: ${({ theme }) => theme.colors.white};
	${({ bold }) => ifProp(bold, `font-weight: bold;`)}
	${TextColor};
	${Sizing};
`;

export const H1 = styled.h1`
	${HeadingStyle};
`;

export const H2 = styled.h2`
	${HeadingStyle};
`;

export const H3 = styled.h3`
	${HeadingStyle};
`;

export const H4 = styled.h4`
	${HeadingStyle};
`;

export const H5 = styled.h5`
	${HeadingStyle};
`;

export const H6 = styled.h6`
	${HeadingStyle};
`;

export const P = styled.p`
	${TextStyle};
`;

export const TextContainer = styled.div`
	${TextStyle}
`;

export const Span = styled.span`
	${TextStyle};
`;

export const Cross = styled.span`
	${TextStyle};
	font-weight: 500;
	cursor: pointer;
	transition: 0.2s transform;
	transform: rotate(45deg) scale(1);
	font-size: 1.5em;
	user-select: none;

	&:hover {
		transform: rotate(45deg) scale(1.1);
	}
`;

export const Div = styled.div`
	${TextStyle};
	${BackgroundColor};
	${Sizing};
	${Flex};
`;

export const Form = styled.form`
	${TextStyle};
	${BackgroundColor};
	${Sizing};
	${Flex};
`;

export const Th = styled.th`
	${HeadingStyle};
	${TextColor};
`;

export const Td = styled.td`
	${TextStyle};
	${TextColor};
`;

export const Icon = styled(Span)`
	${Sizing};
	display: inline-block;
	font-family: ${({theme}) => theme.fonts.icon};
`

const btnClip = "8px";
const btnPadding = "3px";

export const Button = styled.button`
	padding: ${({ theme }) => theme.padding.s};
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius};
	background: ${({ theme }) => theme.colors.faded_blue};
	color: ${({ theme,  }) => theme.colors.bright_blue};
	cursor: pointer;
	position: relative;
	transition: .35s color;
	z-index: 1;
	font-size: 1.2em;

	${BackgroundColor}
	${TextStyle}
    ${TextColor};
	${Sizing};

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: ${({ theme }) => theme.borderRadius};
		background: ${({ theme }) => theme.colors.light1};
		opacity: 0;
		transition: .2s opacity;
	}

	&:hover:after,
	&:focus:after {
		opacity: 0.15;
	}

	&:focus {
		outline: none;
		border-width: 0;
	}

	&:active:after {
		background: ${({ theme }) => theme.colors.bg};
		opacity: 0.15;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
	}
`;

export const SatisfyingButton = styled(Button)`
	background: ${({ theme, color }) => theme.colors[`neutral_${color}`]};
	color: ${({ theme, color }) => theme.colors[`bright_${color}`]};
	z-index: 1;
	font-size: 1.2em;
	font-family: ${({ theme }) => theme.fonts.special};

	&:after {
		opacity: 1;
		top: ${btnPadding};
		right: ${btnPadding};
		left: ${btnPadding};
		bottom: ${btnPadding};
		background: ${({ theme, color }) => theme.colors[`neutral_${color}`]};
		transform: scaleX(0);
		transform-origin: center left;
		transition: .35s transform cubic-bezier(.85,.01,.33,.92);
		z-index: -1;
		border-radius: 0;
	}

	&:hover:after {
		opacity: 1;
		transform: scaleX(1);
	}

	&:active:after, &:active {
		box-shadow: none;
		background: ${({ theme, color }) => theme.colors[`bright_${color}`]};
	}

	&:active {
		color: ${({ theme, color }) => theme.colors[`bright_${color}`]};
	}

	&:hover {
		color: ${({ theme, color }) => theme.colors[`faded_${color}`]};
	}

	&:before {
		z-index: -1;
		content: "";
		position: absolute;
		top: ${btnPadding};
		right: ${btnPadding};
		left: ${btnPadding};
		bottom: ${btnPadding};
		background: ${({ theme, color }) => theme.colors[`faded_${color}`]};
		transition: 0.1s opacity;
	}
`

const InputStyle = css`
	width: 100%;
	padding: ${({ theme }) => theme.padding.s};
	background: rgba(0,0,0,0);
	color: ${({ theme }) => theme.colors.light1};
	font-size: 1.15em;
	position: relative;
	z-index: 1;
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius};

	&::placeholder {
		color: ${({ theme }) => theme.colors.dark4};
	}

	&:focus {
		outline: none;
	}

	${TextStyle}
	${BackgroundColor}
	${TextColor}
	${Sizing}
`
export const Input = styled.input`
	${InputStyle};
`;

export const Textarea = styled.textarea`
	${InputStyle};
	height: 100%;
	resize: none;
`
