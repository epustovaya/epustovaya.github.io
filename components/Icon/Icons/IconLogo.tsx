import React from "react";
import { IconSpecificProps } from "../Icon.types";
import Icon from "../Icon";

const IconPhone = (props: IconSpecificProps) => {
  return (
    <Icon {...props} width="166" height="44" viewBox="0 0 166 44">
      <path
        d="M109.919 17.5409C109.052 16.6394 107.736 16.0079 106.014 15.6634C105.414 15.5301 104.93 15.4192 104.561 15.3293C104.223 15.2481 103.97 15.1576 103.805 15.0605C103.623 14.9533 103.572 14.8739 103.558 14.8433C103.532 14.7864 103.501 14.6783 103.501 14.4823C103.501 14.2058 103.623 13.9991 103.883 13.8313C104.179 13.6408 104.581 13.544 105.077 13.544C105.935 13.544 106.822 13.7444 107.719 14.1399C107.818 14.1833 108.068 14.308 108.257 14.4026C108.387 14.468 108.544 14.4161 108.611 14.2873L110.689 10.2658C110.761 10.127 110.699 9.95715 110.554 9.89909C110.312 9.80229 109.975 9.66838 109.835 9.6183C108.229 9.04399 106.564 8.75338 104.876 8.75338C103.69 8.75338 102.597 8.9044 101.621 9.20221C100.641 9.50241 99.7896 9.93767 99.0924 10.4943C98.3876 11.0585 97.8407 11.7548 97.4664 12.5631C97.0921 13.3699 96.9019 14.2858 96.9019 15.2873C96.9019 16.682 97.3092 17.7968 98.113 18.5994C98.9106 19.3978 100.248 19.9779 102.203 20.3736C102.755 20.4845 103.204 20.5896 103.535 20.6861C103.848 20.7763 104.084 20.8752 104.237 20.98C104.363 21.0678 104.445 21.1559 104.478 21.2413C104.52 21.353 104.542 21.5029 104.542 21.6871C104.542 21.9678 104.413 22.1874 104.136 22.3777C103.832 22.5864 103.427 22.6928 102.933 22.6928C101.652 22.6928 100.281 22.2497 98.8508 21.3749C98.8178 21.3545 98.4819 21.1322 98.2411 20.9731C98.1099 20.8857 97.9335 20.933 97.8607 21.0729L95.6134 25.4312C95.5482 25.5573 95.5927 25.7107 95.7162 25.7811C95.9317 25.9045 96.2477 26.0846 96.3819 26.1556C98.4735 27.2596 100.618 27.8184 102.765 27.8184C103.996 27.8184 105.141 27.6617 106.169 27.3534C107.205 27.0424 108.105 26.5975 108.845 26.0307C109.594 25.4575 110.187 24.7406 110.607 23.8997C111.029 23.0562 111.242 22.0975 111.242 21.0504C111.242 19.6366 110.797 18.4559 109.919 17.5409Z"
        fill="#C41E26"
      />
      <path
        d="M34.4624 18.2553C34.4624 18.8634 34.5732 19.4186 34.7953 19.921C35.0173 20.4241 35.3094 20.8624 35.6719 21.236C36.0344 21.6105 36.4667 21.9026 36.9698 22.1132C37.4722 22.3235 38.004 22.4284 38.5654 22.4284C39.1263 22.4284 39.6577 22.3235 40.1608 22.1132C40.6632 21.9026 41.0956 21.6105 41.4584 21.236C41.8206 20.8624 42.1124 20.4241 42.335 19.921C42.5567 19.4186 42.6681 18.8755 42.6681 18.2906C42.6681 17.7294 42.5567 17.1977 42.335 16.6953C42.1124 16.1925 41.8206 15.7539 41.4584 15.38C41.0956 15.0061 40.6632 14.7137 40.1608 14.5037C39.6577 14.2931 39.1263 14.1879 38.5654 14.1879C38.004 14.1879 37.4722 14.2931 36.9698 14.5037C36.4667 14.7137 36.0344 15.0061 35.6719 15.38C35.3094 15.7539 35.0173 16.1865 34.7953 16.6775C34.5732 17.1686 34.4624 17.6944 34.4624 18.2553ZM27.7649 18.1855C27.7649 16.8529 28.0333 15.608 28.5711 14.4506C29.1089 13.2936 29.8567 12.2888 30.8154 11.4349C31.7738 10.5819 32.9135 9.90992 34.2344 9.41859C35.555 8.92781 36.9988 8.68245 38.5654 8.68245C40.1083 8.68245 41.5401 8.92244 42.8608 9.40149C44.1814 9.88085 45.3271 10.5472 46.2972 11.4001C47.2673 12.2537 48.0211 13.2708 48.5592 14.4506C49.0967 15.6317 49.3657 16.9352 49.3657 18.361C49.3657 19.7868 49.0907 21.0906 48.5418 22.2702C47.9923 23.4515 47.2385 24.4686 46.2801 25.321C45.3211 26.1748 44.1698 26.8355 42.8257 27.3029C41.4811 27.7702 40.026 28.0039 38.4597 28.0039C36.9173 28.0039 35.4906 27.7702 34.182 27.3029C32.8722 26.8355 31.745 26.1688 30.798 25.3036C29.851 24.4395 29.1089 23.4051 28.5711 22.2007C28.0333 20.9972 27.7649 19.6583 27.7649 18.1855Z"
        fill="#C41E26"
      />
      <path
        d="M55.9465 18.2553C55.9465 18.8634 56.0574 19.4186 56.2794 19.921C56.5015 20.4241 56.7935 20.8624 57.1561 21.236C57.5185 21.6105 57.9506 21.9026 58.4539 22.1132C58.9564 22.3235 59.4881 22.4284 60.0493 22.4284C60.6101 22.4284 61.1416 22.3235 61.6449 22.1132C62.1474 21.9026 62.5797 21.6105 62.9425 21.236C63.3047 20.8624 63.5966 20.4241 63.8188 19.921C64.0406 19.4186 64.1523 18.8755 64.1523 18.2906C64.1523 17.7294 64.0406 17.1977 63.8188 16.6953C63.5966 16.1925 63.3047 15.7539 62.9425 15.38C62.5797 15.0061 62.1474 14.7137 61.6449 14.5037C61.1416 14.2931 60.6101 14.1879 60.0493 14.1879C59.4881 14.1879 58.9564 14.2931 58.4539 14.5037C57.9506 14.7137 57.5185 15.0061 57.1561 15.38C56.7935 15.7539 56.5015 16.1865 56.2794 16.6775C56.0574 17.1686 55.9465 17.6944 55.9465 18.2553ZM49.249 18.1855C49.249 16.8529 49.5175 15.608 50.0553 14.4506C50.5931 13.2936 51.3409 12.2888 52.2996 11.4349C53.258 10.5819 54.3976 9.90992 55.7186 9.41859C57.0392 8.92781 58.483 8.68245 60.0493 8.68245C61.5922 8.68245 63.0237 8.92244 64.3449 9.40149C65.6656 9.88085 66.8113 10.5472 67.7813 11.4001C68.7512 12.2537 69.505 13.2708 70.0433 14.4506C70.5805 15.6317 70.8498 16.9352 70.8498 18.361C70.8498 19.7868 70.5745 21.0906 70.0253 22.2702C69.4762 23.4515 68.7221 24.4686 67.7639 25.321C66.8052 26.1748 65.6539 26.8355 64.3099 27.3029C62.965 27.7702 61.5101 28.0039 59.9439 28.0039C58.4012 28.0039 56.9748 27.7702 55.6658 27.3029C54.3563 26.8355 53.2289 26.1688 52.2822 25.3036C51.3354 24.4395 50.5931 23.4051 50.0553 22.2007C49.5175 20.9972 49.249 19.6583 49.249 18.1855Z"
        fill="#C41E26"
      />
      <path
        d="M116.266 18.2734C116.266 18.8669 116.374 19.4182 116.587 19.9281C116.8 20.4386 117.091 20.8835 117.459 21.2626C117.826 21.6424 118.265 21.939 118.775 22.1523C119.285 22.3656 119.837 22.4729 120.431 22.4729C121 22.4729 121.539 22.3656 122.049 22.1523C122.559 21.939 122.998 21.6424 123.367 21.2626C123.734 20.8835 124.031 20.4443 124.256 19.9458C124.481 19.4478 124.594 18.9139 124.594 18.3444C124.594 17.7752 124.481 17.2356 124.256 16.7254C124.031 16.2155 123.734 15.7706 123.367 15.3907C122.998 15.0114 122.559 14.7145 122.049 14.5011C121.539 14.2875 121 14.1809 120.431 14.1809C119.837 14.1809 119.285 14.2875 118.775 14.5011C118.265 14.7145 117.826 15.0114 117.459 15.3907C117.091 15.7706 116.8 16.2037 116.587 16.6897C116.374 17.1763 116.266 17.7039 116.266 18.2734ZM124.643 9.19882H130.597C130.741 9.19882 130.857 9.31571 130.857 9.45982V27.1939C130.857 27.3378 130.741 27.4553 130.597 27.4553H124.643C124.498 27.4553 124.381 27.3378 124.381 27.1939V26.2958C124.381 26.063 124.099 25.9438 123.938 26.1115C122.101 28.0313 115.766 29.0617 112.075 24.0757C109.073 20.0204 110.062 14.117 113.093 11.0133C115.627 8.4205 120.204 7.9169 123.96 10.6867C124.136 10.8155 124.381 10.6986 124.381 10.4817V9.45982C124.381 9.31571 124.498 9.19882 124.643 9.19882Z"
        fill="#C41E26"
      />
      <path
        d="M76.7259 18.3536C76.7259 18.9387 76.831 19.4816 77.0411 19.9843C77.252 20.487 77.5381 20.9253 77.9009 21.2989C78.2629 21.6738 78.6955 21.9658 79.1979 22.1762C79.701 22.3868 80.244 22.4917 80.8284 22.4917C81.3899 22.4917 81.9214 22.3868 82.4237 22.1762C82.9269 21.9658 83.3594 21.6738 83.7215 21.2989C84.0842 20.9253 84.3757 20.4927 84.5981 20.0017C84.8205 19.511 84.931 18.9851 84.931 18.424C84.931 17.8625 84.8205 17.3314 84.5981 16.8283C84.3757 16.3256 84.0842 15.8875 83.7215 15.5133C83.3594 15.1397 82.9269 14.8474 82.4237 14.6368C81.9214 14.4265 81.3899 14.321 80.8284 14.321C80.244 14.321 79.701 14.4265 79.1979 14.6368C78.6955 14.8474 78.2629 15.1397 77.9009 15.5133C77.5381 15.8875 77.252 16.3145 77.0411 16.793C76.831 17.2729 76.7259 17.7927 76.7259 18.3536ZM84.9785 1.30431H90.8451C90.9878 1.30431 91.1028 1.41935 91.1028 1.56163V27.1435C91.1028 27.2859 90.9878 27.4012 90.8451 27.4012H84.9785C84.8359 27.4012 84.7208 27.2859 84.7208 27.1435V26.2588C84.7208 26.0299 84.4432 25.9116 84.2852 26.0779C82.4744 27.9689 76.2317 28.9836 72.5954 24.0712C69.6374 20.0748 70.6117 14.258 73.5991 11.2C76.0951 8.6457 80.6052 8.14894 84.3067 10.8783C84.4792 11.0047 84.7208 10.8899 84.7208 10.6763V1.56163C84.7208 1.41935 84.8359 1.30431 84.9785 1.30431Z"
        fill="#C41E26"
      />
      <path
        d="M131.937 9.19864H137.855C137.999 9.19864 138.117 9.31553 138.117 9.45965V10.8489C138.117 11.076 138.382 11.1901 138.554 11.0418C140.197 9.62324 142.021 8.91379 144.024 8.91379C146.596 8.91379 148.589 9.94315 150.002 12.0023C150.107 12.1557 150.326 12.1557 150.432 12.0023C151.865 9.91983 153.858 8.87813 156.408 8.87813C157.263 8.87813 158.069 9.00276 158.828 9.25172C159.587 9.50099 160.24 9.89222 160.785 10.4261C161.331 10.9597 161.764 11.6539 162.085 12.5078C162.404 13.3622 162.565 14.394 162.565 15.6041V27.1938C162.565 27.3376 162.448 27.4551 162.303 27.4551H156.385C156.241 27.4551 156.124 27.3376 156.124 27.1938V18.4509C156.124 17.5258 156.059 16.7668 155.928 16.1737C155.798 15.5807 155.608 15.1181 155.359 14.7856C155.109 14.4536 154.819 14.2286 154.487 14.1094C154.154 13.9911 153.798 13.9314 153.419 13.9314C151.355 13.9314 150.323 15.4384 150.323 18.4509V27.1938C150.323 27.3376 150.207 27.4551 150.062 27.4551H144.144C143.999 27.4551 143.882 27.3376 143.882 27.1938V18.4509C143.882 17.5258 143.822 16.7609 143.703 16.1556C143.584 15.5508 143.413 15.0702 143.188 14.7143C142.962 14.3584 142.672 14.1154 142.316 13.9848C141.96 13.8547 141.545 13.7891 141.07 13.7891C140.666 13.7891 140.287 13.8487 139.931 13.9671C139.576 14.0857 139.26 14.3174 138.988 14.661C138.715 15.0052 138.502 15.4798 138.348 16.0847C138.193 16.6895 138.117 17.4784 138.117 18.4509V27.1938C138.117 27.3376 137.999 27.4551 137.855 27.4551H131.937C131.792 27.4551 131.676 27.3376 131.676 27.1938V9.45965C131.676 9.31553 131.792 9.19864 131.937 9.19864Z"
        fill="#C41E26"
      />
      <path
        d="M35.7764 2.73364L35.7731 2.72458C34.2607 -2.56271 18.2211 1.73051 16.3992 2.23779C10.1966 3.96102 2.29021 7.1389 0.434494 10.4225C-0.10029 11.3656 -0.0442658 12.1506 0.0944488 12.6452C0.231366 13.1336 0.59478 13.8337 1.54001 14.3631C2.70246 15.0148 4.50305 15.2643 6.61313 15.244C6.6386 15.244 6.69132 15.2457 6.74016 15.2434C6.80607 15.2398 6.8633 15.196 6.87797 15.1322C7.09548 14.1888 7.43763 13.2918 7.89001 12.4679C7.94485 12.3687 7.86846 12.2512 7.75518 12.2575C7.73094 12.2585 7.65573 12.26 7.63147 12.2611C5.50011 12.369 4.01171 12.218 3.30286 11.9382C3.14946 11.878 3.10452 11.7159 3.20399 11.5844C4.24689 10.2095 9.05098 7.33065 17.1929 5.06899C25.3294 2.80849 30.937 2.79469 32.5554 3.43074C32.7124 3.49279 32.7574 3.65753 32.651 3.78845C31.6554 5.01561 27.3595 7.34353 25.4372 7.99722C25.41 8.00658 25.4196 8.04431 25.4487 8.04431C26.0137 8.04431 27.9293 8.04431 27.9293 8.04431H28.9708C29.007 8.04431 29.036 8.07369 29.036 8.10928V9.45539C29.036 9.56177 29.149 9.63011 29.2433 9.58156C29.6688 9.36313 30.0469 9.14416 30.0678 9.13365C33.5789 7.34507 36.434 5.11003 35.7764 2.73364Z"
        fill="#F3D432"
      />
      <path
        d="M21.3779 19.8245C21.1557 20.3152 20.8635 20.7478 20.5014 21.1217C20.1388 21.4962 19.7068 21.788 19.2044 21.9981C18.702 22.2084 18.1701 22.3141 17.609 22.3141C17.0248 22.3141 16.481 22.2084 15.9786 21.9981C15.4762 21.788 15.0441 21.4962 14.6819 21.1217C14.3194 20.7478 14.0333 20.3098 13.823 19.8068C13.6123 19.3046 13.5072 18.7614 13.5072 18.1769C13.5072 17.6155 13.6123 17.096 13.823 16.6166C14.0333 16.1382 14.3194 15.7113 14.6819 15.3374C15.0441 14.9635 15.4762 14.6707 15.9786 14.4607C16.481 14.2498 17.0248 14.1449 17.609 14.1449C18.1701 14.1449 18.702 14.2498 19.2044 14.4607C19.7068 14.6707 20.1388 14.9635 20.5014 15.3374C20.8635 15.7113 21.1557 16.1493 21.3779 16.652C21.5997 17.1547 21.7111 17.6859 21.7111 18.2467C21.7111 18.8079 21.5997 19.3334 21.3779 19.8245ZM27.8813 27.2072V9.49394C27.8813 9.35228 27.7661 9.23693 27.6243 9.23693H21.7582C21.6159 9.23693 21.5008 9.35259 21.5008 9.49456V10.5012C21.5008 10.6537 21.3774 10.7558 21.2443 10.7558C21.1907 10.7558 21.1362 10.7394 21.0868 10.7025C21.0835 10.7005 21.0805 10.6992 21.0777 10.6972C19.0345 9.08982 16.4022 8.4073 13.8221 9.06973C9.38055 10.21 6.73027 14.9176 7.70095 19.7409C7.9131 21.2092 8.4509 22.6406 9.37756 23.893C11.3312 26.5325 14.0387 27.4603 16.4053 27.4603C18.0986 27.4603 19.6088 26.9834 20.5541 26.3204C20.8085 26.169 21.0532 26.0064 21.2881 25.8299C21.4013 25.8506 21.5008 25.9438 21.5008 26.0798V27.2072H21.4993C21.4993 28.5518 21.1395 29.6015 20.4201 30.3566C19.7 31.1119 18.6681 31.4899 17.3232 31.4899C15.8216 31.4899 14.8302 30.9467 14.3508 29.8616C14.3044 29.7568 14.2044 29.6848 14.0896 29.6848H7.38011C7.21532 29.6848 7.0877 29.8392 7.12544 30.0003C7.33037 30.8703 7.68508 31.6793 8.19113 32.4277C8.758 33.2651 9.48332 33.997 10.3677 34.6222C11.2527 35.2469 12.2849 35.7368 13.465 36.0912C14.6445 36.4444 15.9426 36.6221 17.3582 36.6221C18.6091 36.6221 19.7706 36.4807 20.8447 36.1972C21.9184 35.9144 22.8801 35.5249 23.7296 35.0291C24.5792 34.5339 25.3048 33.9497 25.9064 33.277C26.5083 32.6045 26.9505 31.8794 27.2336 31.1004C27.4458 30.4862 27.6108 29.7786 27.7292 28.9763C27.8082 28.4364 27.8592 27.8432 27.8849 27.2072H27.8813Z"
        fill="#C41E26"
      />
      <path
        d="M165.258 27.3818V26.4486L164.879 27.2461H164.702L164.325 26.4486V27.3818H164.08V26.0621H164.388L164.791 26.9009L165.192 26.0621H165.5V27.3818H165.258ZM163.515 26.2952V27.3818H163.248V26.2952H162.865V26.0621H163.901V26.2952H163.515Z"
        fill="#C41E26"
      />
      <path
        d="M99.5763 38.7664V42.0004H97.5483V33.2584H100.392C101.024 33.2584 101.562 33.3244 102.006 33.4564C102.454 33.5844 102.818 33.7644 103.098 33.9964C103.382 34.2284 103.588 34.5024 103.716 34.8184C103.844 35.1344 103.908 35.4784 103.908 35.8504C103.908 36.1344 103.87 36.4024 103.794 36.6544C103.718 36.9064 103.604 37.1404 103.452 37.3564C103.304 37.5684 103.12 37.7584 102.9 37.9264C102.684 38.0944 102.434 38.2324 102.15 38.3404C102.286 38.4084 102.412 38.4924 102.528 38.5924C102.648 38.6924 102.752 38.8144 102.84 38.9584L104.7 42.0004H102.864C102.524 42.0004 102.28 41.8724 102.132 41.6164L100.68 39.0784C100.616 38.9664 100.54 38.8864 100.452 38.8384C100.368 38.7904 100.248 38.7664 100.092 38.7664H99.5763ZM99.5763 37.3684H100.392C100.668 37.3684 100.902 37.3344 101.094 37.2664C101.29 37.1944 101.45 37.0964 101.574 36.9724C101.698 36.8484 101.788 36.7044 101.844 36.5404C101.9 36.3724 101.928 36.1924 101.928 36.0004C101.928 35.6164 101.802 35.3164 101.55 35.1004C101.302 34.8844 100.916 34.7764 100.392 34.7764H99.5763V37.3684Z"
        fill="#46464A"
      />
      <path
        d="M108.193 35.6824C108.605 35.6824 108.981 35.7464 109.321 35.8744C109.665 36.0024 109.959 36.1884 110.203 36.4324C110.451 36.6764 110.643 36.9764 110.779 37.3324C110.919 37.6844 110.989 38.0844 110.989 38.5324C110.989 38.6724 110.983 38.7864 110.971 38.8744C110.959 38.9624 110.937 39.0324 110.905 39.0844C110.873 39.1364 110.829 39.1724 110.773 39.1924C110.721 39.2124 110.653 39.2224 110.569 39.2224H106.981C107.041 39.7424 107.199 40.1204 107.455 40.3564C107.711 40.5884 108.041 40.7044 108.445 40.7044C108.661 40.7044 108.847 40.6784 109.003 40.6264C109.159 40.5744 109.297 40.5164 109.417 40.4524C109.541 40.3884 109.653 40.3304 109.753 40.2784C109.857 40.2264 109.965 40.2004 110.077 40.2004C110.225 40.2004 110.337 40.2544 110.413 40.3624L110.953 41.0284C110.761 41.2484 110.553 41.4284 110.329 41.5684C110.109 41.7044 109.881 41.8124 109.645 41.8924C109.413 41.9684 109.179 42.0204 108.943 42.0484C108.711 42.0804 108.489 42.0964 108.277 42.0964C107.841 42.0964 107.431 42.0264 107.047 41.8864C106.667 41.7424 106.333 41.5304 106.045 41.2504C105.761 40.9704 105.535 40.6224 105.367 40.2064C105.203 39.7904 105.121 39.3064 105.121 38.7544C105.121 38.3384 105.191 37.9444 105.331 37.5724C105.475 37.2004 105.679 36.8744 105.943 36.5944C106.211 36.3144 106.533 36.0924 106.909 35.9284C107.289 35.7644 107.717 35.6824 108.193 35.6824ZM108.229 36.9664C107.873 36.9664 107.595 37.0684 107.395 37.2724C107.195 37.4724 107.063 37.7624 106.999 38.1424H109.321C109.321 37.9944 109.301 37.8504 109.261 37.7104C109.225 37.5704 109.163 37.4464 109.075 37.3384C108.991 37.2264 108.879 37.1364 108.739 37.0684C108.599 37.0004 108.429 36.9664 108.229 36.9664Z"
        fill="#46464A"
      />
      <path
        d="M115.86 37.1404C115.812 37.2164 115.76 37.2704 115.704 37.3024C115.652 37.3344 115.584 37.3504 115.5 37.3504C115.412 37.3504 115.324 37.3324 115.236 37.2964C115.148 37.2564 115.052 37.2144 114.948 37.1704C114.848 37.1264 114.734 37.0864 114.606 37.0504C114.478 37.0104 114.332 36.9904 114.168 36.9904C113.932 36.9904 113.75 37.0364 113.622 37.1284C113.498 37.2164 113.436 37.3404 113.436 37.5004C113.436 37.6164 113.476 37.7124 113.556 37.7884C113.64 37.8644 113.75 37.9324 113.886 37.9924C114.022 38.0484 114.176 38.1024 114.348 38.1544C114.52 38.2064 114.696 38.2644 114.876 38.3284C115.056 38.3924 115.232 38.4684 115.404 38.5564C115.576 38.6404 115.73 38.7464 115.866 38.8744C116.002 38.9984 116.11 39.1504 116.19 39.3304C116.274 39.5104 116.316 39.7264 116.316 39.9784C116.316 40.2864 116.26 40.5704 116.148 40.8304C116.036 41.0904 115.868 41.3144 115.644 41.5024C115.424 41.6904 115.15 41.8364 114.822 41.9404C114.498 42.0444 114.124 42.0964 113.7 42.0964C113.488 42.0964 113.276 42.0764 113.064 42.0364C112.852 41.9964 112.646 41.9424 112.446 41.8744C112.25 41.8064 112.068 41.7264 111.9 41.6344C111.732 41.5384 111.588 41.4364 111.468 41.3284L111.9 40.6444C111.952 40.5644 112.014 40.5024 112.086 40.4584C112.158 40.4104 112.252 40.3864 112.368 40.3864C112.476 40.3864 112.572 40.4104 112.656 40.4584C112.744 40.5064 112.838 40.5584 112.938 40.6144C113.038 40.6704 113.154 40.7224 113.286 40.7704C113.422 40.8184 113.592 40.8424 113.796 40.8424C113.94 40.8424 114.062 40.8284 114.162 40.8004C114.262 40.7684 114.342 40.7264 114.402 40.6744C114.462 40.6224 114.506 40.5644 114.534 40.5004C114.562 40.4364 114.576 40.3704 114.576 40.3024C114.576 40.1784 114.534 40.0764 114.45 39.9964C114.366 39.9164 114.256 39.8484 114.12 39.7924C113.984 39.7324 113.828 39.6784 113.652 39.6304C113.48 39.5784 113.304 39.5204 113.124 39.4564C112.944 39.3924 112.766 39.3164 112.59 39.2284C112.418 39.1364 112.264 39.0224 112.128 38.8864C111.992 38.7464 111.882 38.5764 111.798 38.3764C111.714 38.1764 111.672 37.9344 111.672 37.6504C111.672 37.3864 111.722 37.1364 111.822 36.9004C111.926 36.6604 112.08 36.4504 112.284 36.2704C112.488 36.0904 112.744 35.9484 113.052 35.8444C113.36 35.7364 113.72 35.6824 114.132 35.6824C114.356 35.6824 114.572 35.7024 114.78 35.7424C114.992 35.7824 115.19 35.8384 115.374 35.9104C115.558 35.9824 115.726 36.0684 115.878 36.1684C116.03 36.2644 116.164 36.3704 116.28 36.4864L115.86 37.1404Z"
        fill="#46464A"
      />
      <path
        d="M120.005 35.6824C120.417 35.6824 120.793 35.7464 121.133 35.8744C121.477 36.0024 121.771 36.1884 122.015 36.4324C122.263 36.6764 122.455 36.9764 122.591 37.3324C122.731 37.6844 122.801 38.0844 122.801 38.5324C122.801 38.6724 122.795 38.7864 122.783 38.8744C122.771 38.9624 122.749 39.0324 122.717 39.0844C122.685 39.1364 122.641 39.1724 122.585 39.1924C122.533 39.2124 122.465 39.2224 122.381 39.2224H118.793C118.853 39.7424 119.011 40.1204 119.267 40.3564C119.523 40.5884 119.853 40.7044 120.257 40.7044C120.473 40.7044 120.659 40.6784 120.815 40.6264C120.971 40.5744 121.109 40.5164 121.229 40.4524C121.353 40.3884 121.465 40.3304 121.565 40.2784C121.669 40.2264 121.777 40.2004 121.889 40.2004C122.037 40.2004 122.149 40.2544 122.225 40.3624L122.765 41.0284C122.573 41.2484 122.365 41.4284 122.141 41.5684C121.921 41.7044 121.693 41.8124 121.457 41.8924C121.225 41.9684 120.991 42.0204 120.755 42.0484C120.523 42.0804 120.301 42.0964 120.089 42.0964C119.653 42.0964 119.243 42.0264 118.859 41.8864C118.479 41.7424 118.145 41.5304 117.857 41.2504C117.573 40.9704 117.347 40.6224 117.179 40.2064C117.015 39.7904 116.933 39.3064 116.933 38.7544C116.933 38.3384 117.003 37.9444 117.143 37.5724C117.287 37.2004 117.491 36.8744 117.755 36.5944C118.023 36.3144 118.345 36.0924 118.721 35.9284C119.101 35.7644 119.529 35.6824 120.005 35.6824ZM120.041 36.9664C119.685 36.9664 119.407 37.0684 119.207 37.2724C119.007 37.4724 118.875 37.7624 118.811 38.1424H121.133C121.133 37.9944 121.113 37.8504 121.073 37.7104C121.037 37.5704 120.975 37.4464 120.887 37.3384C120.803 37.2264 120.691 37.1364 120.551 37.0684C120.411 37.0004 120.241 36.9664 120.041 36.9664Z"
        fill="#46464A"
      />
      <path
        d="M123.869 42.0004V35.7784H124.973C125.065 35.7784 125.141 35.7864 125.201 35.8024C125.265 35.8184 125.317 35.8444 125.357 35.8804C125.401 35.9124 125.433 35.9564 125.453 36.0124C125.477 36.0684 125.497 36.1364 125.513 36.2164L125.615 36.7984C125.843 36.4464 126.099 36.1684 126.383 35.9644C126.667 35.7604 126.977 35.6584 127.313 35.6584C127.597 35.6584 127.825 35.7264 127.997 35.8624L127.757 37.2304C127.741 37.3144 127.709 37.3744 127.661 37.4104C127.613 37.4424 127.549 37.4584 127.469 37.4584C127.401 37.4584 127.321 37.4504 127.229 37.4344C127.137 37.4144 127.021 37.4044 126.881 37.4044C126.393 37.4044 126.009 37.6644 125.729 38.1844V42.0004H123.869Z"
        fill="#46464A"
      />
      <path
        d="M132.27 42.0004H130.578L128.166 35.7784H129.714C129.846 35.7784 129.956 35.8104 130.044 35.8744C130.136 35.9344 130.198 36.0104 130.23 36.1024L131.094 38.8924C131.162 39.1204 131.226 39.3424 131.286 39.5584C131.35 39.7744 131.404 39.9904 131.448 40.2064C131.492 39.9904 131.546 39.7744 131.61 39.5584C131.674 39.3424 131.742 39.1204 131.814 38.8924L132.714 36.1024C132.746 36.0104 132.806 35.9344 132.894 35.8744C132.982 35.8104 133.086 35.7784 133.206 35.7784H134.682L132.27 42.0004Z"
        fill="#46464A"
      />
      <path
        d="M139.754 42.0004C139.578 42.0004 139.444 41.9764 139.352 41.9284C139.264 41.8804 139.19 41.7804 139.13 41.6284L138.998 41.2864C138.842 41.4184 138.692 41.5344 138.548 41.6344C138.404 41.7344 138.254 41.8204 138.098 41.8924C137.946 41.9604 137.782 42.0104 137.606 42.0424C137.434 42.0784 137.242 42.0964 137.03 42.0964C136.746 42.0964 136.488 42.0604 136.256 41.9884C136.024 41.9124 135.826 41.8024 135.662 41.6584C135.502 41.5144 135.378 41.3364 135.29 41.1244C135.202 40.9084 135.158 40.6604 135.158 40.3804C135.158 40.1604 135.214 39.9344 135.326 39.7024C135.438 39.4704 135.632 39.2604 135.908 39.0724C136.184 38.8804 136.556 38.7204 137.024 38.5924C137.492 38.4644 138.082 38.3924 138.794 38.3764V38.1124C138.794 37.7484 138.718 37.4864 138.566 37.3264C138.418 37.1624 138.206 37.0804 137.93 37.0804C137.71 37.0804 137.53 37.1044 137.39 37.1524C137.25 37.2004 137.124 37.2544 137.012 37.3144C136.904 37.3744 136.798 37.4284 136.694 37.4764C136.59 37.5244 136.466 37.5484 136.322 37.5484C136.194 37.5484 136.084 37.5184 135.992 37.4584C135.904 37.3944 135.834 37.3164 135.782 37.2244L135.446 36.6424C135.822 36.3104 136.238 36.0644 136.694 35.9044C137.154 35.7404 137.646 35.6584 138.17 35.6584C138.546 35.6584 138.884 35.7204 139.184 35.8444C139.488 35.9644 139.744 36.1344 139.952 36.3544C140.164 36.5704 140.326 36.8284 140.438 37.1284C140.55 37.4284 140.606 37.7564 140.606 38.1124V42.0004H139.754ZM137.618 40.8664C137.858 40.8664 138.068 40.8244 138.248 40.7404C138.428 40.6564 138.61 40.5204 138.794 40.3324V39.4684C138.422 39.4844 138.116 39.5164 137.876 39.5644C137.636 39.6124 137.446 39.6724 137.306 39.7444C137.166 39.8164 137.068 39.8984 137.012 39.9904C136.96 40.0824 136.934 40.1824 136.934 40.2904C136.934 40.5024 136.992 40.6524 137.108 40.7404C137.224 40.8244 137.394 40.8664 137.618 40.8664Z"
        fill="#46464A"
      />
      <path
        d="M144.111 42.0964C143.815 42.0964 143.553 42.0544 143.325 41.9704C143.101 41.8824 142.911 41.7604 142.755 41.6044C142.603 41.4444 142.487 41.2524 142.407 41.0284C142.327 40.8044 142.287 40.5544 142.287 40.2784V37.0624H141.759C141.663 37.0624 141.581 37.0324 141.513 36.9724C141.445 36.9084 141.411 36.8164 141.411 36.6964V35.9704L142.401 35.7784L142.767 34.2604C142.815 34.0684 142.951 33.9724 143.175 33.9724H144.147V35.7904H145.659V37.0624H144.147V40.1524C144.147 40.2964 144.181 40.4164 144.249 40.5124C144.321 40.6044 144.423 40.6504 144.555 40.6504C144.623 40.6504 144.679 40.6444 144.723 40.6324C144.771 40.6164 144.811 40.6004 144.843 40.5844C144.879 40.5644 144.911 40.5484 144.939 40.5364C144.971 40.5204 145.007 40.5124 145.047 40.5124C145.103 40.5124 145.147 40.5264 145.179 40.5544C145.215 40.5784 145.251 40.6184 145.287 40.6744L145.851 41.5564C145.611 41.7364 145.341 41.8724 145.041 41.9644C144.741 42.0524 144.431 42.0964 144.111 42.0964Z"
        fill="#46464A"
      />
      <path
        d="M148.652 35.7784V42.0004H146.792V35.7784H148.652ZM148.868 34.0744C148.868 34.2224 148.838 34.3624 148.778 34.4944C148.718 34.6224 148.636 34.7364 148.532 34.8364C148.428 34.9324 148.306 35.0104 148.166 35.0704C148.03 35.1264 147.884 35.1544 147.728 35.1544C147.576 35.1544 147.434 35.1264 147.302 35.0704C147.17 35.0104 147.052 34.9324 146.948 34.8364C146.848 34.7364 146.768 34.6224 146.708 34.4944C146.652 34.3624 146.624 34.2224 146.624 34.0744C146.624 33.9224 146.652 33.7804 146.708 33.6484C146.768 33.5164 146.848 33.4004 146.948 33.3004C147.052 33.2004 147.17 33.1224 147.302 33.0664C147.434 33.0104 147.576 32.9824 147.728 32.9824C147.884 32.9824 148.03 33.0104 148.166 33.0664C148.306 33.1224 148.428 33.2004 148.532 33.3004C148.636 33.4004 148.718 33.5164 148.778 33.6484C148.838 33.7804 148.868 33.9224 148.868 34.0744Z"
        fill="#46464A"
      />
      <path
        d="M152.926 35.6824C153.398 35.6824 153.828 35.7564 154.216 35.9044C154.604 36.0524 154.936 36.2644 155.212 36.5404C155.492 36.8164 155.708 37.1524 155.86 37.5484C156.016 37.9404 156.094 38.3824 156.094 38.8744C156.094 39.3704 156.016 39.8184 155.86 40.2184C155.708 40.6144 155.492 40.9524 155.212 41.2324C154.936 41.5084 154.604 41.7224 154.216 41.8744C153.828 42.0224 153.398 42.0964 152.926 42.0964C152.45 42.0964 152.016 42.0224 151.624 41.8744C151.236 41.7224 150.9 41.5084 150.616 41.2324C150.336 40.9524 150.118 40.6144 149.962 40.2184C149.81 39.8184 149.734 39.3704 149.734 38.8744C149.734 38.3824 149.81 37.9404 149.962 37.5484C150.118 37.1524 150.336 36.8164 150.616 36.5404C150.9 36.2644 151.236 36.0524 151.624 35.9044C152.016 35.7564 152.45 35.6824 152.926 35.6824ZM152.926 40.7164C153.354 40.7164 153.668 40.5664 153.868 40.2664C154.072 39.9624 154.174 39.5024 154.174 38.8864C154.174 38.2704 154.072 37.8124 153.868 37.5124C153.668 37.2124 153.354 37.0624 152.926 37.0624C152.486 37.0624 152.164 37.2124 151.96 37.5124C151.756 37.8124 151.654 38.2704 151.654 38.8864C151.654 39.5024 151.756 39.9624 151.96 40.2664C152.164 40.5664 152.486 40.7164 152.926 40.7164Z"
        fill="#46464A"
      />
      <path
        d="M157.115 42.0004V35.7784H158.267C158.383 35.7784 158.479 35.8044 158.555 35.8564C158.635 35.9084 158.691 35.9864 158.723 36.0904L158.831 36.4504C158.951 36.3384 159.075 36.2344 159.203 36.1384C159.331 36.0424 159.467 35.9624 159.611 35.8984C159.759 35.8304 159.917 35.7784 160.085 35.7424C160.257 35.7024 160.443 35.6824 160.643 35.6824C160.983 35.6824 161.283 35.7424 161.543 35.8624C161.807 35.9784 162.029 36.1424 162.209 36.3544C162.389 36.5624 162.525 36.8124 162.617 37.1044C162.709 37.3924 162.755 37.7064 162.755 38.0464V42.0004H160.895V38.0464C160.895 37.7424 160.825 37.5064 160.685 37.3384C160.545 37.1664 160.339 37.0804 160.067 37.0804C159.863 37.0804 159.671 37.1244 159.491 37.2124C159.311 37.3004 159.139 37.4184 158.975 37.5664V42.0004H157.115Z"
        fill="#46464A"
      />
    </Icon>
  );
};

export default IconPhone;