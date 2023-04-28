export default function StatCard({ title, value, percentage }) {
  return (
    <div className="flex flex-col gap-2 w-[25%] bg-white rounded-lg p-4">
      <p className="text-[#5F6980]">{title}</p>
      <p className="text-[#282828] font-semibold text-[1.625rem]">{value}</p>
      <p className="text-[#929292]">CO2e</p>
      <p
        className={`px-3 py-1 ${
          percentage === "0.00"
            ? "bg-[#F2F4F7] text-[#5F6980]"
            : "bg-[#dcfff5] text-[#20C997]"
        } rounded-full w-fit font-semibold text-[0.75rem]`}
      >
        {percentage}
      </p>
    </div>
  );
}
