import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate that we have at least some basic data
    const requiredFields = ['peopleCount', 'livingArrangement', 'city', 'country'];
    const hasRequiredData = requiredFields.some(field => {
      const value = formData[field];
      return value && value.trim() !== '';
    });
    
    if (!hasRequiredData) {
      return NextResponse.json(
        { error: 'Please fill in at least the basic information before submitting.' },
        { status: 400 }
      );
    }

    // Get Google Sheets configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    
    if (!SPREADSHEET_ID || !GOOGLE_API_KEY) {
      console.error('Google Sheets configuration missing');
      return NextResponse.json(
        { error: 'Survey submission temporarily unavailable' },
        { status: 500 }
      );
    }

    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      formData.peopleCount || '',
      formData.livingArrangement || '',
      formData.livingArrangementOther || '',
      Array.isArray(formData.reasonsForCoLiving) ? formData.reasonsForCoLiving.join(', ') : formData.reasonsForCoLiving || '',
      formData.reasonsForCoLivingOther || '',
      formData.roommateDuration || '',
      formData.city || '',
      formData.cityOther || '',
      formData.country || '',
      formData.countryOther || '',
      formData.housingAffordability || '',
      formData.idealRentRange || '',
      formData.openToRelocating || '',
      Array.isArray(formData.frustratingAspects) ? formData.frustratingAspects.join(', ') : formData.frustratingAspects || '',
      formData.hadDisagreement || '',
      formData.disagreementReason || '',
      formData.currentSplittingMethod || '',
      formData.splittingApp || '',
      formData.trustLevel || '',
      formData.triedApp || '',
      formData.appExperience || '',
      formData.openToLightweightApp || '',
      formData.whatWouldMakeYouUse || '',
      formData.agreeOnHouseRules || '',
      formData.useDigitalContract || '',
      formData.neutralAppTracking || '',
      formData.willingToPay || '',
      formData.institutionalSupport || '',
      formData.foundRoommateAlone || '',
      Array.isArray(formData.howFoundRoommate) ? formData.howFoundRoommate.join(', ') : formData.howFoundRoommate || '',
      formData.howFoundRoommateOther || '',
      formData.roommateFindingExperience || '',
      Array.isArray(formData.importantFactors) ? formData.importantFactors.join(', ') : formData.importantFactors || '',
      formData.importantFactorsOther || '',
      formData.useMatchingApp || '',
      formData.payForMatching || '',
      formData.badExperience || '',
      formData.ageGroup || '',
      formData.occupation || '',
      formData.occupationOther || '',
      formData.educationLevel || '',
      formData.householdIncome || '',
      formData.livingSituation || '',
      formData.gender || ''
    ];

    // Use Google Sheets API to append data
    const sheetsApiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A:append?valueInputOption=RAW&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(sheetsApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowData]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Sheets API error:', response.status, errorText);
      throw new Error(`Google Sheets API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Survey submitted successfully:', result);
    
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Survey submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit survey. Please try again.' },
      { status: 500 }
    );
  }
} 