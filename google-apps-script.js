/**
 * Google Apps Script for RoomEase Survey Form
 * 
 * This script creates a web app that receives survey form data via POST requests
 * and adds the responses to a Google Sheet.
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a Google Sheet to store the responses
 * 5. Update the SPREADSHEET_ID below with your sheet's ID
 * 6. Deploy as a web app (Execute as: Me, Who has access: Anyone)
 * 7. Copy the web app URL and use it as GOOGLE_SHEETS_API_URL in your .env file
 */

// Configuration - Update these values
const SPREADSHEET_ID = '1YbNJdHnixDJP56rQS_1rVDURARcQBo6P4jrbBz_XmAo'; // Replace with your actual spreadsheet ID (remove trailing slash)
const SHEET_NAME = 'RoomEase Survey Responses'; // Name of the sheet tab

/**
 * Main function to handle POST requests from the survey form
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    const formData = data.values[0]; // The form data is in the first element of values array
    
    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If the sheet doesn't exist, create it with headers
    if (!sheet) {
      createSheetWithHeaders(spreadsheet);
    }
    
    // Get the sheet again (in case it was just created)
    const targetSheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Add the form data as a new row
    targetSheet.appendRow(formData);
    
    // Return success response with CORS headers
    const response = ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Survey submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
    addCorsHeaders(response);
    return response;
      
  } catch (error) {
    console.error('Error processing survey submission:', error);
    
    // Return error response with CORS headers
    const response = ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: 'Failed to process survey submission',
        details: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    addCorsHeaders(response);
    return response;
  }
}

/**
 * Create a new sheet with headers for the survey responses
 */
function createSheetWithHeaders(spreadsheet) {
  const headers = [
    'Timestamp',
    'People Count',
    'Living Arrangement',
    'Living Arrangement Other',
    'Reasons for Co-living',
    'Reasons for Co-living Other',
    'Roommate Duration',
    'City/Country',
    'Housing Affordability',
    'Ideal Rent Range',
    'Open to Relocating',
    'Frustrating Aspects',
    'Had Disagreement',
    'Disagreement Reason',
    'Current Splitting Method',
    'Splitting App',
    'Trust Level',
    'Tried App',
    'App Experience',
    'Open to Lightweight App',
    'What Would Make You Use',
    'Agree on House Rules',
    'Use Digital Contract',
    'Neutral App Tracking',
    'Willing to Pay',
    'Institutional Support',
    'Found Roommate Alone',
    'How Found Roommate',
    'How Found Roommate Other',
    'Roommate Finding Experience',
    'Important Factors',
    'Important Factors Other',
    'Use Matching App',
    'Pay for Matching',
    'Bad Experience',
    'Age Group',
    'Occupation',
    'Occupation Other'
  ];
  
  const newSheet = spreadsheet.insertSheet(SHEET_NAME);
  newSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row
  const headerRange = newSheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f3f4f6');
  headerRange.setBorder(true, true, true, true, true, true);
  
  // Auto-resize columns
  newSheet.autoResizeColumns(1, headers.length);
}

/**
 * Test function to verify the script is working
 */
function doGet(e) {
  const response = ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'RoomEase Survey API is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  addCorsHeaders(response);
  return response;
}

/**
 * Function to manually test the sheet creation
 */
function testCreateSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  createSheetWithHeaders(spreadsheet);
  console.log('Sheet created successfully');
}

/**
 * Function to add CORS headers for web requests
 */
function addCorsHeaders(response) {
  response.addHeader('Access-Control-Allow-Origin', '*');
  response.addHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.addHeader('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

/**
 * Handle OPTIONS requests for CORS preflight
 */
function doOptions(e) {
  const response = ContentService.createTextOutput('');
  addCorsHeaders(response);
  return response;
} 