"use client";

import React from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <ContactMethod
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                detail="support@BlackSugar.com"
              />
              <ContactMethod
                icon={<MessageCircle className="w-5 h-5" />}
                title="Instagram DM"
                detail="@blacksugar____"
              />
              <ContactMethod
                icon={<MapPin className="w-5 h-5" />}
                title="Studio"
                detail="Tbilisi, Georgia"
              />
            </div>

            {/* Responsive Map Container */}
            <div className="relative w-full aspect-video lg:aspect-square max-h-100 border border-white/5 grayscale invert opacity-60 hover:opacity-100 transition-opacity duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5196005215003!2d44.76764314087184!3d41.709305371380445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044735fe24ad9d9%3A0xc55edc503597339d!2sBLACK%20SUGAR%20Vintage%20Gothic%20%26%20Coffee%20Shop!5e0!3m2!1sen!2sge!4v1769362841078!5m2!1sen!2sge"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#191919] p-8 md:p-12 border border-white/5 h-fit lg:sticky lg:top-32">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup label="Your Name" type="text" placeholder="NAME" />
              <InputGroup
                label="Email Address"
                type="email"
                placeholder="MAIL@EXAMPLE.COM"
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
