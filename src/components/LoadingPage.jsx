export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <div
          className="radial-progress animate-spin text-blue-500"
          style={{ "--value": 50 }}
        ></div>
        <p className="text-lg font-semibold text-gray-700">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
