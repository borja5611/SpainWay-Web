import BottomNavBar from "@/components/BottomNavBar";

export default function AppMobileShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {children}
      <BottomNavBar />
    </div>
  );
}