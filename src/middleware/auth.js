export const apiKeyAuth = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  
  if (!apiKey) {
    return res.status(401).json({ message: 'API key is required' });
  }
  
  // In a real application, you would validate the API key against a secure storage
  // For demo purposes, we're using a simple check
  if (apiKey !== 'your-api-key') {
    return res.status(403).json({ message: 'Invalid API key' });
  }
  
  next();
};