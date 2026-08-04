function StaffDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-purple-700">
        Staff Dashboard
      </h1>

      <p className="text-gray-600 mt-2">
        Manage student tasks and monitor progress
      </p>


      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Total Students
          </h2>
          <p className="text-3xl text-blue-600 mt-3">
            120
          </p>
        </div>


        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Total Tasks
          </h2>
          <p className="text-3xl text-purple-600 mt-3">
            45
          </p>
        </div>


        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Completed
          </h2>
          <p className="text-3xl text-green-600 mt-3">
            80%
          </p>
        </div>


        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Pending
          </h2>
          <p className="text-3xl text-red-600 mt-3">
            20%
          </p>
        </div>

      </div>


      <div className="bg-white p-6 rounded-xl shadow mt-8">

        <h2 className="text-2xl font-bold">
          Student Task Overview
        </h2>


        <table className="w-full mt-5">

          <thead>
            <tr className="border-b">
              <th className="text-left p-3">
                Student
              </th>

              <th className="text-left p-3">
                Task
              </th>

              <th className="text-left p-3">
                Status
              </th>

            </tr>
          </thead>


          <tbody>

            <tr className="border-b">
              <td className="p-3">
                Yasmin
              </td>

              <td className="p-3">
                Python Assignment
              </td>

              <td className="p-3 text-green-600">
                Completed
              </td>
            </tr>


            <tr>
              <td className="p-3">
                Student 2
              </td>

              <td className="p-3">
                DBMS Task
              </td>

              <td className="p-3 text-red-600">
                Pending
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StaffDashboard;