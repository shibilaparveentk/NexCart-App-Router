import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function contactPage() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email support",
      description: "Get in touch with us",
      href: "mailto:support@nexcart.com",
    },
    {
      icon: Phone,
      title: "Phone support",
      description: "Call us for quick assistance",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Our location",
      description: "Find us on Google Maps",
      href: "https://www.google.com/maps",
    },
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Once your order is placed, you can check its status from the My Orders section of your account.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Available payment methods will be shown during checkout before you complete your purchase.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Eligible products can be returned or exchanged according to the terms in our return policy.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times depend on your location, the product, and the shipping option available at checkout.",
    },
  ];

  return (
    <div className="bg-[#F5F7F8] min-h-screen px-4 py-12 sm:px-6 lg:py-14 text-[#263740]">
      <div className="mx-auto max-w-6xl">
        <section className="mb-12 text-center md:mb-14">
          <div className="inline-flex  items-center gap-2 rounded-full border border-[#647B85]/20 bg-white px-4 py-2 text-xs font-semibold shadow-sm text-[#647B85]">
            <MessageCircle size={15} />
            WE&apos;RE HERE TO HELP
          </div>
          <h1 className="mx-auto max-w-3xl mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Let&apos;s make your
            <span className="text-[#647B85] block">shopping easier.</span>
          </h1>
          <p className="mt-5 text-sm text-gray-500">
            Questions about an order, a product, or anything else? Our support
            team is ready to help you.
          </p>
        </section>
        <section className="grid border overflow-hidden border-gray-200/80 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr] rounded-3xl">
          <div className="bg-[#263740] p-7 text-white sm:p-10 lg:p-12 overflow-hidden">
            <h2 className="mt-7 text-2xl font-semibold sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3  text-sm leading-7 text-white/65">
              We believe great shopping comes with great support. Choose a way
              to reach us.
            </p>
            <div className="mt-9 space-y-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center justify-between"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#C8D7DC]">
                      <Icon size={18} />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#94A3A8]">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight size={18} className="text-[#94A3A8]" />
                  </Link>
                );
              })}
            </div>
            <div className="mt-12 border border-white/10 rounded-2xl bg-white/5 p-5 flex gap-3">
              <Clock size={18} className="mt-0.5 text-[#C8D7DC]" />
              <div>
                <p className="text-sm font-semibold">Customer care hours</p>
                <p className="mt-2 text-xs  text-white/60">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#647B85]">
                CONTACT FORM
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-3 text-sm  text-gray-500">
                Fill out the form and tell us what you need help with.
              </p>
            </div>
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium mb-2 block"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="border border-gray-200 bg-[#F8FAFB] w-full rounded-xl px-4 py-3.5 outline-none placeholder:text-gray-400 focus:border-[#647B85]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium mb-2 block"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="border border-gray-200 bg-[#F8FAFB] w-full rounded-xl px-4 py-3.5 outline-none placeholder:text-gray-400 focus:border-[#647B85]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  What can we help you with?
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#F8FAFB] px-4 py-3.5 text-sm text-gray-500 outline-none transition focus:border-[#647B85] focus:bg-white"
                >
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  <option value="order">Order enquiry</option>
                  <option value="product">Product information</option>
                  <option value="shipping">Shipping and delivery</option>
                  <option value="returns">Returns and refunds</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#F8FAFB] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#647B85] focus:bg-white "
                />
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#263740] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3D5661] focus:outline-none sm:w-auto"
              >
                Send message
                <Send size={16} />
              </button>
              <p className="text-xs leading-5 text-gray-400">
                Your message matters to us. We&apos;ll be happy to assist.
              </p>
            </form>
          </div>
        </section>
        <section className="mt-20 md:mt-28">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase text-[#647B85]">
              GOT QUESTIONS?
            </p>
            <h2 className="my-3 text-3xl font-semibold sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-sm  text-gray-500">
              Find quick answers to some common questions about shopping with
              NexCart.
            </p>
          </div>
          <div className="max-w-5xl mx-auto border border-gray-200/80 bg-white px-5 shadow-sm sm:px-8 rounded-3xl">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-gray-100 py-5 last:border-b-0 sm:py-6"
              >
                <summary className="flex items-center justify-between gap-5 text-sm font-semibold cursor-pointer">
                  <span className="flex gap-4">
                    <span>0{index + 1}</span>
                    {faq.question}
                  </span>
                  <span className="bg-[#F5F7F8] text-[#647B85] rounded-full size-8 flex items-center justify-center group-open:rotate-180 group-open:bg-[#263740] group-open:text-white">
                    <ChevronDown size={17} />
                  </span>
                </summary>
                <p className="mt-4 pl-8 text-sm text-gray-500">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <p className="text-sm text-gray-500">Still need help?</p>
            <Link
              href="mailto:support@nexcart.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#263740] underline decoration-[#647B85]/50 underline-offset-4 transition hover:text-[#647B85]"
            >
              Contact our support team
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
