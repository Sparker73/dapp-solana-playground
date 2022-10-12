import { CSSProperties } from "react";

export const IconCoin = (props: {className: string; style?: CSSProperties;}) => {
    return (
        <svg className={props.className} style={props.style} width="24" height="24" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 172V0h172v172z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M87.344 6.719c-44.559 0-80.625 36.06-80.625 80.625 0 44.56 36.06 80.625 80.625 80.625 44.56 0 80.625-36.06 80.625-80.625 0-44.56-36.06-80.625-80.625-80.625zm0 6.718c40.752 0 73.906 33.155 73.906 73.907 0 40.752-33.154 73.906-73.906 73.906s-73.906-33.154-73.906-73.906 33.154-73.906 73.906-73.906zm0 13.438c-33.343 0-60.469 27.126-60.469 60.469 0 33.342 27.126 60.469 60.469 60.469 33.342 0 60.469-27.127 60.469-60.47 0-33.342-27.127-60.468-60.47-60.468zm0 6.719c29.638 0 53.75 24.112 53.75 53.75s-24.112 53.75-53.75 53.75-53.75-24.112-53.75-53.75 24.112-53.75 53.75-53.75zm0 9.943a3.354 3.354 0 0 0-3.196 2.315L75.903 71.22H49.219a3.37 3.37 0 0 0-3.195 2.332 3.378 3.378 0 0 0 1.22 3.768l21.588 15.684-8.246 25.379a3.36 3.36 0 0 0 5.17 3.756l21.588-15.685 21.588 15.685a3.357 3.357 0 0 0 1.975.641c2.261 0 3.904-2.213 3.194-4.398L105.856 93l21.588-15.687a3.368 3.368 0 0 0 1.22-3.763 3.37 3.37 0 0 0-3.195-2.332H98.785l-8.247-25.37a3.353 3.353 0 0 0-3.195-2.312zm0 14.23 5.805 17.86a3.35 3.35 0 0 0 3.195 2.31h18.786L99.932 88.992a3.376 3.376 0 0 0-1.22 3.768l5.804 17.866-15.197-11.042a3.363 3.363 0 0 0-3.95-.001l-15.197 11.04 5.804-17.87a3.368 3.368 0 0 0-1.22-3.76L59.558 77.936h18.786a3.352 3.352 0 0 0 3.195-2.312z" fill="currentColor" />
        </svg>
    );
};