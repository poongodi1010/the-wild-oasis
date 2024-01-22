import Button from "../../ui/Button";
import { useCheckingOut } from "./useCheckingOut";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckingOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
