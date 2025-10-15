export interface BookingFormValues {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
}

// booking response after checking API
export interface AvailabilityResponse {
  available: boolean;
  reason?: string;
}
