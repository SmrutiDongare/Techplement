const mongoose = require("mongoose");

const messageModel1 = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timestamp: true,
  }
);

const Message = mongoose.model("Message", messageModel1);

module.exports = Message;
