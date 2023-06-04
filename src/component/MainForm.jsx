// import React from 'react'

// import { UserOutlined } from '@ant-design/icons';
import { Form, Input, Switch, Typography } from "antd";
import Link from 'antd/es/typography/Link';
import { Button } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { SlLock } from "react-icons/sl";
import './Component.css';


const { Text} = Typography;

const MainForm = () => {
    const [form] = Form.useForm();
  return (
    <Form form={form} name="myForm" layout="vertical" autoComplete="off" >
      <Form.Item
        name="name"
      >
        <div className="labelPortion d-flex  align-items-center">
          <FaRegUser style={{ fontSize: '18px'}}/>
          <Text className='CustomFormFont fs-5 ms-1'>User Name</Text>
        </div>
        <Input className='fs-6 py-2 px-3 customFontColor'/>
      </Form.Item>
            
      <Form.Item
        name="password"
        className="mt-0 pt-0"
      >
        <div className="labelPortion d-flex  align-items-center ">
          <SlLock style={{ fontSize: '18px', fontWeight:"bold" }}/>
          <Text className='CustomFormFont fs-5 ms-1'>Password</Text>
        </div>
        <Input.Password
          className='fs-6 py-2 px-3 customFontColor'
          
        />
      </Form.Item>

      <div className="row justify-content-center my-1">
        <div className="col-lg-6 col-md-12">
        <Form.Item className=''>
        <Switch size="small"/>
        <Text className='fs-6 customFontColor ms-2 pt-1'>Remember me</Text>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-md-12 text-lg-end text-sm-start pt-1">
            <Link href="https://ant.design" target="_blank">
              <Text underline className='fs-6 customBlueText '>Forgot Password?</Text>
            </Link>
        </div>
      </div>

      


      <Form.Item>
        <Button type="" className='customBlueBtn fs-5 pb-2 w-100' >
            Log in Now
        </Button>
      </Form.Item>

      
    </Form>
  );

}

export default MainForm