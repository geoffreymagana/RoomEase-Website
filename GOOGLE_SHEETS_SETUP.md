# Google Sheets API Setup for RoomEase Survey

This guide will help you set up the Google Sheets API to handle survey form submissions directly.

## Prerequisites

1. A Google account
2. Access to Google Sheets
3. Google Cloud Console access

## Step-by-Step Setup

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Note down the spreadsheet ID from the URL (it's the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1YbNJdHnixDJP56rQS_1rVDURARcQBo6P4jrbBz_XmAo/edit`
   - Spreadsheet ID: `1YbNJdHnixDJP56rQS_1rVDURARcQBo6P4jrbBz_XmAo`

### 2. Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

### 3. Create API Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy the API key (you'll need this for environment variables)
4. **Important**: Restrict the API key to only Google Sheets API for security

### 4. Configure Environment Variables

Add these to your `.env.local` file:

```env
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_API_KEY=your_api_key_here
```

### 5. Set Up the Spreadsheet

The API will automatically create headers when the first submission is made. The headers will be:

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
39. Education Level
40. Household Income
41. Living Situation

## Security Considerations

- The API key should be restricted to only Google Sheets API
- The spreadsheet should be shared with your Google account
- Consider using a service account for production use

## Testing

1. Submit a test survey from your website
2. Check your Google Sheet to see if the data was added
3. The first submission will create the headers automatically

## Troubleshooting

### Common Issues

1. **"API key not valid" error**
   - Check that the API key is correct
   - Ensure the Google Sheets API is enabled
   - Verify the API key is not restricted too much

2. **"Spreadsheet not found" error**
   - Check that the spreadsheet ID is correct
   - Ensure the spreadsheet is shared with your Google account
   - Make sure you have edit permissions

3. **"Permission denied" error**
   - Check that the spreadsheet is shared with your Google account
   - Ensure you have edit permissions on the spreadsheet
   - Verify the API key has the correct permissions

## Advantages of This Approach

- **Simpler**: No need for Google Apps Script
- **More reliable**: Direct API calls are more stable
- **Better error handling**: Clear error messages
- **Easier debugging**: Standard HTTP responses
- **No deployment needed**: Works immediately after setup

## Migration from Apps Script

If you were using the previous Apps Script method:

1. Follow the setup steps above
2. Update your environment variables
3. Test with a new submission
4. The new method will work alongside the old one until you remove the Apps Script

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Test the API key in the Google Cloud Console
4. Ensure the spreadsheet is properly shared and accessible
