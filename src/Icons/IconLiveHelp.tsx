import { CSSProperties } from "react";

export const IconLiveHelp = (props: {className: string; style?: CSSProperties;}) => {
    return (
        <svg className={props.className} style={props.style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 1.5H19C20.1 1.5 21 2.4 21 3.5V17.5C21 18.6 20.1 19.5 19 19.5H15L12 22.5L9 19.5H5C3.89 19.5 3 18.6 3 17.5V3.5C3 2.4 3.89 1.5 5 1.5ZM14.17 17.5H19V3.5H5V17.5H9.83L10.41 18.08L12 19.67L13.58 18.09L14.17 17.5ZM11 16.5V14.5H13V16.5H11ZM14 8.5C14 7.4 13.1 6.5 12 6.5C10.9 6.5 10 7.4 10 8.5H8C8 6.29 9.79 4.5 12 4.5C14.21 4.5 16 6.29 16 8.5C16 9.78292 15.21 10.4733 14.4408 11.1455C13.711 11.7833 13 12.4046 13 13.5H11C11 11.6787 11.9421 10.9566 12.7704 10.3217C13.4202 9.82361 14 9.37922 14 8.5Z" fill="currentColor"/>
        </svg>
    );
};
