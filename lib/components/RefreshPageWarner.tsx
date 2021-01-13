import { useEffect } from "react"
import Router from "next/router"

const useWarnIfUnsavedChanges: any = (unsavedChanges: boolean) => {
  const message = "Do you want to leave? Please, remember to save your review or you will lose your progresses."

  useEffect(() => {
    const routeChangeStart = (url: string) => {
      if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
        Router.events.emit("routeChangeError")
        Router.replace(Router, Router.asPath)
        throw "Abort route change. Please ignore this error."
      }
    }

    const beforeunload = (e: any) => {
      if (unsavedChanges) {
        e.preventDefault()
        e.returnValue = message
        return message
      }
    }

    window.addEventListener("beforeunload", beforeunload)
    Router.events.on("routeChangeStart", routeChangeStart)

    return () => {
      window.removeEventListener("beforeunload", beforeunload)
      Router.events.off("routeChangeStart", routeChangeStart)
    }
  }, [unsavedChanges])
}

export default useWarnIfUnsavedChanges
