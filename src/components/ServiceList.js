import React from 'react';
import { Link } from 'react-router-dom';

function ServiceList() {
  const services = [
    {
      title: '听觉康复',
      description: '专业的听觉康复训练和指导',
      icon: '👂',
      features: [
        '个性化听力评估',
        '听觉训练计划制定',
        '助听设备调试与适配',
      ]
    },
    {
      title: '言语康复',
      description: '针对性的言语障碍康复训练',
      icon: '🗣️',
      features: [
        '语音语调训练',
        '口肌功能训练',
        '构音障碍矫正'
      ]
    },
    {
      title: '语言康复',
      description: '帮助提升语言表达和理解能力',
      icon: '📚',
      features: [
        '词汇量扩充训练',
        '语言理解能力提升',
        '表达能力培养'
      ]
    },
    {
      title: '康复师培训',
      description: '专业的康复师职业培训课程',
      icon: '👩‍🏫',
      features: [
        '专业理论培训',
        '实操技能训练',
        '案例分析讨论',
      ]
    },
    {
      title: '康复机构赋能',
      description: '为康复机构提供专业支持和指导',
      icon: '🏥',
      features: [
        '康复师技能培训',
        '线上督导、线下指导',
        '技术体系搭建',
      ]
    },
    {
      title: '康复科普',
      description: '普及康复知识，提供专业咨询',
      icon: '📱',
      features: [
        '家长培训课程',
        '康复咨询服务',
        '科普资料分享'
      ]
    }
  ];

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>我们的服务</h2>
        <p className="section-description">
          专业的康复训练和指导，助力孩子健康成长
        </p>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Link to={`/service/${index}`} className="service-link">
              了解更多 →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceList;
