import { buildResource } from "../resource"
import * as t from "io-ts"

export default buildResource({
  name: "review",
  decoder: {
    data: t.type({
      attributes: t.type({
        comments: t.array(t.type({
          text: t.string,
          timestamp: t.number
        }))
      }),
      relationships: t.type({
        coach: t.type({
          data: t.type({
            type: t.literal("coach"),
            id: t.string
          })
        })
      })
    }),
    included: t.union([
      t.type({

      }),
      t.type({

      })
    ])
  },
  transformer: {
    data: (value) => (value),
    included: (value) => (value)
  },
  encode: () => {}
})
