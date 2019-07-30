import React from 'react'
import { DocumentComponentType } from 'next/document'
import { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const Document: DocumentComponentType = ({ styleElement }) => (
  <html lang="en">
    <Head>{styleElement}</Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </html>
)

Document.getInitialProps = ({ renderPage }) => {
  const styleSheet = new ServerStyleSheet()
  const page = renderPage(App => props => styleSheet.collectStyles(<App {...props} />))
  return { ...page, styleElement: styleSheet.getStyleElement() }
}

export default Document
