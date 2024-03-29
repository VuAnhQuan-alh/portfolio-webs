import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Button,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from './../components/layouts/article'
import Section from './../components/section'
import Paragraph from './../components/paragraph'
import { BioSection, BioYear } from './../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
          color={useColorModeValue('gray.900', 'whiteAlpha.900')}
          fontWeight="bold"
          cursor="default"
        >
          Hello, I&apos;m a front end developer based in Hanoi!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Vũ Anh Quân
            </Heading>
            <Paragraph>Copyright Craftsman ( 07/08/2022 )</Paragraph>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/dog_lag.png"
              alt="profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Giới thiệu
          </Heading>
          <Paragraph>
            Xin chào! Tôi tên là Vũ Anh Quân, là một front end developer trẻ đầy
            đam mê và nhiệt huyết. Với những kiến thức tôi học, tích luỹ theo
            thời gian cùng với tinh thần trách nhiệm trong công việc, tôi hy
            vọng có thể đóng góp một phần nhỏ của mình vào sự phát triển của
            thành phố. Mong muốn tìm hiểu, học hỏi các kỹ năng và công nghệ để
            trau dồi, phát triển bản thân.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Thông tin chính chủ
          </Heading>
          <BioSection>
            <BioYear>20/05/2001</BioYear>
            <Paragraph>Sinh ra và lớn lên tại Nghệ An, Việt Nam.</Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>08/2019 - 05/2022</BioYear>
            <Paragraph>
              Hoàn thành chương trình Thiết kế Website tại FPT Polytechnic
            </Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>05/2021 - 03/2023</BioYear>
            <Paragraph>Làm việc tại Sphinx JSC</Paragraph>
          </BioSection>
          <BioSection>
            <BioYear>04/2023 - nay</BioYear>
            <Paragraph>Làm việc tại HOLA TECH</Paragraph>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ..............
          </Heading>
          <Paragraph>
            <Link
              target="_blank"
              href="https://soundcloud.com/hoai-linh-946093491/vi-me-anh-bat-chia-tay-miu-le-x-karik-x-cdk-darling-mix"
            >
              Music
            </Link>
            , Chill, Read Book, Relax, Sleep, Middle Boy
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
