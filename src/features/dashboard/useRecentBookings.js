import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 20
    : Number(searchParams.get("last"));
  //   const numDays = Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();
  console.log(queryDate);
  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });
  console.log(bookings);
  return { isLoading, bookings };
}
