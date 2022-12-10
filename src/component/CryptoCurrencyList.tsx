import { ReactComponent as Icon } from "../assets/icon.svg"
import { Typography, List, Space } from "antd"
import { CloseOutlined } from "@ant-design/icons"

const { Paragraph, Text } = Typography

const CryptoCurrencyListStyle = {
  height: "255px",
  minWidth: "310px",
  overflow: "auto",
}

const CryptoCurrencyList = ({ data }: { data: any }) => (
  <List
    style={CryptoCurrencyListStyle}
    itemLayout="horizontal"
    dataSource={Object.keys(data)}
    renderItem={(key: any) => (
      <List.Item actions={[<CloseOutlined />]}>
        <Space size={12}>
          <Icon />
          <div>
            <Paragraph strong>{key.toUpperCase()}</Paragraph>
            {data[key] ? <Text>{data[key]}€</Text> : null}
          </div>
        </Space>
      </List.Item>
    )}
  />
)

export default CryptoCurrencyList
