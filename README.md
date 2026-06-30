# Cloud & Linux Learning Journey

> **Learning in public** — documenting my step-by-step journey through Linux, cloud concepts, devsecops, and more hands-on practice.
---

## About This Repo

This repository documents my hands-on learning journey through Linux administration, cloud computing, Azure services, containerization, and DevSecOps. Every topic is accompanied by practical labs, notes, and real-world projects, helping me build a strong foundation in modern infrastructure, automation, and secure software delivery.

---

## Progress Log

| Day    | Date         | Topic                                              | Notes                                                    |
|--------|--------------|----------------------------------------------------|----------------------------------------------------------|
| Day 01 | May 14, 2026 | Linux Basics                                       | [View →](./linux/day-01-basics.md)                       |
| Day 02 | May 15, 2026 | File Management, Links & I/O Redirection           | [View →](./linux/day-02-file-management.md)              |
| Day 03 | May 18, 2026 | User Management, Groups & SSH                      | [View →](./linux/day-03-users-groups-ssh.md)             |
| Day 04 | May 19, 2026 | SSH Deep Dive & File Permissions                   | [View →](./linux/day-04-ssh-permissions.md)              |
| Day 05 | May 20, 2026 | Special Permissions, umask & Apache Server         | [View →](./linux/day-05-permissions-apache.md)           |
| Day 06 | May 21, 2026 | WordPress on LAMP Stack (Full Deployment)          | [View →](./linux/day-06-wordpress-lamp.md)               |
| Day 07 | May 25, 2026 | Job Scheduling (at & cron) & Disk Management       | [View →](./linux/day-07-scheduling-disk.md)              |
| Day 08 | May 26, 2026 | Storage Partitioning & Process Management          | [View →](./linux/day-08-storage-processes.md)            |
| Day 09 | May 27, 2026 | Linux Administration Lab — File Ops, Users, Permissions, Services, Apache, Bash & Cron | [View →](./linux/day-09-linux-admin-lab.md) |
| Day 10 | Jun 08, 2026 | Azure VMSS, Snapshots & Load Balancer Lab          | [View →](./cloud/day-10-azure-vmss-load-balancer.md)     |
| Day 11 | Jun 10, 2026 | Azure VMSS Autoscaling Lab                         | [View →](./cloud/day-11-vmss-autoscaling-lab.md)         |
| Day 12 | Jun 16, 2026 | Azure Storage Services & File Share Lab            | [View →](./cloud/day-12-azure-storage-services.md)       |
| Day 13 | Jun 18, 2026 | Azure App Service, Function App & Logic Apps       | [View →](./cloud/day-13-app-service-function-logic-apps.md) |
| Day 14 | Jun 19, 2026 | Azure Application Hosting Services                 | [View →](./cloud/day-14-azure-application-hosting-services.md) |
| Day 15 | Jun 22, 2026 | Azure CLI Virtual Machine Administration Lab       | [View →](./cloud/day-15-azure-cli-vm-lab.md)             |
| Day 16 | Jun 23, 2026 | Azure Container Registry (ACR) & Azure Container Instances (ACI) | [View →](./cloud/day-16-azure-containerization-lab.md) |
| Day 17 | Jun 24, 2026 | Azure Container Services & Application Hosting Services | [View →](./cloud/day-17-azure-container-services-hosting.md) |
| Day 18 | Jun 25, 2026 | Azure Security Services                            | [View →](./cloud/day-18-azure-security-services.md)      |
| Day 19 | Jun 26, 2026 | Azure Database Services (SQL, MySQL & PostgreSQL)  | [View →](./cloud/day-19-azure-database-services.md)      |
| Day 20 | Jun 30, 2026 | DevSecOps CI/CD Project – Azure Edition            | [View Project →](https://github.com/eshansahad/secure-devsecops-pipeline) |

> More sessions will be added as I progress.

---

## Projects & Milestones

| Date | Project | Description | Repository |
|------|---------|-------------|------------|
| May 2026 | SSH Security Checker | Bash-based SSH security auditing tool for Linux hardening. | [View →](./projects/ssh-security-checker/) |
| Jun 2026 | WordPress LAMP Deployment | Complete WordPress deployment on a Linux LAMP stack. | [View →](./projects/wordpress-lab-report/) |
| Jun 2026 | Secure DevSecOps Pipeline v2.0 | Production-style DevSecOps CI/CD pipeline featuring Docker, GitHub Actions, Ruff, Pytest, Bandit, pip-audit, Gitleaks, Trivy, GitHub Container Registry (GHCR), and automatic deployment to Azure Container Apps. | [GitHub →](https://github.com/eshansahad/secure-devsecops-pipeline) |

## Repo Structure

```
cloud-linux-learning-journey/
├── README.md                            ← You are here
├── linux/
│   ├── day-01-basics.md                 ← Core commands, users, file ops
│   ├── day-02-file-management.md        ← cp, mv, rm, links, I/O, grep, pipes
│   ├── day-03-users-groups-ssh.md       ← useradd, groups, sudo, SSH keygen
│   ├── day-04-ssh-permissions.md        ← SSH deep dive, chmod, chown
│   ├── day-05-permissions-apache.md     ← SUID, SGID, sticky bit, umask, Apache
│   ├── day-06-wordpress-lamp.md         ← Full LAMP stack + WordPress deployment
│   ├── day-07-scheduling-disk.md        ← at, cron, df, du, lsblk, partitioning
│   ├── day-08-storage-processes.md      ← fdisk, fstab, ps, kill, top, nice, jobs
│   ├── day-09-linux-admin-lab.md        ← Consolidation lab: file ops, users, chmod, systemctl, Apache, bash scripts
│   └── assets/                          ← Screenshots from lab sessions
├── cloud/
│   ├── day-10-azure-vmss-load-balancer.md ← VMSS, snapshots, load balancer & HA web lab                        
|   ├── day-11-vmss-autoscaling-lab.md   ← VMSS creation, autoscaling, stress testing
│   ├── day-12-azure-storage-services.md ← Azure storage services and file share lab
│   ├── day-13-app-service-function-logic-apps.md ← Azure App Service, Function App & Logic Apps
│   ├── day-14-azure-application-hosting-services.md ← Azure Application Hosting Services
|   ├── day-15-azure-cli-vm-lab.md       ← Azure CLI VM creation, networking, NSG, SSH access
│   ├── day-16-azure-containerization-lab.md ← Azure Container Registry, Docker Images & Azure Container Instances
│   ├── day-17-azure-container-services-hosting.md ← Azure Container Services, AKS, Container Apps & Hosting Services
│   ├── day-18-azure-security-services.md ← Azure security, identity, networking & governance services
│   ├── day-19-azure-database-services.md ← Azure SQL, MySQL & PostgreSQL Administration Labs
|   └── assets/                           ← Screenshots from lab sessions
└── projects/
    ├── ssh-security-checker/            ← SSH security auditing project
    ├── wordpress-lab-report/            ← Install and configure wordpress
    └── secure-devsecops-pipeline/       ← DevSecOps project overview (links to external repository below)
```

**External repository:** [secure-devsecops-pipeline →](https://github.com/eshansahad/secure-devsecops-pipeline)

---

## Projects

### SSH Security Checker

A hands-on Linux security project that audits SSH configurations and checks for common security weaknesses.

**Key Skills**

* Linux Administration
* SSH Hardening
* Bash Scripting
* System Auditing
* DevSecOps Fundamentals

### Lab Environment

| Component      | Details              |
|----------------|----------------------|
| Cloud Provider | AWS EC2              |
| OS             | Red Hat Linux        |
| Access Method  | SSH from Windows CMD |
| Shell          | Bash                 |

---

### Secure DevSecOps Pipeline (v2.0)

An end-to-end DevSecOps project built with Python, Flask, Docker, and GitHub Actions. The project demonstrates a secure CI/CD workflow integrating automated testing, security scanning, containerization, and container publishing.

**Repository**

https://github.com/eshansahad/secure-devsecops-pipeline

**Highlights**

* Multi-job GitHub Actions workflow
* Ruff code quality analysis
* Pytest automated testing
* Bandit SAST scanning
* pip-audit dependency scanning
* Gitleaks secret detection
* Docker containerization
* Trivy container security scanning
* GitHub Container Registry (GHCR)
* Azure Container Apps deployment
* Continuous Deployment (CD)

**Skills Practiced**

* DevSecOps
* Continuous Integration (CI)
* Continuous Deployment (CD)
* GitHub Actions
* Docker
* Container Security
* Microsoft Azure
* Azure Container Apps
* Secure Software Development
* Shift-Left Security

### 🛠️ DevSecOps Project Environment

| Component            | Details                                               |
| -------------------- | ----------------------------------------------------- |
| Project              | Secure DevSecOps Pipeline                             |
| Programming Language | Python 3.10                                           |
| Framework            | Flask                                                 |
| Code Editor          | Visual Studio Code                                    |
| Version Control      | Git & GitHub                                          |
| Containerization     | Docker & Docker Compose                               |
| CI/CD                | GitHub Actions                                        |
| Code Quality         | Ruff                                                  |
| Unit Testing         | Pytest                                                |
| SAST                 | Bandit                                                |
| Dependency Scanning  | pip-audit                                             |
| Secret Detection     | Gitleaks                                              |
| Container Security   | Trivy                                                 |
| Container Registry   | GitHub Container Registry (GHCR)                      |
| Operating System     | Windows 11                                            |
| Future Deployment    | Azure Container Apps / Azure Kubernetes Service (AKS) |


---

# 📚 Learning Roadmap

A structured overview of completed and pending topics across Linux, Cloud (Azure), DevSecOps, and related infrastructure skills.

---

## 🐧 Linux Administration

- [x] Linux basics — commands, users, file operations
- [x] File management — `cp`, `mv`, `rm`, hard/soft links, I/O redirection, `grep`, pipes
- [x] User & group management — `useradd`, `passwd`, `sudo`, SSH key authentication
- [x] SSH deep dive & file permissions — `sshd_config`, root login, `chmod`, `chown`
- [x] Special permissions & Apache — SUID, SGID, sticky bit, `umask`, `httpd`
- [x] WordPress LAMP deployment — Apache, PHP 8.3, MariaDB, WordPress, SELinux, backups
- [x] Job scheduling & disk management — `at`, `cron`, `df`, `du`, `lsblk`, `fdisk`, `fstab`
- [x] Storage partitioning & process management — `fdisk`, `fstab`, `ps`, kill signals, `top`, `nice`
- [x] Linux administration lab — file ops, user/group management, `chmod`, `systemctl`, Apache, bash scripting, cron
- [x] Networking — `ip`, `ss`, `ping`, `curl`, `nmcli`
- [x] SSH security checker — Bash-based SSH security auditing project
- [x] LVM — Logical Volume Manager
- [x] Shell scripting — `.sh` files, variables, loops, conditionals

---

## ☁️ Azure Fundamentals

- [x] Azure fundamentals — ARM, RBAC, IAM, scopes, Microsoft Entra ID
- [x] Azure CLI fundamentals
- [x] Azure CLI virtual machine deployment
- [x] Virtual networks & subnets using Azure CLI
- [x] Network Security Groups (NSG)
- [x] Linux VM administration via SSH
- [ ] Cloud architecture — real-world project

---

## 📈 Azure Compute & Scaling

- [x] Azure VM Scale Sets (VMSS) & autoscaling
- [x] Azure VMSS, snapshots & load balancer lab
- [x] Azure monitoring & CPU-based scaling rules
- [x] Azure load testing with stress utility

---

## 🗄️ Azure Storage & Data Services

- [x] Storage accounts, blobs & file shares
- [x] Storage explorer
- [x] Storage migration tools
- [x] Azure database fundamentals

---

## 🐳 Azure Container Services

- [x] Docker fundamentals
- [x] Container images & Dockerfile
- [x] Container orchestration
- [x] Azure Container Registry (ACR)
- [x] Azure Container Instances (ACI)
- [x] Azure Kubernetes Service (AKS)
- [x] Deploy containers from Docker Hub
- [x] Push images to Azure Container Registry
- [x] Containerized application deployment
- [x] Kubernetes fundamentals
- [ ] Kubernetes (AKS) — advanced

---

## 🌐 Azure Application Hosting Services

- [x] Azure App Service
- [x] Azure Function App
- [x] Azure Logic Apps
- [x] Azure Spring Apps
- [x] Azure Container Apps
- [x] Azure Static Web Apps
- [x] Serverless computing basics
- [x] Workflow automation with Azure Pipelines
- [x] Hosting service comparison

---

## 🔐 Azure Security Services

- [x] Microsoft Entra ID
- [x] Microsoft Defender for Cloud
- [x] Microsoft Sentinel
- [x] Azure Key Vault
- [x] Azure Firewall
- [x] Network Security Groups (NSG)
- [x] Azure DDoS Protection
- [x] Azure Web Application Firewall (WAF)
- [x] Azure Bastion
- [x] Azure Policy
- [x] Azure Monitor
- [x] Microsoft Purview

---

## 🗃️ Azure Database Services

- [x] Azure SQL Database
- [x] Azure SQL Query Editor
- [x] Azure Database for MySQL
- [x] Azure Database for PostgreSQL
- [x] Flexible Server
- [x] Firewall rules
- [x] Azure Cloud Shell
- [x] SQL table creation
- [x] Data insertion & retrieval
- [x] Database administration

---

## 🛠️ DevSecOps Pipeline Project

- [x] Python Flask application
- [x] Docker containerization
- [x] Docker Compose
- [x] GitHub Actions CI/CD
- [x] Ruff code quality analysis
- [x] Pytest unit testing
- [x] Bandit static application security testing (SAST)
- [x] pip-audit dependency scanning
- [x] Gitleaks secret detection
- [x] Trivy container vulnerability scanning
- [x] GitHub Container Registry (GHCR)
- [x] Release management (v2.0.0)
- [x] Azure Container Apps deployment
- [x] Continuous deployment using GitHub Actions

---

## 🔭 Other Cloud Platforms

- [ ] AWS core services — EC2, S3, IAM, VPC
- [ ] Terraform — Infrastructure as Code

---

## Why I'm Doing This

Building things in public keeps me accountable. Every commit is a proof of effort — not just learning, but showing up consistently.

---

*Started: May 2026 — Updated regularly*
