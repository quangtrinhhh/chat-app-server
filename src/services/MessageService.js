const MessageModel = require("../models/MessageModel");

async function getMessages(user_id,chat_id) {
  console.log("Lấy ID user_id getMessages:", user_id);
  console.log("Lấy ID chat_id getMessages:", chat_id);
  try {
    const messages = await MessageModel.getPrivateChat(
      user_id,
      chat_id
    );
    return messages;
  } catch (error) {
    throw new Error("Error fetching messages: " + error.message);
  }
}

module.exports = {
  getMessages,
};
