import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>联系方式</h3>
          <p>电话：021-1234-5678</p>
          <p>邮箱：info@xiaoluohao.com</p>
          <p>地址：上海市某某区某某街道123号</p>
        </div>
        <div className="footer-section">
          <h3>营业时间</h3>
          <p>周一至周五：9:00 - 18:00</p>
          <p>周六：9:00 - 16:00</p>
          <p>周日：休息</p>
        </div>
        <div className="footer-section">
          <h3>关注我们</h3>
          <p>微信公众号：小螺号康复</p>
          <p>抖音号：xiaoluohao123</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 上海小螺号能力开发中心 版权所有</p>
      </div>
    </footer>
  );
}

export default Footer;

