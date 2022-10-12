import { CSSProperties } from "react";

export const IconSwitchStopped = (props: {className: string; style?: CSSProperties;}) => {
  return (
    <svg className={props.className} style={props.style} xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
      <path d="M18 14c0-4.406-3.594-8-8-8s-8 3.594-8 8 3.594 8 8 8 8-3.594 8-8zM30 14c0-4.406-3.594-8-8-8h-6.031c2.438 1.828 4.031 4.734 4.031 8s-1.594 6.172-4.031 8h6.031c4.406 0 8-3.594 8-8zM32 14c0 5.516-4.484 10-10 10h-12c-5.516 0-10-4.484-10-10s4.484-10 10-10h12c5.516 0 10 4.484 10 10z" fill="currentColor"></path>
    </svg>
  );
};