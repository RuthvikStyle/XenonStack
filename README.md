# XenonStack
Task 1 of Linux commands and Task 2 is of Web Development

# internsctl
`internsctl` is a custom Linux command designed by Ruthvik. It provides various functionalities related to system information and user management.

## Features

### CPU Information

```bash
./internsctl cpu getinfo
Displays CPU information similar to the lscpu command.

Memory Information
bash
Copy code
./internsctl memory getinfo
Displays memory information similar to the free command.

User Management
Create a New User
bash
Copy code
./internsctl user create <username>
Creates a new user with the specified username, allowing them to log in and access their home directory.

List All Regular Users
bash
Copy code
./internsctl user list
Lists all regular users on the system.

List Users with Sudo Permissions
bash
Copy code
./internsctl user list-sudo
Lists all users with sudo permissions on the system.

File Information
Get Information About a File
bash
Copy code
./internsctl file getinfo <file-name>
Displays information about the specified file, including size, permissions, owner, and last modified time.

Options for File Information
Get File Size

bash
Copy code
./internsctl file getinfo --size <file-name>
Get File Permissions

bash
Copy code
./internsctl file getinfo --permissions <file-name>
Get File Owner

bash
Copy code
./internsctl file getinfo --owner <file-name>
Get Last Modified Time

bash
Copy code
./internsctl file getinfo --last-modified <file-name>
Usage
For detailed usage instructions and options, refer to the help message:

bash
Copy code
./internsctl --help
Version
Current version: v0.1.0



//Task2
Web Development


My Website
Welcome to the repository for "My Website," a simple web project designed to showcase basic functionality and features. Below, you'll find information on setting up the project, its structure, and how to run it.

Project Structure
The project is divided into three main pages:

Home Page (index.html):

Displays a welcome message and basic content.
Login Page (login.html):

Features a login form connected to a MongoDB database for authentication.
Contact Us Page (contact.html):

Includes a contact form whose submissions are stored in a MongoDB database.
Setup and Installation
Follow these steps to set up and run the project locally:

Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/my-website.git
cd my-website
Install Dependencies:

bash
Copy code
npm install
Database Setup:

Ensure you have MongoDB installed and running.
Configure the database connection in server.js.
Run the Server:

bash
Copy code
node server.js
Access the Website:
Open your web browser and go to http://localhost:3000 to view the website.

Dependencies
The project relies on the following Node.js packages:
express
mongoose
express-session
bcrypt
Make sure to install these dependencies using npm install.

Additional Information
The project includes a responsive design using CSS media queries for basic desktop and mobile support.
The login and contact form functionalities are connected to a MongoDB database.
Feel free to explore and enhance the project as needed.

Thank you for checking out "My Website"! If you have any questions or suggestions, feel free to reach out.
