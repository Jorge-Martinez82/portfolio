import React, { useState } from 'react';
import { ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import axios from 'axios';
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

const Chat = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm Jorge. I've configured this AI chat to interact with you and help you get to know me better. You can ask me questions about my professional experience, my hobbies, or anything else to get a first impression of me as a candidate. What would you like to know about me?",
            sentTime: "just now",
            sender: "JorgeAI",
            direction: "incoming"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsTyping(true);

        try {
            const response = await axios.post('https://jrg-be-chatai.onrender.com/chat', { message });
            const JorgeAIResponse = response.data.response;

            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: JorgeAIResponse,
                    sender: "JorgeAI",
                    direction: "incoming"
                }
            ]);
        } catch (error) {
            console.error("Error al enviar mensaje:", error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div id="chat" className="fixed bottom-4 right-4 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
                >
                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2"/>
                    Chat with "me"
                </button>
            ) : (
                <div
                    className="bg-gray-800 rounded-lg shadow-xl w-[25rem] max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-[70vh] sm:h-[80vh] max-h-[90vh]">
                    <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                        <h3 className="text-white text-lg font-semibold flex items-center">
                            <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2"/>
                            Chat with "me"
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white"
                        >
                            X
                        </button>
                    </div>
                    <div className="h-[calc(100%-60px)]">
                        <ChatContainer>
                            <MessageList
                                scrollBehavior="smooth"
                                typingIndicator={isTyping ?
                                    <TypingIndicator content="JorgeAI está escribiendo"/> : null}
                            >
                                {messages.map((message, i) => (
                                    <Message
                                        key={i}
                                        model={message}
                                    />
                                ))}
                            </MessageList>
                            <MessageInput attachButton={false} placeholder="Write your message here."
                                          onSend={handleSend}/>
                        </ChatContainer>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Chat;