require("dotenv").config();
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1]; // Lấy token từ header
  console.log("token: " + token);

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Failed to authenticate token" });

    req.userId = decoded.userId; // Lưu ID người dùng vào req để sử dụng trong route
    
    next(); // Tiếp tục đến middleware hoặc route tiếp theo
  });
}

module.exports = authMiddleware;
