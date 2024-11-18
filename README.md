# Personal Portfolio Website

Welcome to the repository of my personal portfolio website, [www.arnaldocisneros.com](http://www.arnaldocisneros.com). This project showcases my technical skills, professional achievements, and certifications in software development and cloud computing. It is built using modern technologies like **React** and **TypeScript**, while leveraging multiple **AWS services** for hosting, scalability, and seamless integration.

This platform is designed to be a highly efficient, serverless, and globally available application, optimized for speed and reliability, while ensuring secure management of resources.

---

## **Key Features**

### **1. Built with React and TypeScript**
- The frontend is developed using **React** to create reusable, dynamic components for a smooth user experience. 
- **TypeScript** provides type safety and enhances code readability, reducing bugs and improving maintainability over time.
- A fully responsive design ensures compatibility across all devices, including desktops, tablets, and mobile phones.

---

### **2. Deployed with Global Reach Using AWS Services**
- **S3 with CloudFront:**  
  Static files are hosted in an **Amazon S3 bucket**, and the website is delivered globally using **AWS CloudFront** for low-latency access and enhanced security through HTTPS.  

- **Route 53 for Domain Management:**  
  The custom domain [www.arnaldocisneros.com](http://www.arnaldocisneros.com) is registered and managed through **Route 53**, ensuring reliable DNS resolution with minimal downtime.

---

### **3. Continuous Integration and Deployment (CI/CD)**
- The project uses **AWS CodePipeline**, **CodeBuild**, and **CodeDeploy** to automate the build and deployment process.
- Every code change triggers the pipeline, ensuring faster iteration and reducing manual deployment errors.
- Logs and performance metrics are continuously monitored to improve and scale the application efficiently.

---

### **4. Serverless Backend**
- **AWS Lambda & API Gateway:**  
  The backend logic is built with **AWS Lambda** for event-driven, serverless execution, and an **API Gateway** securely handles client requests.
  
- **DynamoDB for Data Storage:**  
  User data and application content are stored in a **DynamoDB** database, enabling high scalability and low-latency data retrieval.

- **Secrets Manager for Sensitive Information:**  
  Application secrets, such as API keys and database credentials, are securely managed using **AWS Secrets Manager**, ensuring data integrity and confidentiality.

---

### **5. Infrastructure as Code (IaC) with AWS CDK**
- The entire infrastructure, from the S3 bucket to the Lambda functions, is defined using **AWS Cloud Development Kit (CDK)**.  
- CDK generates **CloudFormation templates**, ensuring repeatable, version-controlled infrastructure deployments.
- This approach simplifies managing resources, allowing for rapid scaling and easy troubleshooting.

---

### **6. Scalable and Secure Asset Management**
- All assets, including images, stylesheets, and scripts, are stored in **Amazon S3**, ensuring high availability and fast content delivery.
- Security configurations include restricted public access to assets and HTTPS encryption for secure data transfer.

---

## **Technologies Used**
- **Frontend:** React, TypeScript  
- **Backend:** AWS Lambda, API Gateway  
- **Database:** DynamoDB  
- **CI/CD:** CodePipeline, CodeBuild, CodeDeploy  
- **Hosting:** S3, CloudFront  
- **Infrastructure:** AWS CDK, CloudFormation  
- **Domain Management:** Route 53  
- **Security:** Secrets Manager  

---

## **How It Works**
1. **User Interaction:**  
   Users interact with the frontend React application hosted on S3 and delivered via CloudFront.  

2. **API Requests:**  
   User actions that require dynamic data trigger secure API calls routed through **API Gateway** to a **Lambda function**.  

3. **Data Handling:**  
   The Lambda function queries the **DynamoDB** database and retrieves relevant data to serve the user request.  

4. **CI/CD Pipelines:**  
   Code updates are automatically built, tested, and deployed using AWS CodePipeline, ensuring the latest version is always live.

5. **Secrets Management:**  
   Sensitive information such as API keys or environment variables is securely retrieved from **Secrets Manager** during runtime.  

---

## **Why This Project Matters**
This website is more than just a portfolio; it represents my expertise in building scalable, cloud-native applications. It highlights my ability to:
- Use modern frontend frameworks like React and TypeScript to create engaging user experiences.
- Architect and deploy serverless infrastructure using AWS services.
- Implement CI/CD pipelines to streamline development workflows.
- Securely handle sensitive data using cloud-native security solutions.

---

## **Visit the Website**
Check out the live application at [www.arnaldocisneros.com](http://www.arnaldocisneros.com).  

Feel free to explore my portfolio and reach out for collaborations or inquiries!