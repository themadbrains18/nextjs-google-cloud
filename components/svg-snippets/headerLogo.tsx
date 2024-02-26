import {useContext } from 'react'
// import Context from '../contexts/context';
const HeaderLogo = () => {

// let { mode  } = useContext(Context);
  return (
    <>
        <svg    
            // onClick={()=>{setMode("light");localStorage.setItem("mode", "light");}}
            className='max-w-[159px] xl:max-w-[183px] w-full'
            viewBox="0 0 183 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.418 29.8174C35.1458 36.1649 28.64 40.4999 21.1658 40.4999H2.16797V29.8174H38.418Z"
                fill="#5367FF"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.4739 11.1825H0.486328V0.5H21.1948C28.6809 0.5 35.1964 4.83498 38.4739 11.1825Z"
                fill="#5367FF"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.4882 20.5006C40.4882 22.1635 40.2755 23.828 39.8544 25.467H4.92578V15.5342H39.8544C40.2755 17.1727 40.4882 18.8371 40.4882 20.5006Z"
                fill="#5367FF"
            />
            <path
                
                d="M65.7096 16.6314H62.6858C62.6306 16.2541 62.5178 15.9189 62.3475 15.626C62.1773 15.3286 61.9587 15.0756 61.6917 14.8669C61.4248 14.6583 61.1164 14.4985 60.7666 14.3875C60.4215 14.2765 60.0464 14.2211 59.6414 14.2211C58.9096 14.2211 58.2722 14.3964 57.7291 14.7471C57.186 15.0933 56.7649 15.5993 56.4657 16.2652C56.1666 16.9266 56.017 17.73 56.017 18.6755C56.017 19.6476 56.1666 20.4644 56.4657 21.1258C56.7695 21.7872 57.1929 22.2866 57.736 22.6239C58.2791 22.9613 58.9073 23.13 59.6207 23.13C60.0211 23.13 60.3915 23.0789 60.7321 22.9768C61.0773 22.8747 61.3834 22.726 61.6503 22.5307C61.9172 22.331 62.1381 22.0891 62.313 21.8049C62.4925 21.5209 62.6168 21.1969 62.6858 20.8328L65.7096 20.8461C65.6313 21.472 65.4358 22.0758 65.1228 22.6572C64.8144 23.2343 64.3979 23.7515 63.8732 24.2087C63.3532 24.6614 62.7319 25.0209 62.0093 25.2873C61.2913 25.5492 60.479 25.6802 59.5723 25.6802C58.3113 25.6802 57.1837 25.4049 56.1896 24.8545C55.2001 24.3041 54.4177 23.5073 53.8424 22.4642C53.2717 21.421 52.9863 20.1581 52.9863 18.6755C52.9863 17.1885 53.2763 15.9234 53.8562 14.8802C54.4361 13.8371 55.2231 13.0425 56.2172 12.4965C57.2113 11.9461 58.3297 11.6709 59.5723 11.6709C60.3915 11.6709 61.1509 11.7819 61.8505 12.0038C62.5547 12.2258 63.1782 12.5498 63.7214 12.9759C64.2645 13.3976 64.7063 13.9148 65.0469 14.5274C65.392 15.1399 65.613 15.8413 65.7096 16.6314ZM67.4091 25.4937V15.2664H70.2603V17.0509H70.3707C70.564 16.4161 70.8885 15.9367 71.3441 15.6127C71.7998 15.2842 72.3245 15.1199 72.9182 15.1199C73.0654 15.1199 73.2242 15.1288 73.3945 15.1466C73.5648 15.1643 73.7144 15.1887 73.8433 15.2198V17.7367C73.7051 17.6967 73.5141 17.6612 73.2702 17.6302C73.0263 17.5991 72.8031 17.5835 72.6006 17.5835C72.168 17.5835 71.7814 17.6745 71.4408 17.8565C71.1048 18.0341 70.8379 18.2827 70.64 18.6023C70.4466 18.9219 70.35 19.2903 70.35 19.7076V25.4937H67.4091ZM77.1133 29.3289C76.7405 29.3289 76.3907 29.3001 76.0639 29.2424C75.7418 29.1892 75.4749 29.1203 75.2632 29.036L75.9259 26.9186C76.2711 27.0207 76.5817 27.0762 76.8579 27.085C77.1386 27.0939 77.3802 27.0318 77.5827 26.8986C77.7899 26.7654 77.9578 26.5391 78.0867 26.2194L78.2592 25.7867L74.4554 15.2664H77.5482L79.7435 22.7771H79.854L82.0701 15.2664H85.1835L81.0622 26.599C80.8643 27.1494 80.595 27.6289 80.2544 28.0372C79.9185 28.45 79.4927 28.7675 78.9773 28.9894C78.4618 29.2158 77.8405 29.3289 77.1133 29.3289ZM86.2997 29.3289V15.2664H89.1992V16.9843H89.3304C89.4593 16.7091 89.6457 16.4294 89.8896 16.1453C90.1381 15.8568 90.4602 15.6171 90.8561 15.4262C91.2565 15.2309 91.7535 15.1333 92.3472 15.1333C93.1205 15.1333 93.8338 15.3286 94.4873 15.7192C95.1409 16.1054 95.6633 16.6891 96.0544 17.4704C96.4457 18.2472 96.6412 19.2215 96.6412 20.3934C96.6412 21.5342 96.4502 22.4975 96.0682 23.2831C95.6909 24.0644 95.1754 24.657 94.5218 25.061C93.8729 25.4604 93.1457 25.6602 92.3403 25.6602C91.7697 25.6602 91.2841 25.5692 90.8837 25.3872C90.4879 25.2051 90.1634 24.9766 89.9103 24.7013C89.6572 24.4217 89.4638 24.1399 89.3304 23.8557H89.2407V29.3289H86.2997ZM89.1785 20.3801C89.1785 20.9882 89.2659 21.5186 89.4409 21.9714C89.6158 22.4242 89.8689 22.7771 90.2002 23.0301C90.5316 23.2787 90.9343 23.403 91.4084 23.403C91.887 23.403 92.292 23.2764 92.6234 23.0235C92.9547 22.766 93.2056 22.4108 93.3759 21.9581C93.5508 21.5009 93.6382 20.9749 93.6382 20.3801C93.6382 19.7897 93.553 19.2703 93.3828 18.822C93.2125 18.3737 92.9616 18.023 92.6303 17.77C92.2989 17.517 91.8916 17.3904 91.4084 17.3904C90.9297 17.3904 90.5247 17.5125 90.1933 17.7567C89.8665 18.0008 89.6158 18.347 89.4409 18.7954C89.2659 19.2437 89.1785 19.7719 89.1785 20.3801ZM103.853 15.2664V17.3971H97.4674V15.2664H103.853ZM98.9172 12.8161H101.858V22.3509C101.858 22.6129 101.9 22.8171 101.982 22.9635C102.065 23.1056 102.18 23.2055 102.328 23.2631C102.479 23.3209 102.654 23.3497 102.852 23.3497C102.99 23.3497 103.128 23.3386 103.266 23.3165C103.405 23.2897 103.51 23.2698 103.584 23.2565L104.047 25.3672C103.899 25.4116 103.692 25.4627 103.425 25.5203C103.158 25.5825 102.834 25.6202 102.452 25.6335C101.743 25.6602 101.122 25.5692 100.588 25.3606C100.059 25.1519 99.6467 24.8279 99.3522 24.3884C99.0576 23.949 98.9127 23.3941 98.9172 22.7239V12.8161ZM110.057 25.6935C108.985 25.6935 108.058 25.4737 107.275 25.0342C106.497 24.5904 105.897 23.9734 105.473 23.1832C105.05 22.3887 104.838 21.4676 104.838 20.42C104.838 19.3636 105.05 18.4403 105.473 17.6501C105.897 16.8556 106.497 16.2386 107.275 15.7991C108.058 15.3552 108.985 15.1333 110.057 15.1333C111.13 15.1333 112.055 15.3552 112.833 15.7991C113.615 16.2386 114.218 16.8556 114.641 17.6501C115.065 18.4403 115.276 19.3636 115.276 20.42C115.276 21.4676 115.065 22.3887 114.641 23.1832C114.218 23.9734 113.615 24.5904 112.833 25.0342C112.055 25.4737 111.13 25.6935 110.057 25.6935ZM110.071 23.4962C110.559 23.4962 110.966 23.3631 111.293 23.0967C111.62 22.826 111.866 22.4575 112.032 21.9914C112.202 21.5253 112.287 20.9948 112.287 20.4C112.287 19.8052 112.202 19.2748 112.032 18.8087C111.866 18.3426 111.62 17.9742 111.293 17.7034C110.966 17.4326 110.559 17.2972 110.071 17.2972C109.579 17.2972 109.164 17.4326 108.829 17.7034C108.497 17.9742 108.246 18.3426 108.076 18.8087C107.91 19.2748 107.828 19.8052 107.828 20.4C107.828 20.9948 107.91 21.5253 108.076 21.9914C108.246 22.4575 108.497 22.826 108.829 23.0967C109.164 23.3631 109.579 23.4962 110.071 23.4962ZM120.966 25.4937V11.8573H126.544C127.616 11.8573 128.53 12.0549 129.285 12.4499C130.039 12.8406 130.615 13.3843 131.01 14.0812C131.411 14.7737 131.611 15.5727 131.611 16.4783C131.611 17.3838 131.408 18.1828 131.004 18.8753C130.598 19.5677 130.012 20.1071 129.243 20.4933C128.479 20.8794 127.554 21.0725 126.468 21.0725H122.913V18.7621H125.985C126.56 18.7621 127.034 18.6666 127.407 18.4758C127.784 18.2805 128.065 18.0119 128.249 17.6701C128.438 17.3239 128.532 16.9266 128.532 16.4783C128.532 16.0255 128.438 15.6304 128.249 15.2931C128.065 14.9513 127.784 14.6871 127.407 14.5007C127.029 14.3098 126.551 14.2144 125.971 14.2144H123.955V25.4937H120.966ZM136.049 11.8573V25.4937H133.109V11.8573H136.049ZM141.04 25.6868C140.364 25.6868 139.761 25.5736 139.232 25.3473C138.702 25.1164 138.283 24.7768 137.975 24.3285C137.671 23.8757 137.519 23.312 137.519 22.6372C137.519 22.0691 137.628 21.5919 137.844 21.2057C138.06 20.8195 138.355 20.5088 138.728 20.2735C139.1 20.0383 139.524 19.8607 139.998 19.7409C140.477 19.621 140.978 19.5367 141.503 19.4878C142.12 19.4257 142.617 19.368 142.994 19.3147C143.371 19.257 143.645 19.1727 143.816 19.0617C143.986 18.9507 144.071 18.7865 144.071 18.569V18.529C144.071 18.1073 143.933 17.7811 143.657 17.5503C143.385 17.3194 142.999 17.204 142.497 17.204C141.968 17.204 141.547 17.3172 141.234 17.5436C140.921 17.7655 140.714 18.0452 140.612 18.3826L137.892 18.1695C138.03 17.548 138.302 17.0109 138.707 16.5582C139.112 16.1009 139.634 15.7503 140.274 15.5061C140.918 15.2576 141.664 15.1333 142.511 15.1333C143.1 15.1333 143.664 15.1998 144.202 15.333C144.745 15.4662 145.226 15.6726 145.645 15.9522C146.068 16.2319 146.402 16.5914 146.646 17.0309C146.89 17.4659 147.012 17.9875 147.012 18.5956V25.4937H144.223V24.0755H144.14C143.97 24.3951 143.742 24.677 143.457 24.9211C143.171 25.1608 142.828 25.3494 142.428 25.4871C142.028 25.6202 141.565 25.6868 141.04 25.6868ZM141.883 23.7292C142.315 23.7292 142.697 23.6471 143.029 23.4829C143.36 23.3142 143.62 23.0878 143.809 22.8037C143.997 22.5197 144.092 22.1978 144.092 21.8383V20.7529C144 20.8106 143.873 20.864 143.712 20.9127C143.556 20.9571 143.378 20.9993 143.18 21.0393C142.983 21.0748 142.785 21.1081 142.587 21.1391C142.389 21.1657 142.209 21.1902 142.048 21.2123C141.703 21.2612 141.402 21.3389 141.144 21.4454C140.886 21.552 140.686 21.6962 140.543 21.8782C140.401 22.0558 140.329 22.2777 140.329 22.5441C140.329 22.9302 140.474 23.2254 140.764 23.4296C141.059 23.6294 141.432 23.7292 141.883 23.7292ZM151.845 19.5811V25.4937H148.905V15.2664H151.707V17.0708H151.832C152.067 16.476 152.461 16.0055 153.013 15.6593C153.565 15.3086 154.234 15.1333 155.021 15.1333C155.758 15.1333 156.4 15.2886 156.947 15.5993C157.495 15.9101 157.92 16.354 158.225 16.931C158.528 17.5036 158.68 18.1872 158.68 18.9818V25.4937H155.739V19.4878C155.744 18.862 155.578 18.3737 155.242 18.023C154.906 17.6679 154.443 17.4903 153.854 17.4903C153.459 17.4903 153.109 17.5724 152.806 17.7367C152.506 17.9009 152.271 18.1406 152.101 18.4558C151.936 18.7665 151.85 19.1416 151.845 19.5811ZM165.442 25.6935C164.351 25.6935 163.412 25.4804 162.625 25.0542C161.842 24.6237 161.24 24.0156 160.816 23.2298C160.393 22.4397 160.181 21.5053 160.181 20.4267C160.181 19.3747 160.393 18.4514 160.816 17.6568C161.24 16.8622 161.836 16.243 162.605 15.7991C163.377 15.3552 164.284 15.1333 165.324 15.1333C166.024 15.1333 166.675 15.242 167.278 15.4595C167.886 15.6726 168.415 15.9944 168.866 16.425C169.321 16.8556 169.676 17.3971 169.929 18.0496C170.182 18.6977 170.309 19.4568 170.309 20.3268V21.1058H161.355V19.348H167.54C167.54 18.9396 167.448 18.5779 167.264 18.2627C167.08 17.9475 166.825 17.7012 166.497 17.5236C166.176 17.3416 165.801 17.2506 165.373 17.2506C164.927 17.2506 164.53 17.3505 164.185 17.5503C163.845 17.7456 163.578 18.0097 163.384 18.3426C163.192 18.6711 163.092 19.0373 163.088 19.4412V21.1125C163.088 21.6186 163.184 22.0558 163.377 22.4242C163.576 22.7926 163.854 23.0767 164.213 23.2764C164.572 23.4762 164.998 23.5761 165.49 23.5761C165.817 23.5761 166.116 23.5317 166.388 23.4429C166.659 23.3541 166.891 23.221 167.085 23.0435C167.278 22.8659 167.426 22.6484 167.527 22.3909L170.247 22.564C170.109 23.1943 169.826 23.7448 169.397 24.2153C168.974 24.6814 168.426 25.0454 167.754 25.3072C167.087 25.5648 166.316 25.6935 165.442 25.6935ZM177.479 15.2664V17.3971H171.093V15.2664H177.479ZM172.543 12.8161H175.484V22.3509C175.484 22.6129 175.526 22.8171 175.608 22.9635C175.691 23.1056 175.807 23.2055 175.953 23.2631C176.106 23.3209 176.281 23.3497 176.478 23.3497C176.616 23.3497 176.754 23.3386 176.892 23.3165C177.03 23.2897 177.136 23.2698 177.21 23.2565L177.673 25.3672C177.525 25.4116 177.318 25.4627 177.052 25.5203C176.784 25.5825 176.46 25.6202 176.078 25.6335C175.369 25.6602 174.748 25.5692 174.214 25.3606C173.685 25.1519 173.272 24.8279 172.978 24.3884C172.683 23.949 172.539 23.3941 172.543 22.7239V12.8161Z"
                fill="#2B3144"
            />
        </svg>
     

    </>
  )
}

export default HeaderLogo;