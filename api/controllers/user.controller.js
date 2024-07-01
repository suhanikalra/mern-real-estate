export const test = (req, res) => {
    try {
      res.json({
        message: 'Hello from user controller!',
      });
    } catch (error) {
      console.error('Error in test controller:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  