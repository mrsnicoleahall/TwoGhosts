import React from 'react';
import ChatBot from 'react-chatbotify';

const Chatbot = ({ embedded = false }) => {
  const systemPrompt = `You are a helpful AI assistant for Two Ghosts Strategy, a strategic marketing and brand consultancy.

Key information about Two Ghosts:
- They tame marketing monsters and business challenges with no-BS strategy, killer creative, and execution that works
- They're strategists first - not designers playing strategist or agencies selling tactics
- They destroy template thinking and focus on what actually moves the needle

Services:
1. Brand Strategy - Positioning and messaging that makes you memorable
2. Marketing Strategy - Revenue-driving plans and roadmaps
3. Growth Campaigns - Multi-channel campaigns that work
4. Creative & Content - Content that cuts through the noise
5. CMO-on-Demand - Strategic leadership without the full-time hire
6. Brand Identity & Design - Visual systems that reinforce strategy

Strategic Approach:
- Strategy First: Every tactic connects to a clear business goal
- Human-Centered: Marketing that treats people like humans, not data points
- No BS: Destroy template thinking, cut corporate bloat, focus on results

Industries: Technology and SaaS, Healthcare and Life Sciences, Professional Services, Consumer Brands, Financial Services

Contact: hello@twoghoststrategy.com | 919-504-4443

Be conversational, helpful, and embody the Two Ghosts tone: direct, strategic, no-BS, but friendly. Keep responses concise (2-3 paragraphs max).`;

  const flow = {
    start: {
      message: "👻 Hi! I'm the Two Ghosts AI assistant. I can help answer questions about our services, approach, and how we work. What would you like to know?",
      path: 'loop'
    },
    loop: {
      message: async (params: any) => {
        try {
          // Build messages array with system prompt as first message
          const allMessages = [
            { role: 'system', content: systemPrompt },
            ...params.messages || []
          ];
          
          const response = await fetch('https://portfolio.mrsnicoleahall.workers.dev/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: allMessages })
          });
          
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          
          const data = await response.json();
          return data.choices[0].message.content || "I'm having trouble processing that. Could you try again?";
        } catch (error) {
          console.error('Chatbot API error:', error);
          return "I'm temporarily unavailable. Please try again in a moment.";
        }
      },
      path: 'loop'
    }
  };

  const settings = {
    general: {
      embedded,
      primaryColor: '#8F6AFA',
      secondaryColor: '#375CDC',
    },
    chatHistory: {
      storageKey: 'twoghosts_chat_history'
    },
    header: {
      title: 'Two Ghosts AI',
      showAvatar: true,
    },
    notification: {
      disabled: embedded,
      defaultToggledOn: !embedded,
    },
    audio: {
      disabled: true,
    },
    chatButton: {
      icon: '👻',
    },
    botBubble: {
      simStream: true,
      streamSpeed: 30,
    },
  };

  return (
    <ChatBot
      flow={flow}
      settings={settings}
    />
  );
};

export default Chatbot;
