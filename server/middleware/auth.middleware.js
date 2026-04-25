import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "User not authenticate. Login again.", success: false });
  }

  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode._id;

    next();
  } catch (error) {
    console.log(error);
  }
};
