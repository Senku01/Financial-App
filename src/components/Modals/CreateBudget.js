import React from "react";
import { Modal, Form, Input } from "antd";

const CreateBudgetModal = ({ isBudgetModalVisible, handleBudgetCancel, onBudgetSubmit }) => {
  const [form] = Form.useForm(); // Initialize form instance

  return (
    <Modal
      title="Create Budget"
      visible={isBudgetModalVisible}
      onCancel={handleBudgetCancel}
      onOk={() => {
        form.validateFields()
          .then((values) => {
            onBudgetSubmit(values);
            form.resetFields();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="create_budget_form" >
        <Form.Item
          name="budget"
          label="Budget Amount"
          rules={[{ required: true, message: "Please input your budget amount!" }]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBudgetModal;
