import { NextComponentType } from 'next'
import NextDocument, { DocumentContext, DocumentInitialProps, DocumentProps } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

const Document: NextComponentType<DocumentContext, DocumentInitialProps, DocumentProps> = ({
  children,
  ...props
}) => <NextDocument {...props}>{children}</NextDocument>

Document.getInitialProps = async ctx => {
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
