"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type ContactFormProps = {
  locale: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm({ locale }: ContactFormProps) {
const t = useTranslations("contactPage.form");
  const isRTL = locale === "ar";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const projectTypes = [
    "commercial",
    "residential",
    "infrastructure",
    "industrial",
    "renovation",
    "consulting",
    "other",
  ];

  const budgetRanges = [
    "under1m",
    "1mTo5m",
    "5mTo10m",
    "10mTo50m",
    "over50m",
    "notSure",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("errors.messageRequired");
    } else if (formData.message.trim().length < 20) {
      newErrors.message = t("errors.messageTooShort");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In production, you would send the data to your API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="font-semibold">{t("success.title")}</h4>
            <p className="text-sm mt-1">{t("success.message")}</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="font-semibold">{t("error.title")}</h4>
            <p className="text-sm mt-1">{t("error.message")}</p>
          </div>
        </div>
      )}

      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-bontera-grey-700 mb-2">
            {t("fields.name.label")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("fields.name.placeholder")}
            className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors ${
              errors.name ? "border-red-500" : "border-bontera-grey-300"
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-bontera-grey-700 mb-2">
            {t("fields.email.label")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("fields.email.placeholder")}
            className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors ${
              errors.email ? "border-red-500" : "border-bontera-grey-300"
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Phone & Company Row */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-bontera-grey-700 mb-2">
            {t("fields.phone.label")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("fields.phone.placeholder")}
            className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-bontera-grey-700 mb-2">
            {t("fields.company.label")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={t("fields.company.placeholder")}
            className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-bontera-grey-700 mb-2">
          {t("fields.subject.label")}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t("fields.subject.placeholder")}
          className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors"
        />
      </div>

      {/* Project Type & Budget Row */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-bontera-grey-700 mb-2">
            {t("fields.projectType.label")}
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors"
          >
            <option value="">{t("fields.projectType.placeholder")}</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {t(`fields.projectType.options.${type}`)}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-bontera-grey-700 mb-2">
            {t("fields.budget.label")}
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors"
          >
            <option value="">{t("fields.budget.placeholder")}</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {t(`fields.budget.options.${range}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-bontera-grey-700 mb-2">
          {t("fields.message.label")} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder={t("fields.message.placeholder")}
          className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent transition-colors resize-none ${
            errors.message ? "border-red-500" : "border-bontera-grey-300"
          }`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Privacy Notice */}
      <p className="text-sm text-bontera-grey-500">
        {t("privacy.text")}{" "}
        <a href={`/${locale}/privacy`} className="text-bontera-navy-600 hover:text-bontera-navy-700 underline">
          {t("privacy.link")}
        </a>
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-bontera-navy-600 hover:bg-bontera-navy-700 disabled:bg-bontera-grey-400 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t("submitting")}
          </>
        ) : (
          <>
            {t("submit")}
            <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}