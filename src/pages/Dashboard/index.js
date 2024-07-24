


const Dashboard = () => {
    return (
    <>
    <main className="flex-1 overflow-y-auto bg-gray-100 h-full overflow-auto">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Grid layout for dashboard widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Order Summary Widget */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Orders</h3>
              <div className="mt-1 text-3xl font-semibold text-gray-900">89</div>
            </div>
          </div>

          {/* Shipment Status Widget */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Shipments</h3>
              <div className="mt-1 text-3xl font-semibold text-gray-900">34</div>
            </div>
          </div>

          {/* Inventory Status Widget */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Low Stock Items</h3>
              <div className="mt-1 text-3xl font-semibold text-gray-900">12</div>
            </div>
          </div>
        </div>

        {/* Flex layout for order list and chart */}
        <div className="flex flex-col lg:flex-row mt-8 gap-8">
          {/* Recent Orders List */}
          <div className="flex-1 bg-white shadow rounded-lg overflow-hidden">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
              <ul className="mt-3 divide-y divide-gray-200">
                <li className="py-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">#1234</span>
                    <span className="ml-2 text-sm text-gray-500">John Doe</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">Shipped</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chart placeholder */}
          <div className="flex-1 bg-white shadow rounded-lg overflow-hidden">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Sales Chart</h3>
              <div className="mt-3 h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
);
}

export default Dashboard;