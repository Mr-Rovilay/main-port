"use client";
import { Mail, Phone } from "lucide-react";
import { toast } from "react-hot-toast";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Service ID, Template ID, or Public Key is missing.");
      setLoading(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        toast.success("Message sent successfully!");
        setLoading(false);
        form.current.reset();
      },
      (error) => {
        toast.error("Failed to send message. Please try again.");
        setLoading(false);
      }
    );
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center text-primary text-lg mb-4">
              <span className="w-8 h-1 bg-primary block"></span>
              Hello!!!
            </div>
            <h1 className="text-3xl font-bold mb-4">Let's Work Together</h1>
            <p className="text-lg text-gray-600">
              I am excited to hear from you. Contact me using the details below
              or fill out the form and I will get back to you as soon as
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="flex items-center mb-4">
                <Mail className="text-primary mr-2" size={20} />
                <a
                  href="mailto:ayodejiakinola007@gmail.com"
                  className="text-gray-800 hover:text-primary transition-colors"
                >
                  ayodejiakinola007@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="text-primary mr-2" size={20} />
                <a
                  href="tel:+1234567890"
                  className="text-gray-800 hover:text-primary transition-colors"
                >
                  (+234) 8140570029
                </a>
              </div>
              <div className="text-gray-600">
                <p>15 I.K Peters street, Ajao Estate Lagos</p>
                <p>Business Hours: Mon - Sun, 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-800 font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-800 font-medium mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-800 font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
