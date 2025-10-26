import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Step1Schema, Step2Schema } from "./validation/validationSchemes";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import DateAndTimeStep from "./components/DateAndTimeStep";
import UserInfoStep from "./components/UserInfoStep";
import ConfirmationStep from "./components/ConfirmationStep";
import { AnimatePresence, motion } from "framer-motion";
import BookingHero from "./components/BookingHero";
import Footer from "../Landing page/components/Footer";
import ProgressionBar from "./components/ProgressionBar";



const WHATSAPP_NUMBER = "+966548010223";
type Step = 1 | 2 | 3 | 4;
interface FormValues {
  date: string;
  time: string;
  geusts: number;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  seating?: "indoor" | "outdoor";
}
export default function Booking() {
  const { t } = useTranslation();
  const [step, setStep] = useState<Step>(1);
  const [reservationData, setReservationData] = useState<Partial<FormValues>>(
    {}
  );

  const [qrValue, setQrValue] = useState<string>("");

  const handleNext = (values: Partial<FormValues>) => {
    setReservationData((prev) => ({ ...prev, ...values }));
    setStep((prev) => (prev + 1) as Step);
  };
  const handleBack = () => setStep((prev) => (prev - 1) as Step);

  const handleSubmit = (values: FormValues) => {
    const data = { ...reservationData, ...values } as FormValues;

    const message = encodeURIComponent(
      `📅 Date: ${data.date}\n 🕒 Time: ${data.time}\n👥 Guests: ${
        data.geusts
      }\n🪑 Seating: ${data.seating}\n👤 Name: ${data.name}\n📞 Phone: ${
        data.phone
      }\n${data.email ? `📧 Email: ${data.email}\n` : ""}${
        data.notes ? `📝 Notes: ${data.notes}\n` : ""
      }`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    setQrValue(JSON.stringify(data));
    setStep(4);
  };

  const currentValidationSchema =
    step === 1 ? Step1Schema : step === 2 ? Step2Schema : null;
  const stepTitles = [
    t("booking_step1_title"),
    t("booking_step2_title"),
    t("booking_step3_title"),
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100">
      <BookingHero />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: ["easeInOut"] }}
        className="w-full px-5 flex flex-col justify-center items-center bg-gradient-to-b from-amber-50 to-amber-100 py-20"
      >
        {/* --- Progress Bar --- */}

        <ProgressionBar step={step} stepTitles={stepTitles} />
        {/* --- Form Content --- */}
        <Formik
          initialValues={{
            date: "",
            time: "",
            geusts: 1,
            name: "",
            phone: "",
            email: "",
            notes: "",
            seating: undefined,
          }}
          validationSchema={currentValidationSchema}
          onSubmit={(values, actions) => {
            if (step === 1) {
              handleNext(values);
              actions.setSubmitting(false);
            } else if (step === 2) {
              handleNext(values);
              actions.setSubmitting(false);
            } else if (step === 3) {
              handleSubmit(values);
              actions.setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full lg:w-1/2 border-4 border-amber-100 p-6 bg-amber-50 text-gray-700 rounded-4xl shadow-2xl hover:shadow-none duration-150 transition-all cursor-pointer">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <DateAndTimeStep isSubmitting={isSubmitting} />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <UserInfoStep
                      isSubmitting={isSubmitting}
                      onBack={handleBack}
                    />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ConfirmationStep
                      isSubmitting={isSubmitting}
                      onBack={handleBack}
                    />
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="qr"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-3 border p-4 rounded-2xl bg-white shadow-md mt-4"
                  >
                    <p className="text-green-600 text-xl font-semibold">
                      {t("booking_confirmed")}🎉
                    </p>
                    <QRCodeCanvas value={qrValue} size={200} />
                    <p className="text-gray-500 text-sm text-center">
                      Scan or save this QR code for your check-in.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setReservationData({});
                        setQrValue("");
                      }}
                      className="bg-amber-900 text-white py-2 px-4 rounded-2xl mt-3"
                    >
                      {t("booking_another")}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Form>
          )}
        </Formik>
      </motion.div>
      <Footer />
    </div>
  );
}
