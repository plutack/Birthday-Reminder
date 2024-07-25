# Birthday Reminder Node project

**Prerequisites:** Node.js version 20.6.0 or higher is required. The project uses the --env-file=.env flag to load environment variables, which is supported in Node.js 20.6.0 and above.

## Description

A simple node project built with express to send birthday message to after user input their date of birth and email address.
To run this project locally;

1. Clone this repo.

   ```sh
   git clone  https://github.com/plutack/Birthday-Reminder.git
   cd birthday-reminder-node

2. Install dependencies with;
    ```npm install```
3. Create .env file

    ```sh
    cp .env.sample .env

4. Modify .env with the neccessary parameters.
5. Check [here](#how-to-generate-app-password-env-key-for-the-app) for steps to generate app password for node-mailer dependency
6. Start app.

   ```sh
   npm start

7. (**OPTIONAL**) Check [here](#how-to-generate-google-gemini-api-key) to generate google gemini api key for unique messages

**IMPORTANT**: Remove apikey form .env if not needed

## How to generate app Password env key for the app

- Ensure two-step verification is enabled on the intended gmail account to be used.
- Continue [here](https://myaccount.google.com/apppasswords) to generate app password.

**NOTE**: App passwords can only be copied once after generation. Ensure you have them properly saved to avoid generating another one.

## How to generate google gemini api key

- Visit [google AI studio](https://aistudio.google.com/app/apikey) to generate a free api key.
