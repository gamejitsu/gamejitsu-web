import React, { FunctionComponent } from "react"
import { Box } from "rebass"
import styled from "styled-components"

import { masterSchemaData } from "../../public/masterSchemaData"

const TableHeader = styled.th`
  background-color: ${(props) => props.theme.headerColor};
  height: 80px;
`

const CategoryTitle = styled.td`
  color: white;
  font-weight: bold;
  background-color: ${(props) => props.theme.lineColor};
  padding: 10px;
`

const CategoryTd = styled.th`
  color: white;
  height: 80px;
  font-weight: bold;
  padding: 20px;
`

const HeaderTh = styled.th`
  height: 80px;
  padding: 20px;
`

const TableContent = styled.table`
  font-family: ${(props) => props.theme.textFont};
  width: 100%;
  align-items: center;
  table-layout: fixed;
  margin: 0 auto;
`

interface ElementProps {
  green: boolean
}

const Element = styled.td<ElementProps>`
  padding: 10px;
  text-align: left;
  color: ${(props) => (props.green ? props.theme.primaryColor : props.theme.textColor)};
  height: 50px;
  background-color: ${(props) => props.theme.lineColor};
  &:nth-child(even) {
    background-color: ${(props) => props.theme.line2Color};
  }
`

const GamejitsuElement = styled.td`
  padding: 10px;
  text-align: left;
  height: 50px;
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
`

const Tr = styled.tr``

interface Props {
  numRows?: number
  numColum?: number
}

interface RowProps {
  key: number
  title: string
  guideWriting: string
  liveCoaching: string
  partyWithCoach: string
  nonLiveVideoReplayAnalisys: string
  writtenReplayAnalysis: string
  gamejitsuCoaching: string
  green: boolean[]
}

const Row: FunctionComponent<RowProps> = ({
  key,
  title,
  guideWriting,
  liveCoaching,
  partyWithCoach,
  nonLiveVideoReplayAnalisys,
  writtenReplayAnalysis,
  gamejitsuCoaching,
  green
}) => (
  <TableContent>
    <tbody>
      <Tr key={key}>
        <CategoryTitle>{title}</CategoryTitle>
        <Element green={green[0]}>{guideWriting}</Element>
        <Element green={green[1]}>{liveCoaching}</Element>
        <Element green={green[2]}>{partyWithCoach}</Element>
        <Element green={green[3]}>{nonLiveVideoReplayAnalisys}</Element>
        <Element green={green[4]}>{writtenReplayAnalysis}</Element>
        <GamejitsuElement>{gamejitsuCoaching}</GamejitsuElement>
      </Tr>
    </tbody>
  </TableContent>
)

const Table2: FunctionComponent<Props> = ({}) => (
  <Box>
    <TableContent>
      <tbody>
        <TableHeader>
          <CategoryTd>Categories</CategoryTd>
          <HeaderTh>Guide Writing </HeaderTh>
          <HeaderTh>Live Coaching</HeaderTh>
          <HeaderTh>Party With Coach</HeaderTh>
          <HeaderTh> Non-live video replay</HeaderTh>
          <HeaderTh> Written Replay analysis</HeaderTh>
          <HeaderTh>Gamejitsu Coaching</HeaderTh>
        </TableHeader>
      </tbody>
    </TableContent>
    {masterSchemaData.map((data, key) => (
      <Box mt={2} key={key}>
        <Row
          key={key}
          title={data.title}
          guideWriting={data.guideWriting}
          liveCoaching={data.liveCoaching}
          partyWithCoach={data.partyWithCoach}
          nonLiveVideoReplayAnalisys={data.nonLiveVideoReplayAnalisys}
          writtenReplayAnalysis={data.writtenReplayAnalysis}
          gamejitsuCoaching={data.gamejitsuCoaching}
          green={data.green}
        />
      </Box>
    ))}
  </Box>
)

export default Table2
