import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import '../styles/AppointmentForm.css';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', content: '' });

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage({
          type: 'success',
          content: '预约成功！我们会尽快与您联系。'
        });
        setFormData({ name: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('预约失败');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        content: '预约失败，请稍后重试。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-info">
          <div className="section-header">
            <h2>预约咨询</h2>
            <p className="section-description">
              专业的康复团队随时为您服务
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <i className="contact-icon">📞</i>
              <div>
                <h3>电话咨询</h3>
                <p>18018633288</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="contact-icon">📍</i>
              <div>
                <h3>地址</h3>
                <p>上海市虹口区四川北路虹口商城</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="contact-icon">⏰</i>
              <div>
                <h3>营业时间</h3>
                <p>周一至周日：9:00 - 18:00</p>
               
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">电话</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">服务项目</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">请选择服务项目</option>
              <option value="听觉康复">听觉康复</option>
              <option value="言语康复">言语康复</option>
              <option value="语言康复">语言康复</option>
              <option value="康复师培训">康复师培训</option>
              <option value="康复机构赋能">康复机构赋能</option>
              <option value="康复科普">康复科普</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">留言</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="请描述您的具体需求..."
              rows="4"
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoadingSpinner /> 提交中...
              </>
            ) : (
              '提交预约'
            )}
          </button>
          {message.content && (
            <div className={`message ${message.type}`}>
              {message.content}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default AppointmentForm;

