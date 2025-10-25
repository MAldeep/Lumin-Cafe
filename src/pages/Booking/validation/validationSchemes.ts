import * as Yup from "yup";

export const Step1Schema = Yup.object({
  date: Yup.string()
    .required("Date is required")
    .test("not-in-past", "Date cannot be in the past", (value) => {
      if (!value) return false;

      const today = new Date();
      today.setHours(0, 0, 0, 0); // reset to start of today
      const selected = new Date(value + "T00:00:00"); // treat as local midnight

      return selected.getTime() >= today.getTime();
    }),
  time: Yup.string()
    .required("Time is required")
    .test(
      "valid-time",
      "Invalid time",
      (value) => !!value && value.includes(":")
    )
    .test("within-hours", "Outside working hours", (value, ctx) => {
      if (!value) return false;
      const { date } = ctx.parent;
      if (!date) return false;

      const [h, m] = value.split(":").map(Number);
      const total = h * 60 + m;
      const day = new Date(date).getUTCDay(); // 0 = Sunday, 5 = Friday

      if (day === 5) {
        // Friday closed from 08:00 → 13:00
        const closedStart = 8 * 60;
        const closedEnd = 13 * 60;
        if (total >= closedStart && total < closedEnd) return false;
      }

      // 24h otherwise
      return total >= 0 && total <= 23 * 60 + 59;
    })
    .test(
      "two-hours-gap",
      "Reservation must be at least 2 hours from now",
      (value, ctx) => {
        if (!value) return true; // handled elsewhere
        const { date } = ctx.parent;
        if (!date) return true;

        const reservationDateTime = new Date(`${date}T${value}`);
        const now = new Date();
        const diffInMs = reservationDateTime.getTime() - now.getTime();
        const diffInHours = diffInMs / (1000 * 60 * 60);

        // Must be at least 2 hours in the future
        return diffInHours >= 2;
      }
    ),
  geusts: Yup.number()
    .min(1, "Minimum number of geusts is 1")
    .max(20, "Maximum number of geusts is 20")
    .required("Geusts number is required to continue"),
});

export const Step2Schema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid phone number")
    .required("Phone number required"),
  email: Yup.string().email("Invalid email").notRequired(),
  seating: Yup.string()
    .oneOf(["indoor", "outdoor"])
    .required("Please select seating area"),
  notes: Yup.string().max(500, "Too long").notRequired(),
});
