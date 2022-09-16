import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from './../components/layouts/article'
import Section from './../components/section'
import { GridItem } from './../components/grid-item'

import thumbnail_blockchain from './../public/images/_blockchain.png'
import thumbnail_next from './../public/images/_next.png'
import thumbnail_react from './../public/images/_react.png'
import thumbnail_node from './../public/images/_node.png'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h4" variant="page-title" fontSize={20} mb={4}>
          Popular Posts
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Blockchain"
              thumbnail={thumbnail_blockchain}
              href={'/'}
            />
            <GridItem title="React" thumbnail={thumbnail_react} href={'/'} />
            <GridItem title="Next" thumbnail={thumbnail_next} href={'/'} />
            <GridItem title="Node" thumbnail={thumbnail_node} href={'/'} />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
