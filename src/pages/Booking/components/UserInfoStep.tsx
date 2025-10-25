import { ErrorMessage, Field } from "formik";
import { useTranslation } from "react-i18next";
interface Props {
  isSubmitting: boolean;
  onBack: () => void;
}
export default function UserInfoStep({ isSubmitting, onBack }: Props) {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_name")}</label>
        <Field
          className="w-full border border-gray-400 p-2 rounded-2xl"
          type="text"
          placeholder={t("booking_name_place")}
          name="name"
        />
        <ErrorMessage
          name="name"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_phone")}</label>
        <Field
          className="w-full border border-gray-400 p-2 rounded-2xl"
          type="text"
          placeholder={t("booking_phone_place")}
          name="phone"
        />
        <ErrorMessage
          name="phone"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_email")}</label>
        <Field
          className="w-full border border-gray-400 p-2 rounded-2xl"
          type="email"
          placeholder={t("booking_email_place")}
          name="email"
        />
        <ErrorMessage
          name="email"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_seating")}</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <Field type="radio" name="seating" value="indoor" />
            <span>{t("booking_seating_indoor")}</span>
          </label>
          <label className="flex items-center gap-2">
            <Field type="radio" name="seating" value="outdoor" />
            <span>{t("booking_seating_outdoor")}</span>
          </label>
        </div>
        <ErrorMessage
          name="seating"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label className="font-bold text-2xl">{t("booking_notes")}</label>
        <Field
          as="textarea"
          className="w-full border border-gray-400 p-2 rounded-2xl h-24 resize-none"
          placeholder={t("booking_notes_place")}
          name="notes"
        />
        <ErrorMessage
          name="notes"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="w-full flex gap-3 justify-between">
        <button
          className="bg-gray-400 text-white py-3 px-7 rounded-2xl cursor-pointer"
          type="button"
          onClick={onBack}
        >
          {t("booking_back")}
        </button>
        <button
          className="bg-amber-900 text-white py-2 px-5 rounded-2xl cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("booking_statement") : t("booking_confirm")}
        </button>
      </div>
    </div>
  );
}
