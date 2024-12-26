import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      // 按时间倒序排列，最新的在前面
      setAppointments(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>预约管理</h2>
        <p>总预约数：{appointments.length}</p>
      </div>
      <div className="appointments-list">
        {appointments.length === 0 ? (
          <p className="no-data">暂无预约信息</p>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <h3>预约 #{appointment.id}</h3>
                <span className="appointment-time">
                  {new Date(appointment.created_at).toLocaleString()}
                </span>
              </div>
              <div className="appointment-details">
                <p><strong>姓名：</strong>{appointment.name}</p>
                <p><strong>电话：</strong>{appointment.phone}</p>
                <p><strong>邮箱：</strong>{appointment.email}</p>
                <p><strong>服务：</strong>{appointment.service}</p>
                <p><strong>留言：</strong>{appointment.message}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminPanel; 