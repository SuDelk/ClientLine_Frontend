import AdminLayout from '../../../components/admin/AdminLayout';

const Appointments = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Add New Appointment
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4 p-4 border-b">
              <div className="font-medium text-gray-900">Client</div>
              <div className="font-medium text-gray-900">Service</div>
              <div className="font-medium text-gray-900">Date</div>
              <div className="font-medium text-gray-900">Status</div>
              <div className="font-medium text-gray-900">Actions</div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">John Doe</div>
              <div className="text-teal-500">Hair Cut</div>
              <div className="text-teal-500">2024-01-15</div>
              <div><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Confirmed</span></div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Cancel</button>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">Jane Smith</div>
              <div className="text-teal-500">Tattoo Session</div>
              <div className="text-teal-500">2024-01-16</div>
              <div><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Cancel</button>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">Mike Johnson</div>
              <div className="text-teal-500">Nail Art</div>
              <div className="text-teal-500">2024-01-17</div>
              <div><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Confirmed</span></div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Appointments;