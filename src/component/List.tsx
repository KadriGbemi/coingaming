import { ReactComponent as Icon } from "../assets/icon.svg"
import { Typography, List, Space } from "antd"
import { CloseOutlined } from "@ant-design/icons"

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 5",
  },
  {
    title: "Ant Design Title 6",
  },
]

const { Paragraph, Text } = Typography

const CoinListStyle = {
  height: "255px",
  minWidth: "310px",
  overflow: "auto",
}

const CoinList: React.FC = () => (
  <List
    style={CoinListStyle}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item actions={[<CloseOutlined />]}>
        <Space size={12}>
          <Icon />
          <div>
            <Paragraph strong>{item.title}</Paragraph>
            <Text>54.3€</Text>
          </div>
        </Space>
      </List.Item>
    )}
  />
)

export default CoinList
