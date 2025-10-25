import { ErrorMessage, Field } from "formik";
import { useTranslation } from "react-i18next";
interface Props {
  isSubmitting: boolean;
}
export default function DateAndTimeStep({ isSubmitting }: Props) {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_date")}</label>
        <Field
          className="w-full border border-gray-400 p-2 rounded-2xl"
          type="date"
          name="date"
        />
        <ErrorMessage
          name="date"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_time")}</label>
        <Field
          className="w-full border border-gray-400 p-2 rounded-2xl"
          type="time"
          name="time"
        />
        <ErrorMessage
          name="time"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_geusts")}</label>
        <Field
          className="w-full border border-gray-400 p-2 rounded-2xl"
          type="number"
          name="geusts"
        />
        <ErrorMessage
          name="geusts"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full cursor-pointer bg-amber-900 text-white p-2 rounded-2xl"
      >
        {isSubmitting ? t("booking_check") : t("booking_next")}
      </button>
    </div>
  );
}
