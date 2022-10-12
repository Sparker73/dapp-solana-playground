import { CSSProperties } from "react";

export const IconCheckCircle = (props: {className: string; style?: CSSProperties;}) => {
    return (
      <svg className={props.className} style={props.style} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM23.258 12.307l-9.486 9.485c-0.238 0.237-0.623 0.237-0.861 0l-0.191-0.191-0.001 0.001-5.219-5.256c-0.238-0.238-0.238-0.624 0-0.862l1.294-1.293c0.238-0.238 0.624-0.238 0.862 0l3.689 3.716 7.756-7.756c0.238-0.238 0.624-0.238 0.862 0l1.294 1.294c0.239 0.237 0.239 0.623 0.001 0.862z" fill="currentColor"></path>
      </svg>
    );
};