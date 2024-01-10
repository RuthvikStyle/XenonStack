# XenonStack
Task 1 of Linux commands and Task 2 is of Web Development

# Task 1
## Linux
### internsct1
`internsctl` is a custom Linux command designed by Ruthvik. It provides various functionalities related to system information and user management.

## Features

1. CPU Information
```./internsctl``` cpu getinfo
Displays CPU information similar to the lscpu command.

2. Memory Information
`./internsctl memory getinfo`
Displays memory information similar to the free command.

3. User Management
`./internsctl user create <username>`
Creates a new user with the specified username, allowing them to log in and access their home directory.

4. List All Regular Users
`./internsctl user list`
Lists all regular users on the system.

5. List Users with Sudo Permissions
`./internsctl user list-sudo`
Lists all users with sudo permissions on the system.

6. File Information
Get Information About a File
`./internsctl file getinfo <file-name>`
Displays information about the specified file, including size, permissions, owner, and last modified time.

7. Options for File Information
a. Get File Size
`./internsctl file getinfo --size <file-name>`

b. Get File Permissions
`./internsctl file getinfo --permissions <file-name>`

c. Get File Owner
`./internsctl file getinfo --owner <file-name>`

Get Last Modified Time
`./internsctl file getinfo --last-modified <file-name>`

8. Usage
For detailed usage instructions and options, refer to the help message:
`./internsctl --help`

9. Version
`--version`
Current version: v0.1.0



# Task2
## Web Development


## My Website
Welcome to the repository for "My Website," a simple web project designed to showcase basic functionality and features. Below, you'll find information on setting up the project, its structure, and how to run it.

## Project Structure
The project is divided into three main pages:
1. Home Page (index.html): Displays a welcome message and basic content.
2. Login Page (login.html): Features a login form connected to a MongoDB database for authentication.
3. Contact Us Page (contact.html): Includes a contact form whose submissions are stored in a MongoDB database.

## Setup and Installation
Follow these steps to set up and run the project locally:

1. Clone the Repository: `git clone https://github.com/your-username/my-website.git
cd my-website`

2. Install Dependencies:
`npm install`

3. Database Setup:
a. Ensure you have MongoDB installed and running.
b. Configure the database connection in server.js.

4. Run the Server:
`node server.js`

5. Access the Website:
Open your web browser and go to `http://localhost:3000` to view the website.

## Dependencies
The project relies on the following Node.js packages:
- express
- mongoose
- express-session
- bcrypt
Make sure to install these dependencies using npm install.

## Additional Information
The project includes a responsive design using CSS media queries for basic desktop and mobile support.
The login and contact form functionalities are connected to a MongoDB database.
Feel free to explore and enhance the project as needed.

## Thanks
Thank you for checking out "My Website"! If you have any questions or suggestions, feel free to reach out.
