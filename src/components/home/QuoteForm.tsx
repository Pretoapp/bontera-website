"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type QuoteFormProps = {
  locale: string;
};

type FormData = {
  // Step 1: Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  // Step 2: Project Details
  projectType: string;
  projectLocation: string;
  projectSize: string;
  budget: string;
  timeline: string;
  // Step 3: Additional Info
  description: string;
  requirements: string[];
  referralSource: string;
  preferredContact: string;
  // File uploads (store file names for display)
  attachments: string[];
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  projectType: "",
  projectLocation: "",
  projectSize: "",
  budget: "",
  timeline: "",
  description: "",
  requirements: [],
  referralSource: "",
  preferredContact: "email",
  attachments: [],
};

export default function QuoteForm({ locale }: QuoteFormProps) {
   const t = useTranslations("quotePage.form");
  const isRTL = locale === "ar";

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const totalSteps = 3;

  const projectTypes = [
    "commercial",
    "residential",
    "infrastructure",
    "industrial",
    "renovation",
    "mixedUse",
    "healthcare",
    "education",
    "hospitality",
    "other",
  ];

  const budgetRanges = [
    "under500k",
    "500kTo1m",
    "1mTo5m",
    "5mTo10m",
    "10mTo50m",
    "50mTo100m",
    "over100m",
  ];

  const timelines = [
    "immediate",
    "1to3months",
    "3to6months",
    "6to12months",
    "over12months",
    "flexible",
  ];

  const projectSizes = [
    "small",
    "medium",
    "large",
    "megaProject",
  ];

  const requirementOptions = [
    "design",
    "permits",
    "projectManagement",
    "sustainability",
    "bim",
    "turnkey",
  ];

  const referralSources = [
    "search",
    "referral",
    "socialMedia",
    "advertisement",
    "event",
    "other",
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = t("errors.required");
      if (!formData.lastName.trim()) newErrors.lastName = t("errors.required");
      if (!formData.email.trim()) {
        newErrors.email = t("errors.required");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t("errors.invalidEmail");
      }
      if (!formData.phone.trim()) newErrors.phone = t("errors.required");
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = t("errors.required");
      if (!formData.projectLocation.trim()) newErrors.projectLocation = t("errors.required");
      if (!formData.budget) newErrors.budget = t("errors.required");
    }

    if (step === 3) {
      if (!formData.description.trim()) {
        newErrors.description = t("errors.required");
      } else if (formData.description.trim().length < 50) {
        newErrors.description = t("errors.descriptionTooShort");
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      requirements: checked
        ? [...prev.requirements, value]
        : prev.requirements.filter((r) => r !== value),
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setSubmitStatus("success");
      setFormData(initialFormData);
      setCurrentStep(1);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step indicator
  const StepIndicator = () => (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center font-semibold transition-colors ${
                step === currentStep
                  ? "bg-bontera-navy-600 text-white"
                  : step < currentStep
                  ? "bg-green-500 text-white"
                  : "bg-bontera-grey-200 text-bontera-grey-500"
              }`}
            >
              {step < currentStep ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step
              )}
            </div>
            {step < 3 && (
              <div
                className={`w-full h-1 mx-2 sm:mx-4 transition-colors ${
                  step < currentStep ? "bg-green-500" : "bg-bontera-grey-200"
                }`}
                style={{ width: "60px" }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-bontera-grey-500">{t("steps.contact")}</span>
        <span className="text-xs text-bontera-grey-500">{t("steps.project")}</span>
        <span className="text-xs text-bontera-grey-500">{t("steps.details")}</span>
      </div>
    </div>
  );

  // Success Message
  if (submitStatus === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-green-800 mb-2">{t("success.title")}</h3>
        <p className="text-green-700 mb-6">{t("success.message")}</p>
        <p className="text-sm text-green-600">{t("success.reference")}: QR-{Date.now().toString(36).toUpperCase()}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="quote-form" className="space-y-8" dir={isRTL ? "rtl" : "ltr"}>
      <StepIndicator />

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

      {/* ═══════════════════════════════════════════════════════════════════
          STEP 1: CONTACT INFORMATION
      ═══════════════════════════════════════════════════════════════════ */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-bontera-grey-900 pb-4 border-b border-bontera-grey-200">
            {t("step1.title")}
          </h3>

          {/* Name Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.firstName")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent ${
                  errors.firstName ? "border-red-500" : "border-bontera-grey-300"
                }`}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.lastName")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent ${
                  errors.lastName ? "border-red-500" : "border-bontera-grey-300"
                }`}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.email")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-bontera-grey-300"
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.phone")} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent ${
                  errors.phone ? "border-red-500" : "border-bontera-grey-300"
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>

          {/* Company & Role Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.company")}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.role")}
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder={t("fields.rolePlaceholder")}
                className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          STEP 2: PROJECT DETAILS
      ═══════════════════════════════════════════════════════════════════ */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-bontera-grey-900 pb-4 border-b border-bontera-grey-200">
            {t("step2.title")}
          </h3>

          {/* Project Type & Location */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.projectType")} <span className="text-red-500">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent ${
                  errors.projectType ? "border-red-500" : "border-bontera-grey-300"
                }`}
              >
                <option value="">{t("fields.selectOption")}</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {t(`projectTypes.${type}`)}
                  </option>
                ))}
              </select>
              {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>}
            </div>

            <div>
              <label htmlFor="projectLocation" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.projectLocation")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="projectLocation"
                name="projectLocation"
                value={formData.projectLocation}
                onChange={handleChange}
                placeholder={t("fields.projectLocationPlaceholder")}
                className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent ${
                  errors.projectLocation ? "border-red-500" : "border-bontera-grey-300"
                }`}
              />
              {errors.projectLocation && <p className="mt-1 text-sm text-red-600">{errors.projectLocation}</p>}
            </div>
          </div>

          {/* Project Size & Budget */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectSize" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.projectSize")}
              </label>
              <select
                id="projectSize"
                name="projectSize"
                value={formData.projectSize}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent"
              >
                <option value="">{t("fields.selectOption")}</option>
                {projectSizes.map((size) => (
                  <option key={size} value={size}>
                    {t(`projectSizes.${size}`)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.budget")} <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent ${
                  errors.budget ? "border-red-500" : "border-bontera-grey-300"
                }`}
              >
                <option value="">{t("fields.selectOption")}</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {t(`budgetRanges.${range}`)}
                  </option>
                ))}
              </select>
              {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget}</p>}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-bontera-grey-700 mb-2">
              {t("fields.timeline")}
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent"
            >
              <option value="">{t("fields.selectOption")}</option>
              {timelines.map((tl) => (
                <option key={tl} value={tl}>
                  {t(`timelines.${tl}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          STEP 3: ADDITIONAL DETAILS
      ═══════════════════════════════════════════════════════════════════ */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-bontera-grey-900 pb-4 border-b border-bontera-grey-200">
            {t("step3.title")}
          </h3>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-bontera-grey-700 mb-2">
              {t("fields.description")} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder={t("fields.descriptionPlaceholder")}
              className={`w-full px-4 py-3 border bg-white text-bontera-grey-900 placeholder:text-bontera-grey-400 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent resize-none ${
                errors.description ? "border-red-500" : "border-bontera-grey-300"
              }`}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>

          {/* Requirements Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-bontera-grey-700 mb-3">
              {t("fields.requirements")}
            </label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {requirementOptions.map((req) => (
                <label key={req} className="flex items-center gap-3 p-3 bg-bontera-grey-50 border border-bontera-grey-200 cursor-pointer hover:bg-bontera-grey-100 transition-colors">
                  <input
                    type="checkbox"
                    value={req}
                    checked={formData.requirements.includes(req)}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-bontera-navy-600 border-bontera-grey-300 focus:ring-bontera-navy-500"
                  />
                  <span className="text-sm text-bontera-grey-700">{t(`requirements.${req}`)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Referral Source & Preferred Contact */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="referralSource" className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.referralSource")}
              </label>
              <select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-bontera-grey-300 bg-white text-bontera-grey-900 focus:outline-none focus:ring-2 focus:ring-bontera-navy-500 focus:border-transparent"
              >
                <option value="">{t("fields.selectOption")}</option>
                {referralSources.map((src) => (
                  <option key={src} value={src}>
                    {t(`referralSources.${src}`)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-bontera-grey-700 mb-2">
                {t("fields.preferredContact")}
              </label>
              <div className="flex gap-4">
                {["email", "phone", "whatsapp"].map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method}
                      checked={formData.preferredContact === method}
                      onChange={handleRadioChange}
                      className="w-4 h-4 text-bontera-navy-600 border-bontera-grey-300 focus:ring-bontera-navy-500"
                    />
                    <span className="text-sm text-bontera-grey-700">{t(`contactMethods.${method}`)}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Privacy Agreement */}
          <div className="p-4 bg-bontera-grey-50 border border-bontera-grey-200">
            <p className="text-sm text-bontera-grey-600">
              {t("privacy.text")}{" "}
              <a href={`/${locale}/privacy`} className="text-bontera-navy-600 hover:text-bontera-navy-700 underline">
                {t("privacy.link")}
              </a>
              {" "}{t("privacy.and")}{" "}
              <a href={`/${locale}/terms`} className="text-bontera-navy-600 hover:text-bontera-navy-700 underline">
                {t("privacy.terms")}
              </a>.
            </p>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          NAVIGATION BUTTONS
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between pt-6 border-t border-bontera-grey-200">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handlePrevious}
            className="inline-flex items-center gap-2 text-bontera-grey-600 hover:text-bontera-grey-900 px-6 py-3 font-medium transition-colors"
          >
            <svg className={`w-5 h-5 ${isRTL ? "" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {t("buttons.previous")}
          </button>
        ) : (
          <div />
        )}

        {currentStep < totalSteps ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white px-8 py-3 font-semibold transition-colors"
          >
            {t("buttons.next")}
            <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-bontera-navy-600 hover:bg-bontera-navy-700 disabled:bg-bontera-grey-400 text-white px-8 py-3 font-semibold transition-colors disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {t("buttons.submitting")}
              </>
            ) : (
              <>
                {t("buttons.submit")}
                <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}