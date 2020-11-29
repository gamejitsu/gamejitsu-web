import React, { FunctionComponent } from "react"
import { Box } from "rebass"
import styled from "styled-components"

import { masterSchemaData } from "../../public/masterSchemaData"
import { breakpointDown } from "../utils/mediaQueryDevices"

const CategoryTitle = styled.td`
  color: white;
  font-weight: bold;
  background-color: ${(props) => props.theme.lineColor};
  padding: 10px;
  vertical-align: middle;
`

const CategoryTd = styled.th`
  color: white;
  height: 50px;
  font-weight: bold;
  padding: 20px;
  font-size: 25px;
  vertical-align: middle;

  @media ${breakpointDown.xl} {
    display: none;
  }
`

const HeaderTh = styled.th`
  height: 40px;
  padding: 10px;
  font-weight: bold;
  vertical-align: middle;
`

const TableContentHeader = styled.table`
  font-family: ${(props) => props.theme.textFont};
  background-color: ${(props) => props.theme.lightBackgroundColor};
  height: 80px;
  width: 100%;
  align-items: center;
  table-layout: fixed;
  margin: 0 auto;

  @media ${breakpointDown.xs} {
    font-size: 13px;
  }
`

const TableContent = styled.table`
  font-family: ${(props) => props.theme.textFont};
  width: 100%;
  align-items: center;
  table-layout: fixed;
  margin: 0 auto;
  
  @media ${breakpointDown.xs} {
    font-size: 13px;
  }
`

interface ElementProps {
  green: boolean
}

const Element = styled.td<ElementProps>`
  padding: 10px;
  text-align: left;
  color: ${(props) => (props.green ? props.theme.primaryColor : props.theme.textColor)};
  height: 50px;
  vertical-align: middle;
`

const GamejitsuElement = styled.td`
  padding: 10px;
  text-align: left;
  height: 50px;
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  vertical-align: middle;
`

const Tr = styled.tr`
  &:nth-child(odd) {
    background: ${(props) => props.theme.lineColor};
  }
  &:nth-child(even) {
    background: ${(props) => props.theme.line2Color};
  }
`

interface RowProps {
  title: string
  liveCoaching: string
  nonLiveVideoReplayAnalisys: string
  gamejitsuCoaching: string
  green: boolean[]
}

const Row: FunctionComponent<RowProps> = ({
  title,
  liveCoaching,
  nonLiveVideoReplayAnalisys,
  gamejitsuCoaching,
  green
}) => (
  <TableContent>
    <Tr>
      <CategoryTitle>{title}</CategoryTitle>
      <Element green={green[0]}>{liveCoaching}</Element>
      <Element green={green[1]}>{nonLiveVideoReplayAnalisys}</Element>
      <GamejitsuElement>{gamejitsuCoaching}</GamejitsuElement>
    </Tr>
  </TableContent>
)

const Table2: FunctionComponent = () => (
  <Box verticalAlign="middle">
    <TableContentHeader>
      <HeaderTh>
        <CategoryTd>Categories</CategoryTd>
      </HeaderTh>
      <HeaderTh>1-on-1 In-Game Coaching</HeaderTh>
      <HeaderTh>Non-live replay analysis</HeaderTh>
      <HeaderTh>Gamejitsu Coaching</HeaderTh>
    </TableContentHeader>
    {masterSchemaData.map((data, key) => (
      <Box mt={2} key={key}>
        <Row
          title={data.title}
          liveCoaching={data.liveCoaching}
          nonLiveVideoReplayAnalisys={data.nonLiveVideoReplayAnalisys}
          gamejitsuCoaching={data.gamejitsuCoaching}
          green={data.green}
        />
      </Box>
    ))}
  </Box>
)

export default Table2
