import { useTranslation } from "react-i18next";

interface Props {
  isSubmitting: boolean;
  onBack : () => void;
}
export default function ConfirmationStep({ isSubmitting , onBack }: Props) {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-between gap-16">
      <p className="text-green-600 text-5xl">{t("booking_confirm_whatsApp")}</p>
      <div className="w-full flex flex-col gap-2.5">
        <small className="text-sm text-gray-500">
          {t("booking_confirm_explain")}
        </small>
        <button
          type="submit"
          className="bg-amber-900 text-white py-2 px-5 rounded-2xl cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("booking_statement") : t("booking_confirm")}
        </button>
        <button
          type="button"
          className="bg-gray-900 text-white py-2 px-5 rounded-2xl cursor-pointer"
          onClick={onBack}
        >
          {t("booking_back")}
        </button>
      </div>
    </div>
  );
}
