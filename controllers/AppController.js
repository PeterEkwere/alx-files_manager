import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  static async getStatus(req, res) {
    try {
      const redisLive = redisClient.isAlive();
      const dbLive = dbClient.isAlive();
      res.status(200).json({ redis: redisLive, db: dbLive });
    } catch (error) {
      console.error('Error checking status:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getStats(req, res) {
    try {
      const usersTotal = await dbClient.nbUsers();
      const filesTotal = await dbClient.nbFiles();
      res.status(200).json({ users: usersTotal, files: filesTotal });
    } catch (error) {
      console.error('Error getting stats:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default AppController;
