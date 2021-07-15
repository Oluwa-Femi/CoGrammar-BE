# Drug_Prescription_Reminder--BE
A web app that allows users keep track of their drug prescription

## Link to deployed App

**[Production Deployment Backend](https://drug-prescription-app.herokuapp.com/)**



## Installation

## Backend

- Clone the repo by clicking the green clone or download button to copy the url on github
- In your teminal, run `git clone [insert URL copied from first step]`
- Open the repository with your code editor
  `master` is the default branch and contains all full the code`
- Setup `.env => checkout sample (.env.example) in the codebase` for environment variable
- Quick note if using MongoDb Atlas you have to `Whitelist IP address` on `Network access` tab `click add ip address` and `add current ip address` or `allow access from anywhere` tab for mongoDb to give access to the app and connect to the db
- Here's an example of `MONGO_URL` on Atlas i used for easy app set up
- `mongodb+srv://<username>:<password>@cluster-585-ex-ex.mongodb.net/test?retryWrites=true&w=majority`
- Run `npm install` to install all dependencies
- Type `npm run server` to get the development server running


## Required features

- Users can **create an account**
- Users can **login**
- Users can **add prescriptions**
- Users can **get single prescriptions**
- Users can **view their prescriptions**
- Users can **add usage formula**
- Users can **view usage formula**
- Users can **remove prescription**

## Technologies

- Nodejs
- ExpressJS



### API BASE LINK

[https://drug-prescription-app.herokuapp.com](https://drug-prescription-app.herokuapp.com)


## API-ENDPOINTS

`- POST /api/v1/users/register Create a new user.`

`- POST /api/v1/users/login Login a user.`

`- POST /api/v1/prescription/add Create a prescription.`

`- DELETE /api/v1/prescription/<:_id> Delete single prescripto by id.`

`- GET /api/v1/prescription/find/<:id>/ Get single prescription by id.`

`- GET /api/v1/prescription/ Get all prescriptions.`

`- PUT /api/v1/prescription/<:id> Verify completion.`

`- POST /api/v1/formula/add/<:prescription_id>  Add a usage formula.`

`- GET /api/v1/formula/<:prescription_id>" Get usage formula for a prescription.`



## API Documentation

[https://drug-prescription-app.herokuapp.com/api-docs](https://drug-prescription-app.herokuapp.com/api-docs)

## Author

Femi Oluwatola
