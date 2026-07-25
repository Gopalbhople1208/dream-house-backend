const mongoose = require('mongoose');
const { Notices } = require('../frontend1/src/components/superadmin/Notices');

async function setupDB() {
  try {
    console.log('Connecting to MongoDB...');
    
    await mongoose.connect('mongodb://localhost:27017/DreamHouse', {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 10000,
    });
    
    console.log(' Connected to MongoDB');
    
    // Create the residents collection if it doesn't exist
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    if (!collectionNames.includes('residents')) {
      console.log('Creating residents collection...');
      await db.createCollection('residents');
      console.log(' Residents collection created');
    } else {
      console.log(' Residents collection already exists');
    }
    
    // Test write
    const Resident = require('./models/resident');
    const testResident = new Resident({
      name: 'Test User',
      email: `test_${Date.now()}@example.com`,
      password: 'hashedpassword',
      phone: '1234567890',
      address: 'Test Address'
    });
    
    await testResident.save();
    console.log('✓ Test write successful');
    
    await mongoose.connection.close();
    console.log('✓ Database setup complete');
    
  } catch (err) {
    console.error('✗ Error:', err.message);
    process.exit(1);
  }
}

setupDB();export default Notices;

