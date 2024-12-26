import React from 'react';
import '../styles/SuccessStories.css';

function SuccessStories() {
  const stories = [
    {
      title: "3岁听障儿童康复历程",
      description: "小明在3岁时被确诊为中度听力障碍。通过6个月的系统康复训练，现在已经能够正常交流，顺利进入普通幼儿园学习。",
      achievement: "语言能力显著提升，社交能力明显改善",
      duration: "6个月"
    },
    {
      title: "成年人突发性耳聋康复",
      description: "35岁的张女士因突发性耳聋导致右耳听力严重下降。经过3个月的专业康复训练，听力已恢复到正常水平。",
      achievement: "听力完全恢复，重返工作岗位",
      duration: "3个月"
    },
    {
      title: "老年人助听器适配成功",
      description: "68岁的李爷爷因年龄增长导致听力下降，通过精确的助听器适配和康复训练，重新找回了与家人交流的快乐。",
      achievement: "生活质量显著提升，家庭关系更加和谐",
      duration: "2个月"
    }
  ];

  return (
    <section className="success-stories-section">
      <div className="success-stories-container">
        <div className="section-header">
          <h2>成功案例</h2>
          <p className="section-description">
            每一个康复的故事都是我们前进的动力
          </p>
        </div>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-content">
                <h3>{story.title}</h3>
                <p className="story-description">{story.description}</p>
                <div className="story-details">
                  <div className="detail-item">
                    <span className="detail-label">康复成果：</span>
                    <span className="detail-value">{story.achievement}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">康复周期：</span>
                    <span className="detail-value">{story.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories; 