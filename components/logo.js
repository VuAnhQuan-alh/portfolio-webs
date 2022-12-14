import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding-right: 10px;

  @media (min-width: 768px) {
    img {
      transform: rotate(-20deg);
    }
    &:hover img {
      transform: rotate(0deg);
    }
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue(
    '-light',
    '-dark'
  )}.webp`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo alt" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
          >
            Portfolio
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
