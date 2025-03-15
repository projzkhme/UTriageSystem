import { logout } from "@/app/services/authService";

export async function POST() {
  try {
    await logout();
    return Response.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
