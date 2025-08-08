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
8. City
9. City Other
10. Country
11. Country Other
12. Housing Affordability
13. Ideal Rent Range
14. Open to Relocating
15. Frustrating Aspects
16. Had Disagreement
17. Disagreement Reason
18. Current Splitting Method
19. Splitting App
20. Trust Level
21. Tried App
22. App Experience
23. Open to Lightweight App
24. What Would Make You Use
25. Agree on House Rules
26. Use Digital Contract
27. Neutral App Tracking
28. Willing to Pay
29. Institutional Support
30. Found Roommate Alone
31. How Found Roommate
32. How Found Roommate Other
33. Roommate Finding Experience
34. Important Factors
35. Important Factors Other
36. Use Matching App
37. Pay for Matching
38. Bad Experience
39. Age Group
40. Occupation
41. Occupation Other
42. Education Level
43. Household Income
44. Living Situation
45. Gender

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
