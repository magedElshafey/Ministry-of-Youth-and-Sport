export interface FlightType {
  id: number;
  trip_number: string;
  trip_date: string;
  trip_time: string;
  stop_time: string | null;
  has_stop: boolean;
  type: number;
  is_active: number;
  city: string;
  stop_city: string | null;
}


