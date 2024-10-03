import { a as app } from '../../chunks/server_CUKWJIS-.mjs';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  console.log(request.headers);
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const comment = formData.get("comment")?.toString();
  if (!name || !comment) {
    return new Response("Missing required fields", {
      status: 400
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
    const referer = request.headers.get("referer") || "/";
    return Response.redirect(`${referer}#footer`, 303);
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
