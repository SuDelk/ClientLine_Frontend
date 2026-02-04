import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/home/Header";
import Footer from "@/components/common/Footer";

interface Organization {
  id: number;
  name: string;
  type: string;
  location: string;
  employees: number;
  status: string;
}

const Organizations: React.FC = () => {
  const { theme } = useTheme();

  const organizations: Organization[] = [
    {
      id: 1,
      name: "Glamour Salon",
      type: "Salon",
      location: "New York",
      employees: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Ink Masters",
      type: "Tattoo Shop",
      location: "Los Angeles",
      employees: 8,
      status: "Active",
    },
    {
      id: 3,
      name: "Nail Paradise",
      type: "Nail Studio",
      location: "Miami",
      employees: 6,
      status: "Pending",
    },
    {
      id: 4,
      name: "Style Hub",
      type: "Salon",
      location: "Chicago",
      employees: 15,
      status: "Active",
    },
    {
      id: 5,
      name: "Art & Ink",
      type: "Tattoo Shop",
      location: "Austin",
      employees: 5,
      status: "Inactive",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      <Header page="organizations" />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        <h1
          className={`text-3xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Organizations
        </h1>

        <div
          className={`rounded-lg shadow-lg overflow-hidden ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <table className="w-full">
            <thead
              className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}
            >
              <tr>
                <th
                  className={`px-6 py-3 text-left text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  ID
                </th>
                <th
                  className={`px-6 py-3 text-left text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Name
                </th>
                <th
                  className={`px-6 py-3 text-left text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Type
                </th>
                <th
                  className={`px-6 py-3 text-left text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Location
                </th>
                <th
                  className={`px-6 py-3 text-left text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Employees
                </th>
                <th
                  className={`px-6 py-3 text-left text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {organizations.map((org) => (
                <tr
                  key={org.id}
                  className={`border-t ${
                    theme === "dark" ? "border-gray-600" : "border-gray-200"
                  }`}
                >
                  <td
                    className={`px-6 py-4 text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    {org.id}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {org.name}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {org.type}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {org.location}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {org.employees}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        org.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : org.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {org.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Organizations;
