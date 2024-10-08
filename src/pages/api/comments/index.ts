export const prerender = false;
import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
  console.log(request.headers)
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const comment = formData.get("comment")?.toString();

  if (!name || !comment) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const commentsRef = db.collection("comments");

    await commentsRef.add({
      name,
      comment,
      createdAt: Timestamp.now()
    });
    const referer = request.headers.get("referer") || '/';  // Fallback to root if Referer is missing
    return new Response(null, {
      status: 303,
      headers: { Location: `${referer}#footer`},
    })
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};