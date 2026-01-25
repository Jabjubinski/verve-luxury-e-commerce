"use client";

import React from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Message sent");
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Header Section */}
      <section className="pt-20 pb-12 px-4 text-center border-b border-white/5">
        <h1 className="brand-logo text-5xl md:text-7xl mb-4 lowercase">
          Contact us
        </h1>
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40">
          We usually respond within 24 hours
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">
              Get in Touch
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Whether you have a question about sizing, shipping, or our
              Whimsigoth collection, our team is here to help.
            </p>
          </div>

          <div className="space-y-8">
            <ContactMethod
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              detail="support@BlackSugar.com"
            />
            <ContactMethod
              icon={<MessageCircle className="w-5 h-5" />}
              title="Instagram DM"
              detail="@BlackSugar_official"
            />
            <ContactMethod
              icon={<MapPin className="w-5 h-5" />}
              title="Studio"
              detail="Tbilisi, Georgia"
            />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#191919] p-8 md:p-12 border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup
                label="Your Name"
                type="text"
                placeholder="ALEXANDER"
              />
              <InputGroup
                label="Email Address"
                type="email"
                placeholder="ALEX@EXAMPLE.COM"
              />
            </div>

            <InputGroup
              label="Subject"
              type="text"
              placeholder="ORDER INQUIRY"
            />

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="HOW CAN WE HELP YOU?"
                className="bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/10"
              />
            </div>

            <button className="w-full bg-white text-black py-5 text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black hover:text-white border border-white transition-all group">
              Send Message
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

const ContactMethod = ({
  icon,
  title,
  detail,
}: {
  icon: any;
  title: string;
  detail: string;
}) => (
  <div className="flex items-start gap-4 group">
    <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">
        {title}
      </h4>
      <p className="text-sm font-medium">{detail}</p>
    </div>
  </div>
);

const InputGroup = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase tracking-wider"
    />
  </div>
);

export default ContactPage;
