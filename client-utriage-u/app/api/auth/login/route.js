import { login } from "@/app/services/authService";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const user = await login(email, password);
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
