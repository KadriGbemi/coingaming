import { useState } from "react"
import head from "lodash/head"
import get from "lodash/get"
import { useLazyQuery } from "@apollo/client"
import { Row, Col, Typography, Form } from "antd"

import CryptoCurrencyList from "./component/CryptoCurrencyList"
import CryptoForm from "./component/CryptoForm"

import { ReactComponent as Logo } from "./assets/logo.svg"
import Background from "./assets/figure.png"

import useWindowHeight from "./hook/useWindowHeight"
import { CryptoFormSubmitProps, MarketProps } from "./types"

import { GET_PRICES } from "./api"

import "./App.css"

const { Text } = Typography

const roundToTwoDecimalPlaces = (number: number) =>
  Math.round((number + Number.EPSILON) * 100) / 100

function App() {
  const [cryptocurrenciesData, setCryptocurrenciesData] = useState({})
  const [cryptocurrencyInput, setCryptocurrencyInput] = useState("")
  const [form] = Form.useForm()

  const [getCryptoData, { loading }] = useLazyQuery(GET_PRICES, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onError: (error) => {
      return form.setFields([
        { name: "cryptocurrency", errors: [error?.message] },
      ])
    },
    onCompleted: (response) => {
      const market = head(response?.markets)
      const price = get(market, "ticker.lastPrice")

      if (!market) {
        return form.setFields([
          { name: "cryptocurrency", errors: ["Value does not have a price"] },
        ])
      }

      const key = cryptocurrencyInput.toUpperCase()

      setCryptocurrenciesData(
        Object.assign(cryptocurrenciesData, {
          [key]: price && roundToTwoDecimalPlaces(Number(price)),
        })
      )
    },
  })

  const { height } = useWindowHeight()

  const topContentStyle = {
    padding: "20px 0px 10px",
    minHeight: height > 1000 ? "auto" : "86vh",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "center bottom",
    backgroundSize: height > 1000 ? "22%" : "30%",
  }

  const handleCryptoListDelete = (key: string) => {
    const data: MarketProps = { ...cryptocurrenciesData }

    delete data[key]

    setCryptocurrenciesData(Object.assign({}, data))
  }

  const handleCryptoFormSubmit = ({
    cryptocurrency,
  }: CryptoFormSubmitProps) => {
    setCryptocurrencyInput(cryptocurrency)

    getCryptoData({ variables: { value: cryptocurrency } })
  }

  return (
    <Row justify="space-between" className="App">
      <Col span={24} style={topContentStyle}>
        <Row justify="center">
          <Col span={20}>
            <Row gutter={[25, 25]}>
              <Col span={24}>
                <Row gutter={[30, 30]}>
                  <Col span={24}>
                    <Row justify="start">
                      <Logo />
                    </Row>
                  </Col>
                  <Col span={24}>
                    <CryptoForm
                      handleSubmit={handleCryptoFormSubmit}
                      form={form}
                      loading={loading}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24} md={8}>
                <CryptoCurrencyList
                  data={cryptocurrenciesData}
                  handleDelete={handleCryptoListDelete}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24} className="bottom">
        <Row justify="center" align="middle">
          <Col span={20}>
            <Text className="text-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              incidunt voluptatem quidem quae sunt maiores aperiam eaque
              voluptates perferendis labore sint fugit illum blanditiis, sit
              esse dolores aspernatur explicabo enim. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tempora incidunt voluptatem quidem
              quae sunt maiores aperiam enim.
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default App
