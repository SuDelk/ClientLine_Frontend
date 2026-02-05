import AdminLayout from '../../../components/admin/AdminLayout';

const Settings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" defaultValue="ClientLine" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" defaultValue="admin@clientline.com" />
              </div>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                Save Changes
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Email Notifications</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">SMS Notifications</span>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Push Notifications</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;