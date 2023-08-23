# Kaltura-Download-Extension
The purpose behind the development of the "Kaltura-Download-Extension" is to provide a practical solution for students who utilize Kaltura's video platform. This extension is designed with the specific goal of enabling students to effortlessly download videos from the Kaltura platform, thereby facilitating convenient offline viewing.

The extension's core functionality is centred around the URL "https://api.sg.kaltura.com".

# To get started 
- Download and extract Kaltura-Download-Toggle-main.zip
- Go to chrome://extensions/
- Enable Developer mode
- Select load unpacked
- Select the extracted Kaltura-Download-Toggle-main file
- Reload and the extension will be on the extension menu 
- Toggle it on/off as needed (default is off)
- When on click the play button and it will start downloading the video
# Notes 
- If the download doesn't start just refresh
  
# To get started 
- When you load the page
- when you play video the extension finds for the get request matching it to a parrmeters that the ending of the get url is seg-1-v1-a1.ts
  - Found in [background.js]([https://github.com/user/repo/blob/branch/other_file.md](https://github.com/Unknownplaylist/Kaltura-Download-Extension/blob/main/background.js))
  ```
  function onWebRequestCompleted(details) {
  if (details.tabId !== -1 && details.method === "GET" && details.url.endsWith("seg-1-v1-a1.ts")) {
    openModifiedSegmentRequest(details.url);
  }
  }
  ```
# References
- https://stackoverflow.com/questions/56366523/obtaining-direct-download-link-for-an-embedded-kaltura-video
  - The extension is a automation on RobMOz explation on this stackoverflow qustion
- kaltura.png IMAGE 
  - Kaltura. (n.d.). Retrieved August 23, 2023, from https://avatars.githubusercontent.com/u/319096?s=200&amp;v=4. 



