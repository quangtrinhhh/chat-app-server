const messageService = require("../services/MessageService");
const { successResponse, errorResponse } = require("../utils/responseHelper");

// Lấy tin nhắn riêng tư giữa hai người dùng
const getPrivateMessages = async (req, res) => {
  const userId = req.userId; // Lấy từ middleware
  const otherUserId = req.params.otherUserId; // Lấy otherUserId từ URL
  const chatId = req.params.chatId; // Lấy chatId từ URL

  try {
    const messages = await messageService.getMessages(
      userId,
      otherUserId,
      chatId
    );
    console.log("Messages: ", messages); // Cải thiện ghi log

    // Trả về phản hồi thành công
    res.status(200).json(successResponse(messages));
  } catch (error) {
    console.error("Error fetching messages:", error); // Ghi log lỗi

    // Trả về phản hồi lỗi
    res.status(500).json(errorResponse(error.message));
  }
};

module.exports = {
  getPrivateMessages,
};
