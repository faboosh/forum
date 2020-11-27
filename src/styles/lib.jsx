import { css } from 'styled-components/macro';

export function fromTheme(themeProp, args, prefix) {
	if (args) {
		args = args.split(' ');
		if (prefix) {
			return prefix + args.map((arg) => (themeProp[arg] ? themeProp[arg] : arg)).join(' ');
		}
	}
}

export function ifProp(prop, css) {
	if (typeof prop !== 'undefined') {
		return css;
	}
}

export const BackgroundColor = css`
	${({ theme, background }) => {
		return fromTheme(theme.colors, background, 'background: ');
	}};
`;

export const BorderColor = css`
	${({ theme, borderColor }) => {
		return fromTheme(theme.colors, borderColor, 'border-color: ');
	}};
`;

export const TextColor = css`
	${({ theme, color }) => {
		return fromTheme(theme.colors, color, 'color: ');
	}};

	${({ theme, fontFamily }) => {
		return fromTheme(theme.fonts, fontFamily, 'font-family: ');
	}};
`;

export const Flex = css`
	${({ flex, direction, justify, align, wrap }) => {
		const entries = [];
		if (typeof flex !== 'undefined') {
			entries.push('display: flex');
		}
		if (typeof direction !== 'undefined') {
			entries.push(`flex-direction: ${direction}`);
		}
		if (typeof justify !== 'undefined') {
			entries.push(`justify-content: ${justify}`);
		}
		if (typeof align !== 'undefined') {
			entries.push(`align-items: ${align}`);
		}
		if (typeof wrap !== 'undefined') {
			entries.push(`flex-wrap: ${wrap}`);
		}
		return entries.join(';\n');
	}};
`;

export const Sizing = css`
	${({ theme, padding }) => {
		return fromTheme(theme.padding, padding, 'padding: ');
	}};

	${({ theme, margin }) => {
		return fromTheme(theme.padding, margin, 'margin: ');
	}};

	${({ theme, borderRadius }) => {
		return fromTheme(theme, borderRadius, 'border-radius: ');
	}};

	${({
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight,
		position,
		fullscreen,
		fontSize,
		fontWeight,
		textAlign,
		overflow,
		zIndex,
		transform,
		display
	}) => {
		return [
			ifProp(width, `width: ${width};`),

			ifProp(height, `height: ${height};`),

			ifProp(minWidth, `min-width: ${minWidth};`),

			ifProp(maxWidth, `max-width: ${maxWidth};`),

			ifProp(minHeight, `min-height: ${minHeight};`),

			ifProp(maxHeight, `max-height: ${maxHeight};`),

			ifProp(position, `position: ${position};`),

			ifProp(
				fullscreen,
				`
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
				`
			),

			ifProp(fontSize, `font-size: ${fontSize};`),

			ifProp(fontWeight, `font-weight: ${fontWeight};`),

			ifProp(overflow, `overflow: ${overflow};`),

			ifProp(zIndex, `z-index: ${zIndex};`),

			ifProp(textAlign, `text-align: ${textAlign};`),

			ifProp(transform, `transform: ${transform};`),
			
			ifProp(display, `display: ${display};`),
		].join('\n');
	}}
`;