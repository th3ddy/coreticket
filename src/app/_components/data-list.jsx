export const DataList = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/UBmuxwe7fuX0");
  const { data } = await res.json();
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">List Error</h3>
      <table className="min-w-full divide-y divide-gray-200 text-center">
        <thead>
          <tr>
            {/* <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th> */}
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Unit
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Batch
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Desc
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Completed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item._id}>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                {item.createddate}
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap ">{item.unit}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.batch}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
