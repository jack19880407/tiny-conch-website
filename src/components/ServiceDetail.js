import React from 'react';
import { useParams, Link } from 'react-router-dom';

const IMAGES = {
  // 听觉康复
  'hearing-test': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'hearing-training': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'hearing-device': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'family-guide': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  
  // 言语康复
  'oral-muscle': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'pronunciation': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'intonation': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  
  // 语言康复
  'vocabulary': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'grammar': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'comprehension': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  
  // 康复师培训
  'theory': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'practice': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'case-study': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  
  // 康复机构赋能
  'management': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'team': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'technical': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  
  // 康复科普
  'lecture': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'parent-training': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
  'consultation': 'https://images.unsplash.com/photo-1516549655169-df83a0774514'
};

const getImageUrl = (imageName) => {
  // 从文件名中提取基本名称
  const baseName = imageName.replace('/images/', '').replace('.jpg', '');
  return IMAGES[baseName] || IMAGES['default'];
};

function ServiceDetail() {
  const { service } = useParams();
  
  const serviceDetails = {
    '0': {  // 听觉康复
      title: '听觉康复',
      description: '专业的听觉康复训练和指导，帮助听障儿童获得更好的听觉体验',
      icon: '👂',
      features: [
        '个性化听力评估',
        '听觉训练计划制定',
        '助听设备调试与适配',
        '家庭康复指导'
      ],
      details: [
        {
          title: '专业评估',
          content: '采用国际标准化听力评估体系，通过专业的听力评估设备和方法，对孩子的听力状况进行全面评估，为制定个性化康复方案提供科学依据。',
          image: '/images/hearing-test.jpg'
        },
        {
          title: '系统训练',
          content: '基于评估结果，制定个性化的听觉训练计划，采用循序渐进的训练方法，帮助孩子逐步建立声音意识，提升听觉理解能力。',
          image: '/images/hearing-training.jpg'
        },
        {
          title: '设备调试',
          content: '提供专业的助听设备选配建议，进行精细化调试，并定期进行维护和调整，确保最佳的听觉输入效果。',
          image: '/images/hearing-device.jpg'
        },
        {
          title: '家庭指导',
          content: '为家长提供专业的康复指导，传授日常训练方法，帮助家长在日常生活中开展听觉训练，提高康复效果。',
          image: '/images/family-guide.jpg'
        }
      ]
    },
    '1': {  // 言语康复
      title: '言语康复',
      description: '针对性的言语障碍康复训练，帮助孩子提高语音清晰度',
      icon: '🗣️',
      features: [
        '发音清晰度训练',
        '语音语调训练',
        '口肌功能训练',
        '构音障碍矫正'
      ],
      details: [
        {
          title: '口肌训练',
          content: '通过专业的口肌训练方法，加强口腔肌肉的力量和灵活性，为清晰发音打好基础。包括唇部、舌部、面部等肌肉的训练。',
          image: '/images/oral-muscle.jpg'
        },
        {
          title: '发音训练',
          content: '采用科学的发音训练体系，从单音节到词语、句子，逐步提高发音的准确性和清晰度，纠正不良发音习惯。',
          image: '/images/pronunciation.jpg'
        },
        {
          title: '语调训练',
          content: '训练语音的抑扬顿挫，帮助孩子掌握正确的语调和语气，使表达更加自然流畅。',
          image: '/images/intonation.jpg'
        }
      ]
    },
    '2': {  // 语言康复
      title: '语言康复',
      description: '全面提升语言理解和表达能力，促进有效沟通',
      icon: '📚',
      features: [
        '词汇量扩充训练',
        '语法结构训练',
        '语言理解能力提升',
        '表达能力培养'
      ],
      details: [
        {
          title: '词汇训练',
          content: '通过趣味性的教学活动，系统性地扩充词汇量，包括名词、动词、形容词等不同类型的词汇学习。',
          image: '/images/vocabulary.jpg'
        },
        {
          title: '语法训练',
          content: '帮助孩子掌握正确的语法结构，提高句子的组织能力，使表达更加准确和规范。',
          image: '/images/grammar.jpg'
        },
        {
          title: '理解训练',
          content: '提高语言理解能力，包括指令理解、故事理解、抽象概念理解等多个层面的训练。',
          image: '/images/comprehension.jpg'
        }
      ]
    },
    '3': {  // 康复师培训
      title: '康复师培训',
      description: '专业的康复师职业培训课程，提升康复治疗水平',
      icon: '👩‍🏫',
      features: [
        '专业理论培训',
        '实操技能训练',
        '案例分析讨论',
        '继续教育课程'
      ],
      details: [
        {
          title: '理论学习',
          content: '系统学习康复医学理论知识，包括听力学、语言学、心理学等相关专业知识。',
          image: '/images/theory.jpg'
        },
        {
          title: '技能实训',
          content: '通过实际操作训练，掌握评估方法、训练技巧、设备使用等专业技能。',
          image: '/images/practice.jpg'
        },
        {
          title: '案例研讨',
          content: '分析典型案例，交流康复经验，提高实际问题解决能力。',
          image: '/images/case-study.jpg'
        }
      ]
    },
    '4': {  // 康复机构赋能
      title: '康复机构赋能',
      description: '为康复机构提供全方位的专业支持和指导',
      icon: '🏥',
      features: [
        '机构运营指导',
        '师资团队建设',
        '技术体系搭建',
        '品质管理体系'
      ],
      details: [
        {
          title: '运营管理',
          content: '提供机构运营管理方案，包括市场定位、服务流程优化、质量控制等方面的专业指导。',
          image: '/images/management.jpg'
        },
        {
          title: '��队建设',
          content: '协助机构建设专业的康复团队，包括人才招聘、培训体系建设、绩效管理等。',
          image: '/images/team.jpg'
        },
        {
          title: '技术支持',
          content: '提供康复技术支持，建立标准化的评估和训练体系，确保服务质量。',
          image: '/images/technical.jpg'
        }
      ]
    },
    '5': {  // 康复科普
      title: '康复科普',
      description: '专业的康复知识普及，提供权威咨询服务',
      icon: '📱',
      features: [
        '康复知识讲座',
        '家长培训课程',
        '康复咨询服务',
        '科普资料分享'
      ],
      details: [
        {
          title: '知识讲座',
          content: '定期举办康复知识讲座，普及科学的康复理念和方法，帮助家长更好地理解和参与康复过程。',
          image: '/images/lecture.jpg'
        },
        {
          title: '家长课程',
          content: '为家长提供系统的培训课程，传授家庭康复方法，提高家庭康复的效果。',
          image: '/images/parent-training.jpg'
        },
        {
          title: '咨询服务',
          content: '提供专业的康复咨询服务，解答家长疑问，提供个性化建议。',
          image: '/images/consultation.jpg'
        }
      ]
    }
  };

  const currentService = serviceDetails[service];

  if (!currentService) {
    return <div className="error-page">服务不存在</div>;
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className="container">
          <Link to="/" className="back-link">← 返回首页</Link>
          <h1>{currentService.title}</h1>
          <p className="service-description">{currentService.description}</p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="features-section">
            <h2>服务特点</h2>
            <ul className="feature-list">
              {currentService.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="details-section">
            {currentService.details.map((detail, index) => (
              <div key={index} className="detail-card">
                <div className="detail-image">
                  <img 
                    src={getImageUrl(detail.image)} 
                    alt={detail.title}
                    loading="lazy"
                  />
                </div>
                <div className="detail-content">
                  <h3>{detail.title}</h3>
                  <p>{detail.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>预约咨询</h2>
            <p>想了解更多详情或预约服务，请联系我们</p>
            <Link to="/#appointment" className="cta-button">立即预约</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail; 