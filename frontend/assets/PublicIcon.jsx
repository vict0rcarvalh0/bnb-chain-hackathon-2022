export const PublicIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={
        props.width ? props.width : "61"
      }
      height={
        props.height ? props.height : "61"
      }
      fill="none"
      viewBox="0 0 61 61"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.083"
        d="M30.5 55.917c14.037 0 25.417-11.38 25.417-25.417S44.537 5.083 30.5 5.083 5.083 16.463 5.083 30.5 16.463 55.917 30.5 55.917zM5.083 30.5h50.834"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.083"
        d="M30.5 5.083A38.888 38.888 0 0140.667 30.5 38.888 38.888 0 0130.5 55.917 38.888 38.888 0 0120.333 30.5 38.887 38.887 0 0130.5 5.083v0z"
      ></path>
    </svg>
  );
}
