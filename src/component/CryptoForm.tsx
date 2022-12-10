import {
  Row,
  Col,
  Form,
  Typography,
  Space,
  Card,
  Input,
  Button,
  FormInstance,
} from "antd"

const { Title, Text } = Typography

const CrptoForm = ({
  handleSubmit,
  form,
  loading,
}: {
  loading: boolean
  handleSubmit?: (values: any) => void
  form: FormInstance<any>
}) => {
  return (
    <Row justify="space-between" gutter={[20, 20]}>
      <Col span={24} md={12} lg={8}>
        <Row>
          <Col span={24}>
            <Title level={1}>Now you can track all your cryptos here!</Title>
          </Col>
          <Col span={24} md={15}>
            <Text className="sub-title">
              Just enter the cryptocurrency code on the form to the right
            </Text>
          </Col>
        </Row>
      </Col>
      <Col span={24} md={12} lg={7}>
        <Card>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Form
                name="basic"
                form={form}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
              >
                <Space
                  direction="vertical"
                  size={10}
                  className="input-container"
                >
                  <Form.Item
                    name="cryptocurrency"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a value",
                      },
                    ]}
                  >
                    <Input placeholder="Enter cryptocurrency" size="large" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      block
                      disabled={loading}
                      loading={loading}
                    >
                      Add
                    </Button>
                  </Form.Item>
                </Space>
              </Form>
            </Col>
            <Col span={24}>
              <Text className="input-extra-description">
                Use of this service is subject to terms and conditions
              </Text>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default CrptoForm
