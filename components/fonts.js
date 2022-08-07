import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */ 
      @font-face {
        font-family: 'M PLUS Rounded 1c';
        font-style: nornal;
        font-weight: 700;
        src: url('/fonts/MPLUSRounded1c-Bold.ttf');
      }
    `}
  />
)

export default Fonts
