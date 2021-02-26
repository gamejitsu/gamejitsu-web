import styled from "styled-components"
import { FunctionComponent } from "react"
import ReactMarkdown from "react-markdown"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"

interface Props {
  isOpen: boolean
  toggleModal: () => void
}

const MarkdownCommand = styled.div`
  color: #08ff07;
  border: 1px solid #444;
  padding: 4px;
`

const MarkdownContainer = styled.div`
  line-height: 1.65;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 7px;
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  h4 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 3px;
  }

  strong {
    font-weight: bold;
  }

  ul {
    list-style-type: disc;
    margin-bottom: 6px;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-bottom: 6px;
    text-align: left;
  }

  li {
    margin-left: 2rem;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  p {
    margin-bottom: 6px;
  }

  strike {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  code {
    font-size: 17px;
    font-family: monospace;
  }

  a {
    text-decoration: none;
  }
`

const MarkdownDialog: FunctionComponent<Props> = ({ isOpen, toggleModal }) => {
  return (
    <Dialog
      icon="info-sign"
      isOpen={isOpen}
      title="Markdown syntax"
      autoFocus={true}
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      enforceFocus={true}
      usePortal={true}
      onClose={() => toggleModal()}
    >
      <div className={Classes.DIALOG_BODY}>
        <MarkdownContainer>
          <MarkdownCommand># Heading title 1</MarkdownCommand>
          <div>
            <ReactMarkdown children={"# Heading title 1"} />
          </div>
          <MarkdownCommand>## Heading title 2</MarkdownCommand>
          <div>
            <ReactMarkdown children={"## Heading title 2"} />
          </div>
          <MarkdownCommand>### Heading title 3</MarkdownCommand>
          <div>
            <ReactMarkdown children={"### Heading title 3"} />
          </div>
          <MarkdownCommand>*Italicized text*</MarkdownCommand>
          <div>
            <ReactMarkdown children={"*Italicized text*"} />
          </div>
          <MarkdownCommand>**Bold text**</MarkdownCommand>
          <div>
            <ReactMarkdown children={"**Bold text**"} />
          </div>
          <MarkdownCommand>
            1. First ordered list item <br />
            2. Second ordered list item
          </MarkdownCommand>
          <div>
            <ReactMarkdown children={"1. First ordered list item \n 2. Second ordered list item"} />
          </div>
          <MarkdownCommand>
            - First unordered list item <br />- Second unordered list item
          </MarkdownCommand>
          <div>
            <ReactMarkdown
              children={"- First unordered list item \n - Second unordered list item"}
            />
          </div>
          Horizontal Rule
          <MarkdownCommand>---</MarkdownCommand>
          <div>
            <ReactMarkdown children={"---"} />
          </div>
        </MarkdownContainer>
      </div>
    </Dialog>
  )
}

export default MarkdownDialog
