import React from 'react';

type Props = {
  id: string;
};

const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'header-logo':
      return (
        <svg
          width='65'
          height='65'
          viewBox='0 0 65 65'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z'
            fill='#4793FF'
          />
          <path
            d='M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3234 11.1622C48.3234 11.1622 46.5495 14.0707 44.5393 12.8754L41.3829 9.79712L41.1963 14.2822L8.78807 46.265L27.0688 64.5458C28.8351 64.843 30.6491 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z'
            fill='#424FDD'
          />
          <path
            d='M58.3388 29.0023L59.7103 28.1252L58.2387 27.1841C56.6467 26.1659 56.217 24.03 57.2915 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4523 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4811 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1295 40.7095C31.9753 40.3038 33.7893 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4815 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.478 42.9594 47.0326 44.0339L48.4694 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9671 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0265 58.3388 29.0023V29.0023Z'
            fill='#FDBF2D'
          />
          <path
            d='M57.4082 33.734L58.3451 35.0645L56.6275 35.3781C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z'
            fill='#FD9827'
          />
          <path
            d='M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5368 21.0296 28.5368 28.1243C28.5368 35.2191 34.2883 40.9705 41.383 40.9705Z'
            fill='#FFE05F'
          />
          <path
            d='M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239V28.1239Z'
            fill='#F9CB0D'
          />
          <path
            d='M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33776 32.5756 5.33776 38.4361C5.33776 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242V32.242Z'
            fill='white'
          />
          <path
            d='M50.9302 40.6436C50.9302 45.2846 47.1683 49.0467 42.5272 49.0467H28.134V18.9098C28.5015 18.876 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3874 41.5969 31.2067C41.5969 31.5754 41.5795 31.9396 41.5477 32.2996C41.8696 32.2626 42.1956 32.2407 42.5272 32.2407C47.1683 32.2407 50.9302 36.0036 50.9302 40.6436V40.6436Z'
            fill='#DAEFEC'
          />
        </svg>
      );

    case 'change-theme':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='28'
          viewBox='0 0 24 28'
          fill='none'
        >
          <path
            d='M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z'
            fill='#4793FF'
          />
        </svg>
      );

    case 'sun':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='119'
          height='119'
          viewBox='0 0 119 119'
          fill='none'
        >
          <path
            d='M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z'
            fill='url(#paint0_linear_2_179)'
          />
          <path
            d='M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155V100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959V40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182V79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991V47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377V2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778V96.8778Z'
            fill='#FFB300'
          />
          <defs>
            <linearGradient
              id='paint0_linear_2_179'
              x1='59.5229'
              y1='31.0143'
              x2='59.5229'
              y2='87.2546'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#FFC227' />
              <stop offset='1' stop-color='#FFB300' />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return null;
  }
};

export { GlobalSvgSelector };
