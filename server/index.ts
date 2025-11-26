import express, { Request, Response } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = 3001;
const JWT_SECRET = 'your-secret-key-change-in-production';

app.use(cors());
app.use(express.json());

// Mock user database
interface User {
  id: string;
  username: string;
  password: string;
  displayName: string;
}

const users: User[] = [
  {
    id: '1',
    username: 'demo',
    password: bcrypt.hashSync('demo123', 10),
    displayName: 'Demo User'
  }
];

// Login endpoint
app.post('/api/auth/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        displayName: user.displayName
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Signup endpoint
app.post('/api/auth/signup', async (req: Request, res: Response) => {
  try {
    const { username, password, displayName } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: String(users.length + 1),
      username,
      password: hashedPassword,
      displayName: displayName || username
    };

    users.push(newUser);

    const token = jwt.sign(
      { id: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        displayName: newUser.displayName
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Verify token endpoint
app.get('/api/auth/verify', (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; username: string };
    const user = users.find(u => u.id === decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    res.json({
      user: {
        id: user.id,
        username: user.username,
        displayName: user.displayName
      }
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
