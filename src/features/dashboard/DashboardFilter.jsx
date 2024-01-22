import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "20", label: "Last 20 days" },
        { value: "30", label: "Last 30 days" },
        { value: "50", label: "Last 50 days" },
      ]}
    />
  );
}

export default DashboardFilter;
