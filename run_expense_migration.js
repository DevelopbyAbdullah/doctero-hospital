const { addExpenseCategories } = require('./migrations/add_expense_categories');

async function runMigration() {
  try {
    await addExpenseCategories();
    console.log('Migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();