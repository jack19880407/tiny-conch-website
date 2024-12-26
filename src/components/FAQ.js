import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "什么是听觉康复？",
      answer: "听觉康复是一种专业的医疗服务，旨在帮助听力障碍患者恢复和提高听力功能。通过个性化的训练计划，我们帮助患者更好地理解和处理声音信息，提高生活质量。"
    },
    {
      question: "康复训练需要多长时间？",
      answer: "康复训练的时长因人而异，取决于患者的具体情况、年龄和康复目标。通常建议进行3-6个月的系统训练，每周2-3次，每次1-2小时。我们会根据患者的进展情况适时调整训练计划。"
    },
    {
      question: "康复训练适合什么年龄段？",
      answer: "我们的康复训练适合各个年龄段的患者，从儿童到老年人都可以参与。我们会根据不同年龄段的特点和需求，制定相应的训练方案。对于儿童来说，早期干预效果更好。"
    },
    {
      question: "如何评估康复效果？",
      answer: "我们采用科学的评估体系，定期进行听力测试、语言能力评估和生活质量评估。通过对比训练前后的数据，以及收集家属反馈，全面评估康复效果。"
    },
    {
      question: "康复训练的费用是多少？",
      answer: "费用根据具体的康复项目和训练时长而定。我们提供免费的初次评估服务，之后会根据评估结果制定个性化的训练方案和相应的费用明细。我们也会提供分期付款等灵活的支付方式。"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2>常见问题</h2>
          <p className="section-description">
            解答您关心的问题，帮助您更好地了解我们的服务
          </p>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ; 