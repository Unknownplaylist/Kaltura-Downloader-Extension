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
- When on, play the video and it will start downloading the video
  - If it's on and does not start downloading the video
  - Try to reload the page and play it again

  
# Explanation
- Load the page
- When you play the video, the extension finds for the "GET" request matching the parameter, which is the ending of "GET" request url being seg-1-v1-a1.ts
  - Found in [background.js](background.js)
  ```
  function onWebRequestCompleted(details) {
  if (details.tabId !== -1 && details.method === "GET" && details.url.endsWith("seg-1-v1-a1.ts")) {
    openModifiedSegmentRequest(details.url);
  }
  }
  ```
- "GET" request url segment example  ```https://vodcdn.sg.kaltura.com/hls/p/......../name/a.mp4/seg-1-v1-a1.ts ```
- Then it replace the "/p/" to a "/pd/" 
- Subsequently downloading it as a mp4 file
- Credit goes to RobMOz , edimshuffling and the numerous other contributors from the Stack Overflow community
  
# References
- https://stackoverflow.com/questions/56366523/obtaining-direct-download-link-for-an-embedded-kaltura-video
  - The extension is an automation on RobMOz explanation while using edimshuffling URL edit method on this stackoverflow question 
- kaltura.png IMAGE 
  - Kaltura. (n.d.). Retrieved August 23, 2023, from https://avatars.githubusercontent.com/u/319096?s=200&amp;v=4. 



