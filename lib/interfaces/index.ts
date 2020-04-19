import { FunctionComponent } from "react"

export interface AuthenticatedComponent extends FunctionComponent {
  skipAuthentication?: boolean
}

export interface Model {
  id: string
}
