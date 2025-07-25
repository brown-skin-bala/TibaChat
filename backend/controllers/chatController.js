const Message = require('../models/Message');

exports.sendMessage = async (req, res, next) => {
  try {
    const { userInput } = req.body;
    if (!userInput) {
      return res.status(400).json({ error: 'User input is required' });
    }
    // Mock AI response
    const botResponse = 'This is a placeholder health response. (AI integration coming soon)';
    const message = new Message({ userInput, botResponse });
    await message.save();
    res.json({ botResponse });
  } catch (error) {
    next(error);
  }
}; 