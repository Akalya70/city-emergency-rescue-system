# 🚑 City Emergency Rescue System

A full-stack web application designed to help citizens quickly report emergencies such as accidents, fires, and medical incidents. The system enables users to submit emergency requests, while administrators can monitor, manage, and respond to incidents efficiently.

---

## 📌 Project Overview

The City Emergency Rescue System is a centralized emergency management platform that improves communication between citizens and emergency response teams. Users can register, log in, report emergencies with location details, and track their requests. Administrators can view, manage, and update emergency reports through a secure dashboard.

---

## ✨ Features

### User Module
- User Registration
- Secure Login & Authentication
- Report Emergency
- Select Emergency Type
- Enter Incident Location
- View Submitted Requests
- Update User Profile

### Admin Module
- Secure Admin Login
- View All Emergency Requests
- Manage Users
- Update Emergency Status
- Monitor Emergency Dashboard

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- REST API

### Database
- MySQL

### Tools
- Maven
- Git
- GitHub
- Postman
- VS Code
- IntelliJ IDEA

---

## 📂 Project Structure

```
city-emergency-rescue-system
│
├── rescue-frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── rescue-system/
│   ├── src/main/java
│   ├── src/main/resources
│   ├── pom.xml
│   └── mvnw
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/city-emergency-rescue-system.git
```

---

### Backend Setup

Navigate to backend folder

```bash
cd rescue-system
```

Configure MySQL database in:

```
application.properties
```

Example

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/rescue_system
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

Run the Spring Boot application

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

### Frontend Setup

Navigate to frontend folder

```bash
cd rescue-frontend
```

Install dependencies

```bash
npm install
```

Start React application

```bash
npm start
```

Frontend runs on

```
http://localhost:3000
```

---

## 🗄️ Database

Database Name

```
rescue_system
```

Database contains tables such as

- users
- emergency_requests
- roles
- authorities (if Spring Security is used)

---

## 🔗 REST APIs

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Emergency

| Method | Endpoint |
|---------|----------|
| GET | /api/emergencies |
| POST | /api/emergencies |
| PUT | /api/emergencies/{id} |
| DELETE | /api/emergencies/{id} |

### User

| Method | Endpoint |
|---------|----------|
| GET | /api/users |
| GET | /api/users/{id} |

---

## 📸 Screenshots

Include screenshots of

- Home Page
- Login Page
- Registration Page
- User Dashboard
- Emergency Report Form
- Admin Dashboard
- Emergency Management Page

---

## 🚀 Future Enhancements

- Live GPS Tracking
- Google Maps Integration
- Real-time Notifications
- SMS & Email Alerts
- AI-based Emergency Prioritization
- Ambulance Tracking
- Fire & Police Department Integration
- Mobile Application
- Emergency Analytics Dashboard

---

## 🎯 Learning Outcomes

- Full Stack Development
- REST API Development
- Spring Security Authentication
- React Component Architecture
- MySQL Database Design
- CRUD Operations
- Client-Server Communication
- Version Control using Git & GitHub

---

## 👩‍💻 Author

**Akalya Murugesan**

Final Year B.E. Computer Science and Engineering

Email: your-email@example.com

GitHub: https://github.com/Akalya70

LinkedIn: https://linkedin.com/in/your-profile

---

## 📄 License

This project is developed for educational and academic purposes.

