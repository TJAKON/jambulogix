// "use client";
// import { useState } from "react";

// export default function VendorsSection() {
//   const vendors = [
//     { name: "A S Solution", status: "Active", type: "CCTV", businessUnit: "NCRS", client: "Meesho" },
//     { name: "MBTC Intrafurnish Private Limited", status: "Active", type: "Chair", businessUnit: "SNPS", client: "Meesho" },
//     { name: "D & S Seating System", status: "Active", type: "chair Table", businessUnit: "D14S", client: "Meesho" },
//     { name: "Sarwar Enterprises", status: "Active", type: "chair Table", businessUnit: "D14S", client: "Meesho" },
//     { name: "Mahender Fire and Safety", status: "Active", type: "Fire and Safety", businessUnit: "D14S", client: "Meesho" },
//     { name: "Shri Ram Mhe Industrial Solutions", status: "Active", type: "HPT", businessUnit: "SOP", client: "Instakart" },
//     { name: "C Pi Media Services Pvt. Ltd.", status: "Active", type: "Communication Charges", businessUnit: "NHQ", client: "HO" },
//     { name: "Anita R. & Associates", status: "Active", type: "Consultancy Charges", businessUnit: "NHQ", client: "HO" },
//     { name: "Jai Enterprises", status: "Active", type: "Consultancy Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "SBA & Assoociates (CS)", status: "Active", type: "Consultancy Charges", businessUnit: "NHQ", client: "HO" },
//     { name: "Anshu Pathak", status: "Active", type: "Consultancy Charges", businessUnit: "NHQ", client: "HO" },
//     { name: "Pradyumna Kumar", status: "Active", type: "Consultancy Charges", businessUnit: "NHQ", client: "HO" },
//     { name: "Siti Broadband Service Private Limited", status: "Active", type: "Internet Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "VMO Broadband Private Limited", status: "Active", type: "Internet Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Nextra One", status: "Active", type: "Internet Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Computer solutions", status: "Active", type: "Internet Service Charges", businessUnit: "SNPS", client: "Meesho" },
//     { name: "Satya Computers", status: "Active", type: "IT Rental", businessUnit: "NCRS", client: "Meesho" },
//     { name: "R.K & Company Manpower Pvt. Ltd.", status: "Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Kumar Building Facility", status: "Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Next Facility Privated Limited", status: "Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Shree Shyam Enterprises", status: "Active", type: "Manpower Service Charges", businessUnit: "SNPS", client: "Meesho" },
//     { name: "Sunwave Management & Security Services Pvt.Ltd.", status: "Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Believe Solution Services", status: "Active", type: "Manpower Service Charges", businessUnit: "D14S", client: "Meesho" },
//     { name: "Niva Health Insurance", status: "Active", type: "Office expenses", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Sumitra Devi", status: "Active", type: "Office Rent", businessUnit: "NHQ", client: "HO" },
//     { name: "Omkar Generator Service", status: "Active", type: "Power and Utility", businessUnit: "D14S", client: "Meesho" },
//     { name: "BSES/Electicity", status: "Active", type: "Power and Utility", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Somit Printers", status: "Active", type: "Printing & stationery", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Sumersons", status: "Active", type: "Printing & stationery", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Ayaan Trolly Wheels", status: "Active", type: "Repair and Maintenance", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Ticket Vendor", status: "Active", type: "Travelling Exps", businessUnit: "NHQ", client: "HO" },
//     { name: "Baljit Singh HUF", status: "Active", type: "Warehouse Rent", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Baljit Singh S/O Lt. ChNandlal", status: "Active", type: "Warehouse Rent", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Veena Devi W/O Ranbir Singh", status: "Active", type: "Warehouse Rent", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Rekha W/O Raj Kapoor", status: "Active", type: "Warehouse Rent", businessUnit: "NCRS", client: "Meesho" },
//     { name: "MRM Enterprises", status: "Active", type: "Warehouse Rent", businessUnit: "D14S", client: "Meesho" },
//     { name: "Manish Gupta", status: "Active", type: "Warehouse Rent", businessUnit: "D14S", client: "Meesho" },
//     { name: "Dr.Dinesh Kumar", status: "Active", type: "Warehouse Rent", businessUnit: "SNPS", client: "Meesho" },
//     { name: "Ravinder Kaushik", status: "Active", type: "Warehouse Rent", businessUnit: "SNPS", client: "Meesho" },
//     { name: "Neeraj Kaushik", status: "Active", type: "Warehouse Rent", businessUnit: "SNPS", client: "Meesho" },
//     { name: "A V Venugopal", status: "Active", type: "Warehouse Rent", businessUnit: "NLMB", client: "Instakart" },
//     { name: "Mohit", status: "Active", type: "Warehouse Security", businessUnit: "D14S", client: "Meesho" },
//     { name: "Visagar Warehousing", status: "Active", type: "Warehouse Security", businessUnit: "AMH", client: "Instakart" },
//     { name: "Jangra R.O. Water Supplier", status: "Active", type: "WH Refreshments", businessUnit: "SNPS", client: "Meesho" },
//     { name: "Rajbeer Snacks", status: "Active", type: "WH Refreshments", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Shri Ganga Mineral Water", status: "Active", type: "WH Refreshments", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Shree Radhe Container Service", status: "D-Active", type: "Consultancy Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Prime Staffing Solutions", status: "D-Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Supreme Manpower Solution", status: "D-Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "BuyBuy Technologies Private Limited", status: "D-Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Om Fabrication", status: "D-Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "NB Group Solutions", status: "D-Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Susheel", status: "D-Active", type: "Manpower Service Charges", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Distil Ventures India Limited", status: "D-Active", type: "Manpower Service Charges", businessUnit: "SNPS", client: "Meesho" },
//     { name: "Jai Baba Haridas Packing Solution", status: "D-Active", type: "Printing & stationery", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Manju Bala", status: "D-Active", type: "Printing & stationery", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Piara Singh", status: "D-Active", type: "Warehouse Rent", businessUnit: "NCRS", client: "Meesho" },
//     { name: "Bimlraj Outsourcing Pvt.Ltd.", status: "TO BE D-Active", type: "Manpower Service Charges", businessUnit: "D14S", client: "Meesho" },
//   ];

//   const vendorTypes = ["All", ...new Set(vendors.map(v => v.type))];
//   const businessUnits = ["All", ...new Set(vendors.map(v => v.businessUnit))];
//   const clients = ["All", ...new Set(vendors.map(v => v.client))];

//   const [selectedType, setSelectedType] = useState("All");
//   const [selectedBU, setSelectedBU] = useState("All");
//   const [selectedClient, setSelectedClient] = useState("All");

//   const getStatusColor = (s) =>
//     s === "Active"
//       ? "bg-green-600"
//       : "bg-red-500";

//   const filteredVendors = vendors.filter(v =>
//     (selectedType === "All" || v.type === selectedType) &&
//     (selectedBU === "All" || v.businessUnit === selectedBU) &&
//     (selectedClient === "All" || v.client === selectedClient)
//   );

//   return (
//     <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-[#24577F] mb-4">
//           Trusted By <span className="text-6xl text-[#FF7F06]">Vendors</span>
//         </h2>
//         <p className="text-gray-600 max-w-xl mx-auto">
//           Trusted operational vendors supporting our nationwide network.
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-2 mb-6">
//         {vendorTypes.map((type) => (
//           <button
//             key={type}
//             onClick={() => setSelectedType(type)}
//             className={`px-5 py-2 rounded-xl border text-sm transition ${
//               selectedType === type
//                 ? "bg-[#FF7F06] text-white"
//                 : "bg-white hover:bg-gray-100 text-gray-700"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Filters */}
//       {/* <div className="flex flex-wrap justify-center gap-4 mb-8">

//         <select
//           value={selectedBU}
//           onChange={(e) => setSelectedBU(e.target.value)}
//           className="px-4 py-2 border rounded-xl shadow bg-white"
//         >
//           {businessUnits.map(bu => <option key={bu}>{bu}</option>)}
//         </select>

//         <select
//           value={selectedClient}
//           onChange={(e) => setSelectedClient(e.target.value)}
//           className="px-4 py-2 border rounded-xl shadow bg-white"
//         >
//           {clients.map(cl => <option key={cl}>{cl}</option>)}
//         </select>
//       </div> */}

//       {/* Table */}
//       <div className="overflow-x-auto rounded-xl shadow-lg border">
//         <table className="w-full text-sm">
//           <thead className="bg-[#24577F] text-white">
//             <tr>
//               <th className="p-3 text-left">Vendor Name</th>
//               <th className="p-3 text-left">Type</th>
//               <th className="p-3 text-left">Business Unit</th>
//               <th className="p-3 text-left">Client</th>
//               <th className="p-3 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredVendors.map((v, i) => (
//               <tr key={i} className="border-b hover:bg-gray-50">
//                 <td className="p-3 font-semibold">{v.name}</td>
//                 <td className="p-3">{v.type}</td>
//                 <td className="p-3">{v.businessUnit}</td>
//                 <td className="p-3">{v.client}</td>
//                 <td className="p-3">
//                   <span className={`text-white px-2 py-1 rounded text-xs ${getStatusColor(v.status)}`}>
//                     {v.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {filteredVendors.length === 0 && (
//         <p className="text-center text-gray-500 mt-4">No vendors found.</p>
//       )}
//     </section>
//   );
// }

"use client";
import { useState } from "react";

export default function VendorsSection() {
  const vendors = [
    {
      name: "A S Solution",
      status: "Active",
      type: "CCTV",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "MBTC Intrafurnish Private Limited",
      status: "Active",
      type: "Chair",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "D & S Seating System",
      status: "Active",
      type: "chair Table",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "Sarwar Enterprises",
      status: "Active",
      type: "chair Table",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "Mahender Fire and Safety",
      status: "Active",
      type: "Fire and Safety",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "Shri Ram Mhe Industrial Solutions",
      status: "Active",
      type: "HPT",
      businessUnit: "SOP",
      client: "Instakart",
    },
    {
      name: "C Pi Media Services Pvt. Ltd.",
      status: "Active",
      type: "Communication Charges",
      businessUnit: "NHQ",
      client: "HO",
    },
    {
      name: "Anita R. & Associates",
      status: "Active",
      type: "Consultancy Charges",
      businessUnit: "NHQ",
      client: "HO",
    },
    {
      name: "Jai Enterprises",
      status: "Active",
      type: "Consultancy Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "SBA & Assoociates (CS)",
      status: "Active",
      type: "Consultancy Charges",
      businessUnit: "NHQ",
      client: "HO",
    },
    {
      name: "Anshu Pathak",
      status: "Active",
      type: "Consultancy Charges",
      businessUnit: "NHQ",
      client: "HO",
    },
    {
      name: "Pradyumna Kumar",
      status: "Active",
      type: "Consultancy Charges",
      businessUnit: "NHQ",
      client: "HO",
    },
    {
      name: "Siti Broadband Service Private Limited",
      status: "Active",
      type: "Internet Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "VMO Broadband Private Limited",
      status: "Active",
      type: "Internet Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Nextra One",
      status: "Active",
      type: "Internet Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Computer solutions",
      status: "Active",
      type: "Internet Service Charges",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "Satya Computers",
      status: "Active",
      type: "IT Rental",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "R.K & Company Manpower Pvt. Ltd.",
      status: "Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Kumar Building Facility",
      status: "Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Next Facility Privated Limited",
      status: "Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Shree Shyam Enterprises",
      status: "Active",
      type: "Manpower Service Charges",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "Sunwave Management & Security Services Pvt.Ltd.",
      status: "Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Believe Solution Services",
      status: "Active",
      type: "Manpower Service Charges",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "Niva Health Insurance",
      status: "Active",
      type: "Office expenses",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Sumitra Devi",
      status: "Active",
      type: "Office Rent",
      businessUnit: "NHQ",
      client: "HO",
    },
    {
      name: "Omkar Generator Service",
      status: "Active",
      type: "Power and Utility",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "BSES/Electicity",
      status: "Active",
      type: "Power and Utility",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Somit Printers",
      status: "Active",
      type: "Printing & stationery",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Sumersons",
      status: "Active",
      type: "Printing & stationery",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Ayaan Trolly Wheels",
      status: "Active",
      type: "Repair and Maintenance",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Ticket Vendor",
      status: "Active",
      type: "Travelling Exps",
      businessUnit: "NHQ",
      client: "HO",
    },
    {
      name: "Baljit Singh HUF",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Baljit Singh S/O Lt. ChNandlal",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Veena Devi W/O Ranbir Singh",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Rekha W/O Raj Kapoor",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "MRM Enterprises",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "Manish Gupta",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "Dr.Dinesh Kumar",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "Ravinder Kaushik",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "Neeraj Kaushik",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "A V Venugopal",
      status: "Active",
      type: "Warehouse Rent",
      businessUnit: "NLMB",
      client: "Instakart",
    },
    {
      name: "Mohit",
      status: "Active",
      type: "Warehouse Security",
      businessUnit: "D14S",
      client: "Meesho",
    },
    {
      name: "Visagar Warehousing",
      status: "Active",
      type: "Warehouse Security",
      businessUnit: "AMH",
      client: "Instakart",
    },
    {
      name: "Jangra R.O. Water Supplier",
      status: "Active",
      type: "WH Refreshments",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "Rajbeer Snacks",
      status: "Active",
      type: "WH Refreshments",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Shri Ganga Mineral Water",
      status: "Active",
      type: "WH Refreshments",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Shree Radhe Container Service",
      status: "D-Active",
      type: "Consultancy Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Prime Staffing Solutions",
      status: "D-Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Supreme Manpower Solution",
      status: "D-Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "BuyBuy Technologies Private Limited",
      status: "D-Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Om Fabrication",
      status: "D-Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "NB Group Solutions",
      status: "D-Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Susheel",
      status: "D-Active",
      type: "Manpower Service Charges",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Distil Ventures India Limited",
      status: "D-Active",
      type: "Manpower Service Charges",
      businessUnit: "SNPS",
      client: "Meesho",
    },
    {
      name: "Jai Baba Haridas Packing Solution",
      status: "D-Active",
      type: "Printing & stationery",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Manju Bala",
      status: "D-Active",
      type: "Printing & stationery",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Piara Singh",
      status: "D-Active",
      type: "Warehouse Rent",
      businessUnit: "NCRS",
      client: "Meesho",
    },
    {
      name: "Bimlraj Outsourcing Pvt.Ltd.",
      status: "TO BE D-Active",
      type: "Manpower Service Charges",
      businessUnit: "D14S",
      client: "Meesho",
    },
  ];

  const vendorTypes = ["All", ...new Set(vendors.map((v) => v.type))];
  const businessUnits = ["All", ...new Set(vendors.map((v) => v.businessUnit))];
  const clients = ["All", ...new Set(vendors.map((v) => v.client))];

  const [selectedType, setSelectedType] = useState("All");
  const [selectedBU, setSelectedBU] = useState("All");
  const [selectedClient, setSelectedClient] = useState("All");

  const getStatusColor = (s) =>
    s === "Active" ? "bg-green-600" : "bg-red-500";

  const filteredVendors = vendors.filter(
    (v) =>
      (selectedType === "All" || v.type === selectedType) &&
      (selectedBU === "All" || v.businessUnit === selectedBU) &&
      (selectedClient === "All" || v.client === selectedClient)
  );

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24577F] mb-3">
          Trusted By{" "}
          <span className="text-5xl sm:text-6xl text-[#FF7F06]">Vendors</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Trusted operational vendors supporting our nationwide network.
        </p>
      </div>

      {/* Tabs */}
      {/* Tabs */}
      <div
        className="
    flex 
    sm:grid sm:grid-cols-4 lg:grid-cols-10
    gap-2 mb-6 pb-2 
    overflow-x-auto sm:overflow-visible 
    whitespace-nowrap sm:whitespace-normal 
    hide-scrollbar
  "
      >
        {vendorTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-2 py-1 rounded-xl border text-xs sm:text-sm transition 
        ${
          selectedType === type
            ? "bg-[#FF7F06] text-white border-[#FF7F06]"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Dropdown Filters */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 max-w-xl mx-auto gap-3 mb-6">
        <select
          value={selectedBU}
          onChange={(e) => setSelectedBU(e.target.value)}
          className="px-3 py-2 border rounded-xl bg-white text-sm"
        >
          {businessUnits.map((bu) => (
            <option key={bu}>{bu}</option>
          ))}
        </select>

        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          className="px-3 py-2 border rounded-xl bg-white text-sm sm:col-span-1 col-span-2"
        >
          {clients.map((cl) => (
            <option key={cl}>{cl}</option>
          ))}
        </select>
      </div> */}

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl shadow-lg border">
        <table className="w-full text-sm">
          <thead className="bg-[#24577F] text-white">
            <tr>
              <th className="p-3 text-left">Vendor Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Business Unit</th>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((v, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold">{v.name}</td>
                <td className="p-3">{v.type}</td>
                <td className="p-3">{v.businessUnit}</td>
                <td className="p-3">{v.client}</td>
                <td className="p-3">
                  <span
                    className={`text-white px-2 py-1 rounded text-xs ${getStatusColor(
                      v.status
                    )}`}
                  >
                    {v.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Card View */}
      <div className="md:hidden grid gap-4">
        {filteredVendors.map((v, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-sm bg-white">
            <p className="font-bold text-gray-800 text-sm">{v.name}</p>
            <p className="text-xs text-gray-600">Type: {v.type}</p>
            <p className="text-xs text-gray-600">BU: {v.businessUnit}</p>
            <p className="text-xs text-gray-600">Client: {v.client}</p>
            <div className="mt-2">
              <span
                className={`text-white px-2 py-1 rounded text-[10px] ${getStatusColor(
                  v.status
                )}`}
              >
                {v.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredVendors.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No vendors found.</p>
      )}
    </section>
  );
}
