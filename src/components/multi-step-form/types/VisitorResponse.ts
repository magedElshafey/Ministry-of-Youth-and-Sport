import { FlightType } from "./Flight";

export interface VisitorResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  id_number: string;
  id_expiration: string;
  visitor_category: string;
  registration_type: number;
  status: number;
  has_confirmed: boolean;
  residence_entry_date: string;
  residence_exit_date: string;
  residence_period: number;
  arrival_trip: FlightType;
  leaving_trip: FlightType;
  created_at: string;
}

export interface VisitorSubmitResponse {
  data: VisitorResponse;
}

