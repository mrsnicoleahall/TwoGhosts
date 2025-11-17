import React, { useState } from 'react';

const faqs = [
  {
    question: "What's it like to work with TWOGHOSTS?",
    answer:
      "Most clients come to us with a growth problem they can feel but cannot name. We start by getting to know you, your numbers, your customers, and your chaos. Then we either build a full strategy with a three-year roadmap or we plug in with a fixed block of hours you can use as needed. Most clients start with strategy, then keep us on to help implement the plan, pressure-test decisions, and keep things from drifting back into random acts of marketing."
  },
  {
    question: 'What industries does TWOGHOSTS service?',
    answer:
      "We work across industries, but we are especially at home in B2B. We have deep experience with agencies, franchises, SaaS, medical, and manufacturing. The pattern is the same: complex sales, long buying cycles, and a lot of people involved. If your problem lives in marketing, sales, or business growth, we are comfortable there. We do the homework so by the end of the process we know your industry almost as well as you do."
  },
  {
    question: "Why don't you have a more traditional agency website? What is the deal here?",
    answer:
      "Because traditional agency websites are wallpaper. Same templates. Same copy. Same fake case studies. If you wanted that, you would not still be reading this. TWOGHOSTS exists for people who already tried the traditional route and learned the hard way that pretty decks alone do not move numbers."
  },
  {
    question: 'Are you a full-service agency or what?',
    answer:
      'We are not a "full-service agency" in the sense of trying to be everything to everyone. We are strategy-first. We help you figure out what to do, why it matters, and how it should work together. Then we either help execute pieces of it or work with your in-house team and existing partners. We care more about being effective than being on every line item of your marketing budget.'
  },
  {
    question: 'Do you manage ads and social, or just strategy?',
    answer:
      'We do both, but not in a "post 20 times a week and hope" kind of way. If we manage ads or social, it is as part of a clear strategy, tied to real goals, with reporting that makes sense to non-marketers. If you just want someone to babysit platforms, we are probably not the right fit.'
  },
  {
    question: 'How much does this cost?',
    answer:
      'We publish our pricing, which is already unusual in agency land. Strategy is a defined engagement with a clear price and timeline. Implementation is scoped by blocks of hours or specific projects. Most clients invest less than the cost of hiring a senior in-house marketer and get an entire bench of brains instead.'
  },
  {
    question: 'What size companies do you work with?',
    answer:
      'We tend to work with companies that are past pure startup chaos and before bloated-enterprise-stuck-in-committee. In plain terms: you have revenue, you have customers, and you have something to lose if you keep guessing. That ranges from funded startups to established mid-market brands.'
  },
  {
    question: 'Will you work with our in-house team or current agency?',
    answer:
      'Yes. We like smart internal teams and good partners. We are not here to steal accounts or empire-build. If you have people who handle creative, media, or dev, we plug in at the strategy layer, help them prioritize and execute, and make sure the whole machine is pointed in the same direction.'
  },
  {
    question: 'Will you build our website?',
    answer:
      'We can, but we are picky about it. A website is not a pretty brochure, it is infrastructure. If we take on your site, we are going to ask annoying questions about your offers, positioning, sales process, and tech stack. If you want a quick reskin with no thinking, there are cheaper options and they have plenty of templates ready.'
  },
  {
    question: 'Do you lock clients into long-term retainers?',
    answer:
      'No never-ending hostage retainers. Strategy is a fixed engagement. Ongoing work is either blocks of hours or clearly scoped retainers you can step out of with reasonable notice. If someone has to trap you in a contract to keep you around, the work is not good enough.'
  },
  {
    question: 'What makes you different from every other "clever" agency?',
    answer:
      'We actually like numbers. We enjoy creative, but we measure success in revenue, qualified pipeline, and real-world outcomes. The brand and the ads should be fun, but the dashboards should be boring in the best way. Also, we tell you the truth when something is a bad idea, even if it is the shiny one.'
  },
  {
    question: 'Where are you located? Do you work remotely?',
    answer:
      'We are built to work remotely with clients in different time zones. Most of our work happens through video calls, shared docs, and async updates. If you need in-person workshops or on-site sessions, we can talk about that too, but geography is not a limiting factor.'
  },
  {
    question: 'What happens after the strategy is done?',
    answer:
      'You do not get a pretty deck and a "good luck." You get a prioritized roadmap, clear next steps, and options. Some clients keep us on to run point on execution. Others have internal teams who take the plan and run with it while we stay on as a sounding board. The plan is built to be used, not archived.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-transparent">
      <div className="w-full py-16">
        <div className="relative mb-10">
          {/* Ghost background text, using shared bgtext-section class */}
          <div className="bgtext-section">Questions</div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white font-['Raleway']">
            FAQ
          </h2>
        </div>

        <dl className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-white/10 pt-4">
              <dt>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left text-gray-50"
                >
                  <span className="py-4 pr-6 text-lg sm:text-xl font-bold font-['Raleway']">
                    {faq.question}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className={`h-8 w-8 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              {openIndex === index && (
                <dd className="pb-4 pr-10">
                  <p className="text-base sm:text-lg font-['Raleway'] text-gray-100 leading-relaxed">
                    {faq.answer}
                  </p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQ;
