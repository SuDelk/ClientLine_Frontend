import AdminLayout from "../../../components/admin/AdminLayout";

const Organizations = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Organizations</h1>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Add New Organization
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 p-4 border-b">
              <div className="font-medium text-gray-900">Name</div>
              <div className="font-medium text-gray-900">Location</div>
              <div className="font-medium text-gray-900">Actions</div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">Hair Fusion</div>
              <div className="text-teal-500">Moratuwa</div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">Tattoo Shop</div>
              <div className="text-teal-500">Nugegoda</div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">{"Dee's Nails"}</div>
              <div className="text-teal-500">Colombo 7</div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Organizations;
