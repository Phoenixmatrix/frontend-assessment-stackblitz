// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}

// Sample usage with withIronSession

// import { withIronSessionApiRoute } from "iron-session/next";

// function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   const user = req.session.user;
//   const user.age = 42;
//   req.session.user = user;
//   await req.session.save();
//   res.status(200).json({ name: "John Doe" });
// }

// export default withIronSessionApiRoute(handler, {
//   password: process.env.IRON_SESSION_PASSWORD,
//   cookieName: process.env.IRON_SESSION_COOKIE_NAME,
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//   },
// });
