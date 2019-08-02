import React from 'react'
import NextDocument from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { DocumentType } from 'next-server/dist/lib/utils'

const Document: DocumentType = ({ children, ...props }) => (
  <NextDocument {...props}>{children}</NextDocument>
)

Document.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  } finally {
    sheet.seal()
  }
}

export default Document