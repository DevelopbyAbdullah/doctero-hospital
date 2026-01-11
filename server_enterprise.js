const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const { sequelize, testConnection } = require('./database');
const { Patient, Clinic } = require('./models');
const { createAdminUser } = require('./seeders/create_admin_user');
const { addConsultationFeeColumn } = require('./migrations/add_consultation_fee');

// Load environment variables
dotenv.config();

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('Created data directory:', dataDir);
}

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Upload directory for logos and other static files
const uploadsPath = path.join(__dirname, '../uploads');
console.log('Setting up static file serving from:', uploadsPath);
app.use('/uploads', express.static(uploadsPath));

// Connect to database and start server
async function startServer() {
  try {
    // Test database connection
    await testConnection();
    
    // Sync models with database
    await sequelize.sync({ force: false, alter: false });
    console.log('All models synchronized with database');
    
    // Run migrations
    await addConsultationFeeColumn();
    
    // Check if there's a clinic already, if not create default
    const clinicCount = await Clinic.count();
    if (clinicCount === 0) {
      await Clinic.create({
        name: 'Doctor Clinic',
        address: 'Main Street, City',
        contactNumber: '123-456-7890',
        patientIdPrefix: '25-HWC-',
        patientIdStart: 1,
        patientIdCounter: 1
      });
      console.log('Created default clinic settings');
    }
    
    // Create default admin user if none exists
    await createAdminUser();

    // Routes
    app.use('/api/patients', require('./routes/patients'));
    app.use('/api/doctors', require('./routes/doctors'));
    app.use('/api/medicines', require('./routes/medicines'));
    app.use('/api/reports', require('./routes/reports'));
    app.use('/api/uploads', require('./routes/uploads'));
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/appointments', require('./routes/appointments'));
    app.use('/api/billing', require('./routes/billing'));
    app.use('/api/queue', require('./routes/queue'));
    app.use('/api/payments', require('./routes/payments'));
    app.use('/api/ultrasound', require('./routes/ultrasound'));
    
    // Enterprise backup system
    app.use('/api/backup', require('./routes/backup_enterprise'));

    // Root route
    app.get('/', (req, res) => {
      res.send(`
        <h1>Doctero Enterprise Server</h1>
        <p>🏥 Large Hospital Level Backup System Active</p>
        <p>Server running on port ${PORT}</p>
        <h3>Enterprise Features:</h3>
        <ul>
          <li>✅ Scheduled Daily Backups (2 AM)</li>
          <li>✅ Weekly Full Backups (Sunday 3 AM)</li>
          <li>✅ Monthly Archive Backups</li>
          <li>✅ Incremental Backup System</li>
          <li>✅ 30-Day Retention Policy</li>
          <li>✅ Automatic Cleanup</li>
        </ul>
        <p><strong>Backup Dashboard:</strong> Access via client application</p>
      `);
    });

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Server error', message: err.message });
    });

    const PORT = process.env.PORT || 5001;

    app.listen(PORT, () => {
      console.log(`🚀 Doctero Enterprise Server running on port ${PORT}`);
      console.log('🏥 Large Hospital Level Features Activated:');
      console.log('   📅 Daily Incremental Backups: 2:00 AM');
      console.log('   📊 Weekly Full Backups: Sunday 3:00 AM');
      console.log('   📦 Monthly Archive: 1st day 4:00 AM');
      console.log('   🗂️  Retention: 30 days / 12 weeks / 24 months');
      console.log('   💾 Backup Location: C:\\doctero_enterprise_backups\\');
      console.log('');
      console.log('Available Enterprise Routes:');
      console.log('- /api/backup/dashboard - Enterprise backup dashboard');
      console.log('- /api/backup/create - Manual backup creation');
      console.log('- /api/backup/list - List all backup categories');
    });
  } catch (err) {
    console.error('Database Connection Error - Cannot start application');
    console.error(err);
    process.exit(1);
  }
}

// Start the server
startServer();