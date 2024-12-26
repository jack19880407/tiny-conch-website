import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>上海小螺号能力开发中心</h1>
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><a href="#services">服务项目</a></li>
          <li><a href="#appointment">预约咨询</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

