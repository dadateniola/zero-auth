// Imports
import { AuthProvider } from "./auth-context";
import { getCurrentSession } from "@/lib/session";

export default async function ServerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await getCurrentSession();

  return <AuthProvider value={result}>{children}</AuthProvider>;
}
