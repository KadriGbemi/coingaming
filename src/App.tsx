import { ReactComponent as Logo } from "./assets/logo.svg"
import { Row, Col, Typography, Space, Card, Input, Button } from "antd"
import CoinList from "./component/List"
import useWindowHeight from "./hook/useWindowHeight"
import Background from "./assets/figure.png"

import "./App.css"

const { Title, Text } = Typography

function App() {
  const { height } = useWindowHeight()

  const topContentStyle = {
    paddingTop: "20px",
    minHeight: height > 1000 ? "auto" : "86vh",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "center bottom",
    backgroundSize: height > 1000 ? "22%" : "30%",
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
                    <Row justify="space-between" gutter={[20, 20]}>
                      <Col span={24} md={12} lg={8}>
                        <Row>
                          <Col span={24}>
                            <Title level={1}>
                              Now you can track all your cryptos here!
                            </Title>
                          </Col>
                          <Col span={24} md={15}>
                            <Text className="sub-title">
                              Just enter the cryptocurrency code on the form to
                              the right
                            </Text>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24} md={12} lg={7}>
                        <Card>
                          <Row gutter={[10, 10]}>
                            <Col span={24}>
                              <Space
                                direction="vertical"
                                size={10}
                                className="input-container"
                              >
                                <Input placeholder="Basic usage" size="large" />
                                <Button type="primary" size="large" block>
                                  Add
                                </Button>
                              </Space>
                            </Col>
                            <Col span={24}>
                              <Text className="input-extra-description">
                                Use of this service is subject to terms and
                                conditions
                              </Text>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24} md={8}>
                <CoinList />
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
