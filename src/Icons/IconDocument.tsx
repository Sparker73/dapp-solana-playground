import { CSSProperties } from "react";

export const IconDocument = (props: {className: string; style?: CSSProperties;}) => {
    return (
        <svg className={props.className} style={props.style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 13C15.75 12.5858 15.4142 12.25 15 12.25H9C8.58579 12.25 8.25 12.5858 8.25 13C8.25 13.4142 8.58579 13.75 9 13.75H15C15.4142 13.75 15.75 13.4142 15.75 13Z" fill="currentColor"/>
            <path d="M15.75 17C15.75 16.5858 15.4142 16.25 15 16.25H9C8.58579 16.25 8.25 16.5858 8.25 17C8.25 17.4142 8.58579 17.75 9 17.75H15C15.4142 17.75 15.75 17.4142 15.75 17Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7 2.25C5.48122 2.25 4.25 3.48122 4.25 5V19C4.25 20.5188 5.48122 21.75 7 21.75H17C18.5188 21.75 19.75 20.5188 19.75 19V7.96766C19.75 7.58689 19.6258 7.21651 19.3963 6.9127L16.3985 2.94504C16.0677 2.5073 15.5509 2.25 15.0022 2.25H7ZM5.75 5C5.75 4.30964 6.30964 3.75 7 3.75H14.25V8.14705C14.25 8.56126 14.5858 8.89705 15 8.89705H18.25V19C18.25 19.6904 17.6904 20.25 17 20.25H7C6.30964 20.25 5.75 19.6904 5.75 19V5Z" fill="currentColor"/>
        </svg>
    );
};
