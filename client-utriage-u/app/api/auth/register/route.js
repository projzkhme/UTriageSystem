import { register } from "@/app/services/authService";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const user = await register(email, password);
    return Response.json(user, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
