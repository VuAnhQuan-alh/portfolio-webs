import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from './../../components/work'
import Paragraph from './../../components/paragraph'
import Layout from './../../components/layouts/article'

const Block = () => {
  return (
    <Layout title="Blockchain">
      <Container>
        <Title>
          Blockchain <Badge>2022</Badge>
        </Title>
        <Paragraph>A blockchain in Javascript</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link>
              https://www.facebook.anluuhung.todo.oc{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Next, React, Solidity</span>
          </ListItem>
        </List>
        <WorkImage src="/images/_blockchain.png" alt="blockchain" />
      </Container>
    </Layout>
  )
}

export default Block
