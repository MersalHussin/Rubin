import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaCheck } from "react-icons/fa";
import { submitContactMessage } from "../../actions/contactActions";
import { getSensaProducts } from "../../actions/haveraProductActions";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact({ t, lang }: { t: any; lang: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contact_type: "inquiry",
    product_id: "",
    product_name: "",
  });
  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [submitCount, setSubmitCount] = useState(0);
  const turnstileRef = useRef<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      const res = await getSensaProducts();
      if (res.success) {
        setProducts(res.data || []);
      }
      setLoadingProducts(false);
    };
    fetchProducts();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "product_id") {
      const selectedProduct = products.find((p) => p.id === value);
      setFormData((prev) => ({ 
        ...prev, 
        product_id: value,
        product_name: selectedProduct ? (lang === "ar" ? selectedProduct.name_ar : selectedProduct.name_en) : ""
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTypeChange = (type: string) => {
    setFormData((prev) => ({ ...prev, contact_type: type, product_id: "", product_name: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message)
      return;
    
    if (submitCount >= 3) {
      setSubmitError(lang === "ar" ? "لقد وصلت للحد الأقصى من المحاولات." : "Maximum attempts reached.");
      return;
    }

    if (!turnstileToken) {
      setSubmitError(lang === "ar" ? "يرجى إكمال التحقق الأمني" : "Please complete the security check");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    
    const res = await submitContactMessage(formData, turnstileToken);
    
    setIsSubmitting(false);
    
    if (res.success) {
      setSubmitted(true);
      setSubmitCount(prev => prev + 1);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ 
          name: "", email: "", phone: "", message: "", 
          contact_type: "inquiry", product_id: "", product_name: "" 
        });
        setTurnstileToken("");
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      }, 4000);
    } else {
      setSubmitError(lang === "ar" ? "حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً." : "An error occurred. Please try again.");
    }
  };

  const inputClass = "w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:border-main focus:bg-white focus:ring-4 focus:ring-main/10 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400 text-base font-medium shadow-sm hover:border-gray-200";

  return (
    <section id="contact-us" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Premium Background Accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-main/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-main/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text & Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-gray-200 shadow-sm text-main uppercase tracking-[0.2em] text-xs font-bold mb-6">
                {lang === "ar" ? "يسعدنا تواصلك" : "GET IN TOUCH"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                {lang === "ar" ? "تواصل معنا" : "Contact Us"}
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                {lang === "ar" 
                  ? "نحن هنا لخدمتك بكل سرور. سواء كان لديك استفسار عن منتجاتنا الفاخرة، أو تحتاج إلى مساعدة خاصة، فريقنا مكرس لتقديم أفضل تجربة تليق بك." 
                  : "We are here to serve you with pleasure. Whether you have an inquiry about our luxury products or need special assistance, our team is dedicated to providing you with the best experience."}
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <a href="mailto:Relation@bonnmed.com" className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-main transition-colors duration-500">
                  <FaEnvelope className="text-slate-400 group-hover:text-white transition-colors text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1.5 uppercase tracking-wider">{lang === "ar" ? "البريد الإلكتروني" : "Email"}</p>
                  <p className="text-slate-900 font-bold text-xl group-hover:text-main transition-colors">Relation@bonnmed.com</p>
                </div>
              </a>
              
              <a href="tel:+966580347173" className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-main transition-colors duration-500">
                  <FaPhoneAlt className="text-slate-400 group-hover:text-white transition-colors text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1.5 uppercase tracking-wider">{lang === "ar" ? "رقم الهاتف" : "Phone"}</p>
                  <p className="text-slate-900 font-bold text-xl group-hover:text-main transition-colors" dir="ltr">+966 5803 47173</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 lg:p-14 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-white relative overflow-hidden">
              {/* Subtle top glare */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 border-4 border-green-100/50">
                    <FaCheck className="text-green-500 text-4xl" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    {lang === "ar" ? "شكراً لتواصلك معنا" : "Thank you for reaching out"}
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {lang === "ar" ? "لقد استلمنا رسالتك وسنقوم بالرد عليك قريباً." : "We have received your message and will reply shortly."}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {submitError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 font-medium bg-red-50 p-4 rounded-xl border border-red-100 text-center text-sm shadow-sm"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  {/* Type Selection */}
                  <div className="flex gap-4 p-2 bg-slate-50/80 rounded-2xl border border-slate-100 mb-10 shadow-inner">
                    <button
                      type="button"
                      onClick={() => handleTypeChange("inquiry")}
                      className={`flex-1 py-3.5 rounded-xl text-sm md:text-base font-bold transition-all duration-300 cursor-pointer ${
                        formData.contact_type === "inquiry"
                          ? "bg-white text-main shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100"
                          : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                      }`}
                    >
                      {lang === "ar" ? "استفسار عام" : "General Inquiry"}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTypeChange("wholesale")}
                      className={`flex-1 py-3.5 rounded-xl text-sm md:text-base font-bold transition-all duration-300 cursor-pointer ${
                        formData.contact_type === "wholesale"
                          ? "bg-white text-main shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100"
                          : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                      }`}
                    >
                      {lang === "ar" ? "طلب جملة" : "Wholesale Order"}
                    </button>
                  </div>

                  {/* Product Select (if wholesale) */}
                  {formData.contact_type === "wholesale" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mb-8"
                    >
                      <select
                        name="product_id"
                        value={formData.product_id}
                        onChange={handleChange}
                        required
                        className={inputClass + " appearance-none cursor-pointer"}
                      >
                        <option value="" disabled>
                          {lang === "ar" ? "اختر المنتج..." : "Select product..."}
                        </option>
                        {products.map((p) => (
                          <option key={p.id} value={p.id}>
                            {lang === "ar" ? p.name_ar : p.name_en}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  )}

                  {/* Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contactForm.name}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contactForm.email}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contactForm.phone}
                      className={inputClass + " text-left"}
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contactForm.message}
                      rows={4}
                      className={inputClass + " resize-none"}
                    ></textarea>
                  </div>

                  <div className="flex flex-col items-center gap-6 pt-4">
                    <div className="flex flex-col items-center gap-2 w-full">
                      <Turnstile
                        ref={turnstileRef}
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={(token) => setTurnstileToken(token)}
                        onError={() => setTurnstileToken("")}
                        onExpire={() => setTurnstileToken("")}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 text-white hover:bg-main py-4 md:py-5 rounded-xl text-lg md:text-xl font-bold transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(14,77,56,0.2)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                      ) : (
                        t.contactForm.submit
                      )}
                    </button>
                    
                    <p className="text-[11px] text-slate-400 text-center px-4 leading-relaxed">
                      {lang === "ar" ? (
                        <>
                          هذا الموقع محمي بواسطة Cloudflare Turnstile وتطبق <a href="https://www.cloudflare.com/en-gb/turnstile-privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600 transition-colors">سياسة الخصوصية</a> الخاصة بهم.
                        </>
                      ) : (
                        <>
                          This site is protected by Cloudflare Turnstile and their <a href="https://www.cloudflare.com/en-gb/turnstile-privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600 transition-colors">Privacy Policy</a> applies.
                        </>
                      )}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
