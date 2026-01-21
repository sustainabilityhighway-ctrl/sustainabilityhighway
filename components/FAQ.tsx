"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is the difference between LEED and Mostadam?",
        answer: "LEED (Leadership in Energy and Environmental Design) is an international green building certification system, while Mostadam is Saudi Arabia’s local rating system tailored to the region's specific environmental challenges and Vision 2030 goals."
    },
    {
        question: "How much can I save with a sustainable building?",
        answer: "Green buildings typically reduce energy usage by 30-50% and water consumption by 40%. These operational savings, combined with increased property value, provide a strong return on investment within 3-5 years."
    },
    {
        question: "Do you support projects outside of Riyadh?",
        answer: "Yes, we operate across the entire Kingdom of Saudi Arabia, including Jeddah, Dammam, NEOM, and The Red Sea Project, providing on-site and remote consultancy."
    },
    {
        question: "Is certification mandatory for all new buildings?",
        answer: "While not mandatory for all private projects yet, it is a requirement for many government and mega-projects. However, new regulations are increasingly favoring sustainable practices, making early adoption a strategic advantage."
    },
    {
        question: "How long does the certification process take?",
        answer: "The process runs parallel to your project's design and construction. Typically, final certification is achieved 3-6 months after project completion and documentation submission."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#041612] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4CAF50]/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#C5A059] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                        <HelpCircle className="w-4 h-4" /> FAQ
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                        Frequently Asked <span className="gold-text">Questions</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Get clear answers about sustainability audits, green building certifications, and how we help you achieve your goals.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.1)]' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(prev => prev === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-[#C5A059]' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-white/5 text-white/50'}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
