# 🚨 City Emergency Rescue System


<p align="center">
  <img src="https://img.shields.io/badge/🚨%20Emergency-Rescue%20System-red?style=for-the-badge&logo=googlemaps&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot-Backend-brightgreen?style=for-the-badge&logo=springboot" />
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
</p>

<p align="center">
  <b>⚡ A Smart Digital Platform for Faster Emergency Reporting, Monitoring & Rescue Coordination</b>
</p>

---

## 🌟 Project Overview


**City Emergency Rescue System** is a smart web-based emergency management platform designed to help citizens quickly report emergency situations and enable authorities or rescue teams to efficiently monitor, manage, and respond to those incidents.

The system provides a centralized platform where emergency information can be submitted, stored, monitored, and processed in real time.

Instead of depending completely on traditional phone-based reporting, the platform provides a structured digital workflow:

```text
👤 Citizen
     ↓
🚨 Report Emergency
     ↓
📝 Emergency Details
     ↓
⚙️ Backend Processing
     ↓
🗄️ MySQL Database
     ↓
📊 Admin Dashboard
     ↓
🚑 Rescue Team
     ↓
✅ Emergency Resolved
```

---

## ✨ Why This Project?

During emergencies, **every second matters**.


Traditional emergency reporting can involve:

* 📞 Phone-based communication
* 📝 Manual data collection
* ⏳ Delayed information transfer
* ❌ Difficulty tracking incidents
* 🔄 Lack of centralized monitoring

The City Emergency Rescue System aims to solve these problems by providing a **centralized digital emergency management platform**.

---

# 🚀 Core Features

### 🔐 1. User Authentication

Users can securely access the system through:

* 👤 Registration
* 🔑 Login
* 🔒 Authentication
* 🏠 Personalized dashboard

```text
        🔐 LOGIN
           │
     ┌─────┴─────┐
     ↓           ↓
  Valid       Invalid
     │           │
     ↓           ↓
 Dashboard    ❌ Error
```

---

### 🚨 2. Emergency Reporting

Citizens can report emergencies by entering important information such as:

* 📍 Emergency location
* 🚨 Emergency type
* 📝 Description
* 👤 Reporter information
* 📅 Date and time
* 📞 Contact information

The submitted emergency is then sent to the backend for processing.

---

### 📊 3. Emergency Dashboard

The dashboard provides a centralized view of emergency incidents.

Example dashboard metrics:

```text
┌──────────────────────────────────────────┐
│          🚨 EMERGENCY DASHBOARD          │
├──────────────────────────────────────────┤
│                                          │
│   🚨 Active       ✅ Resolved            │
│      12              48                  │
│                                          │
│   ⏳ Pending      👥 Total Reports       │
│       5              65                  │
│                                          │
└──────────────────────────────────────────┘
```

---

### 🗺️ 4. Location-Based Emergency Management

Emergency locations can be associated with reported incidents, allowing rescue personnel to understand **where assistance is required**.

```text
📍 Emergency Detected
        ↓
🗺️ Location Identified
        ↓
🚑 Rescue Team Assigned
        ↓
🚗 Team Moves to Location
        ↓
🏥 Assistance Provided
```

---

### ⚡ 5. Emergency Status Tracking

Every emergency can move through different stages.

```text
🟡 PENDING
    ↓
🔵 ASSIGNED
    ↓
🟠 IN PROGRESS
    ↓
🟢 RESOLVED
```

This makes it easier to monitor the complete lifecycle of an emergency.

---

### 👨‍🚒 6. Rescue Coordination

The system provides a structured workflow for coordinating emergency responses.

```text
🚨 INCIDENT
     │
     ↓
📊 ADMIN
     │
     ↓
👨‍🚒 RESCUE TEAM
     │
     ↓
📍 LOCATION
     │
     ↓
🛟 RESPONSE
     │
     ↓
✅ RESOLUTION
```

---

# 🏗️ System Architecture

```text
                    🌐 USER
                      │
                      ▼
              🖥️ REACT FRONTEND
                      │
                      │ REST API
                      ▼
             ⚙️ SPRING BOOT BACKEND
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
       🔐 Auth     🚨 Emergency   📊 Dashboard
          │           │           │
          └───────────┼───────────┘
                      │
                      ▼
                  🗄️ MYSQL
                      │
                      ▼
                 📋 EMERGENCY
                    DATA
```

---

# 🧠 Technology Stack

| Layer              | Technology              |
| ------------------ | ----------------------- |
| 🎨 Frontend        | React.js                |
| ⚙️ Backend         | Spring Boot             |
| 🗄️ Database       | MySQL                   |
| 🔗 Communication   | REST APIs               |
| 🧰 Development     | VS Code / IntelliJ IDEA |
| 📮 API Testing     | Postman                 |
| 🌿 Version Control | Git                     |
| ☁️ Repository      | GitHub                  |

---

# 🔄 Application Workflow

```text
                 👤 USER
                   │
                   ▼
             🔐 REGISTER / LOGIN
                   │
                   ▼
             🏠 DASHBOARD
                   │
                   ▼
          🚨 REPORT EMERGENCY
                   │
                   ▼
             📝 ENTER DETAILS
                   │
                   ▼
             📡 REST API CALL
                   │
                   ▼
          ⚙️ SPRING BOOT SERVER
                   │
                   ▼
              🗄️ MYSQL DB
                   │
                   ▼
           📊 ADMIN MONITORING
                   │
                   ▼
           👨‍🚒 RESCUE ASSIGNMENT
                   │
                   ▼
             🚑 RESPONSE
                   │
                   ▼
              ✅ RESOLVED
```

---

# 📁 Project Structure

```text
City-Emergency-Rescue-System/
│
├── 📂 backend/
│   │
│   ├── 📂 src/
│   │   ├── 📂 main/
│   │   │   ├── 📂 java/
│   │   │   │   └── 📂 com/emergency/
│   │   │   │       ├── 📂 controller/
│   │   │   │       ├── 📂 service/
│   │   │   │       ├── 📂 repository/
│   │   │   │       ├── 📂 entity/
│   │   │   │       └── 📄 Application.java
│   │   │   │
│   │   │   └── 📂 resources/
│   │   │       └── 📄 application.properties
│   │   │
│   │   └── 📂 test/
│   │
│   └── 📄 pom.xml
│
├── 📂 frontend/
│   ├── 📂 src/
│   ├── 📂 public/
│   ├── 📄 package.json
│   └── 📄 README.md
│
├── 📄 .gitignore
└── 📄 README.md
```

---

# 🔌 REST API Architecture

The frontend communicates with the Spring Boot backend through REST APIs.

### 👤 User APIs

```http
POST /api/users/register
POST /api/users/login
GET  /api/users/{id}
```

### 🚨 Emergency APIs

```http
POST   /api/emergencies
GET    /api/emergencies
GET    /api/emergencies/{id}
PUT    /api/emergencies/{id}
DELETE /api/emergencies/{id}
```

### 📊 Dashboard APIs

```http
GET /api/dashboard
GET /api/emergencies/status/{status}
```

---

# 🗄️ Database Design

The MySQL database stores important system information.

### 👤 Users

```text
Users
│
├── id
├── name
├── email
├── password
├── phone
└── role
```

### 🚨 Emergencies

```text
Emergencies
│
├── id
├── emergency_type
├── description
├── location
├── reporter_id
├── status
├── created_at
└── updated_at
```

---

# 🔐 Security

The application is designed with security considerations such as:

* 🔒 Authentication
* 🛡️ Role-based access
* 🔐 Password protection
* 🚫 Unauthorized access prevention
* 🔑 API-level validation
* 🧹 Input validation

---

# 📈 Future Enhancements

The system can be extended with advanced features:

### 🤖 AI Emergency Classification

Automatically classify emergencies based on the submitted description.

```text
📝 User Description
       ↓
🤖 AI Analysis
       ↓
┌───────────────┐
│ 🔥 Fire       │
│ 🚑 Medical    │
│ 🚗 Accident   │
│ 🌊 Flood      │
└───────────────┘
```

### 📍 Real-Time GPS Tracking

Track rescue teams and emergency locations in real time.

### 📱 Mobile Application

Develop Android/iOS applications for faster emergency reporting.

### 🔔 Push Notifications

Notify:

* 👤 Citizens
* 👨‍🚒 Rescue teams
* 👮 Authorities

about emergency updates.

### 🧠 AI Priority Detection

Automatically determine emergency severity:

```text
🚨 Emergency
     ↓
🤖 AI Analysis
     ↓
┌──────────────────────┐
│ 🔴 CRITICAL          │
│ 🟠 HIGH              │
│ 🟡 MEDIUM            │
│ 🟢 LOW               │
└──────────────────────┘
```

---

# 🎯 Advantages

| Feature         | Traditional Method  | City Emergency Rescue |
| --------------- | ------------------- | --------------------- |
| 🚨 Reporting    | Manual              | Digital               |
| 📊 Monitoring   | Limited             | Centralized           |
| 📝 Data Storage | Manual              | Database              |
| 🔄 Tracking     | Difficult           | Status-based          |
| ⚡ Response      | Potentially delayed | Structured workflow   |
| 📍 Location     | Phone description   | Digital location      |
| 📈 Analytics    | Limited             | Dashboard-ready       |

---

# 🧪 Testing

The APIs can be tested using **Postman**.

Example:

```text
POST
/api/emergencies

        ↓

📤 Request

        ↓

⚙️ Spring Boot

        ↓

🗄️ MySQL

        ↓

📥 JSON Response
```

---

# 💻 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/City-Emergency-Rescue-System.git
```

## 2️⃣ Navigate to Backend

```bash
cd backend
```

## 3️⃣ Configure MySQL

Create a database:

```sql
CREATE DATABASE emergency_rescue;
```

Update your database configuration in:

```text
application.properties
```

## 4️⃣ Run Spring Boot

Using Maven:

```bash
mvn spring-boot:run
```

Or run the main Spring Boot application from IntelliJ IDEA.

---

## 5️⃣ Start Frontend

```bash
cd frontend
npm install
npm start
```

---

# 🖥️ Application Screens

Add your project screenshots here:

```markdown
## 🏠 Dashboard

![Dashboard](screenshots/dashboard.png)

## 🚨 Emergency Reporting

![Emergency](screenshots/emergency.png)

## 📊 Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

## 🔐 Login

![Login](screenshots/login.png)
```



---

# 📊 Project Impact

The City Emergency Rescue System demonstrates how software engineering can be applied to a real-world emergency-response problem.

It provides a foundation for building a larger smart-city emergency ecosystem capable of integrating:

```text
🚨 Emergency Reporting
        +
📍 Location Services
        +
🤖 Artificial Intelligence
        +
📊 Data Analytics
        +
🔔 Notifications
        +
🚑 Rescue Coordination
        ↓
🏙️ SMART CITY EMERGENCY MANAGEMENT
```

---


<p align="center">

### 🚨 "Every Second Matters. Every Response Counts." 🚑

</p>
