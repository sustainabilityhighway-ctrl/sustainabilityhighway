import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, CheckCircle, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormState({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-[#041612] min-h-screen text-white pt-24 pb-20">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <span className="text-[#4CAF50] font-bold tracking-widest uppercase text-sm mb-4 block">Let's Connect</span>
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-heading">
                    Get in <span className="text-[#C5A059]">Touch</span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                    Have a project in mind? Looking for LEED consultancy or Mostadam certification? We are here to help you achieve your sustainability goals.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Information */}
                    <div className="space-y-12">
                        {/* Info Cards */}
                        <div className="grid gap-8">
                            <div className="bg-[#0B2B24] p-8 rounded-2xl border border-white/5 hover:border-[#4CAF50]/50 transition-all duration-300 group">
                                <div className="bg-[#4CAF50]/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50] transition-colors">
                                    <Mail className="text-[#4CAF50] w-6 h-6 group-hover:text-[#041612]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 font-heading">Online Inquiry</h3>
                                <p className="text-white/60 mb-4">
                                    We are a digital-first platform dedicated to providing the latest sustainability insights. For specific inquiries, partnership opportunities, or content corrections, please reach out via email.
                                </p>
                                <a href="mailto:info@sustainabilityhighway.com" className="text-[#C5A059] font-bold text-lg tracking-wide hover:underline">info@sustainabilityhighway.com</a>
                            </div>
                        </div>

                        {/* FAQ / Expectations */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 font-heading">Frequently Asked Questions</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-white/5 p-2 rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                                        <Clock size={20} className="text-[#C5A059]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Response Time?</h4>
                                        <p className="text-white/60 text-sm">We aim to respond to general inquiries within 24-48 hours.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/5 p-2 rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                                        <HelpCircle size={20} className="text-[#C5A059]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Do you offer services?</h4>
                                        <p className="text-white/60 text-sm">No. We are a digital content platform. We do not provide construction or certification services directly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/5 p-2 rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                                        <Globe size={20} className="text-[#C5A059]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Can I contribute?</h4>
                                        <p className="text-white/60 text-sm">Yes! We welcome guest posts from sustainability experts. Contact us to discuss.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#0A1F18] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                        {isSubmitted ? (
                            <div className="absolute inset-0 bg-[#0A1F18] z-20 flex flex-col items-center justify-center text-center p-12 transition-all">
                                <div className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={40} className="text-[#041612]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-white/60">Thank you for reaching out. We'll be in touch shortly.</p>
                            </div>
                        ) : null}

                        <h2 className="text-3xl font-bold mb-8 font-heading">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#C5A059] uppercase tracking-wide">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#C5A059] uppercase tracking-wide">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#C5A059] uppercase tracking-wide">Subject</label>
                                <select
                                    name="subject"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                                >
                                    <option value="" disabled selected>Select a topic</option>
                                    <option value="leed" className="bg-[#041612]">LEED Certification</option>
                                    <option value="mostadam" className="bg-[#041612]">Mostadam Rating</option>
                                    <option value="consultancy" className="bg-[#041612]">General Consultancy</option>
                                    <option value="other" className="bg-[#041612]">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#C5A059] uppercase tracking-wide">Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4CAF50] transition-colors h-40 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#4CAF50]/20 flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
