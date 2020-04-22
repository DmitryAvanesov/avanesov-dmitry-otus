# About
Here I implemented REST API that allows to save URLs in MongoDB, use them for receiving RSS feed and save received documents in the database.

# Description
There are 4 enrty points:  
/ (Home page)  
/create (Add new URL and documents from the corresponding RSS feed)  
/show-urls (Show URLs that were added before)  
/show-documents (Show documents that were received from RSS feed)  
  
I used Express to run a server, EJS to have html templates, RSS-Parser to parse RSS (obviously) and Mongoose to work with MongoDB.

# How to
npm install  
npm run start  
You also might need to connect to your own database.

# Notes
Sorry for the app's shitty appearance, I didn't take care about styles.