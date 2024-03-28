# AllAbout - Students 

The Full Stack Student Management System is a web application designed for managing student data. here I use React.js and Redux for the frontend, while the backend is built using Node.js with Express.js and MongoDB as the database.

 The system fetches data from three different collections, including student information, academic records, and fee details, and combines them to provide a single view.
 
  Additionally, the application processes the data to generate visualizations such as pie charts and bar charts. To handle file uploads, Multer is used to store data locally, ensuring seamless data management. 
  
  This project offers a complete solution for educational institutions to efficiently manage student information and analyze relevant data.


## Features

- fetch data from multiple DB,s of same/matching  prn(no.) in 3n ~ O(n) complexity via objects in javascript
- convet to single object at redux to use further
- Filter data set with multiple options (22+) 
- Aanalysis by piecharts and barcharts/bargraph (yearwise and branchwise)
- start to end student information (personal , acadamics , skill , fees)
- update, delete, create student data 
- file management at localdisk via MULTER (create, delete)


## Installation

## Run Locally

Clone the project

```bash
  git clone https://github.com/mytvDor/AllAboutStudent
```

 1 . Go to the client directory

```bash
  cd client
```

 2 . Install dependencies of client

```bash
  npm install
```

3 . Start the server

```bash
  npm run dev
```


4 . Go to the server directory


```bash
cd ../
cd server
```
5 . Install dependencies of server

```bash
  npm install
```

 6 . Start the server

```bash
  nodemon index.js
```
 7 . open  http://localhost:5173 on browser


 NOTE : PROJECT RUNS ONLY ON MONGO DB AT LOCAL 
 
```bash
 "mongodb://localhost:27017/clgTest"
 ```
## Demo


CLICK HERE FOR DEMO

https://github.com/mytvDor/AllAboutStudent/assets/159150094/c8bfc901-b4ca-459e-b7cd-68a89848d8b4


## Screenshots

![Screenshot 2024-03-28 222049](https://github.com/mytvDor/AllAboutStudent/assets/159150094/526c555a-dac7-4e6d-ad9d-87402188f417)
![Screenshot 2024-03-28 222136](https://github.com/mytvDor/AllAboutStudent/assets/159150094/8777fe7e-e680-4527-9de5-1b110fd4ef39)
