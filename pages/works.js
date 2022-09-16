import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from './../components/layouts/article'
import Section from './../components/section'
import { WorkGridItem } from './../components/grid-item'

import thumbnail_blockchain from './../public/images/_blockchain.png'
import thumbnail_next from './../public/images/_next.png'
import thumbnail_react from './../public/images/_react.png'
import thumbnail_node from './../public/images/_node.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading variant="page-title" as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="block"
              title="Blockchain"
              thumbnail={thumbnail_blockchain}
            >
              A blockchain in Javascript
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="next" title="Next" thumbnail={thumbnail_next}>
              A blockchain in Javascript
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="react" title="React" thumbnail={thumbnail_react}>
              A blockchain in Javascript
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="node" title="Node" thumbnail={thumbnail_node}>
              A blockchain in Javascript
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
