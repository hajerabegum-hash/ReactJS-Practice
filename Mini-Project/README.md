# Steps to setup REACT

## STEP-1

-Make a folder

- Create Files

1. index.html
   ------> Make boilerplate using (cntrl=!)
   ------> Add STYLE link using (link:src) after title
   ------> Make a DIV using ID="ROOT" (<div id="root"> </div>)
   ------> Add JS link using (script:src and type="module") before end of the body


2. style.css
----> for testing take background-color: pink


3. main.js

----> import React from "react";
----> import ReactDOM from "reactdom/client";




## STEP-2

---> Open terminal
---> Open gitbash
---> Type command
     ==> 1) node.js --version
     ==> 2) npm --version
     ==> 3) npm init  or npm init -y (if you use -y it will fill all details will automatically)
                {It create a file package.json}

                ====> Open package.json 
                         ---->remove this "main": "index.js", 
                          ----> type="module
                         ----> In scripts add
                         "dev":"npx parcel index.html", (it gives cmd run dev)
                         "start":"npx parcel index.html", (it gives cmd run start)
                         "build":"npx parcel build index.html" (it gives cmd run build)

     ==> 4) npm i react reactdom or npm install react reactdom  
                {It create a file package-lock.json and node_modules}

     ==> 5)import React from "react";

     ==> 6)import ReactDOM from "reactdom/client";  //in msin.js   


     ==> 7)npm i -D parcel or npm i parcel
                  {It create a file .parcel-cache}
                   
     ==> 8) npm i parcel build (its compressed the html and js code to make folder less bundled)