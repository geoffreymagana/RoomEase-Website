# Google Apps Script Setup for RoomEase Survey

This guide will help you set up the Google Apps Script to handle survey form submissions and store them in a Google Sheet.

## Prerequisites

1. A Google account
2. Access to Google Sheets
3. Access to Google Apps Script

## Step-by-Step Setup

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Note down the spreadsheet ID from the URL (it's the long string between `/d/` and `/edit`)
   - **IMPORTANT**: Remove any trailing slashes from the ID
   - Example: `https://docs.google.com/spreadsheets/d/1YbNJdHnixDJP56rQS_1rVDURARcQBo6P4jrbBz_XmAo/edit`
   - Spreadsheet ID: `1YbNJdHnixDJP56rQS_1rVDURARcQBo6P4jrbBz_XmAo` (no trailing slash)

### 2. Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Update the `SPREADSHEET_ID` variable with your actual spreadsheet ID (without trailing slash)

### 3. Deploy the Script

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the web app URL (you'll need this for the environment variables)

### 4. Configure Environment Variables

Add these to your `.env.local` file:

```env
GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Note**: For Google Apps Script, you typically don't need an API key since the script is deployed as a web app with "Anyone" access.

### 5. Test the Setup

1. Visit your web app URL in a browser
2. You should see a JSON response indicating the API is running
3. Submit a test survey from your website
4. Check your Google Sheet to see if the data was added

## Troubleshooting

### Common Issues

1. **"Spreadsheet not found" error**
   - Make sure the spreadsheet ID is correct (no trailing slash)
   - Ensure the spreadsheet is shared with your Google account
   - Check that you have edit permissions on the spreadsheet

2. **"Script not found" error**
   - Check that the script is deployed as a web app
   - Verify the web app URL is correct
   - Make sure "Who has access" is set to "Anyone"

3. **CORS errors**
   - The script now includes proper CORS headers
   - If you still get CORS errors, try testing the web app URL directly in a browser first

4. **Permission denied**
   - Make sure the web app is deployed with "Anyone" access
   - Check that your Google account has permission to access the spreadsheet
   - Ensure the spreadsheet is not in a restricted folder

5. **"Cannot read properties of undefined (reading 'insertSheet')"**
   - This means the spreadsheet object is null
   - Check that the SPREADSHEET_ID is correct
   - Ensure you have access to the spreadsheet

6. **"Cannot read properties of undefined (reading 'postData')"**
   - This happens when the script is called without proper POST data
   - Make sure you're calling the web app URL, not running the function directly

### Testing the Script

You can test the script manually by:

1. Opening the Google Apps Script editor
2. Running the `doGet()` function to test basic connectivity
3. Running the `testCreateSheet()` function to test spreadsheet access
4. Checking your Google Sheet for the new "Survey Responses" tab

### Debugging Steps

1. **Test Web App URL**: Visit your web app URL directly in a browser
   - Should return: `{"success":true,"message":"RoomEase Survey API is running","timestamp":"..."}`

2. **Test Spreadsheet Access**: Run `testCreateSheet()` in the Apps Script editor
   - Should create a new sheet tab if it doesn't exist

3. **Check Permissions**: Ensure the spreadsheet is shared with your Google account

4. **Verify Deployment**: Make sure the web app is deployed with correct settings

## Security Considerations

- The current setup allows anyone to submit to your sheet
- For production use, consider adding authentication
- You can restrict access by changing "Who has access" to "Anyone with Google account"

## Data Structure

The script will create a sheet with the following columns:

1. Timestamp
2. People Count
3. Living Arrangement
4. Living Arrangement Other
5. Reasons for Co-living
6. Reasons for Co-living Other
7. Roommate Duration
8. City/Country
9. Housing Affordability
10. Ideal Rent Range
11. Open to Relocating
12. Frustrating Aspects
13. Had Disagreement
14. Disagreement Reason
15. Current Splitting Method
16. Splitting App
17. Trust Level
18. Tried App
19. App Experience
20. Open to Lightweight App
21. What Would Make You Use
22. Agree on House Rules
23. Use Digital Contract
24. Neutral App Tracking
25. Willing to Pay
26. Institutional Support
27. Found Roommate Alone
28. How Found Roommate
29. How Found Roommate Other
30. Roommate Finding Experience
31. Important Factors
32. Important Factors Other
33. Use Matching App
34. Pay for Matching
35. Bad Experience
36. Age Group
37. Occupation
38. Occupation Other

## Support

If you encounter issues:

1. Check the Google Apps Script logs in the script editor
2. Verify all environment variables are set correctly
3. Test the web app URL directly in a browser
4. Ensure your Google account has the necessary permissions
5. Check that the spreadsheet ID is correct (no trailing slash)
6. Verify the spreadsheet is shared with your account 