import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What\'s included in your design process?",
      answer: `Our design process includes comprehensive research, strategy development, concept creation, iterative design, and final delivery. We provide detailed documentation, source files, and ongoing support to ensure successful implementation.`
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: `Project timelines vary based on scope and complexity. Brand identity projects typically take 3-4 weeks, website design 4-8 weeks, and full development projects 8-16 weeks. We'll provide a detailed timeline during our discovery phase.`
    },
    {
      id: 3,
      question: "Do you work with clients remotely?",
      answer: `Yes, we work with clients worldwide through video calls, collaborative tools, and project management platforms. Our remote process is refined and efficient, ensuring seamless communication throughout the project.`
    },
    {
      id: 4,
      question: "What if I need revisions after the project is complete?",
      answer: `All projects include a 30-day support period for minor adjustments and bug fixes. For larger changes or new features, we offer maintenance packages and can discuss ongoing support options.`
    },
    {
      id: 5,
      question: "How do you handle project payments?",
      answer: `We typically work with a 50% deposit to start, 25% at the midpoint milestone, and 25% upon completion. For larger projects, we can arrange custom payment schedules that work for your budget.`
    },
    {
      id: 6,
      question: "Can you work within our existing brand guidelines?",
      answer: `Absolutely! We can work within your existing brand framework or help evolve and refine your brand identity. We'll ensure all deliverables align with your brand standards and business objectives.`
    },
    {
      id: 7,
      question: "What technologies do you specialize in?",
      answer: `We specialize in modern web technologies including React, Next.js, Node.js, and various CMS platforms. We choose the best technology stack based on your specific needs and long-term goals.`
    },
    {
      id: 8,
      question: "Do you provide ongoing maintenance and support?",
      answer: `Yes, we offer various maintenance packages including security updates, content updates, performance monitoring, and feature enhancements. We can discuss the best support option for your needs.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-card rounded-xl border border-border creative-shadow p-6">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold text-text-primary mb-2">Frequently Asked Questions</h3>
        <p className="text-text-secondary">Everything you need to know about working with us.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-border rounded-lg overflow-hidden creative-transition hover:border-accent/50"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 creative-transition"
            >
              <span className="font-medium text-text-primary pr-4">{faq.question}</span>
              <Icon
                name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-text-secondary flex-shrink-0"
              />
            </button>
            
            {openFAQ === faq.id && (
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-border">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg text-center">
        <h4 className="font-semibold text-text-primary mb-2">Still have questions?</h4>
        <p className="text-text-secondary mb-4">
          We're here to help! Schedule a free consultation to discuss your project.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center space-x-2 text-accent hover:text-accent/80 creative-transition">
            <Icon name="Mail" size={16} />
            <span className="text-sm font-medium">Send us an email</span>
          </button>
          <span className="text-text-secondary">or</span>
          <button className="flex items-center space-x-2 text-accent hover:text-accent/80 creative-transition">
            <Icon name="Calendar" size={16} />
            <span className="text-sm font-medium">Schedule a call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;