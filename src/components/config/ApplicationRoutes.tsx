import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'antd';

const { Sider, Header, Content } = Layout

const ApplicationRoutes = () => {
  return (
    <Router>
      <Layout>
        <Sider style={{
          background: '#fff'
        }}>
        사이드</Sider>
        <Layout>
          <Header>헤더</Header>
          <Content>콘텐츠</Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default ApplicationRoutes
