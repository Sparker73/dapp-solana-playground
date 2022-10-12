import { CSSProperties } from "react";

export const IconAdd = (props: {className: string; style?: CSSProperties;}) => {
    return (
        <svg className={props.className} style={props.style} width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 15v-2c0-0.547-0.453-1-1-1h-4v-4c0-0.547-0.453-1-1-1h-2c-0.547 0-1 0.453-1 1v4h-4c-0.547 0-1 0.453-1 1v2c0 0.547 0.453 1 1 1h4v4c0 0.547 0.453 1 1 1h2c0.547 0 1-0.453 1-1v-4h4c0.547 0 1-0.453 1-1zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z" fill="currentColor"></path>
        </svg>
    );
};