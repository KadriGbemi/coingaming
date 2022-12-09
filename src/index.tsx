import React from "react"
import ReactDOM from "react-dom/client"
import { ConfigProvider } from "antd"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FC4B25",
          colorTextHeading: "#FFF",
          colorTextTertiary: "#FFF",
          colorText: "#FFF",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
