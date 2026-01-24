"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Option = { value: string; label: string };

type Props = {
  departmentValue: string;
  locationValue: string;
  departmentOptions: Option[];
  locationOptions: Option[];
};

export default function CareersFilters({
  departmentValue,
  locationValue,
  departmentOptions,
  locationOptions,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = (key: "department" | "location", value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={departmentValue}
        className="px-4 py-2.5 bg-white border border-bontera-grey-300 text-bontera-grey-700 text-sm focus:outline-none focus:ring-2 focus:ring-bontera-navy-500"
        onChange={(e) => updateParam("department", e.target.value)}
      >
        {departmentOptions.map((opt) => (
          <option key={opt.value || "all"} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <select
        value={locationValue}
        className="px-4 py-2.5 bg-white border border-bontera-grey-300 text-bontera-grey-700 text-sm focus:outline-none focus:ring-2 focus:ring-bontera-navy-500"
        onChange={(e) => updateParam("location", e.target.value)}
      >
        {locationOptions.map((opt) => (
          <option key={opt.value || "all"} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
