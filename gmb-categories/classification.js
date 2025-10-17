/*
sample data:

{
  "aadhar_center": {
    "category_name": "Aadhaar center",
    "bookings_category": "not_applicable"
  },
  "abarth_dealer": {
    "category_name": "Abarth dealer",
    "bookings_category": "food_and_beverage"
  },
  "abbey": {
    "category_name": "Abbey",
    "bookings_category": "not_applicable"
  },
  "aboriginal_and_torres_strait_islander_organisation": {
    "category_name": "Aboriginal and Torres Strait Islander organisation",
    "bookings_category": "not_applicable"
  },
  "aboriginal_art_gallery": {
    "category_name": "Aboriginal art gallery",
    "bookings_category": "events_and_entertainment"
  },
  "abortion_clinic": {
    "category_name": "Abortion clinic",
    "bookings_category": "healthcare"
  },
  "abrasives_supplier": {
    "category_name": "Abrasives supplier",
    "bookings_category": "not_applicable"
  },
  "abundant_life_church": {
    "category_name": "Abundant Life church",
    "bookings_category": "not_applicable"
  },
  "acai_shop": {
    "category_name": "Açaí shop",
    "bookings_category": "not_applicable"
  },
  "acaraje_restaurant": {
    "category_name": "Acaraje restaurant",
    "bookings_category": "automotive_services"
  },
  "accountant": {
    "category_name": "Accountant",
    "bookings_category": "professional_services"
  },
  "accounting_firm": {
    "category_name": "Accounting firm",
    "bookings_category": "not_applicable"
  },
  "accounting_school": {


*/



const fs = require('fs-extra');
const path = require('path');

const run = async () => {
    const inputFilePath = '/home/mui/Downloads/gmb_bookings_mapping_with_gcid.json';
    const outputFolder = '/home/mui/Downloads/gmb-categories/';

    try {
        // Check if input file exists
        const inputExists = await fs.pathExists(inputFilePath);
        if (!inputExists) {
            console.error(`Input file not found: ${inputFilePath}`);
            return;
        }

        // Create output folder if it doesn't exist
        await fs.ensureDir(outputFolder);
        console.log(`Ensured output folder exists: ${outputFolder}`);

        // Read and parse the input JSON file
        console.log('Reading input file...');
        const data = await fs.readJson(inputFilePath);

        // Group data by bookings_category
        const categorizedData = {};
        
        for (const [gcid, details] of Object.entries(data)) {
            const bookingsCategory = details.bookings_category;
            const categoryName = details.category_name;

            if (!categorizedData[bookingsCategory]) {
                categorizedData[bookingsCategory] = [];
            }

            categorizedData[bookingsCategory].push({
                gcid: gcid,
                name: categoryName
            });
        }

        // Create CSV files for each booking category
        for (const [bookingsCategory, entries] of Object.entries(categorizedData)) {
            const csvFileName = `${bookingsCategory}.csv`;
            const csvFilePath = path.join(outputFolder, csvFileName);

            // Create CSV content
            let csvContent = 'GCID,name\n';
            entries.forEach(entry => {
                csvContent += `${entry.gcid},${entry.name}\n`;
            });

            // Write CSV file
            await fs.writeFile(csvFilePath, csvContent, 'utf8');
            console.log(`Created ${csvFileName} with ${entries.length} entries`);
        }

        console.log('\nSummary:');
        console.log(`Total categories processed: ${Object.keys(categorizedData).length}`);
        console.log(`Output folder: ${outputFolder}`);
        
        // Display category counts
        for (const [category, entries] of Object.entries(categorizedData)) {
            console.log(`- ${category}: ${entries.length} entries`);
        }

    } catch (error) {
        console.error('Error processing data:', error.message);
    }
};

run();