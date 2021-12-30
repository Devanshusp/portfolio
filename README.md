# Portfolio

![Screenshot](https://user-images.githubusercontent.com/66650721/147731222-578d57b7-7d67-4e92-b152-a5935a2ebd05.png)

On this website, you can organize your digital presence in one place using a retro design.

## How to Add Data

1. In the src folder, locate the "MediaData.json" file
2. In index 0, enter your name
3. In index 1, enter data to all external webpages you want to link

   - "title" is the name of the webpage
   - "imgTitle" is the name of the png image
   - "link" is the webpage link
   - "shortcut" allows to show/hide shortcut icon

4. Download images to the src > assets > images > icons folder

   - use https://www.apple.com/app-store/ to find quality images
   - use https://onlineimagetools.com/pixelate-image to pixelate images
   - make sure to name these images corresponding to their "imgTitle" from the MediaData JSON file

5. Update the public folder

   - update "index.html" and "manifest.json" data
   - add personal logo as "logo.png"
