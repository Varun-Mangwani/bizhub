import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./decor/Reveal";
import { GridOverlay } from "./decor/Decor";
import { LinkedinIcon, InstagramIcon } from "./decor/SocialIcons";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-36">
      <GridOverlay className="opacity-40" />
      <div className="container-px relative mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-heading-eyebrow justify-center mb-5">Get in Touch</p>
            <h2 className="font-[Sora] text-4xl font-bold text-[#111111] sm:text-5xl">
              Let's Build Something Together
            </h2>
            <div className="mt-6 rounded-xl bg-[#F5C518]/10 p-5 text-sm text-[#111111]">
              <p className="font-medium">BizHub Club — Aryan College</p>
              <p className="mt-2 text-[#6B7280]">Faculty Admin: <span className="font-semibold text-[#111111]">Tabassum Mam</span></p>
              <p className="mt-1 text-[#6B7280]">CEO Position: To be elected by the club members</p>
              <p className="mt-3 text-sm font-medium">Contact the admin to get involved or learn more about the club.</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <form onSubmit={handleSubmit(onSubmit)} className="card p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-[#111111]">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#EAEAEA] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#F5C518]"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-[#6B7280]">{errors.name.message}</p>}
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-[#111111]">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                    })}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#EAEAEA] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#F5C518]"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-[#6B7280]">{errors.email.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#111111]">Message</label>
                  <textarea
                    {...register("message", { required: "Please add a short message" })}
                    rows={5}
                    placeholder="Tell us about your idea or query..."
                    className="w-full resize-none rounded-xl border border-[#EAEAEA] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#F5C518]"
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-[#6B7280]">{errors.message.message}</p>}
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary mt-7 w-full sm:w-auto">
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5C518]/15">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#111111]">Email</p>
                    <p className="mt-1 text-sm text-[#6B7280]">bizhubclub@aryancollege.edu.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5C518]/15">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#111111]">Phone</p>
                    <p className="mt-1 text-sm text-[#6B7280]">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5C518]/15">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#111111]">Address</p>
                    <p className="mt-1 text-sm text-[#6B7280]">Aryan College Campus, Innovation Block, Room 204</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-[#EAEAEA]">
                <iframe
                  title="Aryan College Location"
                  src="https://www.google.com/maps?q=Aryan+College&output=embed"
                  className="h-56 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex gap-3">
                <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAEAEA] transition-colors hover:border-[#F5C518] hover:bg-[#F5C518]/10">
                  <InstagramIcon size={18} />
                </a>
                <a href="#" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAEAEA] transition-colors hover:border-[#F5C518] hover:bg-[#F5C518]/10">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
