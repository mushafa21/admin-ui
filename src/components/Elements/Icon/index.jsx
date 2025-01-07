const IconWrapper = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const OverviewIcon = () => (
  <IconWrapper>
    <path
      d="M21 14H14V21H21V14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H3V21H10V14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3H14V10H21V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 3H3V10H10V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const BalanceIcon = () => (
  <IconWrapper>
    <path
      d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6V18C4 19.1 4.9 20 6 20H20V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const TransactionIcon = () => (
  <IconWrapper>
    <path
      d="M17 11L21 7L17 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 21L3 17L7 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 17H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const BillsIcon = () => (
  <IconWrapper>
    <path
      d="M9.50001 10.5H12C12.2652 10.5 12.5196 10.3947 12.7071 10.2071C12.8947 10.0196 13 9.76522 13 9.50001C13 9.23479 12.8947 8.98044 12.7071 8.7929C12.5196 8.60536 12.2652 8.50001 12 8.50001H11V8.00001C11 7.73479 10.8947 7.48044 10.7071 7.2929C10.5196 7.10536 10.2652 7.00001 10 7.00001C9.73479 7.00001 9.48044 7.10536 9.2929 7.2929C9.10537 7.48044 9.00001 7.73479 9.00001 8.00001V8.55001C8.39243 8.67338 7.85237 9.01811 7.48466 9.51727C7.11696 10.0164 6.94785 10.6344 7.01015 11.2513C7.07246 11.8681 7.36174 12.4398 7.82184 12.8553C8.28194 13.2709 8.88003 13.5006 9.50001 13.5H10.5C10.6326 13.5 10.7598 13.5527 10.8536 13.6465C10.9473 13.7402 11 13.8674 11 14C11 14.1326 10.9473 14.2598 10.8536 14.3536C10.7598 14.4473 10.6326 14.5 10.5 14.5H8.00001C7.73479 14.5 7.48044 14.6054 7.2929 14.7929C7.10537 14.9804 7.00001 15.2348 7.00001 15.5C7.00001 15.7652 7.10537 16.0196 7.2929 16.2071C7.48044 16.3947 7.73479 16.5 8.00001 16.5H9.00001V17C9.00001 17.2652 9.10537 17.5196 9.2929 17.7071C9.48044 17.8947 9.73479 18 10 18C10.2652 18 10.5196 17.8947 10.7071 17.7071C10.8947 17.5196 11 17.2652 11 17V16.45C11.6076 16.3266 12.1476 15.9819 12.5154 15.4827C12.8831 14.9836 13.0522 14.3656 12.9899 13.7488C12.9276 13.1319 12.6383 12.5602 12.1782 12.1447C11.7181 11.7291 11.12 11.4994 10.5 11.5H9.50001C9.3674 11.5 9.24022 11.4473 9.14645 11.3536C9.05269 11.2598 9.00001 11.1326 9.00001 11C9.00001 10.8674 9.05269 10.7402 9.14645 10.6465C9.24022 10.5527 9.3674 10.5 9.50001 10.5ZM21 12H18V3.00001C18.0007 2.8238 17.9548 2.65053 17.867 2.49775C17.7792 2.34498 17.6526 2.21811 17.5 2.13001C17.348 2.04224 17.1755 1.99603 17 1.99603C16.8245 1.99603 16.652 2.04224 16.5 2.13001L13.5 3.85001L10.5 2.13001C10.348 2.04224 10.1755 1.99603 10 1.99603C9.82447 1.99603 9.65203 2.04224 9.50001 2.13001L6.50001 3.85001L3.50001 2.13001C3.34799 2.04224 3.17554 1.99603 3.00001 1.99603C2.82447 1.99603 2.65203 2.04224 2.50001 2.13001C2.3474 2.21811 2.22079 2.34498 2.13299 2.49775C2.04518 2.65053 1.99931 2.8238 2.00001 3.00001V19C2.00001 19.7957 2.31608 20.5587 2.87869 21.1213C3.4413 21.6839 4.20436 22 5.00001 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8947 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12ZM5.00001 20C4.73479 20 4.48044 19.8947 4.2929 19.7071C4.10536 19.5196 4.00001 19.2652 4.00001 19V4.73001L6.00001 5.87001C6.15435 5.95062 6.32589 5.99272 6.50001 5.99272C6.67413 5.99272 6.84567 5.95062 7.00001 5.87001L10 4.15001L13 5.87001C13.1543 5.95062 13.3259 5.99272 13.5 5.99272C13.6741 5.99272 13.8457 5.95062 14 5.87001L16 4.73001V19C16.0027 19.3412 16.0636 19.6793 16.18 20H5.00001ZM20 19C20 19.2652 19.8947 19.5196 19.7071 19.7071C19.5196 19.8947 19.2652 20 19 20C18.7348 20 18.4804 19.8947 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V14H20V19Z"
      fill="white"
      fill-opacity="0.7"
    />
  </IconWrapper>
);

const ExpensesIcon = () => (
  <IconWrapper>
    <path
      d="M15.5 17H21.5M21.5 17L19 19.5M21.5 17L19 14.5"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 13V5C21.5 4.60218 21.342 4.22064 21.0607 3.93934C20.7794 3.65804 20.3978 3.5 20 3.5H4C3.60218 3.5 3.22064 3.65804 2.93934 3.93934C2.65804 4.22064 2.5 4.60218 2.5 5V19C2.5 19.3978 2.65804 19.7794 2.93934 20.0607C3.22064 20.342 3.60218 20.5 4 20.5H14.235"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 7V17"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 8.5H8.75C8.28587 8.5 7.84075 8.68437 7.51256 9.01256C7.18437 9.34075 7 9.78587 7 10.25C7 10.7141 7.18437 11.1592 7.51256 11.4874C7.84075 11.8156 8.28587 12 8.75 12H11.25C11.7141 12 12.1592 12.1844 12.4874 12.5126C12.8156 12.8408 13 13.2859 13 13.75C13 14.2141 12.8156 14.6592 12.4874 14.9874C12.1592 15.3156 11.7141 15.5 11.25 15.5H7"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const GoalsIcon = () => (
  <IconWrapper>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12H18"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 12H2"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 6V2"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22V18"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const SettingsIcon = () => (
  <IconWrapper>
    <path
      d="M11.9999 14.3466C13.2959 14.3466 14.3465 13.296 14.3465 12C14.3465 10.704 13.2959 9.65341 11.9999 9.65341C10.7039 9.65341 9.65332 10.704 9.65332 12C9.65332 13.296 10.7039 14.3466 11.9999 14.3466Z"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.0545 14.4545C17.9456 14.7013 17.9131 14.9751 17.9613 15.2405C18.0094 15.5059 18.1359 15.7508 18.3245 15.9436L18.3736 15.9927C18.5258 16.1447 18.6465 16.3252 18.7288 16.5238C18.8112 16.7225 18.8536 16.9354 18.8536 17.1505C18.8536 17.3655 18.8112 17.5784 18.7288 17.7771C18.6465 17.9757 18.5258 18.1562 18.3736 18.3082C18.2217 18.4603 18.0412 18.581 17.8425 18.6634C17.6439 18.7457 17.431 18.7881 17.2159 18.7881C17.0009 18.7881 16.7879 18.7457 16.5893 18.6634C16.3906 18.581 16.2102 18.4603 16.0582 18.3082L16.0091 18.2591C15.8163 18.0705 15.5714 17.9439 15.3059 17.8958C15.0405 17.8477 14.7668 17.8802 14.52 17.9891C14.278 18.0928 14.0716 18.265 13.9263 18.4845C13.7809 18.704 13.7029 18.9613 13.7018 19.2245V19.3636C13.7018 19.7976 13.5294 20.2138 13.2225 20.5207C12.9157 20.8276 12.4994 21 12.0655 21C11.6315 21 11.2152 20.8276 10.9084 20.5207C10.6015 20.2138 10.4291 19.7976 10.4291 19.3636V19.29C10.4228 19.0192 10.3351 18.7565 10.1775 18.5362C10.0199 18.3159 9.79969 18.1481 9.54545 18.0545C9.29868 17.9456 9.02493 17.9131 8.75952 17.9613C8.4941 18.0094 8.24919 18.1359 8.05636 18.3245L8.00727 18.3736C7.8553 18.5258 7.67483 18.6465 7.47617 18.7288C7.27752 18.8112 7.06459 18.8536 6.84955 18.8536C6.6345 18.8536 6.42157 18.8112 6.22292 18.7288C6.02426 18.6465 5.84379 18.5258 5.69182 18.3736C5.53967 18.2217 5.41898 18.0412 5.33663 17.8425C5.25428 17.6439 5.21189 17.431 5.21189 17.2159C5.21189 17.0009 5.25428 16.7879 5.33663 16.5893C5.41898 16.3906 5.53967 16.2102 5.69182 16.0582L5.74091 16.0091C5.92953 15.8163 6.05606 15.5714 6.10419 15.3059C6.15231 15.0405 6.11982 14.7668 6.01091 14.52C5.90719 14.278 5.73498 14.0716 5.51547 13.9263C5.29596 13.7809 5.03873 13.7029 4.77545 13.7018H4.63636C4.20237 13.7018 3.78616 13.5294 3.47928 13.2225C3.1724 12.9157 3 12.4994 3 12.0655C3 11.6315 3.1724 11.2152 3.47928 10.9084C3.78616 10.6015 4.20237 10.4291 4.63636 10.4291H4.71C4.98081 10.4228 5.24346 10.3351 5.46379 10.1775C5.68412 10.0199 5.85195 9.79969 5.94545 9.54545C6.05437 9.29868 6.08686 9.02493 6.03873 8.75952C5.99061 8.4941 5.86408 8.24919 5.67545 8.05636L5.62636 8.00727C5.47422 7.8553 5.35352 7.67483 5.27118 7.47617C5.18883 7.27752 5.14644 7.06459 5.14644 6.84955C5.14644 6.6345 5.18883 6.42157 5.27118 6.22292C5.35352 6.02426 5.47422 5.84379 5.62636 5.69182C5.77834 5.53967 5.95881 5.41898 6.15746 5.33663C6.35611 5.25428 6.56905 5.21189 6.78409 5.21189C6.99913 5.21189 7.21207 5.25428 7.41072 5.33663C7.60937 5.41898 7.78984 5.53967 7.94182 5.69182L7.99091 5.74091C8.18374 5.92953 8.42865 6.05606 8.69406 6.10419C8.95948 6.15231 9.23322 6.11982 9.48 6.01091H9.54545C9.78745 5.90719 9.99383 5.73498 10.1392 5.51547C10.2846 5.29596 10.3626 5.03873 10.3636 4.77545V4.63636C10.3636 4.20237 10.536 3.78616 10.8429 3.47928C11.1498 3.1724 11.566 3 12 3C12.434 3 12.8502 3.1724 13.1571 3.47928C13.464 3.78616 13.6364 4.20237 13.6364 4.63636V4.71C13.6374 4.97328 13.7154 5.23051 13.8608 5.45002C14.0062 5.66953 14.2126 5.84174 14.4545 5.94545C14.7013 6.05437 14.9751 6.08686 15.2405 6.03873C15.5059 5.99061 15.7508 5.86408 15.9436 5.67545L15.9927 5.62636C16.1447 5.47422 16.3252 5.35352 16.5238 5.27118C16.7225 5.18883 16.9354 5.14644 17.1505 5.14644C17.3655 5.14644 17.5784 5.18883 17.7771 5.27118C17.9757 5.35352 18.1562 5.47422 18.3082 5.62636C18.4603 5.77834 18.581 5.95881 18.6634 6.15746C18.7457 6.35611 18.7881 6.56905 18.7881 6.78409C18.7881 6.99913 18.7457 7.21207 18.6634 7.41072C18.581 7.60937 18.4603 7.78984 18.3082 7.94182L18.2591 7.99091C18.0705 8.18374 17.9439 8.42865 17.8958 8.69406C17.8477 8.95948 17.8802 9.23322 17.9891 9.48V9.54545C18.0928 9.78745 18.265 9.99383 18.4845 10.1392C18.704 10.2846 18.9613 10.3626 19.2245 10.3636H19.3636C19.7976 10.3636 20.2138 10.536 20.5207 10.8429C20.8276 11.1498 21 11.566 21 12C21 12.434 20.8276 12.8502 20.5207 13.1571C20.2138 13.464 19.7976 13.6364 19.3636 13.6364H19.29C19.0267 13.6374 18.7695 13.7154 18.55 13.8608C18.3305 14.0062 18.1583 14.2126 18.0545 14.4545V14.4545Z"
      stroke="white"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const LogoutIcon = () => (
  <IconWrapper>
    <path
      d="M8.33337 14.1667L12.5 10L8.33337 5.83334"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 10H2.5"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const KebabMenuIcon = () => (
  <IconWrapper>
    <circle cx="2" cy="2" r="2" fill="currentColor" />
    <circle cx="2" cy="10" r="2" fill="currentColor" />
    <circle cx="2" cy="18" r="2" fill="currentColor" />
  </IconWrapper>
);

const ArrowRightIcon = () => (
  <IconWrapper>
    <path
      d="M1 8L20 8"
      stroke="#9F9F9F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 1L20 8L13 15"
      stroke="#9F9F9F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const ArrowUpIcon = () => (
  <IconWrapper>
    <path
      d="M8 12.6667V3.33334"
      stroke="#E73D1C"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.33333 8.00001L7.99999 3.33334L12.6667 8.00001"
      stroke="#E73D1C"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const ArrowDownIcon = () => (
  <IconWrapper>
    <path
      d="M8 2.33325V11.6666"
      stroke="#4DAF6E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.6666 7L7.99992 11.6667L3.33325 7"
      stroke="#4DAF6E"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const HousingIcon = () => (
  <IconWrapper>
    <path
      d="M8.33333 0V1.78421L10 2.83421V1.57895H18.3333V13.4211H14.1667V15H20V0H8.33333ZM6.25 2.36842L0 6.31579V15H12.5V6.31579L6.25 2.36842ZM11.6667 3.15789V3.89211L13.0083 4.73684H13.3333V3.15789H11.6667ZM15 3.15789V4.73684H16.6667V3.15789H15ZM6.25 4.34211L10.8333 7.10526V13.4211H8.33333V8.68421H4.16667V13.4211H1.66667V7.10526L6.25 4.34211ZM15 6.31579V7.89474H16.6667V6.31579H15ZM15 9.47368V11.0526H16.6667V9.47368H15Z"
      fill="#878787"
    />
  </IconWrapper>
);

const FoodIcon = () => (
  <IconWrapper>
    <path
      d="M9 2.77778L15.75 7.77778V17.7778H2.25V7.77778L9 2.77778ZM9 0L0 6.66667V20H18V6.66667L9 0ZM8.4375 7.22222V10.5556H7.875V7.22222H6.75V10.5556H6.1875V7.22222H5.0625V10.5556C5.0625 11.4778 5.81625 12.2222 6.75 12.2222V16.6667H7.875V12.2222C8.80875 12.2222 9.5625 11.4778 9.5625 10.5556V7.22222H8.4375ZM10.125 9.44444V12.7778H11.25V16.6667H12.375V7.22222C11.1375 7.22222 10.125 8.22222 10.125 9.44444Z"
      fill="#878787"
    />
  </IconWrapper>
);

const TransportationIcon = () => (
  <IconWrapper>
    <path
      d="M8 20V13.65L9.625 9H18.375L20 13.65V20H18V18.5H10V20H8ZM10 12.5H18L17.3 10.5H10.7L10 12.5ZM11 16.5C11.2833 16.5 11.521 16.404 11.713 16.212C11.9043 16.0207 12 15.7833 12 15.5C12 15.2167 11.9043 14.9793 11.713 14.788C11.521 14.596 11.2833 14.5 11 14.5C10.7167 14.5 10.4793 14.596 10.288 14.788C10.096 14.9793 10 15.2167 10 15.5C10 15.7833 10.096 16.0207 10.288 16.212C10.4793 16.404 10.7167 16.5 11 16.5ZM17 16.5C17.2833 16.5 17.5207 16.404 17.712 16.212C17.904 16.0207 18 15.7833 18 15.5C18 15.2167 17.904 14.9793 17.712 14.788C17.5207 14.596 17.2833 14.5 17 14.5C16.7167 14.5 16.4793 14.596 16.288 14.788C16.096 14.9793 16 15.2167 16 15.5C16 15.7833 16.096 16.0207 16.288 16.212C16.4793 16.404 16.7167 16.5 17 16.5ZM4 12V10H6V12H4ZM9 6V4H11V6H9ZM4 16V14H6V16H4ZM4 20V18H6V20H4ZM0 20V6H5V0H15V7H13V2H7V8H2V20H0ZM9.5 17H18.5V14H9.5V17Z"
      fill="#878787"
    />
  </IconWrapper>
);

const EntertainmentIcon = () => (
  <IconWrapper>
    <path
      d="M13.75 5.45999L11 1.92999L12.97 1.53999L15.71 5.06999L13.75 5.45999ZM20.62 4.09999L19.84 0.179993L15.91 0.959993L18.65 4.49999L20.62 4.09999ZM10.81 6.04999L8.07001 2.49999L6.10001 2.90999L8.85001 6.43999L10.81 6.04999ZM3.16001 3.49999L2.18001 3.68999C1.92241 3.74079 1.67737 3.84194 1.45894 3.98764C1.24051 4.13334 1.05299 4.32072 0.90713 4.53904C0.761272 4.75737 0.659944 5.00234 0.608959 5.2599C0.557973 5.51747 0.558332 5.78257 0.610014 6.03999L1.00001 7.99999L5.90001 7.02999L3.16001 3.49999ZM3.00001 18V9.99999H19V11.09C19.72 11.21 20.39 11.46 21 11.81V7.99999H1.00001V18C1.00001 18.5304 1.21073 19.0391 1.5858 19.4142C1.96087 19.7893 2.46958 20 3.00001 20H12.81C12.46 19.39 12.22 18.72 12.09 18H3.00001ZM20.34 13.84L16.75 17.43L15.16 15.84L14 17L16.75 20L21.5 15.25L20.34 13.84Z"
      fill="#878787"
    />
  </IconWrapper>
);

const ShoppingIcon = () => (
  <IconWrapper>
    <path
      d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V6C1.69779e-06 5.45 0.196001 4.979 0.588001 4.587C0.980001 4.195 1.45067 3.99933 2 4H4C4 2.9 4.39167 1.95833 5.175 1.175C5.95834 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4H14C14.55 4 15.021 4.196 15.413 4.588C15.805 4.98 16.0007 5.45067 16 6V18C16 18.55 15.804 19.021 15.412 19.413C15.02 19.805 14.5493 20.0007 14 20H2ZM2 18H14V6H12V8C12 8.28333 11.904 8.521 11.712 8.713C11.52 8.905 11.2827 9.00067 11 9C10.7167 9 10.479 8.904 10.287 8.712C10.095 8.52 9.99934 8.28267 10 8V6H6V8C6 8.28333 5.904 8.521 5.712 8.713C5.52 8.905 5.28267 9.00067 5 9C4.71667 9 4.479 8.904 4.287 8.712C4.095 8.52 3.99934 8.28267 4 8V6H2V18ZM6 4H10C10 3.45 9.804 2.979 9.412 2.587C9.02 2.195 8.54934 1.99933 8 2C7.45 2 6.979 2.196 6.587 2.588C6.195 2.98 5.99934 3.45067 6 4Z"
      fill="#878787"
    />
  </IconWrapper>
);

const OthersIcon = () => (
  <IconWrapper>
    <path
      d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0ZM2 8H6V2H2V8ZM12 16H16V10H12V16ZM12 4H16V2H12V4ZM2 16H6V14H2V16Z"
      fill="#878787"
    />
  </IconWrapper>
);

const ArrowUpRightIcon = () => (
  <IconWrapper>
    <path
      d="M4.66669 11.3333L11.3334 4.66667"
      stroke="#299D91"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.66669 4.66667H11.3334V11.3333"
      stroke="#299D91"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const TargetIcon = () => (
  <IconWrapper>
    <path
      d="M18.9187 5.08328H18.9176L20.7772 5.45514C20.8771 5.47512 20.9592 5.54838 20.988 5.64717C21.0026 5.69516 21.0039 5.74621 20.9918 5.79488C20.9797 5.84354 20.9546 5.88802 20.9192 5.92357L19.3958 7.44874C19.2136 7.63075 18.9666 7.73295 18.709 7.73291H17.4464L14.2731 10.9087C14.3337 11.1374 14.3448 11.3763 14.3058 11.6097C14.2668 11.843 14.1785 12.0653 14.0469 12.2619C13.9152 12.4584 13.7432 12.6246 13.5424 12.7494C13.3415 12.8742 13.1163 12.9548 12.8819 12.9857C12.6474 13.0166 12.4091 12.9972 12.1827 12.9288C11.9564 12.8603 11.7472 12.7444 11.5691 12.5887C11.3911 12.4331 11.2482 12.2412 11.1501 12.026C11.0519 11.8107 11.0008 11.5771 11 11.3405C11.0002 11.0851 11.059 10.8331 11.172 10.6041C11.2851 10.375 11.4492 10.175 11.6518 10.0196C11.8544 9.86411 12.09 9.75733 12.3404 9.70748C12.5908 9.65762 12.8493 9.66604 13.0959 9.73206L16.2703 6.55517V5.29308C16.2703 5.03555 16.3724 4.78802 16.5543 4.60597L18.0788 3.0808C18.1144 3.04542 18.1588 3.02034 18.2075 3.00822C18.2561 2.9961 18.3071 2.9974 18.3551 3.01198C18.4539 3.04084 18.5271 3.12298 18.5471 3.22288L18.9187 5.08328Z"
      fill="#525256"
    />
    <path
      d="M4.79654 12.0039C4.79777 13.0338 5.01985 14.0514 5.44777 14.9882C5.8757 15.9249 6.49953 16.759 7.27719 17.4341C8.05484 18.1093 8.96823 18.6098 9.95574 18.9019C10.9432 19.1939 11.9819 19.2708 13.0017 19.1273C14.0214 18.9838 14.9985 18.6233 15.8671 18.07C16.7357 17.5167 17.4755 16.7836 18.0367 15.92C18.5978 15.0565 18.9673 14.0826 19.1201 13.0642C19.273 12.0457 19.2056 11.0063 18.9226 10.016C18.8829 9.90033 18.8671 9.77776 18.8763 9.65578C18.8854 9.5338 18.9193 9.41495 18.9758 9.30648C19.0323 9.19801 19.1104 9.10218 19.2051 9.02483C19.2999 8.94747 19.4094 8.89021 19.5269 8.85653C19.6445 8.82285 19.7677 8.81345 19.8891 8.82892C20.0104 8.84438 20.1273 8.88437 20.2327 8.94646C20.3381 9.00855 20.4297 9.09145 20.5021 9.19009C20.5744 9.28874 20.6259 9.40107 20.6534 9.52026C21.2014 11.4379 21.0973 13.4832 20.3575 15.3353C19.6177 17.1875 18.284 18.7416 16.5658 19.7538C14.8475 20.7661 12.8418 21.1793 10.8634 20.9285C8.88499 20.6778 7.04579 19.7773 5.63434 18.3683C4.22442 16.9571 3.32305 15.1175 3.07175 13.1385C2.82044 11.1594 3.23343 9.15295 4.24588 7.43406C5.25833 5.71517 6.8129 4.38122 8.66551 3.64163C10.5181 2.90204 12.5639 2.79871 14.4816 3.34785C14.7099 3.4146 14.9026 3.56904 15.0174 3.77741C15.1322 3.98578 15.1599 4.23113 15.0944 4.45986C15.0289 4.68858 14.8755 4.88208 14.6678 4.99806C14.4601 5.11404 14.2149 5.14307 13.9859 5.07881C12.9135 4.77111 11.7844 4.71673 10.6874 4.91996C9.59045 5.12318 8.5557 5.57847 7.66472 6.24991C6.77373 6.92135 6.05088 7.7906 5.55315 8.78912C5.05541 9.78764 4.79641 10.8881 4.79654 12.0039Z"
      fill="#525256"
    />
    <path
      d="M8.6672 11.9997C8.66726 12.607 8.83314 13.2028 9.14693 13.7228C9.46073 14.2428 9.91053 14.6672 10.4478 14.9503C10.9851 15.2334 11.5895 15.3645 12.1958 15.3293C12.8021 15.2941 13.3873 15.0941 13.8883 14.7508C14.3892 14.4066 14.7864 13.9321 15.0371 13.3784C15.2878 12.8248 15.3823 12.2132 15.3105 11.6097C15.2911 11.4633 15.3111 11.3143 15.3684 11.1781C15.4256 11.042 15.5182 10.9235 15.6365 10.835C15.7547 10.7465 15.8945 10.6911 16.0413 10.6746C16.1881 10.658 16.3366 10.6809 16.4716 10.7408C16.6066 10.8 16.7235 10.8939 16.8104 11.0129C16.8972 11.132 16.951 11.272 16.9661 11.4186C17.0868 12.4498 16.8835 13.493 16.3844 14.4035C15.8853 15.3139 15.1152 16.0464 14.1809 16.4993C13.2466 16.9522 12.1945 17.103 11.1706 16.9307C10.1468 16.7585 9.20188 16.2718 8.46716 15.5382C7.73243 14.8046 7.24431 13.8605 7.07053 12.8369C6.89676 11.8132 7.04595 10.7609 7.4974 9.82593C7.94886 8.89095 8.68017 8.1197 9.58986 7.61923C10.4995 7.11876 11.5425 6.91388 12.5739 7.03305C12.6843 7.04329 12.7916 7.07548 12.8894 7.12773C12.9873 7.17998 13.0737 7.25123 13.1436 7.33731C13.2136 7.42339 13.2656 7.52256 13.2967 7.62902C13.3279 7.73548 13.3374 7.84708 13.3248 7.95728C13.3123 8.06748 13.2778 8.17406 13.2235 8.27077C13.1692 8.36749 13.0962 8.45239 13.0086 8.5205C12.9211 8.58861 12.8208 8.63857 12.7137 8.66743C12.6067 8.6963 12.4949 8.70349 12.385 8.6886C11.9179 8.63437 11.4447 8.67956 10.9963 8.82121C10.548 8.96285 10.1347 9.19775 9.78358 9.51046C9.43246 9.82317 9.15147 10.2066 8.95907 10.6356C8.76666 11.0647 8.66719 11.5295 8.6672 11.9997Z"
      fill="#525256"
    />
  </IconWrapper>
);

const AwardIcon = () => (
  <IconWrapper>
    <path
      d="M14.5833 0H1.41667C1.04094 0 0.680609 0.152227 0.414932 0.423193C0.149255 0.69416 0 1.06167 0 1.44487V5.62736C0.000351342 5.90501 0.0791352 6.17669 0.226924 6.40987C0.374713 6.64305 0.585247 6.82786 0.833333 6.94219L6.05 9.36023C5.27758 9.80107 4.67035 10.4908 4.32341 11.3213C3.97647 12.1518 3.90942 13.0762 4.13277 13.9498C4.35612 14.8233 4.85724 15.5966 5.55765 16.1486C6.25807 16.7006 7.1182 17 8.00333 17C8.88847 17 9.7486 16.7006 10.449 16.1486C11.1494 15.5966 11.6505 14.8233 11.8739 13.9498C12.0972 13.0762 12.0302 12.1518 11.6833 11.3213C11.3363 10.4908 10.7291 9.80107 9.95667 9.36023L15.1667 6.94219C15.4148 6.82786 15.6253 6.64305 15.7731 6.40987C15.9209 6.17669 15.9996 5.90501 16 5.62736V1.44487C16 1.06167 15.8507 0.69416 15.5851 0.423193C15.3194 0.152227 14.9591 0 14.5833 0ZM10.6667 1.35988V7.53629L8 8.77208L5.33333 7.53629V1.35988H10.6667ZM1.33333 5.62736V1.44487C1.33333 1.42233 1.34211 1.40071 1.35774 1.38477C1.37337 1.36884 1.39457 1.35988 1.41667 1.35988H4V6.91754L1.3825 5.7047C1.36788 5.698 1.35546 5.68713 1.34674 5.67342C1.33802 5.6597 1.33337 5.64371 1.33333 5.62736ZM8 15.6386C7.47258 15.6386 6.95701 15.4791 6.51848 15.1803C6.07995 14.8814 5.73815 14.4566 5.53632 13.9597C5.33449 13.4627 5.28168 12.9158 5.38457 12.3883C5.48747 11.8607 5.74144 11.3761 6.11438 10.9957C6.48732 10.6153 6.96248 10.3563 7.47976 10.2514C7.99704 10.1464 8.53322 10.2003 9.02049 10.4061C9.50776 10.612 9.92424 10.9606 10.2173 11.4078C10.5103 11.8551 10.6667 12.3809 10.6667 12.9189C10.6667 13.6402 10.3857 14.332 9.88562 14.842C9.38552 15.3521 8.70724 15.6386 8 15.6386ZM14.6667 5.62736C14.6666 5.64371 14.662 5.6597 14.6533 5.67342C14.6445 5.68713 14.6321 5.698 14.6175 5.7047L12 6.91754V1.35988H14.5833C14.6054 1.35988 14.6266 1.36884 14.6423 1.38477C14.6579 1.40071 14.6667 1.42233 14.6667 1.44487V5.62736Z"
      fill="#525256"
    />
  </IconWrapper>
);

const EditIcon = () => (
  <IconWrapper>
    <path
      d="M8 13.3333H14"
      stroke="#525256"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 2.33334C11.2652 2.06813 11.6249 1.91913 12 1.91913C12.1857 1.91913 12.3696 1.95571 12.5412 2.02678C12.7128 2.09785 12.8687 2.20202 13 2.33334C13.1313 2.46466 13.2355 2.62057 13.3066 2.79215C13.3776 2.96373 13.4142 3.14762 13.4142 3.33334C13.4142 3.51906 13.3776 3.70296 13.3066 3.87454C13.2355 4.04612 13.1313 4.20202 13 4.33334L4.66667 12.6667L2 13.3333L2.66667 10.6667L11 2.33334Z"
      stroke="#525256"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);
export const Icon = {
  Overview: OverviewIcon,
  Balance: BalanceIcon,
  Bills: BillsIcon,
  Expenses: ExpensesIcon,
  Goals: GoalsIcon,
  Settings: SettingsIcon,
  Logout: LogoutIcon,
  KebabMenu: KebabMenuIcon,
  ArrowRight: ArrowRightIcon,
  ArrowDown: ArrowDownIcon,
  ArrowUp: ArrowUpIcon,
  Housing: HousingIcon,
  Food: FoodIcon,
  Transaction: TransactionIcon,
  Entertainment: EntertainmentIcon,
  Shopping: ShoppingIcon,
  Transportation: TransportationIcon,
  Others: OthersIcon,
  ArrowUpRight: ArrowUpRightIcon,
  Award : AwardIcon,
  Edit : EditIcon,
  Target : TargetIcon,
};
