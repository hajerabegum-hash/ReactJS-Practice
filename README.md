# steps to create a react application

-> create a folder (Batch-6-React)

-> create index.html and script.js

-> add boilerplate to index.html and script with src="script.js" and type ="module"

-> npm init (Batch-6-React)
// fill given details then enter
[you get a file named as *package.json* in your folder \:-- suppose this ad ID card]

-> npm i react (download packages and import in script file on top)
[you get a file named as *node_modules* in your folder]

-> npm i react-dom (download packages and import in script file on top)
[you get a file named as *package-lock JSON* in your folder]

-> npm i parcel (or) nmp install parcel
[you get a file named as *.parcel-cache* in your folder]

# In script.js file on top

-> import React from "react"

-> import ReactDOM from "react-dom/client"
[class will not work use className]

-> In script tag add attribute type: "module" and src="script.js

# In package.json file

-> Change to "type": "module"

# In Terminal

-> npx parcel index.html
[To run we use parcel its serv file offline using machine ports and avoid live server]

-> npx parcel build index.html
[used to compressed and minification the code]
