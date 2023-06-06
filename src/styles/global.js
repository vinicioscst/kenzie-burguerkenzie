import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    	--color-primary: #27ae60;
		--color-primary-50: #93D7AF;
    	--color-secondary: #eb5757;
    	--color-grey-600: #333333;
    	--color-grey-300: #828282;
    	--color-grey-100: #e0e0e0;
		--color-grey-000: #f5f5f5;
    	--color-negative: #e60000;
    	--color-warning: #ffcd07;
    	--color-sucess: #168821;
    	--color-information: #155bcb;

		--font: 'Inter', sans-serif;
    }

	* {
		font-family: var(--font);
	}

	body {
		font: 400 1.125rem var(--font);
		color: var(--color-grey-300);
	}
`;
