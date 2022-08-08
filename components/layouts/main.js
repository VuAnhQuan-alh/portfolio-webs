import Head from 'next/head'
import Navbar from './../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" context="width=device-width, initial-scale=1" />
        <link
          type="image/x-icon"
          rel="shortcut icon"
          href="/images/favicon.ico"
        />
        <title>Information - ALH</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={16}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
