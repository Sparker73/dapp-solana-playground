import { CSSProperties } from "react";

export const IconVerticalEllipsis = (props: {className: string; style?: CSSProperties;}) => {
    return (
        <svg className={props.className} style={props.style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.25003C12.4142 5.25003 12.75 5.58582 12.75 6.00003C12.75 6.41424 12.4142 6.75003 12 6.75003C11.5858 6.75003 11.25 6.41424 11.25 6.00003C11.25 5.58582 11.5858 5.25003 12 5.25003ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25ZM12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    );
};
