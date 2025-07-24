import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // 清除該欄位的錯誤訊息
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 姓名驗證
    if (!formData.name.trim()) {
      newErrors.name = '請輸入您的姓名';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = '姓名至少需要2個字符';
    }

    // Email驗證
    if (!formData.email.trim()) {
      newErrors.email = '請輸入您的Email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '請輸入有效的Email格式';
    }

    // 訊息內容驗證
    if (!formData.message.trim()) {
      newErrors.message = '請輸入訊息內容';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '訊息內容至少需要10個字符';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 驗證表單
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

         try {
                                // 使用 Formspree 發送表單到你的 Email
         const response = await fetch('https://formspree.io/f/myzpwgla', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

                 // 選項2: 臨時方案 - 打開Email客戶端 (如果不使用 Formspree，取消下面的註解)
         /*
         const emailBody = `
姓名: ${formData.name}
Email: ${formData.email}
公司: ${formData.company || '未提供'}
訊息: ${formData.message}
         `;
         
         const mailtoLink = `mailto:contact@kodea-studio.com?subject=來自網站的聯絡表單&body=${encodeURIComponent(emailBody)}`;
         window.open(mailtoLink);
         */
       
       console.log('Form submitted successfully:', formData);
      
      // 成功處理
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setErrors({});
      
      // 3秒後清除成功訊息
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // 5秒後清除錯誤訊息
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-cold-gray-dark via-black to-misty-purple-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              聯絡
              <span className="block text-misty-purple">我們</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              讓我們一起討論您的專案需求
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-cold-gray-dark mb-8">發送訊息</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                                         <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-misty-purple focus:border-transparent ${
                         errors.name ? 'border-red-500' : 'border-gray-300'
                       }`}
                       placeholder="請輸入您的姓名"
                     />
                     {errors.name && (
                       <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                     )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                                         <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-misty-purple focus:border-transparent ${
                         errors.email ? 'border-red-500' : 'border-gray-300'
                       }`}
                       placeholder="請輸入您的 Email"
                     />
                     {errors.email && (
                       <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                     )}
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    公司名稱
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-misty-purple focus:border-transparent"
                    placeholder="請輸入您的公司名稱"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    訊息內容 *
                  </label>
                                     <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={6}
                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-misty-purple focus:border-transparent resize-none ${
                       errors.message ? 'border-red-500' : 'border-gray-300'
                     }`}
                     placeholder="請描述您的專案需求..."
                   ></textarea>
                   {errors.message && (
                     <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                   )}
                </div>
                                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center ${
                     isSubmitting 
                       ? 'bg-gray-400 cursor-not-allowed' 
                       : 'bg-misty-purple hover:bg-misty-purple-dark text-white'
                   }`}
                 >
                   {isSubmitting ? (
                     <>
                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       發送中...
                     </>
                   ) : (
                     '發送訊息'
                   )}
                 </button>
                 
                 {/* 狀態訊息 */}
                 {submitStatus === 'success' && (
                   <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                     <div className="flex items-center">
                       <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                       訊息發送成功！我們會儘快回覆您。
                     </div>
                   </div>
                 )}
                 
                 {submitStatus === 'error' && (
                   <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                     <div className="flex items-center">
                       <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                       </svg>
                       發送失敗，請稍後再試或直接聯絡我們。
                     </div>
                   </div>
                 )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-cold-gray-dark mb-8">聯絡資訊</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-misty-purple-light rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-misty-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cold-gray-dark mb-2">Email</h3>
                    <p className="text-gray-600">contact@kodea-studio.com</p>
                  </div>
                </div>
                
                                 <div className="flex items-start">
                   <div className="w-12 h-12 bg-misty-purple-light rounded-lg flex items-center justify-center mr-4">
                     <svg className="w-6 h-6 text-misty-purple" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                     </svg>
                   </div>
                   <div>
                     <h3 className="text-lg font-semibold text-cold-gray-dark mb-2">Line</h3>
                     <a 
                       href="https://line.me/ti/p/fws0067z" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-misty-purple hover:text-misty-purple-dark transition-colors duration-200 font-medium"
                     >
                       @fws0067z
                     </a>
                   </div>
                 </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-cold-gray-dark mb-4">營業時間</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>週一 - 週五</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>週六</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>週日</span>
                    <span>休息</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 