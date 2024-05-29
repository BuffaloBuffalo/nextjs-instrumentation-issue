import { getInitializedObject } from "@/async_init";

export const dynamic = 'force-dynamic';

export async function GET(): Promise<Response> {
  const initializedObject = getInitializedObject();
  return Response.json({ initializedObject });
}