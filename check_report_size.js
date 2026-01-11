const { Report, Patient, Doctor } = require('./models');

async function checkReportSize() {
  try {
    // Get a sample report
    const report = await Report.findOne({
      include: [
        { model: Patient },
        { model: Doctor }
      ]
    });

    if (!report) {
      console.log('No reports found in database');
      return;
    }

    // Convert to JSON and calculate size
    const reportJSON = JSON.stringify(report);
    const sizeInBytes = Buffer.byteLength(reportJSON, 'utf8');
    const sizeInKB = (sizeInBytes / 1024).toFixed(2);
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(4);

    console.log('\n=== Medical Report Memory Usage ===');
    console.log(`Report ID: ${report.id}`);
    console.log(`Size in Bytes: ${sizeInBytes} bytes`);
    console.log(`Size in KB: ${sizeInKB} KB`);
    console.log(`Size in MB: ${sizeInMB} MB`);
    console.log(`Medications Count: ${report.medications?.length || 0}`);
    
    // Get total count and estimate total size
    const totalReports = await Report.count();
    const estimatedTotalKB = (sizeInBytes * totalReports / 1024).toFixed(2);
    const estimatedTotalMB = (sizeInBytes * totalReports / (1024 * 1024)).toFixed(2);
    
    console.log(`\nTotal Reports: ${totalReports}`);
    console.log(`Estimated Total Size: ${estimatedTotalKB} KB (${estimatedTotalMB} MB)`);
    console.log('===================================\n');

    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

checkReportSize();
