// // // // 'use client';

// // // // import { useState, useEffect, useRef } from 'react';
// // // // import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

// // // // // Chat Bot Component
// // // // export default function ChatBot() {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [isMinimized, setIsMinimized] = useState(false);
// // // //   const [message, setMessage] = useState('');
// // // //   const [messages, setMessages] = useState([
// // // //     { text: 'Hi there! How can I help you today?', isBot: true }
// // // //   ]);
// // // //   const [isTyping, setIsTyping] = useState(false);
// // // //   const messagesEndRef = useRef(null);

// // // //   // Auto-scroll to bottom of messages
// // // //   const scrollToBottom = () => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // // //   };

// // // //   useEffect(() => {
// // // //     scrollToBottom();
// // // //   }, [messages]);

// // // //   // Toggle chat open/closed
// // // //   const toggleChat = () => {
// // // //     setIsOpen(!isOpen);
// // // //     setIsMinimized(false);
// // // //   };

// // // //   // Toggle minimize/maximize
// // // //   const toggleMinimize = () => {
// // // //     setIsMinimized(!isMinimized);
// // // //   };

// // // //   // Handle sending a message
// // // //   const handleSendMessage = async (e) => {
// // // //     e.preventDefault();
    
// // // //     if (!message.trim()) return;
    
// // // //     // Add user message
// // // //     setMessages(prev => [...prev, { text: message, isBot: false }]);
// // // //     setMessage('');
    
// // // //     // Simulate bot typing
// // // //     setIsTyping(true);
    
// // // //     // Simulate response delay (replace with actual API call in production)
// // // //     setTimeout(() => {
// // // //       setIsTyping(false);
// // // //       setMessages(prev => [...prev, { 
// // // //         text: `Thanks for your message! This is a demo response.`, 
// // // //         isBot: true 
// // // //       }]);
// // // //     }, 1500);
// // // //   };

// // // //   return (
// // // //     <div className="fixed bottom-6 right-6 z-50 font-sans">
// // // //       {/* Chat button */}
// // // //       {!isOpen && (
// // // //         <button 
// // // //           onClick={toggleChat}
// // // //           className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-105"
// // // //           aria-label="Open chat"
// // // //         >
// // // //           <MessageCircle size={24} />
// // // //         </button>
// // // //       )}

// // // //       {/* Chat window */}
// // // //       {isOpen && (
// // // //         <div className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 flex flex-col
// // // //                       ${isMinimized ? 'h-14 w-64' : 'h-96 w-80 md:w-96'}`}>
// // // //           {/* Chat header */}
// // // //           <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
// // // //             <div className="flex items-center space-x-2">
// // // //               <MessageCircle size={20} />
// // // //               <h3 className="font-medium">Chat Support</h3>
// // // //             </div>
// // // //             <div className="flex space-x-2">
// // // //               <button 
// // // //                 onClick={toggleMinimize} 
// // // //                 className="hover:bg-blue-700 rounded p-1 transition-colors"
// // // //                 aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
// // // //               >
// // // //                 {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
// // // //               </button>
// // // //               <button 
// // // //                 onClick={toggleChat} 
// // // //                 className="hover:bg-blue-700 rounded p-1 transition-colors"
// // // //                 aria-label="Close chat"
// // // //               >
// // // //                 <X size={16} />
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Chat content - only show when not minimized */}
// // // //           {!isMinimized && (
// // // //             <>
// // // //               {/* Messages area */}
// // // //               <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
// // // //                 {messages.map((msg, index) => (
// // // //                   <div 
// // // //                     key={index} 
// // // //                     className={`mb-3 max-w-3/4 ${msg.isBot ? 'mr-auto' : 'ml-auto'}`}
// // // //                   >
// // // //                     <div className={`p-3 rounded-lg ${
// // // //                       msg.isBot 
// // // //                         ? 'bg-gray-200 text-gray-800 rounded-bl-none' 
// // // //                         : 'bg-blue-600 text-white rounded-br-none'
// // // //                     }`}>
// // // //                       {msg.text}
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //                 {isTyping && (
// // // //                   <div className="flex space-x-1 p-3 bg-gray-200 text-gray-800 rounded-lg rounded-bl-none max-w-xs mr-auto">
// // // //                     <div className="animate-bounce">.</div>
// // // //                     <div className="animate-bounce delay-75">.</div>
// // // //                     <div className="animate-bounce delay-150">.</div>
// // // //                   </div>
// // // //                 )}
// // // //                 <div ref={messagesEndRef} />
// // // //               </div>

// // // //               {/* Message input */}
// // // //               <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex">
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Type your message..."
// // // //                   className="flex-1 px-3 py-2 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //                   value={message}
// // // //                   onChange={(e) => setMessage(e.target.value)}
// // // //                 />
// // // //                 <button
// // // //                   type="submit"
// // // //                   className={`bg-blue-600 text-white px-4 rounded-r-lg transition ${
// // // //                     message.trim() ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'
// // // //                   }`}
// // // //                   disabled={!message.trim()}
// // // //                 >
// // // //                   <Send size={18} />
// // // //                 </button>
// // // //               </form>
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // // 'use client';

// // // // import { useState, useEffect, useRef } from 'react';
// // // // import { Bot, Send, X, Minimize2, Maximize2, Zap, Cpu } from 'lucide-react';

// // // // // Robot AI Chat Bot Component
// // // // export default function RobotChatBot() {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [isMinimized, setIsMinimized] = useState(false);
// // // //   const [message, setMessage] = useState('');
// // // //   const [messages, setMessages] = useState([
// // // //     { text: 'INITIALIZING NEURAL INTERFACE... READY FOR HUMAN INTERACTION.', isBot: true }
// // // //   ]);
// // // //   const [isTyping, setIsTyping] = useState(false);
// // // //   const [botActivity, setBotActivity] = useState(0);
// // // //   const messagesEndRef = useRef(null);
// // // //   const botIconRef = useRef(null);

// // // //   // Auto-scroll to bottom of messages
// // // //   const scrollToBottom = () => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // // //   };

// // // //   // Animate bot icon when active
// // // //   useEffect(() => {
// // // //     let interval;
// // // //     if (isTyping && botIconRef.current) {
// // // //       interval = setInterval(() => {
// // // //         setBotActivity((prev) => (prev + 1) % 100);
// // // //       }, 50);
// // // //     }
// // // //     return () => clearInterval(interval);
// // // //   }, [isTyping]);

// // // //   useEffect(() => {
// // // //     if (isOpen) {
// // // //       scrollToBottom();
// // // //     }
// // // //   }, [messages, isOpen]);

// // // //   // Toggle chat open/closed with animation
// // // //   const toggleChat = () => {
// // // //     setIsOpen(!isOpen);
// // // //     setIsMinimized(false);
// // // //   };

// // // //   // Toggle minimize/maximize
// // // //   const toggleMinimize = () => {
// // // //     setIsMinimized(!isMinimized);
// // // //   };

// // // //   // Generate unique "thinking" phrases for the bot
// // // //   const getBotThinkingPhrase = () => {
// // // //     const phrases = [
// // // //       "PROCESSING INPUT...",
// // // //       "ANALYZING QUERY...",
// // // //       "COMPUTING RESPONSE...",
// // // //       "ACCESSING DATABASE...",
// // // //       "NEURAL NETWORK ACTIVE...",
// // // //     ];
// // // //     return phrases[Math.floor(Math.random() * phrases.length)];
// // // //   };

// // // //   // Handle sending a message
// // // //   const handleSendMessage = () => {
// // // //     if (!message.trim()) return;
    
// // // //     // Add user message
// // // //     setMessages(prev => [...prev, { text: message, isBot: false }]);
// // // //     setMessage('');
    
// // // //     // Simulate bot thinking with custom phrases
// // // //     setIsTyping(true);
    
// // // //     // Add intermediate "thinking" message
// // // //     setTimeout(() => {
// // // //       setMessages(prev => [...prev, { 
// // // //         text: getBotThinkingPhrase(), 
// // // //         isBot: true,
// // // //         isProcessing: true
// // // //       }]);
// // // //     }, 300);
    
// // // //     // Replace with actual response after delay
// // // //     setTimeout(() => {
// // // //       // Remove the processing message
// // // //       setMessages(prev => prev.filter(msg => !msg.isProcessing));
      
// // // //       setIsTyping(false);
// // // //       setMessages(prev => [...prev, { 
// // // //         text: `I've analyzed your request: "${message}". My algorithms indicate this requires further human collaboration. How else may I assist?`, 
// // // //         isBot: true 
// // // //       }]);
// // // //     }, 2500);
// // // //   };

// // // //   // Handle key press for sending with Enter key
// // // //   const handleKeyPress = (e) => {
// // // //     if (e.key === 'Enter') {
// // // //       e.preventDefault();
// // // //       handleSendMessage();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="fixed bottom-6 right-6 z-50 font-mono">
// // // //       {/* Chat button - with pulsing effect */}
// // // //       {!isOpen && (
// // // //         <button 
// // // //           onClick={toggleChat}
// // // //           className="bg-black hover:bg-gray-800 text-green-400 rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 relative"
// // // //           aria-label="Open AI chat"
// // // //         >
// // // //           <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-ping"></div>
// // // //           <div className="relative">
// // // //             <Bot size={24} className="animate-pulse" />
// // // //           </div>
// // // //         </button>
// // // //       )}

// // // //       {/* Chat window with entrance animation */}
// // // //       {isOpen && (
// // // //         <div 
// // // //           className={`bg-gray-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-500 flex flex-col border border-green-400
// // // //                       ${isMinimized ? 'h-14 w-72' : 'h-96 w-80 md:w-96'}`}
// // // //           style={{
// // // //             animation: 'slideIn 0.3s ease-out',
// // // //             boxShadow: '0 0 15px rgba(74, 222, 128, 0.4)'
// // // //           }}
// // // //         >
// // // //           {/* Chat header */}
// // // //           <div className="bg-black text-green-400 p-3 flex justify-between items-center">
// // // //             <div className="flex items-center space-x-2">
// // // //               <div className="relative" ref={botIconRef}>
// // // //                 <Bot size={20} style={{ transform: isTyping ? `rotate(${botActivity * 3.6}deg)` : 'none' }} />
// // // //                 {isTyping && (
// // // //                   <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
// // // //                 )}
// // // //               </div>
// // // //               <h3 className="font-medium tracking-wider">NEURAL_INTERFACE</h3>
// // // //             </div>
// // // //             <div className="flex space-x-2">
// // // //               <button 
// // // //                 onClick={toggleMinimize} 
// // // //                 className="hover:bg-gray-800 rounded p-1 transition-colors"
// // // //                 aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
// // // //               >
// // // //                 {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
// // // //               </button>
// // // //               <button 
// // // //                 onClick={toggleChat} 
// // // //                 className="hover:bg-gray-800 rounded p-1 transition-colors"
// // // //                 aria-label="Close chat"
// // // //               >
// // // //                 <X size={16} />
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Chat content - only show when not minimized */}
// // // //           {!isMinimized && (
// // // //             <>
// // // //               {/* System status indicator */}
// // // //               <div className="bg-black px-3 py-1 text-xs flex justify-between items-center border-b border-gray-800">
// // // //                 <div className="flex items-center space-x-1">
// // // //                   <Cpu size={12} className="text-green-400" />
// // // //                   <span className="text-green-400">SYSTEM ACTIVE</span>
// // // //                 </div>
// // // //                 <div className="flex items-center space-x-1">
// // // //                   <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
// // // //                   <span className="text-green-400 text-xs">ONLINE</span>
// // // //                 </div>
// // // //               </div>
            
// // // //               {/* Messages area with grid background */}
// // // //               <div 
// // // //                 className="flex-1 overflow-y-auto p-4 bg-gray-900 relative"
// // // //                 style={{
// // // //                   backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
// // // //                   backgroundSize: '20px 20px'
// // // //                 }}
// // // //               >
// // // //                 {messages.map((msg, index) => (
// // // //                   <div 
// // // //                     key={index} 
// // // //                     className={`mb-3 max-w-3/4 ${msg.isBot ? 'mr-auto' : 'ml-auto'}`}
// // // //                   >
// // // //                     <div 
// // // //                       className={`p-3 rounded-lg ${
// // // //                         msg.isBot 
// // // //                           ? 'bg-gray-800 text-green-400 border-l-2 border-green-400 font-mono tracking-wider' 
// // // //                           : 'bg-gray-700 text-white border-r-2 border-green-200 rounded-br-none'
// // // //                       } ${msg.isProcessing ? 'animate-pulse' : ''}`}
// // // //                       style={{
// // // //                         animation: `${index === messages.length - 1 ? 'fadeIn 0.3s ease-out' : 'none'}`,
// // // //                         boxShadow: msg.isBot ? '0 0 5px rgba(74, 222, 128, 0.2)' : 'none'
// // // //                       }}
// // // //                     >
// // // //                       {msg.text}
// // // //                     </div>
// // // //                     {msg.isBot && !msg.isProcessing && (
// // // //                       <div className="ml-2 mt-1 text-xs text-gray-500 flex items-center">
// // // //                         <Zap size={10} className="mr-1 text-green-400" />
// // // //                         <span>NEURAL ENGINE</span>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 ))}
// // // //                 {isTyping && !messages.find(msg => msg.isProcessing) && (
// // // //                   <div className="flex space-x-1 p-3 bg-gray-800 text-green-400 rounded-lg max-w-xs mr-auto border-l-2 border-green-400">
// // // //                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
// // // //                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
// // // //                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
// // // //                   </div>
// // // //                 )}
// // // //                 <div ref={messagesEndRef} />
// // // //               </div>

// // // //               {/* Message input with futuristic design */}
// // // //               <div className="border-t border-gray-800 p-3 bg-black">
// // // //                 <div className="relative flex">
// // // //                   <input
// // // //                     type="text"
// // // //                     placeholder="Input command..."
// // // //                     className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-green-400 placeholder-gray-500 font-mono"
// // // //                     value={message}
// // // //                     onChange={(e) => setMessage(e.target.value)}
// // // //                     onKeyPress={handleKeyPress}
// // // //                   />
// // // //                   <button
// // // //                     onClick={handleSendMessage}
// // // //                     className={`bg-gray-800 text-green-400 px-4 py-2 rounded-r-lg transition-all ${
// // // //                       message.trim() ? 'hover:bg-gray-700 border-green-400 border-r border-t border-b' : 'opacity-50 cursor-not-allowed'
// // // //                     }`}
// // // //                     disabled={!message.trim()}
// // // //                   >
// // // //                     <Send size={18} className={message.trim() ? 'animate-pulse' : ''} />
// // // //                   </button>
// // // //                 </div>
                
// // // //                 {/* Terminal-like progress bar */}
// // // //                 <div className="mt-2 h-1 w-full bg-gray-800 rounded overflow-hidden">
// // // //                   <div 
// // // //                     className="h-full bg-green-400 transition-all duration-500" 
// // // //                     style={{ width: isTyping ? `${botActivity}%` : '5%' }}
// // // //                   ></div>
// // // //                 </div>
// // // //               </div>
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //       )}
      
// // // //       {/* Global styles for custom animations */}
// // // //       <style jsx global>{`
// // // //         @keyframes slideIn {
// // // //           from { transform: translateY(20px); opacity: 0; }
// // // //           to { transform: translateY(0); opacity: 1; }
// // // //         }
        
// // // //         @keyframes fadeIn {
// // // //           from { opacity: 0; }
// // // //           to { opacity: 1; }
// // // //         }
        
// // // //         .delay-75 {
// // // //           animation-delay: 75ms;
// // // //         }
        
// // // //         .delay-150 {
// // // //           animation-delay: 150ms;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // 'use client';

// // // import { useState, useEffect, useRef } from 'react';
// // // import { Bot, Send, X, Minimize2, Maximize2, Zap, Cpu, ChevronUp } from 'lucide-react';

// // // // Robot AI Chat Bot Component with Improved Design
// // // export default function RobotChatBot() {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [isMinimized, setIsMinimized] = useState(false);
// // //   const [message, setMessage] = useState('');
// // //   const [messages, setMessages] = useState([
// // //     { text: 'INITIALIZING NEURAL INTERFACE... READY FOR HUMAN INTERACTION.', isBot: true }
// // //   ]);
// // //   const [isTyping, setIsTyping] = useState(false);
// // //   const [botActivity, setBotActivity] = useState(0);
// // //   const messagesEndRef = useRef(null);
// // //   const botIconRef = useRef(null);
// // //   const inputRef = useRef(null);

// // //   // Auto-scroll to bottom of messages
// // //   const scrollToBottom = () => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // //   };

// // //   // Animate bot icon when active
// // //   useEffect(() => {
// // //     let interval;
// // //     if (isTyping && botIconRef.current) {
// // //       interval = setInterval(() => {
// // //         setBotActivity((prev) => (prev + 1) % 100);
// // //       }, 50);
// // //     }
// // //     return () => clearInterval(interval);
// // //   }, [isTyping]);

// // //   useEffect(() => {
// // //     if (isOpen) {
// // //       scrollToBottom();
// // //       if (!isMinimized) {
// // //         // Focus input when chat opens
// // //         setTimeout(() => {
// // //           inputRef.current?.focus();
// // //         }, 300);
// // //       }
// // //     }
// // //   }, [messages, isOpen, isMinimized]);

// // //   // Toggle chat open/closed with animation
// // //   const toggleChat = () => {
// // //     setIsOpen(!isOpen);
// // //     setIsMinimized(false);
// // //   };

// // //   // Toggle minimize/maximize
// // //   const toggleMinimize = () => {
// // //     setIsMinimized(!isMinimized);
// // //   };

// // //   // Generate unique "thinking" phrases for the bot
// // //   const getBotThinkingPhrase = () => {
// // //     const phrases = [
// // //       "PROCESSING INPUT...",
// // //       "ANALYZING QUERY...",
// // //       "COMPUTING RESPONSE...",
// // //       "ACCESSING DATABASE...",
// // //       "NEURAL NETWORK ACTIVE...",
// // //     ];
// // //     return phrases[Math.floor(Math.random() * phrases.length)];
// // //   };

// // //   // Handle sending a message
// // //   const handleSendMessage = () => {
// // //     if (!message.trim()) return;
    
// // //     // Add user message
// // //     setMessages(prev => [...prev, { text: message, isBot: false }]);
// // //     setMessage('');
    
// // //     // Simulate bot thinking with custom phrases
// // //     setIsTyping(true);
    
// // //     // Add intermediate "thinking" message
// // //     setTimeout(() => {
// // //       setMessages(prev => [...prev, { 
// // //         text: getBotThinkingPhrase(), 
// // //         isBot: true,
// // //         isProcessing: true
// // //       }]);
// // //     }, 300);
    
// // //     // Replace with actual response after delay
// // //     setTimeout(() => {
// // //       // Remove the processing message
// // //       setMessages(prev => prev.filter(msg => !msg.isProcessing));
      
// // //       setIsTyping(false);
// // //       setMessages(prev => [...prev, { 
// // //         text: `I've analyzed your request: "${message}". My algorithms indicate this requires further human collaboration. How else may I assist?`, 
// // //         isBot: true 
// // //       }]);
// // //     }, 2500);
// // //   };

// // //   // Handle key press for sending with Enter key
// // //   const handleKeyPress = (e) => {
// // //     if (e.key === 'Enter') {
// // //       e.preventDefault();
// // //       handleSendMessage();
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed bottom-6 right-6 z-50 font-mono">
// // //       {/* Chat button - with pulsing effect */}
// // //       {!isOpen && (
// // //         <button 
// // //           onClick={toggleChat}
// // //           className="bg-black hover:bg-gray-900 text-[#07ebbd] rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 relative"
// // //           aria-label="Open AI chat"
// // //         >
// // //           <div className="absolute inset-0 bg-[#07ebbd] rounded-full opacity-20 animate-ping"></div>
// // //           <div className="relative">
// // //             <Bot size={24} className="animate-pulse" />
// // //           </div>
// // //         </button>
// // //       )}

// // //       {/* Chat window with entrance animation */}
// // //       {isOpen && (
// // //         <div 
// // //           className={`bg-black rounded-lg shadow-2xl overflow-hidden transition-all duration-500 flex flex-col border border-[#07ebbd]
// // //                       ${isMinimized ? 'h-14 w-72' : 'h-96 w-80 md:w-96'}`}
// // //           style={{
// // //             animation: 'slideIn 0.3s ease-out',
// // //             boxShadow: '0 0 20px rgba(7, 235, 189, 0.35)'
// // //           }}
// // //         >
// // //           {/* Chat header */}
// // //           <div className="bg-black text-[#07ebbd] p-3 flex justify-between items-center border-b border-gray-800">
// // //             <div className="flex items-center space-x-2">
// // //               <div className="relative" ref={botIconRef}>
// // //                 <Bot size={20} className={isTyping ? 'animate-pulse' : ''} />
// // //                 {isTyping && (
// // //                   <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#07ebbd] rounded-full animate-pulse"></span>
// // //                 )}
// // //               </div>
// // //               <h3 className="font-medium tracking-wider">NEURAL_INTERFACE</h3>
// // //             </div>
// // //             <div className="flex space-x-2">
// // //               <button 
// // //                 onClick={toggleMinimize} 
// // //                 className="hover:bg-gray-900 rounded p-1 transition-colors"
// // //                 aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
// // //               >
// // //                 {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
// // //               </button>
// // //               <button 
// // //                 onClick={toggleChat} 
// // //                 className="hover:bg-gray-900 rounded p-1 transition-colors"
// // //                 aria-label="Close chat"
// // //               >
// // //                 <X size={16} />
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Chat content - only show when not minimized */}
// // //           {!isMinimized && (
// // //             <>
// // //               {/* System status indicator */}
// // //               <div className="bg-gray-900 px-3 py-1 text-xs flex justify-between items-center">
// // //                 <div className="flex items-center space-x-1">
// // //                   <Cpu size={12} className="text-[#07ebbd]" />
// // //                   <span className="text-[#07ebbd]">SYSTEM ACTIVE</span>
// // //                 </div>
// // //                 <div className="flex items-center space-x-1">
// // //                   <span className="h-2 w-2 bg-[#07ebbd] rounded-full animate-pulse"></span>
// // //                   <span className="text-[#07ebbd] text-xs">ONLINE</span>
// // //                 </div>
// // //               </div>
            
// // //               {/* Messages area with subtle grid background */}
// // //               <div 
// // //                 className="flex-1 overflow-y-auto p-4 bg-gray-900 relative"
// // //                 style={{
// // //                   backgroundImage: 'radial-gradient(circle, rgba(7, 235, 189, 0.03) 1px, transparent 1px)',
// // //                   backgroundSize: '20px 20px'
// // //                 }}
// // //               >
// // //                 {messages.map((msg, index) => (
// // //                   <div 
// // //                     key={index} 
// // //                     className={`mb-3 max-w-3/4 ${msg.isBot ? 'mr-auto' : 'ml-auto'}`}
// // //                   >
// // //                     <div 
// // //                       className={`p-3 rounded-lg ${
// // //                         msg.isBot 
// // //                           ? 'bg-black text-[#07ebbd] border-l-2 border-[#07ebbd] font-mono tracking-wider' 
// // //                           : 'bg-gray-800 text-white border-r-2 border-[#07ebbd] rounded-br-none'
// // //                       } ${msg.isProcessing ? 'animate-pulse' : ''}`}
// // //                       style={{
// // //                         animation: `${index === messages.length - 1 ? 'fadeIn 0.3s ease-out' : 'none'}`,
// // //                         boxShadow: msg.isBot ? '0 0 8px rgba(7, 235, 189, 0.15)' : 'none'
// // //                       }}
// // //                     >
// // //                       {msg.text}
// // //                     </div>
// // //                     {msg.isBot && !msg.isProcessing && (
// // //                       <div className="ml-2 mt-1 text-xs text-gray-400 flex items-center">
// // //                         <Zap size={10} className="mr-1 text-[#07ebbd]" />
// // //                         <span>NEURAL ENGINE</span>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //                 {isTyping && !messages.find(msg => msg.isProcessing) && (
// // //                   <div className="flex space-x-1 p-3 bg-black text-[#07ebbd] rounded-lg max-w-xs mr-auto border-l-2 border-[#07ebbd]">
// // //                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse"></div>
// // //                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse delay-75"></div>
// // //                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse delay-150"></div>
// // //                   </div>
// // //                 )}
// // //                 <div ref={messagesEndRef} />
// // //               </div>

// // //               {/* Message input with improved design */}
// // //               <div className="border-t border-gray-800 p-3 bg-black">
// // //                 <div className="relative flex">
// // //                   <input
// // //                     ref={inputRef}
// // //                     type="text"
// // //                     placeholder="Input command..."
// // //                     className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#07ebbd] border-y border-l border-[#07ebbd] placeholder-gray-500 font-mono"
// // //                     value={message}
// // //                     onChange={(e) => setMessage(e.target.value)}
// // //                     onKeyPress={handleKeyPress}
// // //                   />
// // //                   <button
// // //                     onClick={handleSendMessage}
// // //                     className={`bg-gray-900 text-[#07ebbd] px-4 py-2 rounded-r-lg transition-all ${
// // //                       message.trim() ? 'hover:bg-gray-800 border-[#07ebbd] border-r border-t border-b' : 'opacity-50 cursor-not-allowed'
// // //                     }`}
// // //                     disabled={!message.trim()}
// // //                     aria-label="Send message"
// // //                   >
// // //                     <Send size={18} className={message.trim() ? 'animate-pulse' : ''} />
// // //                   </button>
// // //                 </div>
                
// // //                 {/* Terminal-like progress bar */}
// // //                 <div className="mt-2 h-1 w-full bg-gray-900 rounded overflow-hidden">
// // //                   <div 
// // //                     className="h-full bg-[#07ebbd] transition-all duration-500" 
// // //                     style={{ width: isTyping ? `${botActivity}%` : '5%' }}
// // //                   ></div>
// // //                 </div>
// // //               </div>
// // //             </>
// // //           )}
          
// // //           {/* Minimized state with message preview */}
// // //           {isMinimized && (
// // //             <div className="flex items-center justify-between px-3 h-full">
// // //               <div className="flex items-center space-x-2 overflow-hidden">
// // //                 <ChevronUp size={14} className="text-[#07ebbd] animate-bounce" />
// // //                 <p className="text-[#07ebbd] text-sm truncate">
// // //                   {messages.length > 0 ? messages[messages.length - 1].text.substring(0, 30) + '...' : 'Chat minimized'}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       )}
      
// // //       {/* Global styles for custom animations */}
// // //       <style jsx global>{`
// // //         @keyframes slideIn {
// // //           from { transform: translateY(20px); opacity: 0; }
// // //           to { transform: translateY(0); opacity: 1; }
// // //         }
        
// // //         @keyframes fadeIn {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }
        
// // //         .delay-75 {
// // //           animation-delay: 75ms;
// // //         }
        
// // //         .delay-150 {
// // //           animation-delay: 150ms;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }
// // 'use client';

// // import { useState, useEffect, useRef } from 'react';
// // import { Bot, Send, X, Minimize2, Maximize2, Zap, Cpu, ChevronUp, Coffee, Briefcase, Calendar } from 'lucide-react';

// // // Coworking Space Assistant Bot Component
// // export default function CoworkingSpaceBot() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isMinimized, setIsMinimized] = useState(false);
// //   const [message, setMessage] = useState('');
// //   const [messages, setMessages] = useState([
// //     { text: 'Welcome to our coworking space! I can help with bookings, amenities, or any questions you have. How can I assist you today?', isBot: true }
// //   ]);
// //   const [isTyping, setIsTyping] = useState(false);
// //   const [botActivity, setBotActivity] = useState(0);
// //   const messagesEndRef = useRef(null);
// //   const botIconRef = useRef(null);
// //   const inputRef = useRef(null);

// //   // Auto-scroll to bottom of messages
// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   // Animate bot icon when active
// //   useEffect(() => {
// //     let interval;
// //     if (isTyping && botIconRef.current) {
// //       interval = setInterval(() => {
// //         setBotActivity((prev) => (prev + 1) % 100);
// //       }, 50);
// //     }
// //     return () => clearInterval(interval);
// //   }, [isTyping]);

// //   useEffect(() => {
// //     if (isOpen) {
// //       scrollToBottom();
// //       if (!isMinimized) {
// //         // Focus input when chat opens
// //         setTimeout(() => {
// //           inputRef.current?.focus();
// //         }, 300);
// //       }
// //     }
// //   }, [messages, isOpen, isMinimized]);

// //   // Toggle chat open/closed with animation
// //   const toggleChat = () => {
// //     setIsOpen(!isOpen);
// //     setIsMinimized(false);
// //   };

// //   // Toggle minimize/maximize
// //   const toggleMinimize = () => {
// //     setIsMinimized(!isMinimized);
// //   };

// //   // Coworking space specific responses
// //   const getCoworkingResponse = (userMessage) => {
// //     const lowerMessage = userMessage.toLowerCase();
    
// //     if (lowerMessage.includes('book') || lowerMessage.includes('reserve') || lowerMessage.includes('meeting room')) {
// //       return "You can book meeting rooms through our app or at the front desk. Would you like me to guide you through the booking process?";
// //     }
    
// //     if (lowerMessage.includes('wifi') || lowerMessage.includes('internet') || lowerMessage.includes('password')) {
// //       return "Our WiFi network is 'CoworkConnect'. The password is available at reception or on your membership card.";
// //     }
    
// //     if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('close')) {
// //       return "Our coworking space is open 24/7 for members. Guest hours are 8am-8pm on weekdays.";
// //     }
    
// //     if (lowerMessage.includes('print') || lowerMessage.includes('printer') || lowerMessage.includes('scan')) {
// //       return "Printers are located on each floor near the kitchen area. Use your member card to scan and print.";
// //     }
    
// //     if (lowerMessage.includes('coffee') || lowerMessage.includes('drink') || lowerMessage.includes('food')) {
// //       return "We offer complimentary coffee, tea, and water. The kitchen on the 2nd floor has snacks available for purchase.";
// //     }
    
// //     if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
// //       return "Hello! I'm your coworking space assistant. What can I help you with today?";
// //     }
    
// //     return `Thanks for your question about "${userMessage}". I'll connect you with our community manager for more specific information. Meanwhile, is there anything else I can help with?`;
// //   };

// //   // Handle sending a message
// //   const handleSendMessage = () => {
// //     if (!message.trim()) return;
    
// //     // Add user message
// //     setMessages(prev => [...prev, { text: message, isBot: false }]);
// //     const userMessage = message;
// //     setMessage('');
    
// //     // Simulate bot thinking
// //     setIsTyping(true);
    
// //     // Add intermediate "thinking" message
// //     setTimeout(() => {
// //       setMessages(prev => [...prev, { 
// //         text: "Thinking...", 
// //         isBot: true,
// //         isProcessing: true
// //       }]);
// //     }, 300);
    
// //     // Replace with actual response after delay
// //     setTimeout(() => {
// //       // Remove the processing message
// //       setMessages(prev => prev.filter(msg => !msg.isProcessing));
      
// //       setIsTyping(false);
// //       setMessages(prev => [...prev, { 
// //         text: getCoworkingResponse(userMessage), 
// //         isBot: true 
// //       }]);
// //     }, 1500);
// //   };

// //   // Handle key press for sending with Enter key
// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter') {
// //       e.preventDefault();
// //       handleSendMessage();
// //     }
// //   };

// //   return (
// //     <div className="fixed bottom-6 right-6 z-50 font-sans">
// //       {/* Chat button - with pulsing effect */}
// //       {!isOpen && (
// //         <button 
// //           onClick={toggleChat}
// //           className="bg-black hover:bg-gray-900 text-[#07ebbd] rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 relative"
// //           aria-label="Open coworking space assistant"
// //         >
// //           <div className="absolute inset-0 bg-[#07ebbd] rounded-full opacity-20 animate-ping"></div>
// //           <div className="relative">
// //             <Bot size={24} className="animate-pulse" />
// //           </div>
// //           {/* Label to clearly show purpose */}
// //           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-[#07ebbd] px-3 py-1 rounded-full text-xs whitespace-nowrap border border-[#07ebbd]">
// //             Ask me anything!
// //           </div>
// //         </button>
// //       )}

// //       {/* Chat window with entrance animation */}
// //       {isOpen && (
// //         <div 
// //           className={`bg-black rounded-lg shadow-2xl overflow-hidden transition-all duration-500 flex flex-col border border-[#07ebbd]
// //                       ${isMinimized ? 'h-14 w-72' : 'h-96 w-80 md:w-96'}`}
// //           style={{
// //             animation: 'slideIn 0.3s ease-out',
// //             boxShadow: '0 0 20px rgba(7, 235, 189, 0.35)'
// //           }}
// //         >
// //           {/* Chat header */}
// //           <div className="bg-black text-[#07ebbd] p-3 flex justify-between items-center border-b border-gray-800">
// //             <div className="flex items-center space-x-2">
// //               <div className="relative" ref={botIconRef}>
// //                 <Bot size={20} className={isTyping ? 'animate-pulse' : ''} />
// //                 {isTyping && (
// //                   <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#07ebbd] rounded-full animate-pulse"></span>
// //                 )}
// //               </div>
// //               <h3 className="font-medium">Coworking Assistant</h3>
// //             </div>
// //             <div className="flex space-x-2">
// //               <button 
// //                 onClick={toggleMinimize} 
// //                 className="hover:bg-gray-900 rounded p-1 transition-colors"
// //                 aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
// //               >
// //                 {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
// //               </button>
// //               <button 
// //                 onClick={toggleChat} 
// //                 className="hover:bg-gray-900 rounded p-1 transition-colors"
// //                 aria-label="Close chat"
// //               >
// //                 <X size={16} />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Chat content - only show when not minimized */}
// //           {!isMinimized && (
// //             <>
// //               {/* Quick access buttons */}
// //               <div className="bg-gray-900 px-3 py-2 flex justify-center space-x-4 text-xs">
// //                 <button 
// //                   className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
// //                   onClick={() => {
// //                     setMessage("How do I book a meeting room?");
// //                     setTimeout(handleSendMessage, 100);
// //                   }}
// //                 >
// //                   <Calendar size={16} />
// //                   <span>Booking</span>
// //                 </button>
// //                 <button 
// //                   className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
// //                   onClick={() => {
// //                     setMessage("What are the opening hours?");
// //                     setTimeout(handleSendMessage, 100);
// //                   }}
// //                 >
// //                   <Briefcase size={16} />
// //                   <span>Hours</span>
// //                 </button>
// //                 <button 
// //                   className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
// //                   onClick={() => {
// //                     setMessage("Where can I get coffee?");
// //                     setTimeout(handleSendMessage, 100);
// //                   }}
// //                 >
// //                   <Coffee size={16} />
// //                   <span>Amenities</span>
// //                 </button>
// //               </div>
            
// //               {/* Messages area with subtle grid background */}
// //               <div 
// //                 className="flex-1 overflow-y-auto p-4 bg-gray-900 relative"
// //                 style={{
// //                   backgroundImage: 'radial-gradient(circle, rgba(7, 235, 189, 0.03) 1px, transparent 1px)',
// //                   backgroundSize: '20px 20px'
// //                 }}
// //               >
// //                 {messages.map((msg, index) => (
// //                   <div 
// //                     key={index} 
// //                     className={`mb-3 max-w-3/4 ${msg.isBot ? 'mr-auto' : 'ml-auto'}`}
// //                   >
// //                     <div 
// //                       className={`p-3 rounded-lg ${
// //                         msg.isBot 
// //                           ? 'bg-black text-[#07ebbd] border-l-2 border-[#07ebbd]' 
// //                           : 'bg-gray-800 text-white border-r-2 border-[#07ebbd] rounded-br-none'
// //                       } ${msg.isProcessing ? 'animate-pulse' : ''}`}
// //                       style={{
// //                         animation: `${index === messages.length - 1 ? 'fadeIn 0.3s ease-out' : 'none'}`,
// //                         boxShadow: msg.isBot ? '0 0 8px rgba(7, 235, 189, 0.15)' : 'none'
// //                       }}
// //                     >
// //                       {msg.text}
// //                     </div>
// //                     {msg.isBot && !msg.isProcessing && (
// //                       <div className="ml-2 mt-1 text-xs text-gray-400 flex items-center">
// //                         <Zap size={10} className="mr-1 text-[#07ebbd]" />
// //                         <span>ASSISTANT</span>
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))}
// //                 {isTyping && !messages.find(msg => msg.isProcessing) && (
// //                   <div className="flex space-x-1 p-3 bg-black text-[#07ebbd] rounded-lg max-w-xs mr-auto border-l-2 border-[#07ebbd]">
// //                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse"></div>
// //                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse delay-75"></div>
// //                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse delay-150"></div>
// //                   </div>
// //                 )}
// //                 <div ref={messagesEndRef} />
// //               </div>

// //               {/* Message input with improved design */}
// //               <div className="border-t border-gray-800 p-3 bg-black">
// //                 <div className="relative flex">
// //                   <input
// //                     ref={inputRef}
// //                     type="text"
// //                     placeholder="Ask about bookings, wifi, hours..."
// //                     className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#07ebbd] border-y border-l border-[#07ebbd] placeholder-gray-500"
// //                     value={message}
// //                     onChange={(e) => setMessage(e.target.value)}
// //                     onKeyPress={handleKeyPress}
// //                   />
// //                   <button
// //                     onClick={handleSendMessage}
// //                     className={`bg-gray-900 text-[#07ebbd] px-4 py-2 rounded-r-lg transition-all ${
// //                       message.trim() ? 'hover:bg-gray-800 border-[#07ebbd] border-r border-t border-b' : 'opacity-50 cursor-not-allowed'
// //                     }`}
// //                     disabled={!message.trim()}
// //                     aria-label="Send message"
// //                   >
// //                     <Send size={18} className={message.trim() ? 'animate-pulse' : ''} />
// //                   </button>
// //                 </div>
                
// //                 {/* Progress bar */}
// //                 <div className="mt-2 h-1 w-full bg-gray-900 rounded overflow-hidden">
// //                   <div 
// //                     className="h-full bg-[#07ebbd] transition-all duration-500" 
// //                     style={{ width: isTyping ? `${botActivity}%` : '5%' }}
// //                   ></div>
// //                 </div>
// //               </div>
// //             </>
// //           )}
          
// //           {/* Minimized state with message preview */}
// //           {isMinimized && (
// //             <div className="flex items-center justify-between px-3 h-full">
// //               <div className="flex items-center space-x-2 overflow-hidden">
// //                 <ChevronUp size={14} className="text-[#07ebbd] animate-bounce" />
// //                 <p className="text-[#07ebbd] text-sm truncate">
// //                   {messages.length > 0 ? messages[messages.length - 1].text.substring(0, 30) + '...' : 'Chat minimized'}
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}
      
// //       {/* Global styles for custom animations */}
// //       <style jsx global>{`
// //         @keyframes slideIn {
// //           from { transform: translateY(20px); opacity: 0; }
// //           to { transform: translateY(0); opacity: 1; }
// //         }
        
// //         @keyframes fadeIn {
// //           from { opacity: 0; }
// //           to { opacity: 1; }
// //         }
        
// //         .delay-75 {
// //           animation-delay: 75ms;
// //         }
        
// //         .delay-150 {
// //           animation-delay: 150ms;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   Bot,
//   Send,
//   X,
//   Minimize2,
//   Maximize2,
//   Zap,
//   Cpu,
//   ChevronUp,
//   Coffee,
//   Briefcase,
//   Calendar,
// } from 'lucide-react';

// export default function CoworkingSpaceBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([
//     {
//       text:
//         'Welcome to our coworking space! I can help with bookings, amenities, or any questions you have. How can I assist you today?',
//       isBot: true,
//       isProcessing: false,
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [botActivity, setBotActivity] = useState(0);
//   const [userId, setUserId] = useState('');
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const apiUrl = 'https://0ed4-34-125-141-95.ngrok-free.app';

//   // Scroll helper
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // Typing‐dot animation
//   useEffect(() => {
//     let interval;
//     if (isTyping) {
//       interval = setInterval(() => {
//         setBotActivity((prev) => (prev + 1) % 100);
//       }, 50);
//     }
//     return () => clearInterval(interval);
//   }, [isTyping]);

//   // Initialize userId once
//   useEffect(() => {
//     let stored = localStorage.getItem('userId');
//     if (!stored) {
//       stored = uuidv4();
//       localStorage.setItem('userId', stored);
//     }
//     setUserId(stored);
//   }, []);

//   // After messages change, scroll down and focus
//   useEffect(() => {
//     if (isOpen) {
//       scrollToBottom();
//       if (!isMinimized) {
//         setTimeout(() => inputRef.current?.focus(), 300);
//       }
//     }
//   }, [messages, isOpen, isMinimized]);

//   // Send message to AI backend
//   const handleSendMessage = async () => {
//     if (!message.trim() || isTyping) return;

//     const userText = message.trim();
//     setMessages((prev) => [
//       ...prev,
//       { text: userText, isBot: false, isProcessing: false },
//     ]);
//     setMessage('');
//     setIsTyping(true);

//     // show intermediate "thinking"
//     setMessages((prev) => [
//       ...prev,
//       { text: 'Thinking...', isBot: true, isProcessing: true },
//     ]);

//     try {
//       const res = await fetch(`${apiUrl}/generate`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId, prompt: userText }),
//       });
//       let botReply = 'Sorry, I didn’t get that.';
//       if (res.ok) {
//         const data = await res.json();
//         if (data.response) botReply = data.response;
//       }
//       // remove processing placeholder
//       setMessages((prev) => prev.filter((m) => !m.isProcessing));
//       setMessages((prev) => [
//         ...prev,
//         { text: botReply, isBot: true, isProcessing: false },
//       ]);
//     } catch (err) {
//       console.error('Send error:', err);
//       setMessages((prev) => prev.filter((m) => !m.isProcessing));
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: 'Connection error. Please try again later.',
//           isBot: true,
//           isProcessing: false,
//         },
//       ]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const toggleChat = () => {
//     setIsOpen((o) => !o);
//     setIsMinimized(false);
//   };
//   const toggleMinimize = () => setIsMinimized((m) => !m);

//   return (
//     <div className="fixed bottom-6 right-6 z-50 font-sans">
//       {!isOpen && (
//         <button
//           onClick={toggleChat}
//           className="bg-black hover:bg-gray-900 text-[#07ebbd] rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 relative"
//           aria-label="Open coworking space assistant"
//         >
//           <div className="absolute inset-0 bg-[#07ebbd] rounded-full opacity-20 animate-ping"></div>
//           <div className="relative">
//             <Bot size={24} className="animate-pulse" />
//           </div>
//           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-[#07ebbd] px-3 py-1 rounded-full text-xs whitespace-nowrap border border-[#07ebbd]">
//             Ask me anything!
//           </div>
//         </button>
//       )}

//       {isOpen && (
//         <div
//           className={`bg-black rounded-lg shadow-2xl overflow-hidden transition-all duration-500 flex flex-col border border-[#07ebbd]
//                       ${isMinimized ? 'h-14 w-72' : 'h-96 w-80 md:w-96'}`}
//           style={{
//             animation: 'slideIn 0.3s ease-out',
//             boxShadow: '0 0 20px rgba(7, 235, 189, 0.35)',
//           }}
//         >
//           <div className="bg-black text-[#07ebbd] p-3 flex justify-between items-center border-b border-gray-800">
//             <div className="flex items-center space-x-2" ref={messagesEndRef}>
//               <div>
//                 <Bot size={20} className={isTyping ? 'animate-pulse' : ''} />
//                 {isTyping && (
//                   <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#07ebbd] rounded-full animate-pulse"></span>
//                 )}
//               </div>
//               <h3 className="font-medium">Coworking Assistant</h3>
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 onClick={toggleMinimize}
//                 className="hover:bg-gray-900 rounded p-1 transition-colors"
//                 aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
//               >
//                 {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
//               </button>
//               <button
//                 onClick={toggleChat}
//                 className="hover:bg-gray-900 rounded p-1 transition-colors"
//                 aria-label="Close chat"
//               >
//                 <X size={16} />
//               </button>
//             </div>
//           </div>

//           {!isMinimized && (
//             <>
//               <div className="bg-gray-900 px-3 py-2 flex justify-center space-x-4 text-xs">
//                 <button
//                   className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
//                   onClick={() => {
//                     setMessage('How do I book a meeting room?');
//                     setTimeout(handleSendMessage, 100);
//                   }}
//                 >
//                   <Calendar size={16} />
//                   <span>Booking</span>
//                 </button>
//                 <button
//                   className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
//                   onClick={() => {
//                     setMessage('What are the opening hours?');
//                     setTimeout(handleSendMessage, 100);
//                   }}
//                 >
//                   <Briefcase size={16} />
//                   <span>Hours</span>
//                 </button>
//                 <button
//                   className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
//                   onClick={() => {
//                     setMessage('Where can I get coffee?');
//                     setTimeout(handleSendMessage, 100);
//                   }}
//                 >
//                   <Coffee size={16} />
//                   <span>Amenities</span>
//                 </button>
//               </div>

//               <div
//                 className="flex-1 overflow-y-auto p-4 bg-gray-900 relative"
//                 style={{
//                   backgroundImage:
//                     'radial-gradient(circle, rgba(7, 235, 189, 0.03) 1px, transparent 1px)',
//                   backgroundSize: '20px 20px',
//                 }}
//               >
//                 {messages.map((msg, i) => (
//                   <div
//                     key={i}
//                     className={`mb-3 max-w-3/4 ${
//                       msg.isBot ? 'mr-auto' : 'ml-auto'
//                     }`}
//                   >
//                     <div
//                       className={`p-3 rounded-lg ${
//                         msg.isBot
//                           ? 'bg-black text-[#07ebbd] border-l-2 border-[#07ebbd]'
//                           : 'bg-gray-800 text-white border-r-2 border-[#07ebbd] rounded-br-none'
//                       } ${msg.isProcessing ? 'animate-pulse' : ''}`}
//                       style={{
//                         animation:
//                           i === messages.length - 1
//                             ? 'fadeIn 0.3s ease-out'
//                             : 'none',
//                         boxShadow: msg.isBot
//                           ? '0 0 8px rgba(7, 235, 189, 0.15)'
//                           : 'none',
//                       }}
//                     >
//                       {msg.text}
//                     </div>
//                     {msg.isBot && !msg.isProcessing && (
//                       <div className="ml-2 mt-1 text-xs text-gray-400 flex items-center">
//                         <Zap size={10} className="mr-1 text-[#07ebbd]" />
//                         <span>ASSISTANT</span>
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 {isTyping && !messages.some((m) => m.isProcessing) && (
//                   <div className="flex space-x-1 p-3 bg-black text-[#07ebbd] rounded-lg max-w-xs mr-auto border-l-2 border-[#07ebbd]">
//                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse"></div>
//                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full delay-75 animate-pulse"></div>
//                     <div className="w-2 h-2 bg-[#07ebbd] rounded-full delay-150 animate-pulse"></div>
//                   </div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>

//               <div className="border-t border-gray-800 p-3 bg-black">
//                 <div className="relative flex">
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     placeholder="Ask about bookings, wifi, hours..."
//                     className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#07ebbd] border-y border-l border-[#07ebbd] placeholder-gray-500"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                   />
//                   <button
//                     onClick={handleSendMessage}
//                     className={`bg-gray-900 text-[#07ebbd] px-4 py-2 rounded-r-lg transition-all ${
//                       message.trim()
//                         ? 'hover:bg-gray-800 border-[#07ebbd] border-r border-t border-b'
//                         : 'opacity-50 cursor-not-allowed'
//                     }`}
//                     disabled={!message.trim()}
//                     aria-label="Send message"
//                   >
//                     <Send
//                       size={18}
//                       className={message.trim() ? 'animate-pulse' : ''}
//                     />
//                   </button>
//                 </div>
//                 <div className="mt-2 h-1 w-full bg-gray-900 rounded overflow-hidden">
//                   <div
//                     className="h-full bg-[#07ebbd] transition-all duration-500"
//                     // style={{ width: isTyping ? ${botActivity}% : '5%' }}
//                     style={{ width: isTyping ? `${botActivity}%` : '5%' }}
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           {isMinimized && (
//             <div className="flex items-center justify-between px-3 h-full">
//               <div className="flex items-center space-x-2 overflow-hidden">
//                 <ChevronUp size={14} className="text-[#07ebbd] animate-bounce" />
//                 <p className="text-[#07ebbd] text-sm truncate">
//                   {messages.length > 0
//                     ? messages[messages.length - 1].text.substring(0, 30) + '...'
//                     : 'Chat minimized'}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       <style jsx global>{`
//         @keyframes slideIn {
//           from {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         .delay-75 {
//           animation-delay: 75ms;
//         }
//         .delay-150 {
//           animation-delay: 150ms;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client';

import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Bot,
  Send,
  X,
  Minimize2,
  Maximize2,
  Zap,
  Cpu,
  ChevronUp,
  Coffee,
  Briefcase,
  Calendar,
} from 'lucide-react';

export default function CoworkingSpaceBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      text:
        'Welcome to our coworking space! I can help with bookings, amenities, or any questions you have. How can I assist you today?',
      isBot: true,
      isProcessing: false,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [botActivity, setBotActivity] = useState(0);
  const [userId, setUserId] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const apiUrl = 'https://97e1-35-245-22-76.ngrok-free.app';

  // Scroll helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing‐dot animation
  useEffect(() => {
    let interval;
    if (isTyping) {
      interval = setInterval(() => {
        setBotActivity((prev) => (prev + 1) % 100);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isTyping]);

  // Initialize userId once
  useEffect(() => {
    let stored = localStorage.getItem('userId');
    if (!stored) {
      stored = uuidv4();
      localStorage.setItem('userId', stored);
    }
    setUserId(stored);
  }, []);

  // After messages change, scroll down and focus
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (!isMinimized) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isOpen, isMinimized]);

  // Send message to AI backend
  const handleSendMessage = async () => {
    if (!message.trim() || isTyping) return;

    const userText = message.trim();
    setMessages((prev) => [
      ...prev,
      { text: userText, isBot: false, isProcessing: false },
    ]);
    setMessage('');
    setIsTyping(true);

    // show intermediate "thinking"
    setMessages((prev) => [
      ...prev,
      { text: 'Thinking...', isBot: true, isProcessing: true },
    ]);

    try {
      const res = await fetch(`${apiUrl}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, prompt: userText }),
      });
      let botReply = 'Sorry, I didn’t get that.';
      if (res.ok) {
        const data = await res.json();
        if (data.response) botReply = data.response;
      }
      // remove processing placeholder
      setMessages((prev) => prev.filter((m) => !m.isProcessing));
      setMessages((prev) => [
        ...prev,
        { text: botReply, isBot: true, isProcessing: false },
      ]);
    } catch (err) {
      console.error('Send error:', err);
      setMessages((prev) => prev.filter((m) => !m.isProcessing));
      setMessages((prev) => [
        ...prev,
        {
          text: 'Connection error. Please try again later.',
          isBot: true,
          isProcessing: false,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen((o) => !o);
    setIsMinimized(false);
  };
  const toggleMinimize = () => setIsMinimized((m) => !m);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-black hover:bg-gray-900 text-[#07ebbd] rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 relative"
          aria-label="Open coworking space assistant"
        >
          <div className="absolute inset-0 bg-[#07ebbd] rounded-full opacity-20 animate-ping"></div>
          <div className="relative">
            <Bot size={24} className="animate-pulse" />
          </div>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-[#07ebbd] px-3 py-1 rounded-full text-xs whitespace-nowrap border border-[#07ebbd]">
            Ask me anything!
          </div>
        </button>
      )}

      {isOpen && (
        <div
          className={`bg-black rounded-lg shadow-2xl overflow-hidden transition-all duration-500 flex flex-col border border-[#07ebbd]
                      ${isMinimized ? 'h-14 w-72' : 'h-96 w-80 md:w-96'}`}
          style={{
            animation: 'slideIn 0.3s ease-out',
            boxShadow: '0 0 20px rgba(7, 235, 189, 0.35)',
          }}
        >
          <div className="bg-black text-[#07ebbd] p-3 flex justify-between items-center border-b border-gray-800">
            <div className="flex items-center space-x-2" ref={messagesEndRef}>
              <div>
                <Bot size={20} className={isTyping ? 'animate-pulse' : ''} />
                {isTyping && (
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#07ebbd] rounded-full animate-pulse"></span>
                )}
              </div>
              <h3 className="font-medium">Coworking Assistant</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={toggleMinimize}
                className="hover:bg-gray-900 rounded p-1 transition-colors"
                aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={toggleChat}
                className="hover:bg-gray-900 rounded p-1 transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="bg-gray-900 px-3 py-2 flex justify-center space-x-4 text-xs">
                <button
                  className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
                  onClick={() => {
                    setMessage('How do I book a meeting room?');
                    setTimeout(handleSendMessage, 100);
                  }}
                >
                  <Calendar size={16} />
                  <span>Booking</span>
                </button>
                <button
                  className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
                  onClick={() => {
                    setMessage('What are the opening hours?');
                    setTimeout(handleSendMessage, 100);
                  }}
                >
                  <Briefcase size={16} />
                  <span>Hours</span>
                </button>
                <button
                  className="flex flex-col items-center text-[#07ebbd] hover:bg-gray-800 p-1 rounded transition-colors"
                  onClick={() => {
                    setMessage('Where can I get coffee?');
                    setTimeout(handleSendMessage, 100);
                  }}
                >
                  <Coffee size={16} />
                  <span>Amenities</span>
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto p-4 bg-gray-900 relative"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(7, 235, 189, 0.03) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`mb-3 max-w-3/4 ${
                      msg.isBot ? 'mr-auto' : 'ml-auto'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        msg.isBot
                          ? 'bg-black text-[#07ebbd] border-l-2 border-[#07ebbd]'
                          : 'bg-gray-800 text-white border-r-2 border-[#07ebbd] rounded-br-none'
                      } ${msg.isProcessing ? 'animate-pulse' : ''}`}
                      style={{
                        animation:
                          i === messages.length - 1
                            ? 'fadeIn 0.3s ease-out'
                            : 'none',
                        boxShadow: msg.isBot
                          ? '0 0 8px rgba(7, 235, 189, 0.15)'
                          : 'none',
                      }}
                    >
                      {msg.text}
                    </div>
                    {msg.isBot && !msg.isProcessing && (
                      <div className="ml-2 mt-1 text-xs text-gray-400 flex items-center">
                        <Zap size={10} className="mr-1 text-[#07ebbd]" />
                        <span>ASSISTANT</span>
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && !messages.some((m) => m.isProcessing) && (
                  <div className="flex space-x-1 p-3 bg-black text-[#07ebbd] rounded-lg max-w-xs mr-auto border-l-2 border-[#07ebbd]">
                    <div className="w-2 h-2 bg-[#07ebbd] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#07ebbd] rounded-full delay-75 animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#07ebbd] rounded-full delay-150 animate-pulse"></div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-gray-800 p-3 bg-black">
                <div className="relative flex">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ask about bookings, wifi, hours..."
                    className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#07ebbd] border-y border-l border-[#07ebbd] placeholder-gray-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    onClick={handleSendMessage}
                    className={`bg-gray-900 text-[#07ebbd] px-4 py-2 rounded-r-lg transition-all ${
                      message.trim()
                        ? 'hover:bg-gray-800 border-[#07ebbd] border-r border-t border-b'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={!message.trim()}
                    aria-label="Send message"
                  >
                    <Send
                      size={18}
                      className={message.trim() ? 'animate-pulse' : ''}
                    />
                  </button>
                </div>
                <div className="mt-2 h-1 w-full bg-gray-900 rounded overflow-hidden">
                  <div
                    className="h-full bg-[#07ebbd] transition-all duration-500"
                    style={{ width: isTyping ? `${botActivity}%` : '5%' }}
                  />
                </div>
              </div>
            </>
          )}

          {isMinimized && (
            <div className="flex items-center justify-between px-3 h-full">
              <div className="flex items-center space-x-2 overflow-hidden">
                <ChevronUp size={14} className="text-[#07ebbd] animate-bounce" />
                <p className="text-[#07ebbd] text-sm truncate">
                  {messages.length > 0
                    ? messages[messages.length - 1].text.substring(0, 30) + '...'
                    : 'Chat minimized'}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
}
