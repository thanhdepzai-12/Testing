
A dashboard to manage tasks with functionality to create, view, filter, update, and delete tasks. This project implements a Node.js backend and a React.js frontend, following the MVC architecture, and integrates a MongoDB database.

Features
Backend
REST API Endpoints:
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
PATCH /tasks/:id: Mark a task as completed.
DELETE /tasks/:id: Delete a task.
Database:
MongoDB is used to store task data.
Task schema includes fields: title, description, dueDate, isCompleted.
Service Architecture:
The backend is implemented using a service layer to ensure separation of concerns.
Frontend
Task List:
Displays all tasks in a table with columns for title, description, due date, and completion status.
Includes buttons to mark tasks as completed or delete tasks.
Add Task:
A form to add new tasks with validation for input fields.
Filter:
Options to filter tasks by:
All tasks.
Completed tasks.
Incomplete tasks.
Performance Optimization:
using paginate
Accessibility:
Full keyboard navigation support and ARIA roles for assistive technologies.
Responsive Design:
Mobile-friendly layout with a collapsible sidebar and responsive table.
Getting Started
Prerequisites
Node.js (v16 or higher)
MongoDB (local or cloud instance)
npm or yarn
Git for version control
