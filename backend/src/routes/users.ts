import express from 'express';

const router = express.Router();

// GET /api/users/profile
router.get('/profile', async (req, res) => {
  try {
    res.json({ message: 'User profile endpoint - coming soon' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user profile' });
  }
});

// PUT /api/users/profile
router.put('/profile', async (req, res) => {
  try {
    res.json({ message: 'Update profile endpoint - coming soon' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// POST /api/users/connect-bandcamp
router.post('/connect-bandcamp', async (req, res) => {
  try {
    res.json({ message: 'Connect Bandcamp endpoint - coming soon' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect Bandcamp' });
  }
});

export default router;
