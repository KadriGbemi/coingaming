import React from "react"
import ReactDOM from "react-dom/client"
import { ConfigProvider } from "antd"
import App from "./App"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import reportWebVitals from "./reportWebVitals"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const client = new ApolloClient({
  uri: "https://api.blocktap.io/graphql",
  cache: new InMemoryCache(),
})

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FC4B25",
          colorTextHeading: "#FFF",
          colorTextTertiary: "#FFF",
          colorText: "#FFF",
          colorLink: "#FFF",
          colorLinkHover: "#FC4B25",
          colorTextQuaternary: "#FFF",
        },
        components: {
          Input: {
            colorText: "#000",
            colorTextBase: "#000",
          },
          Button: {
            colorTextDisabled: "rgba(0, 0, 0, 0.25)",
          },
        },
      }}
    >
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ConfigProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
