export const PrivateIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? props.width : "61"}
      height={props.width ? props.width : "61"}
      fill="none"
      viewBox="0 0 49 49"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.083"
        d="M38.792 22.458H10.208a4.083 4.083 0 00-4.083 4.084v14.291a4.083 4.083 0 004.083 4.084h28.584a4.083 4.083 0 004.083-4.084V26.542a4.083 4.083 0 00-4.083-4.084zM14.292 22.458v-8.166a10.209 10.209 0 0120.416 0v8.166"
      ></path>
    </svg>
  );
};
