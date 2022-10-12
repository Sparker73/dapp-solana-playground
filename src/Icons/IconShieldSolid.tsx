import { CSSProperties } from "react";

export const IconShieldSolid = (props: {className: string; style?: CSSProperties;}) => {
    return (
        <svg className={props.className} style={props.style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1607 4.40707C12.4466 3.9771 11.5534 3.9771 10.8393 4.40707L10.323 4.71796C9.07029 5.4723 7.66391 5.93519 6.20803 6.07235L5.88275 6.103C5.24066 6.16349 4.75 6.70255 4.75 7.34749V8.99137C4.75 11.77 5.87808 14.4296 7.87584 16.3608L11.1312 19.5078C11.6157 19.9762 12.3843 19.9762 12.8688 19.5078L16.1242 16.3608C18.1219 14.4296 19.25 11.77 19.25 8.99137V7.34749C19.25 6.70255 18.7593 6.16349 18.1172 6.103L17.792 6.07235C16.3361 5.93519 14.9297 5.4723 13.677 4.71796L13.1607 4.40707Z" fill="currentColor"/>
        </svg>
    );
};
