# Kaltura-Downloader-Extension
The purpose behind the development of the "Kaltura-Downloader-Extension" is to provide a practical solution for students who utilize Kaltura's video platform. This extension is designed with the specific goal of enabling students to effortlessly download videos from the Kaltura platform, thereby facilitating convenient offline viewing.

The extension's core functionality is centred around the URL "https://api.sg.kaltura.com".

# To get started 
- Download and extract Kaltura-Downloader-Extension-main.zip
- Go to chrome://extensions/
- Enable Developer mode
- Select load unpacked
- Select the extracted Kaltura-Downloader-Extension-main file
- Reload and the extension will be on the extension menu
  - Watch this video if still unsure how to load the extension
  - https://www.youtube.com/watch?v=oswjtLwCUqg
- Toggle it on/off as needed (default is off)
- When on, play the video and it will start downloading the video
  - If it's on and does not start downloading the video
  - Try to reload the page and play it again

  
# Explanation
- Load the page
- When you play the video, the extension finds the "GET" request matching the parameter, which is the ending of the "GET" request URL being seg-1-v1-a1.ts
  - Found in [background.js](background.js)
  ```
  function onWebRequestCompleted(details) {
  if (details.tabId !== -1 && details.method === "GET" && details.url.endsWith("seg-1-v1-a1.ts")) {
    openModifiedSegmentRequest(details.url);
  }
  }
  ```
- "GET" request url segment example  ```https://vodcdn.sg.kaltura.com/hls/p/......../name/a.mp4/seg-1-v1-a1.ts ```
- Then it replaces the "/p/" with "/pd/" 
- Subsequently downloading it as a mp4 file
- Credit goes to RobMOz, edimshuffling and the numerous other contributors from the Stack Overflow community
  
# References
- https://stackoverflow.com/questions/56366523/obtaining-direct-download-link-for-an-embedded-kaltura-video
  - The extension is an automation on RobMOz explanation while using edimshuffling URL edit method on this Stackoverflow question 
- kaltura.png IMAGE 
  - Kaltura. (n.d.). Retrieved August 23, 2023, from https://avatars.githubusercontent.com/u/319096?s=200&amp;v=4. 



