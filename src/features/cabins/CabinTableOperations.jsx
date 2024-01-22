import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (A-Z)" },
          { value: "regularPrice-desc", label: "Sort by Price (Z-A)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (A-Z)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
