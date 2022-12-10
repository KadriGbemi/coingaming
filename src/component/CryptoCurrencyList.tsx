import { ReactComponent as Icon } from "../assets/icon.svg"
import { Typography, List, Space, Divider, Button } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import { CryptoCurrencyListProps } from "../types"

const { Paragraph, Text } = Typography

const CryptoCurrencyListStyle = {
  height: "255px",
  minWidth: "310px",
  overflow: "auto",
}

const DividerStyle = {
  background: "#4F3C68",
  margin: "10px",
}

const ListItemStyle = {
  padding: 0,
}

const CryptoCurrencyList = ({
  data,
  handleDelete,
}: CryptoCurrencyListProps) => (
  <List
    style={CryptoCurrencyListStyle}
    itemLayout="horizontal"
    dataSource={Object.keys(data)}
    renderItem={(key: any) => (
      <>
        <List.Item
          actions={[
            <Button
              type="link"
              shape="circle"
              onClick={() => handleDelete(key)}
              icon={<CloseOutlined />}
            />,
          ]}
          style={ListItemStyle}
        >
          <Space size={12}>
            <Icon />
            <div>
              <Paragraph strong>{key.toUpperCase()}</Paragraph>
              {data[key] ? <Text>{data[key]}€</Text> : null}
            </div>
          </Space>
        </List.Item>
        <Divider style={DividerStyle} />
      </>
    )}
  />
)

export default CryptoCurrencyList
