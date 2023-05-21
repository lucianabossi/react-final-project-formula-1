import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Menu, Space} from 'antd';
import {CalendarOutlined, CarOutlined, HomeFilled, TeamOutlined, TrophyOutlined, UserOutlined} from '@ant-design/icons';
import '../Style.css';

export default function Navbar() {
  const navigate = useNavigate();
  const items = [
    {label: 'Home', key: 'home', icon: <HomeFilled />},
    {label: 'Drivers', key: 'driversMenu',icon: <TeamOutlined/>, children: [
    {label: 'Drivers', key: 'drivers', icon: <UserOutlined/>},
    {label: 'Drivers Standing', key: 'driversStanding', icon: <TrophyOutlined/>}
  ]},
    {label: 'Constructors', key: 'constructorsMenu', icon:<CarOutlined/>, children: [
    {label: 'Constructors', key: 'constructors', icon: <TeamOutlined/>,},
    {label: 'Constructors Standing', key: 'constructorsStanding', icon: <TrophyOutlined/>}
  ]},
  {label: 'Schedule', key: 'schedule', icon: <CalendarOutlined/>}
]
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Space>
        <Menu 
        theme="dark"
          items= {items}
          mode='inline'
          onClick={({key}) => {navigate(key)}}
          >
      </Menu>
      </Space>    
    </div>

  )
}