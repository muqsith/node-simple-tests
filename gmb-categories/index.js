const fs = require('fs-extra');

const run = async () => {
    // Use sample file for testing, change this to your actual file path
    const categoriesPath = '/home/mui/Downloads/categories.txt';
    const outputPath = '/home/mui/Downloads/gmb-categories.csv';

    try {
        // Read the HTML file
        let htmlContent;
        try {
            htmlContent = await fs.readFile(categoriesPath, 'utf8');
        } catch (error) {
            console.error('Could not read input file:', categoriesPath);
            console.error('Error:', error.message);
            return;
        }

        // Parse HTML to extract table rows
        const categories = new Map(); // Using Map to ensure uniqueness by GCID
        
        // Regular expression to match table rows
        const rowRegex = /<tr><td>([^<]+)<\/td><td>(?:<a[^>]*>)?([^<]+)(?:<\/a>)?<\/td><td>([^<]+)<\/td><td>([^<]+)<\/td>/g;
        
        let match;
        while ((match = rowRegex.exec(htmlContent)) !== null) {
            const gcid = match[1].trim();
            const categoryName = match[2].trim();
            const firstDetected = match[3].trim();
            const lastDetected = match[4].trim();
            
            // Filter for entries with last detected date of 2025-10-17
            if (lastDetected === '2025-10-17') {
                categories.set(gcid, categoryName);
            }
        }
        
        // Alternative regex for malformed HTML (handling the incomplete row in sample)
        const alternativeRowRegex = /<tr><td>([^<]+)<\/td><td>(?:<a[^>]*>)?([^<]+)(?:<\/a>)?<\/td><td>([^<]+)<\/td><td>([^<]+)/g;
        
        while ((match = alternativeRowRegex.exec(htmlContent)) !== null) {
            const gcid = match[1].trim();
            const categoryName = match[2].trim();
            const firstDetected = match[3].trim();
            const lastDetected = match[4].trim();
            
            // Filter for entries with last detected date of 2025-10-17
            if (lastDetected === '2025-10-17') {
                categories.set(gcid, categoryName);
            }
        }

        // Create CSV content
        const csvLines = ['GCID,Category Name']; // Header
        
        for (const [gcid, categoryName] of categories) {
            // Escape commas and quotes in CSV format
            const escapedCategoryName = categoryName.includes(',') || categoryName.includes('"') 
                ? `"${categoryName.replace(/"/g, '""')}"` 
                : categoryName;
            csvLines.push(`${gcid},${escapedCategoryName}`);
        }

        const csvContent = csvLines.join('\n');

        // Write CSV file
        await fs.writeFile(outputPath, csvContent, 'utf8');
        
        console.log(`Successfully created CSV file: ${outputPath}`);
        console.log(`Total unique categories with last detected 2025-10-17: ${categories.size}`);
        
        // Display first few entries as preview
        const entries = Array.from(categories.entries()).slice(0, 5);
        if (entries.length > 0) {
            console.log('\nPreview of extracted data:');
            entries.forEach(([gcid, name]) => {
                console.log(`  ${gcid} -> ${name}`);
            });
            if (categories.size > 5) {
                console.log(`  ... and ${categories.size - 5} more entries`);
            }
        }

    } catch (error) {
        console.error('Error processing file:', error);
    }
}


run();