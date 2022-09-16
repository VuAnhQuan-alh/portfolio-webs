import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */ 
      @font-face {
        font-family: 'M PLUS Rounded 1c Bold';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/MPLUSRounded1c-Bold.ttf');
      }
      /* latin */
      @font-face {
        font-family: 'M PLUS Rounded 1c';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/MPLUSRounded1c-Medium.ttf');
      }
    `}
  />
)

export default Fonts
