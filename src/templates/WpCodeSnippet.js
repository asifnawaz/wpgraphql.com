import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/core"
import Layout from "../components/Layout"
import Container from "../components/Container"
import { graphql } from "gatsby"
import PageTransition from "../components/PageTransition"
import { ParseHtml } from "../components/parse-html"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import RecipeSidebar from "../components/RecipeSidebar"

const WpCodeSnippet = ({ data }) => {
  const {
    wpContentNode: { title, content, uri },
  } = data
  const crumbs = [
    {
      title: `Developer Reference`,
      path: `/developer-reference/`,
    },
    {
      title: `Recipes`,
      path: `/recipes/`,
    },
    {
      title: title,
      path: uri,
      isCurrentPage: true,
    },
  ]

  return (
    <Layout>
      <Container>
        <Flex>
          <RecipeSidebar />
          <Box style={{ flex: 1 }}>
            <Box pt={3} px={[0, 0, 10]} pr={0} mt="0" mx="auto" minH="80vh">
              <PageTransition>
                <Box
                  className="content"
                  pt={3}
                  mt="0"
                  mx="auto"
                  maxWidth={[`20rem`, "30rem", "100%"]}
                  minH="80vh"
                >
                  <Breadcrumb crumbs={crumbs} />
                  <Heading as="h1" fontSize={`4xl`}>
                    {title}
                  </Heading>
                  {ParseHtml(content)}
                </Box>
              </PageTransition>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpContentNode(id: { eq: $id }) {
      __typename
      id
      uri
      ... on WpNodeWithTitle {
        title
      }
      ... on WpNodeWithContentEditor {
        content
      }
    }
  }
`

export default WpCodeSnippet
