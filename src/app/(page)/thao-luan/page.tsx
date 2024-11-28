"use client";
import React, { useState, useEffect } from 'react';
import { getAllComment, addComment, type Comment } from '../../_services/mockapi';

const ThaoLuan: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const POLLING_INTERVAL = 1000; // 5 giây polling một lần
  const MAX_CONTENT_LENGTH = 200;

  useEffect(() => {
    fetchComments();
    
    // Tạo interval để poll comments
    const intervalId = setInterval(() => {
      fetchComments();
    }, POLLING_INTERVAL);

    // Cleanup khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchComments = async () => {
    const fetchedComments = await getAllComment();
    setComments(fetchedComments.reverse());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.length > MAX_CONTENT_LENGTH) {
      setNotification({ type: 'error', message: 'Nội dung bình luận không được vượt quá 200 ký tự!' });
      return;
    }
    if (name && content && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const newComment = await addComment(name, content);
        if (newComment) {
          setComments([newComment, ...comments]);
          setName('');
          setContent('');
          setNotification({ type: 'success', message: 'Bình luận đã được gửi thành công!' });
        }
      } catch (error) {
        setNotification({ type: 'error', message: 'Có lỗi xảy ra khi gửi bình luận. Vui lòng thử lại.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen relative">
      {notification && (
        <div 
          className={`fixed top-20 right-4 p-4 rounded-md shadow-md z-50 ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white animate-fade-in-out`}
        >
          {notification.message}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6 text-gray-800">Thảo luận</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Theo bạn, đâu là thách thức lớn nhất hoặc giải pháp tối ưu nhất trong công cuộc xây dựng Đảng vững mạnh và phòng chống tham nhũng hiệu quả?
        </h2>
        <p className="text-gray-600 mb-4">
          Hãy chia sẻ quan điểm của bạn trong phần bình luận dưới đây.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Thêm bình luận</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700">Tên:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded text-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block mb-1 text-gray-700">
                Nội dung: <span className="text-sm text-gray-500">({content.length}/{MAX_CONTENT_LENGTH} ký tự)</span>
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border rounded text-gray-800"
                rows={4}
                maxLength={MAX_CONTENT_LENGTH}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi bình luận'}
            </button>
          </form>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Các bình luận</h2>
          {comments.length > 0 ? (
            <ul className="space-y-4 max-h-96 overflow-y-auto">
              {comments.map((comment) => (
                <li key={comment.id} className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800">{comment.name}</h3>
                  <p className="text-gray-700 mt-1">{comment.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThaoLuan;
