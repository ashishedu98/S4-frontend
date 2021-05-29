

/* 
Google Drive API:
Demonstration to:
1. upload 
2. delete 
3. create public URL of a file.
required npm package: googleapis
*/
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '340267990525-71qtvmqrcmieieohsne8jsnba78uh1br.apps.googleusercontent.com';
const CLIENT_SECRET = 'mIpx_4FJTCneiYpfDtuxUU54';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04MzLF3OJ--MaCgYIARAAGAQSNwF-L9IrlvfFv0zCESiXNTaTFbFMQuZv-x_ps5ahB8Yc6oi0wP0zgUxgY8z3NqzF90vZhGGgMC4';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

/* 
filepath which needs to be uploaded
Note: Assumes example.jpg file is in root directory, 
though this can be any filePath
*/
const filePath = path.join(__dirname, 'criminaltest.jpg');

async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'example.jpg', //This can be name of your choice
        mimeType: 'image/jpg',
      },
      media: {
        mimeType: 'image/jpg',
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
    generatePublicUrl(response.data.id)
  } catch (error) {
    console.log(error.message);
  }
}

// uploadFile();

async function generatePublicUrl(fieldname) {
  try {
    const fileId = fieldname;
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    /* 
    webViewLink: View the file in browser
    webContentLink: Direct download link 
    */
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}


uploadFile();
