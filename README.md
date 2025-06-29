I implemented Frontend Task Q3, which involved creating a profile page that displays personal and professional details of an alumni, including name, email, department, degree, passout year, job title, company, and location. 
Since I didn't implemente the authentication, I simulated a logged-in user by setting req.session.userId = 1 to allow access to a specific user profile for demonstration purposes.


Also I implemented Backend Task Q2, which includes filtering APIs to get alumni data based on department, degree, and graduation year.
I showcased this feature in the frontend by integrating a simple filter app within the main app container to demonstrate how users can search alumni using those criteria.


The frontend and backend are organized into separate folders (client/ and server/). 
Tools like Axios, Express-session, and mysql2 are integrated to handle data flow and session management.
