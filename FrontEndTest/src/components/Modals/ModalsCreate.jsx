import React, { useState } from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";
import { useModal } from "../../Context/ModalContext";

const ModalsCreate = () => {
  const { isModalOpen, handleOk, handleCancel, form, onchange, date } =
    useModal();
  return (
    <>
      <Modal
        title="Create Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input a value!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Due date"
            name="dueDate"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker format={"DD/MM/YYYY"} onChange={onchange} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter some text!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalsCreate;
