#project2LetsGo
# LET'S GO # 

## [CLICK TO USE THE APP](https://newletsgo.herokuapp.com/auth/signin) ## 

## The App ##
LET'S GO is a mobile information storage app designed to help people log their workouts. Creating, reading, updating or deleting data during an activity as 
involved as working out, should be simple. The interface should display the information in such a way that the user should enjoy looking at the information
and communicate it to the user clearly. Users should be able to navigate through the information architecture as gracefully as possible. It should serve as
a log without distracting from the workout. Simplicity is key. 


I made an app for people who want to use information to improve their fitness.


<img width="250" alt="Screen Shot 2022-03-17 at 10 40 16 PM" src="https://user-images.githubusercontent.com/98665437/158929031-e03b5f43-1004-46bd-8fb7-56bc234cc3f9.png">

Through OAuth Authentication, the User's information is stored and can only be accessed by them. The user stores details about their workouts as a whole 
as well as details about each specific exercise within it, on their personal account.  

## Technologies Used ## 
Node.js Express MongoDB Javascript HTML CSS Heroku

## Getting Started ##
### Wireframes ### 
Before beginning to build the app, I made a series of wireframes and noted the routes and controllers connecting then together. 


<img width="150" alt="Screen Shot 2022-03-18 at 10 13 38 AM" src="https://user-images.githubusercontent.com/98665437/159019190-dc6d7a3e-8dd2-486b-8a13-822edb30eb91.png"><img width="150" alt="Screen Shot 2022-03-18 at 10 11 42 AM" src="https://user-images.githubusercontent.com/98665437/159018747-7baf2f3a-5e9b-4c40-a720-56b97c59910c.png"><img width="150" alt="Screen Shot 2022-03-18 at 10 12 45 AM" src="https://user-images.githubusercontent.com/98665437/159019445-be900f31-ae93-437f-91ae-bab4881f10a7.png"><img width="150" alt="Screen Shot 2022-03-18 at 10 14 26 AM" src="https://user-images.githubusercontent.com/98665437/159019512-743b1a38-c07b-4fde-9050-8ca417c50976.png"> 



<img width="200" alt="Screen Shot 2022-03-18 at 10 30 06 AM" src="https://user-images.githubusercontent.com/98665437/159022049-d2e1398b-9f07-4874-bc83-74332126c89a.png">




I didn't deviate too far from the wireframes, but I wanted to play with contrast and having UI elements feel like they are floating on the page. 


<img width="150" alt="Screen Shot 2022-03-17 at 11 09 22 PM" src="https://user-images.githubusercontent.com/98665437/159018241-9cda2865-e49e-4b53-9bd7-ccbe0cb70696.png"><img width="150" alt="Screen Shot 2022-03-17 at 11 10 42 PM" src="https://user-images.githubusercontent.com/98665437/158936751-52ce0f3c-a76e-4835-b20a-42584ad3c282.png"><img width="150" alt="Screen Shot 2022-03-17 at 11 07 58 PM" src="https://user-images.githubusercontent.com/98665437/158936775-644bf822-a55a-4628-9388-71d33c77c4bb.png"><img width="150" alt="Screen Shot 2022-03-17 at 11 12 11 PM" src="https://user-images.githubusercontent.com/98665437/158937087-a659a891-6995-4feb-aabc-782f34c6fc58.png">


I particularly enjoyed designing the forms. I wanted to make sure the information the user submits is comprehensive and specific, so the log is very 
detailed. I wanted to keep the inputs at the center of the screen, so the User's thumb doesn't have to travel too far. 

This app was built using Model View and Controller modularity, so, having the wireframes and interaction annotation really helped me to visualize how each
module would need to interact with the others in order for the User to log their workouts optimally. 

## ICEBOX ## 
As seen in the wireframes, I want the app to connect to a third-party API of exercise demonstration diagrams.
  Then I want to add button to the page header that sends the User back to the homepage.  
I want to input log-out functionality. 
I want the User to be able to scroll through workout entries through the body of the screen. 
I want to seperate items from each other in the logs. 
I want the User's data to be sorted into folders based on entry time (options: Year, Month, Week).  
I want to create and apply a pencil icon on the Edit button to replace the "E". 



Many thanks to Saad Iqbal, Charles Ata, Martin Nicola and Mahmoud Shawa for their mentorship at General Assmebly. 





