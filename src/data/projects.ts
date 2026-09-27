import bushraPortrait from "@/assets/bushra-portrait.png";
import mediAnalysesCover from "@/assets/medi-analyses-cover.png";
import meditrackCover from "@/assets/meditrack-coverpage.png";
import magicSmsCover from "@/assets/magic-sms-cover.png";
import menuVisionArCover from "@/assets/menuvision-ar-cover.png";
import menuVisionArScreenshot from "@/assets/Screenshot 2026-09-24 091030.png";
import craftechCover from "@/assets/craftech-cover.png";
import PulseOpsCover from "@/assets/PulseOps-cover.png";
import SafarGooCover from "@/assets/safargo-cover.jpg";
import CampusConnectAwsCover from "@/assets/campusconnect-cover.png";
import campus1 from "@/assets/campusconnect/1.png";
import campus2 from "@/assets/campusconnect/2.png";
import campus3 from "@/assets/campusconnect/3.png";
import campus4 from "@/assets/campusconnect/4.png";
import campus5 from "@/assets/campusconnect/5.png";
import campus6 from "@/assets/campusconnect/6.png";
import SmartAttendanceCover from "@/assets/smart-attendance-cover.png";
import MAgicMAilCOverpage from "@/assets/magic mail coverpage.png";
import maxisCoverPage from "@/assets/maxis-coverpage.png";
import maixsMain from "@/assets/maixs/maixs-main.png";
import maixs1 from "@/assets/maixs/maixs-1.png";
import maixs2 from "@/assets/maixs/maixs-2.png";
import maixs3 from "@/assets/maixs/maixs-3.png";
import maixs4 from "@/assets/maixs/maixs-4.png";
import maixs5 from "@/assets/maixs/maixs-5.png";
import maixs6 from "@/assets/maixs/maixs-6.png";
import maixs7 from "@/assets/maixs/maixs-7.png";
import meditrack1 from "@/assets/meditrack/meditrack-1.png";
import meditrack2 from "@/assets/meditrack/meditrack-2.png";
import meditrack3 from "@/assets/meditrack/meditrack-3.png";
import meditrack4 from "@/assets/meditrack/meditrack-4.png";
import meditrack5 from "@/assets/meditrack/meditrack-5.png";
import meditrack6 from "@/assets/meditrack/meditrack-6.png";
import meditrack7 from "@/assets/meditrack/meditrack-7.png";
import meditrack8 from "@/assets/meditrack/meditrack-8.png";
import meditrack9 from "@/assets/meditrack/meditrack-9.png";
import meditrack10 from "@/assets/meditrack/meditrack-10.png";
import safargoAbout from "@/assets/safarGoo/safargo about.png";
import safargoContact from "@/assets/safarGoo/safargo contact.png";
import safargoDashboard from "@/assets/safarGoo/safargo dashboard.png";
import safargoTrain from "@/assets/safarGoo/safargo train.png";
import safarGoo1 from "@/assets/safarGoo/safarGoo-1.png";
import gourmetcoverpage from "@/assets/gourmet grandeur-coverpage.png";
import savoriacoverpage from "@/assets/savoria cover page.png"


const BASE = "https://portfolio-omega-ruby-43.vercel.app";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
  liveUrl?: string;
  downloadUrl?: string;
  githubUrl?: string;
  walkthroughUrl?: string;
  walkthroughAutoplay?: boolean;
  walkthroughMuted?: boolean;
  walkthroughLoop?: boolean;
  status?: string;
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };
  caseStudy?: {
    overview: string;
    features: { title: string; description: string }[];
    architecture: { title: string; description: string }[];
    implementation: { title: string; description: string }[];
    challenges: { challenge: string; solution: string }[];
  };
}

const projectData: Project[] = [
  {
    id: "safargoo",
    title: "SafarGoo",
    category: "Travel & Tourism",
    tags: ["REACT NATIVE", "EXPO", "NODE.JS", "SQL SERVER"],
    year: "2026",
    client: "Case study — Demo build",
    status: "CASE STUDY",
    description:
      "A cross-platform flight and train booking app for Pakistan, built to make searching, comparing, and booking a trip feel fast, transparent, and low-risk with a built-in reliability score for every itinerary.",
    coverImage: SafarGooCover,
    images: [SafarGooCover, safarGoo1, safargoAbout, safargoContact, safargoDashboard, safargoTrain],
    githubUrl: "https://github.com/bushraa09/SafarGoo",
    walkthroughUrl:
      "https://res.cloudinary.com/du6tfdazy/video/upload/v1771588161/Screen_Recording_2026-02-17_212154_loggyj.mp4",
    walkthroughAutoplay: true,
    walkthroughMuted: true,
    walkthroughLoop: true,
    caseStudy: {
      overview:
        "SafarGoo lets users search, compare, and book flights and trains across Pakistan from a single interface. It pulls live flight offers from the Amadeus API and merges them with a separate train dataset, so travelers can compare both modes side by side. The product addresses decision fatigue by scoring every itinerary for reliability, tracking bookings through a full lifecycle with an audit trail, and supporting operations through an internal admin console. This build runs from a local/demo environment rather than a public production deployment.",
      features: [
        { title: "Live flight & train search", description: "Flight offers come from the Amadeus API through OAuth2 client credentials and are merged with a train dataset. Results are sortable and filterable by price, duration, and stops." },
        { title: "Trip Guardian reliability scoring", description: "A custom 0-100 score considers layover risk, trip duration, and red-eye timing, then surfaces plain-language risk flags and safer fallback options." },
        { title: "Two-phase booking flow", description: "Bookings move through intent and confirm steps with a full event audit trail. A background sweep marks stale, abandoned intents after a timeout." },
        { title: "Compare & save flights", description: "Travelers can compare two flights side by side and save options to revisit later." },
        { title: "Secure dual authentication", description: "Traveler email/password and email-OTP authentication use bcrypt and JWT sessions, completely separate from the role-based admin JWT." },
        { title: "Encrypted traveler profiles", description: "Traveler details are protected with field-level AES-256-GCM encryption before they reach the database." },
        { title: "Role-based admin console", description: "A protected internal dashboard supports booking management, redirect analytics, and threaded support tickets across superadmin, admin, analyst, and support roles." },
        { title: "Built-in demo mode", description: "A DEMO_MODE flag serves realistic, deterministic offers through the same search-to-booking path used for live integrations." },
      ],
      architecture: [
        { title: "React Native (Expo) client", description: "A cross-platform interface for search, booking, and traveler accounts across iOS, Android, and web." },
        { title: "Node.js / Express REST API", description: "Resource-based routers with JWT middleware, consistent ok/data/error responses, and integrations for Amadeus and train data." },
        { title: "SQL Server", description: "Parameterized mssql queries support users, bookings, booking events, OTP codes, and cached offers. A booking_ref is the shareable public identifier." },
        { title: "Cross-platform state", description: "A Zustand auth store swaps AsyncStorage on native for localStorage on web through a small storage adapter." },
      ],
      implementation: [
        { title: "Authentication & authorization", description: "Traveler passwords use bcrypt with a cost factor of 12 and seven-day JWT sessions. Admin sessions use a separate secret and role claim, with an optional admin-email allowlist." },
        { title: "REST API design", description: "Independent routers cover bookings, favorites, history, offers, travelers, profile, admin, and revenue. Every write validates input server-side." },
        { title: "Database layer", description: "All SQL Server queries use parameterized inputs. MERGE-based upserts keep offer caches, OTP codes, and user records idempotent." },
        { title: "Data protection", description: "Traveler PII is encrypted field by field with AES-256-GCM before storage, and raw passwords are never stored or logged." },
      ],
      challenges: [
        { challenge: "Abandoned bookings left stale intents in the database.", solution: "Split booking into an intent record and final confirm step, then added a periodic sweep job that marks old intents ABANDONED." },
        { challenge: "Risky itineraries looked identical to safe options in raw results.", solution: "Built Trip Guardian scoring with a 0-100 reliability score, human-readable flags, and a fallback/rescue suggestion endpoint." },
        { challenge: "Demo work could consume paid Amadeus API quota.", solution: "Added DEMO_MODE with realistic deterministic offers through the exact production code path." },
        { challenge: "Passport and contact details needed protection beyond passwords.", solution: "Implemented field-level AES-256-GCM encryption for traveler PII before it is written to SQL Server." },
        { challenge: "Travelers and internal staff needed separate security boundaries.", solution: "Kept admin JWT secrets and role claims separate from traveler authentication and checked them with dedicated middleware." },
        { challenge: "iOS, Android, and web store sessions differently.", solution: "Added a thin Zustand storage adapter that transparently swaps AsyncStorage for localStorage on web." },
      ],
    },
  },
{
  id: "campusconnect-aws",
  title: "CampusConnect AWS Deployment",
  category: "Cloud",
  tags: ["AWS EC2", "VPC", "IAM", "RDS", "SECURITY GROUPS", "INFRASTRUCTURE"],
  year: "2026",
  client: "Case study — AWS Report",
  status: "Case Study",
  description:
    "A production-grade AWS deployment for CampusConnect, a campus event discovery platform. Infrastructure covers VPC networking, RDS MySQL database, security group isolation, IAM role-based access, and EC2 hosting with full infrastructure-as-code planning.",
  coverImage: CampusConnectAwsCover,
  images: [
    CampusConnectAwsCover,
    campus1,
    campus2,
    campus3,
    campus4,
    campus5,
    campus6
  ],
  caseStudy: {
    overview:
      "CampusConnect is a React-based campus event discovery platform deployed across AWS infrastructure in eu-north-1 (Stockholm). The deployment separates network, database, and application tiers using VPC subnets, security groups, and IAM policies to enforce zero-trust architecture. The application uses a managed RDS MySQL database for persistent storage while EC2 instances run the Node.js backend behind a security perimeter. This case study documents infrastructure decisions, security hardening, and operational lessons learned during the transition from local development to production AWS deployment.",
    features: [
      {
        title: "Campus Event Discovery",
        description:
          "Users browse upcoming campus events (workshops, career fairs, seminars) with filtering by event type, venue, and date. Event cards display images, location, date, and registration links."
      },
      {
        title: "Event Management",
        description:
          "Campus administrators can create, edit, and delete events through a protected admin panel. Event data includes title, description, date, time, venue, capacity, and event category tags."
      },
      {
        title: "User Notifications",
        description:
          "Registered users receive email notifications for event reminders, updates, and new events matching their interests."
      },
      {
        title: "User Profiles & Registration",
        description:
          "Campus users can create accounts, manage profiles, save favorite events, and register for events with RSVP tracking."
      },
      {
        title: "Multi-Campus Support",
        description:
          "Platform supports multiple campus deployments from a single AWS account with campus-scoped data isolation."
      },
      {
        title: "Responsive Event Discovery",
        description:
          "Mobile-optimized React frontend allows students to discover events on-the-go with fast load times and offline-capable PWA features."
      }
    ],
    architecture: [
      {
        title: "VPC Networking (eu-north-1)",
        description:
          "A dedicated VPC (campusconnect-vpc) isolates all infrastructure with private subnets for the database tier and public subnets for the backend API tier. NAT gateways allow private database tier outbound traffic without direct internet exposure. Each subnet has specific routing rules to control traffic flow between layers."
      },
      {
        title: "Security Groups Enforcement",
        description:
          "Five security groups segment traffic: (1) CampusConnect backend EC2 — allows HTTP/HTTPS inbound from ALB, SSH from bastion only. (2) CampusConnect database — allows MySQL (3306) inbound from backend EC2 only, no direct internet access. (3) Load balancer — handles public-facing HTTPS traffic. (4) Bastion/jump host — for operator SSH access to EC2 instances. (5) Default VPC group — for inter-VPC communication."
      },
      {
        title: "RDS MySQL Database",
        description:
          "A managed MySQL 8.0 database (campusconnect-db) provides ACID compliance, automatic backups, and Multi-AZ failover for production reliability. Database lives in a private subnet with no public endpoint, accessed only from backend EC2 instances through the database security group. Automated daily snapshots retain 7 days of backup history."
      },
      {
        title: "EC2 Backend Instances",
        description:
          "Node.js Express servers run on EC2 t3.medium instances (2 vCPU, 4 GB RAM) behind an Application Load Balancer (ALB). Auto Scaling Group maintains 2-4 instances based on CPU/memory metrics. Instances pull code from GitHub via CodeDeploy for zero-downtime deployments."
      },
      {
        title: "IAM Role-Based Access",
        description:
          "EC2 instances assume an IAM role that grants read-only access to RDS, CloudWatch Logs, and S3 for application logs. Root AWS account has MFA enabled. Application developers have limited IAM roles (no root key access) with CloudFormation and CodeDeploy permissions only."
      },
      {
        title: "Application Load Balancer (ALB)",
        description:
          "Distributes HTTPS traffic across backend instances, handles SSL/TLS termination with AWS Certificate Manager (ACM) certificates, and performs health checks every 30 seconds to detect failed instances."
      },
      {
        title: "CloudWatch Monitoring & Logs",
        description:
          "All EC2 instances stream application and system logs to CloudWatch Logs. CloudWatch alarms trigger SNS notifications when CPU exceeds 70% or database connections exceed 80% capacity."
      },
      {
        title: "S3 for Static Assets & Backups",
        description:
          "React frontend static files are served via CloudFront CDN from an S3 bucket. RDS automated backups are stored durably in S3."
      }
    ],
    implementation: [
      {
        title: "VPC & Subnet Design",
        description:
          "The VPC spans 2 Availability Zones (eu-north-1a, eu-north-1b) with public subnets (10.0.1.0/24, 10.0.2.0/24) for the ALB and NAT gateways, and private subnets (10.0.10.0/24, 10.0.11.0/24) for EC2 instances and RDS. Route tables enforce: public subnets route to Internet Gateway; private subnets route to NAT gateways for egress only."
      },
      {
        title: "Database Configuration",
        description:
          "RDS MySQL instance uses db.t3.small (2 vCPU, 2 GB RAM) with 100 GB gp3 storage and automated daily backups. Database credentials stored in AWS Secrets Manager and rotated every 90 days. Connection pooling (max 20 connections) prevents resource exhaustion. Enable slow query logging (threshold > 2 seconds) for performance analysis."
      },
      {
        title: "Security Group Rules",
        description:
          "Backend EC2 security group allows: inbound HTTPS (443) from ALB, HTTP (80) from ALB, SSH (22) from bastion only (10.0.3.0/32). Database security group allows: inbound MySQL (3306) from backend EC2 security group only. No egress restrictions for outbound internet (backend pulls npm packages, sends emails, etc.)."
      },
      {
        title: "IAM Policies & Roles",
        description:
          "EC2 instances assume AWSCampusConnectAppRole with inline policy: Allow rds-db:connect to campusconnect-db, Allow logs:CreateLogGroup|CreateLogStream|PutLogEvents for CloudWatch, Allow s3:GetObject on application-config-bucket. Developers have DevCampusConnectRole: Allow CodeDeploy:*, Allow CloudFormation:*, Deny iam:* and iam:AttachUserPolicy."
      },
      {
        title: "Auto Scaling & Load Balancing",
        description:
          "Auto Scaling Group targets 2-4 instances based on ALB target group metrics. Scale-up trigger: average CPU > 70% for 2 minutes. Scale-down trigger: average CPU < 30% for 5 minutes. Cooldown period: 300 seconds to avoid thrashing. ALB performs health checks (GET /health) every 30 seconds with 2 consecutive failures = instance replacement."
      },
      {
        title: "CI/CD Pipeline",
        description:
          "GitHub push to main branch triggers CodePipeline. CodeBuild runs npm install, npm test, npm build. CodeDeploy performs rolling deployment to ASG: stop old instance, deploy new version, health check passes within 5 minutes or rollback. Zero-downtime by using ALB connection draining (30 seconds)."
      },
      {
        title: "SSL/TLS & HTTPS Enforcement",
        description:
          "AWS Certificate Manager issues wildcard certificate (*.campusconnect.edu). ALB terminates HTTPS on port 443, forwards to backend on HTTP port 80 (internal traffic only). Redirect HTTP (80) → HTTPS (443) at ALB listener."
      },
      {
        title: "Logging & Monitoring",
        description:
          "Application logs streamed to CloudWatch Logs with retention policy (30 days). ALB access logs stored in S3 bucket for audit. CloudWatch Dashboards display: ALB request count, backend response time (p50/p95/p99), RDS CPU/connections, EC2 memory usage. SNS topics notify ops@campusconnect on alarm triggers."
      }
    ],
    challenges: [
      {
        challenge:
          "Database in private subnet had no direct internet access, preventing npm package downloads and email sending from Node.js backend.",
        solution:
          "Configured NAT Gateway in public subnet so private EC2 instances can initiate outbound internet connections (for npm, email, third-party APIs) while database remains unreachable from internet."
      },
      {
        challenge:
          "Scaling EC2 instances required SSH access for debugging, but opening SSH (22) to the internet introduced attack surface.",
        solution:
          "Deployed a bastion/jump host EC2 instance in public subnet. Developers SSH to bastion first (with key-pair auth), then SSH to private backend instances from bastion. Only bastion allows SSH from developer IPs."
      },
      {
        challenge:
          "RDS backup storage grew rapidly, increasing AWS costs without clear retention policy.",
        solution:
          "Configured RDS automated backups with 7-day retention window (automatic deletion of backups older than 7 days). Manual snapshots tagged with creation date for compliance retention (30 days). Estimated cost savings: 60% reduction in backup storage spend."
      },
      {
        challenge:
          "Application startup was slow because EC2 instances downloaded code from GitHub on boot, delaying service availability during scale-up events.",
        solution:
          "Created an AMI with Node.js, npm, and essential system packages pre-installed. Modified launch template to use custom AMI, reducing boot-to-ready time from 120 seconds to 40 seconds. CodeDeploy now pulls only application code delta."
      },
      {
        challenge:
          "Database connections from EC2 instances were not pooled, causing connection limit exhaustion (max 20 connections) when traffic spiked.",
        solution:
          "Implemented database connection pooling using node-mysql2/promise with max pool size of 5 connections per EC2 instance (total 10-20 connections under load). Added metrics to CloudWatch for pool utilization and connection wait times."
      },
      {
        challenge:
          "Multiple AWS accounts vs. single account trade-off: multi-account adds overhead but enforces security boundaries.",
        solution:
          "Decided on single production AWS account with IAM role-based separation. Separate development and staging accounts for lower-risk experimentation. Cross-account roles for audit access without elevated permissions."
      },
      {
        challenge:
          "AWS credentials (RDS password, API keys) were stored in .env files in Git repository, posing security risk.",
        solution:
          "Migrated all secrets to AWS Secrets Manager. EC2 instances retrieve secrets at boot via IAM role (no credentials in code). Rotation policy: database credentials rotated every 90 days automatically."
      },
      {
        challenge:
          "Manual deployments were error-prone and required SSH access to instances to restart services.",
        solution:
          "Implemented CodeDeploy for automated blue-green deployments. GitHub webhook triggers CodePipeline on push. CodeDeploy runs deploy scripts (install, start services), performs health checks, and auto-rollback on failure. Zero manual intervention."
      },
      {
        challenge:
          "Operators lacked visibility into application performance and couldn't correlate logs with errors.",
        solution:
          "Set up CloudWatch Insights for log querying. Added structured logging (JSON format) with request IDs. Created CloudWatch dashboards for SLO monitoring (99% requests < 500ms). Set up AWS X-Ray for distributed tracing (optional for future)."
      }
    ]
  }
},
{
  id: "medi-analyses",
  title: "Medi Analyses",
  category: "AI & Data",
  tags: ["REACT", "AI ANALYSIS", "HEALTHCARE", "DASHBOARD"],
  year: "2026",
  client: "Freelance — Live product",
  status: "LIVE",
  description:
    "An AI-powered clinical intelligence platform that turns lab reports and prescriptions into actionable insights. Features a patient profile with allergies and medical history, multi-file upload for diagnostic reports, prescription validation with manual entry, and dosage safety checks based on patient age and weight.",
  coverImage: mediAnalysesCover,
  images: [mediAnalysesCover],
  liveUrl: "https://medi-analyses.netlify.app/",
  githubUrl: "https://github.com/bushaa-sss/MediAnalysiss",
  caseStudy: {
    overview:
      "Medi Analyses is a React application that combines patient profiling, medical document processing, and AI-powered prescription validation in a single clinical intelligence workspace. Patients or clinicians input medical history, allergies, and biometric data, then upload lab reports and prescriptions for AI analysis. The platform validates prescription safety against patient age, weight, allergies, and existing medical conditions, then surfaces warnings and recommendations. The product bridges the gap between unstructured medical documents and actionable clinical insights.",
    features: [
      {
        title: "Patient Profile Management",
        description:
          "Create and maintain patient records with full name, age, weight, gender, and blood group. All data persists in local storage for quick recall across sessions."
      },
      {
        title: "Critical Allergies Tracking",
        description:
          "Tag critical allergies with quick-add buttons for common medications (Penicillin, NSAIDs, Sulfa, Aspirin, Ibuprofen, Latex) plus custom allergy entry. Visual warnings on the profile surface active allergies."
      },
      {
        title: "Medical History Logging",
        description:
          "Record chronic and acute conditions (Diabetes, Hypertension, CKD, Asthma, Heart Disease, Thyroid, etc.) with quick-add tags and free-form entry. History informs dosage and interaction checks."
      },
      {
        title: "Multi-File Lab Report Upload",
        description:
          "Upload diagnostic reports as PDF, JPG, PNG, or handwritten scans. Multer on the backend accepts multiple reports in one session, storing metadata for later retrieval."
      },
      {
        title: "Prescription Upload & Manual Entry",
        description:
          "Accept prescriptions as images (handwritten or printed) or enter medication details manually. Separate upload zones for clarity between patient documents and typed prescriptions."
      },
      {
        title: "Dosage Safety Validation",
        description:
          "Cross-check prescribed medications against patient age, weight, allergies, and medical history. Surface warnings for contraindicated medications, dangerous drug interactions, and inappropriate dosages."
      },
      {
        title: "Special Instructions Context",
        description:
          "Capture clinical notes (e.g., 'Patient has low creatinine levels, check dosage for CKD') to pass to the AI model for more nuanced recommendations."
      },
      {
        title: "AI-Powered Analysis Reports",
        description:
          "Generate structured clinical reports including prescription safety assessment, lab result interpretation, drug interaction warnings, and personalized recommendations."
      }
    ],
    architecture: [
      {
        title: "React Frontend",
        description:
          "A single-page application with form states for patient profile, allergies, medical history, file uploads, and prescription entry. Component hierarchy separates patient sidebar from the main analysis center."
      },
      {
        title: "Form State & Persistence",
        description:
          "Local storage saves patient profile, allergies, and medical history so users don't re-enter data. React state tracks multi-file uploads and form validation."
      },
      {
        title: "File Upload Handling",
        description:
          "Multer middleware on the backend accepts lab reports and prescription images. Files are scanned with OCR or stored for AI processing."
      },
      {
        title: "AI Integration Layer",
        description:
          "Third-party medical AI APIs (e.g., OpenAI GPT Vision for document analysis, or a specialized medical validation API) receive patient context, uploaded files, and prescriptions, then return structured safety assessments and recommendations."
      },
      {
        title: "Validation Engine",
        description:
          "A rules-based or ML-backed system cross-checks prescriptions against dosage tables, allergy lists, medical conditions, and drug interaction databases to surface warnings."
      }
    ],
    implementation: [
      {
        title: "Patient Profile Forms",
        description:
          "Controlled React inputs for name, age, weight, gender. Validation ensures age and weight are present before analysis (gating rule). Blood group stored as quick-select buttons."
      },
      {
        title: "Allergies & Medical History as Taggable Lists",
        description:
          "Pre-populated tag suggestions for common allergies and conditions with a '+' button to add custom entries. Tags render as removable pills in the UI."
      },
      {
        title: "Drag-and-Drop File Zones",
        description:
          "React Drop accepts files via drag-or-click for lab reports and prescriptions. Visual feedback for upload progress. Preview of uploaded file names and sizes before submission."
      },
      {
        title: "Prescription Validation Workflow",
        description:
          "On 'Analyze & Validate' button click, the frontend collects patient data, uploaded file metadata, and special instructions, then POSTs to the backend. The backend invokes the AI and validation engine, returning structured results that the frontend renders in an analysis panel."
      },
      {
        title: "Safety Warning UI",
        description:
          "Critical warnings (e.g., 'Penicillin allergy detected but prescribed Amoxicillin') render in red alert boxes. Dosage warnings render in yellow. Recommendations render as informational cards."
      },
      {
        title: "Results Export",
        description:
          "Analysis results can be exported as PDF or printed for clinical record-keeping."
      }
    ],
    challenges: [
      
      {
        challenge:
          "Handwritten prescriptions are hard to parse accurately with OCR, leading to missed drug interactions.",
        solution:
          "Provided fallback manual prescription entry so users can type medication names, dosages, and frequencies directly if OCR is unreliable. Store both OCR and manual entry for audit."
      },
      {
        challenge:
          "Patient age and weight are critical for safe dosage checks, but users often skip them.",
        solution:
          "Made age and weight required fields with a visible warning banner if missing. Gate the 'Analyze & Validate' button until both are provided."
      },
      {
        challenge:
          "Medical allergy and interaction databases need constant updates as new drugs launch and new interactions are discovered.",
        solution:
          "Rely on third-party validated medical AI APIs or subscribe to regularly-updated drug interaction databases (e.g., UpToDate, Micromedex feeds). Version the validation rules so users can see when data was last refreshed."
      },
     
      {
        challenge:
          "Storing patient medical data (even anonymized) raises HIPAA and data privacy concerns.",
        solution:
          "Implemented local-first storage where patient profile data stays in the user's browser until they explicitly upload documents. Document uploads are encrypted in transit and at rest, with explicit user consent."
      },
      {
        challenge:
          "Different dosage guidelines exist for adults, pediatric, geriatric, and renal/hepatic impairment populations.",
        solution:
          "Parameterized the validation rules to adjust dosage thresholds based on patient age and medical conditions (CKD, liver disease). AI model receives these parameters to provide context-specific recommendations."
      },
      {
        challenge:
          "Lab report formatting varies wildly (different lab systems, handwritten notes, scanned PDFs), making parsing unreliable.",
        solution:
          "Implemented OCR + AI pre-processing to extract structured data (test name, value, reference range, date) from unstructured reports. Manual review UI lets users correct extracted values before analysis."
      }
    ]
  }
},
  {
    id: "meditrack",
    title: "MediTrack",
    category: "Healthcare Systems",
    tags: ["REACT", "EXPRESS", "MONGODB", "JWT", "PWA"],
    year: "2026",
    client: "Open-source project — Clinic management system",
    status: "LIVE",
    description:
      "A clinic management system that gives doctors, receptionists, and admins a shared workspace for patient records, prescriptions, reports, follow-ups, reminders, appointments, staff management, and clinic-wide operations.",
    coverImage: meditrackCover,
    images: [meditrackCover, meditrack1, meditrack2, meditrack3, meditrack4, meditrack5, meditrack6, meditrack7, meditrack8, meditrack9, meditrack10],
    liveUrl: "https://medi-track-lovat.vercel.app",
    githubUrl: "https://github.com/bushaa-sss/MediTrack",
    caseStudy: {
      overview:
        "MediTrack is a React progressive web app backed by an Express REST API and MongoDB. It uses shared clinic-scoped data so doctors, receptionists, and admins can coordinate care from one workspace, while server-side authorization reloads each user's role from the database on every request.",
      features: [
        { title: "Role-based clinic access", description: "Doctors, receptionists, and admins receive distinct permissions for patients, appointments, reports, prescriptions, follow-ups, and staff administration." },
        { title: "Patient care records", description: "Manage patient profiles, medical history, prescriptions, uploaded reports, follow-ups, reminders, and notification history in one place." },
        { title: "Appointment operations", description: "Create, view, update, and cancel appointments with doctor, patient, date, time, status, reason, and notes support." },
        { title: "Clinic dashboards", description: "Personal and clinic-wide metrics help doctors track their work while receptionists and admins monitor daily clinic operations." },
        { title: "Push notifications", description: "Firebase Cloud Messaging delivers reminders and follow-up notifications, with daily node-cron checks scheduled for each doctor's local timezone." },
        { title: "Report uploads", description: "Multer handles clinical report uploads and stores the file metadata alongside the patient's record." },
      ],
      architecture: [
        { title: "React PWA frontend", description: "A progressive web app provides the authenticated clinic interface, installable manifest, Firebase messaging worker, and role-aware navigation." },
        { title: "Express REST API", description: "Dedicated controllers, routes, middleware, services, and scheduled jobs organize authentication, patients, appointments, staff, dashboards, and notifications." },
        { title: "MongoDB with Mongoose", description: "Clinic, staff, patients, appointments, notification logs, and reminder logs are modeled as MongoDB documents with references between shared clinic data." },
        { title: "JWT authentication", description: "Authenticated routes use JWT sessions, while authorization reloads the current role from the database instead of trusting the token alone." },
      ],
      implementation: [
        { title: "Shared clinic workspace", description: "Clinical data is scoped to a Clinic workspace rather than an individual staff account, allowing the whole care team to work from the same records." },
        { title: "Permission enforcement", description: "Authorization is enforced server-side for every route, including doctor-owned appointments, receptionist workflows, and admin-only staff management." },
        { title: "Appointment lifecycle", description: "Appointments support scheduled, confirmed, completed, cancelled, and no-show states with filters for doctor, patient, status, and date." },
        { title: "Production deployment path", description: "The backend can run behind Nginx and PM2 on AWS EC2, while the frontend is deployable to Vercel with a configured API base URL." },
      ],
      challenges: [
        { challenge: "A role stored only in a JWT could become stale after an account change.", solution: "Reload the user's role from MongoDB on every authenticated request and enforce authorization in backend middleware." },
        { challenge: "Doctors, receptionists, and admins need different views of the same clinic data.", solution: "Scope records to a shared Clinic and define explicit permissions for each role at the route level." },
        { challenge: "Follow-ups and reminders need reliable delivery without manual polling.", solution: "Combine Firebase Cloud Messaging with reminder logs and a timezone-aware daily cron job." },
        { challenge: "Local report storage can be fragile when infrastructure scales.", solution: "Document the current Multer disk-storage approach and recommend moving uploads to S3 for durable production storage." },
      ],
    },
  },
{
  id: "pulseops",
  title: "PulseOps",
  category: "SaaS Apps",
  tags: ["REACT", "SOCKET.IO", "WEBSOCKET", "MONITORING"],
  year: "2026",
  client: "Freelance — Live product",
  status: "LIVE WEBSOCKET",
  description:
    "A real-time WebSocket monitoring dashboard for API reliability, service health, live telemetry, and operational alerts. The Add Project flow creates credentials so external apps can push metrics through serverless or edge functions.",
  coverImage: PulseOpsCover,
  images: [PulseOpsCover],
  liveUrl: "https://chatbot-dashboard-client-six.vercel.app/",
  caseStudy: {
    overview:
      "PulseOps is a real-time operational monitoring dashboard built with React and Socket.io that displays live metrics for APIs and services. External applications (deployed on serverless functions or edge networks) generate API latency, CPU load, memory usage, error rates, and transaction metrics, then push them to PulseOps over secure credentials. The dashboard streams these metrics in real-time using WebSocket connections, surfaces service health status (Healthy/Degraded/Incident), triggers alerts when thresholds are breached, and maintains a time-series operations history for trend analysis.",
    features: [
      {
        title: "Real-Time Metric Streaming",
        description:
          "WebSocket connections deliver live metric updates (latency, CPU, memory, error rate, active users, transactions per minute) to the dashboard every 2 seconds. No polling—data pushes as it arrives from monitored services."
      },
      {
        title: "Multi-Project Monitoring",
        description:
          "Add multiple services/projects to a single dashboard. Each project has its own credential set for secure metric ingestion. Overview shows aggregated health across all monitored services."
      },
      {
        title: "Service Health Status",
        description:
          "Each monitored service displays health state: Healthy (all thresholds met), Degraded (some metrics elevated), or Incident (critical failures). Uptime percentage shown per service."
      },
      {
        title: "Operational Alerts",
        description:
          "Alert thresholds can be configured per metric (e.g., error rate > 5%, latency > 500ms, CPU > 80%). When a threshold is breached, alerts are triggered and surfaced in the Service Health Alerts panel with status badge (INCIDENT, DEGRADED)."
      },
      {
        title: "Operations History",
        description:
          "Time-series graph displays historical metric trends (latency, CPU, memory, errors, TPM) over the monitoring window. Useful for identifying patterns and correlating issues across metrics."
      },
      {
        title: "Credential Generation",
        description:
          "Add Project flow generates unique API credentials (key + secret) that external applications use to authenticate metric submissions. Credentials are long-lived and can be revoked."
      },
      {
        title: "Command Center Controls",
        description:
          "Pause/resume metric ingestion, refresh dashboard view, clear historical events. These controls apply to the current monitoring session."
      },
      {
        title: "Socket Management",
        description:
          "Command Center shows that socket operations update every 2 seconds, keeping the connection fresh and responsive."
      }
    ],
    architecture: [
      {
        title: "React Dashboard Frontend",
        description:
          "A single-page React application with real-time data binding. Uses Socket.io client to establish WebSocket connection to the backend. React state tracks metric values, service health status, and alert history. Components render live metric cards, time-series charts, and service health cards."
      },
      {
        title: "Socket.io Server",
        description:
          "Node.js backend using Socket.io for bidirectional WebSocket communication. Maintains active connections from the React dashboard. Broadcasts incoming metric events to all connected clients in real-time. Handles credential-based authentication for external metric producers."
      },
      {
        title: "Metric Ingestion Layer",
        description:
          "REST API endpoint (separate from WebSocket) that external applications call to submit metrics. Validates API credentials, parses metric payload (latency, CPU, memory, error rate, etc.), and broadcasts to connected dashboard clients via Socket.io."
      },
      {
        title: "Alert Engine",
        description:
          "Rules-based system that evaluates incoming metrics against configured thresholds. Triggers alert when metric exceeds threshold. Alert payload (service name, metric name, value, threshold, severity) sent to dashboard via Socket.io."
      },
      {
        title: "Time-Series Data Storage",
        description:
          "Metrics stored in a lightweight time-series database or in-memory circular buffer for historical operations history. Retention typically 24-48 hours for dashboard trends. Aggregates metrics (average, max, min) per minute for efficient chart rendering."
      },
      {
        title: "Project & Credential Management",
        description:
          "Database stores project configurations (name, alert thresholds, service list) and credentials (API key, secret, status). Credentials tied to a specific project so metrics are isolated per project."
      }
    ],
    implementation: [
      {
        title: "WebSocket Connection Flow",
        description:
          "React dashboard connects to Socket.io server on mount. Backend maintains client connection pool. When external app submits a metric via REST API, backend validates credential, emits metric event to all connected clients on socket. React receives event, updates state, component re-renders with new metric value."
      },
      {
        title: "Credential-Based Ingestion",
        description:
          "External applications receive a project API key and secret when created. All metric POST requests include key + secret in Authorization header or query params. Backend validates against database before accepting metric. Failed credential checks return 401 Unauthorized."
      },
      {
        title: "Alert Threshold Configuration",
        description:
          "Per-project, per-metric thresholds stored in database (e.g., latency_threshold_ms: 500, error_rate_threshold_percent: 5). When metric arrives, alert engine checks: if value > threshold, create alert object and emit via Socket.io. Alert includes timestamp, service name, metric name, current value, threshold, and severity."
      },
      {
        title: "Time-Series Metrics Storage",
        description:
          "Incoming metrics buffered in memory with timestamp. Every minute, aggregate (average) and store in time-series database. Keep last 48 hours of data. Query this dataset to render operations history chart. Older data purged automatically."
      },
      {
        title: "Service Health Calculation",
        description:
          "Health status derived from alert state. If any active alert for service = Degraded or Incident. No active alerts = Healthy. Uptime percentage calculated as (total_seconds - incident_seconds) / total_seconds over last 24h."
      },
      {
        title: "Socket Reconnection",
        description:
          "React Socket.io client has automatic reconnect logic (exponential backoff). If connection drops, client automatically reconnects. Dashboard shows 'CONNECTED' badge when active, 'DISCONNECTED' when offline."
      }
    ],
    challenges: [
      {
        challenge:
          "WebSocket connections are stateful and expensive; too many idle connections drain server memory.",
        solution:
          "Implemented connection timeout: if client disconnects and doesn't reconnect within 30 minutes, server drops the connection. Clients auto-reconnect on load, so users who leave dashboard overnight don't hold stale connections."
      },
      {
        challenge:
          "Metric payloads arrive at variable rates; some projects send 1 metric/sec, others send 10+. Frontend can't handle rendering every single update at high frequencies.",
        solution:
          "Backend aggregates metrics client-side at 2-second push intervals (as shown in Command Center). Batches all metrics received in that window and emits once. Reduces WebSocket traffic and frontend re-renders."
      },
      {
        challenge:
          "External applications generating metrics might not have secure credential storage, risking key leaks.",
        solution:
          "Provided documentation to use environment variables or secrets managers for credential storage, not hardcoded in code. Keys can be revoked from the UI if compromise is suspected. Recommend rotating credentials periodically."
      },
      {
        challenge:
          "Alerts triggered too frequently (flapping) when metric hovers around threshold, causing alert fatigue.",
        solution:
          "Added hysteresis: alert triggers when metric > threshold + 10%, resolves when metric < threshold - 10%. Prevents spam alerts from jittery metrics."
      },
      {
        challenge:
          "Time-series database storage grows rapidly if every metric update is persisted.",
        solution:
          "Downsample metrics at ingestion: store only 1-minute averages, not raw data points. Reduces storage footprint by ~95% while maintaining trend visibility."
      },
      {
        challenge:
          "Dashboard can get cluttered with too many services/alerts, making it hard to scan.",
        solution:
          "Service Health Alerts panel shows only active (Degraded/Incident) alerts, not historical ones. Operations History chart allows users to toggle which metrics are visible (latency, CPU, memory, errors, TPM)."
      },
      {
        challenge:
          "Credential rotation is manual; no way to automatically refresh keys without downtime for external apps.",
        solution:
          "Credential management allows old + new keys to work simultaneously during transition window. External app updates key in config, restarts. No metrics lost during handoff."
      }
    ]
  }
},
  {
    id: "maxis-energy",
    title: "Maxis Energy",
    category: "Websites",
    tags: ["REACT", "EXPRESS", "MONGODB", "ADMIN PANEL", "SOLAR"],
    year: "2026",
    client: "Client project - Live website",
    status: "LIVE",
    description:
      "A trust-building solar company website and admin platform for showcasing installation projects, client testimonials, events, and certificates while giving non-technical staff full control over content.",
    coverImage: maxisCoverPage,
    images: [maxisCoverPage, maixs1, maixs2, maixs3, maixs4, maixs5, maixs6, maixs7],
    liveUrl: "https://www.maxisenergy.com.pk/",
    githubUrl: "https://github.com/bushaa-sss/maxis",
    testimonial: {
      quote:
        "Thank you for the overall effort. It is commendable work, and hopefully, Insha'Allah, I will recommend you to others whenever possible.",
      name: "Uzair Gillani",
      role: "CEO",
      company: "Maxis Energy",
    },
    caseStudy: {
      overview:
        "Maxis Energy combines a public solar marketing website with a JWT-authenticated content-management platform. The React frontend communicates with a Node.js and Express REST API backed by Mongoose and self-hosted MongoDB, giving the client a maintainable way to manage their public content without editing code.",
      features: [
        { title: "Solar marketing website", description: "A professional public presence presents solar installation projects, testimonials, events, certificates, and trust-building company content." },
        { title: "Solar savings calculator", description: "Visitors can estimate potential solar savings through an interactive calculator designed to support informed project enquiries." },
        { title: "Content-management admin panel", description: "Authenticated staff can create, edit, and delete projects, testimonials, events, and certificates through a custom admin interface." },
        { title: "Media upload handling", description: "Multer supports image and video uploads for the content managed through the admin platform." },
        { title: "Protected administration", description: "JWT authentication protects content-management access so only authorized administrators can update public website content." },
      ],
      architecture: [
        { title: "React + TanStack Router", description: "The frontend provides the public marketing experience and the authenticated admin workflows with client-side route handling." },
        { title: "Node.js / Express REST API", description: "The API exposes structured content-management operations and handles authentication, uploads, and persistence." },
        { title: "Mongoose / MongoDB", description: "Mongoose models connect the REST API to a self-hosted MongoDB database for projects, testimonials, events, and certificates." },
        { title: "Hostinger VPS deployment", description: "The production stack runs on a self-managed Hostinger VPS behind Nginx, with PM2 process management and Let's Encrypt SSL." },
      ],
      implementation: [
        { title: "Admin CRUD workflows", description: "The admin panel gives non-technical staff direct CRUD controls for the content types that power the public website." },
        { title: "Reverse proxy and process management", description: "Nginx handles reverse-proxy routing while PM2 keeps the Node.js services running and manageable in production." },
        { title: "Automated database backups", description: "Cron jobs create MongoDB dumps and package backup tarballs for copies stored away from the VPS." },
        { title: "SSL across subdomains", description: "Let's Encrypt certificates secure the deployed application and its multiple production subdomains." },
      ],
      challenges: [
        { challenge: "The client needed to manage website content without developer involvement.", solution: "Built a focused admin panel with protected CRUD workflows for projects, testimonials, events, and certificates." },
        { challenge: "A self-hosted VPS required secure, reliable production infrastructure.", solution: "Configured Ubuntu, Nginx, PM2, subdomains, and Let's Encrypt SSL for the deployed services." },
        { challenge: "A single server could make database loss difficult to recover from.", solution: "Added a backup pipeline using scheduled mongodump jobs, tarballs, and off-server copies pulled to the client's machine." },
      ],
    },
  },
{
  id: "smart-attendance",
  title: "Smart Attendance + Weapon Detection",
  category: "AI & Data",
  tags: ["PYTHON", "OPENCV", "YOLOV8", "FACENET", "DESKTOP"],
  year: "2026",
  client: "Desktop build — Windows EXE",
  status: "EXE BUILD",
  description:
    "A desktop AI application combining real-time face-recognition attendance tracking with YOLOv8 weapon detection. Runs fully offline from a Windows EXE, exports attendance records as CSV, and triggers live alerts when weapons are detected.",
  coverImage: SmartAttendanceCover,
  images: [SmartAttendanceCover],
  downloadUrl: new URL("../assets/SmartSurveillance_EXE/SmartSurveillance.exe", import.meta.url).href,
  caseStudy: {
    overview:
      "Smart Attendance is a standalone Python desktop application packaged as a Windows EXE for security and attendance monitoring in academic or institutional settings. It processes video input from a webcam in real-time, detects faces using YOLO + FaceNet for recognition, and simultaneously runs YOLOv8 weapon detection. Recognized attendees are logged with timestamp and confidence score. If a weapon is detected, an alert is triggered immediately. All processing happens locally on the user's machine—no data leaves the device. Attendance records can be exported to CSV for administrative record-keeping.",
    features: [
      {
        title: "Real-Time Face Recognition",
        description:
          "Uses YOLO for face detection and FaceNet for face embedding/identification. Recognized faces display name and confidence score (e.g., 'Rana Abdul Rahman, 63454 (0.95)'). Unknown faces are flagged but not logged as attendance."
      },
      {
        title: "YOLOv8 Weapon Detection",
        description:
          "Parallel detector identifies weapons in the video stream. Weapon detections increment the weapon counter and trigger immediate live alerts without interrupting attendance tracking."
      },
      {
        title: "Live Attendance Tracking",
        description:
          "Displays real-time count of recognized attendees (e.g., 'Present: 1/6'). Attendance panel shows each recognized person's name, timestamp of first detection, and confidence score."
      },
      {
        title: "Weapon Alerts",
        description:
          "Alert counter displays active weapon detections. Alerts are shown in the UI with status (e.g., 'waiting for alerts'). Each detection is logged with timestamp for incident review."
      },
      {
        title: "CSV Export",
        description:
          "Export attendance session data as CSV file. Includes names, timestamps, confidence scores, and weapon detection count for administrative records."
      },
      {
        title: "Session Controls",
        description:
          "Start/Stop attendance session, take snapshots of video frames, and clear session data. Stop button ends the current monitoring session."
      },
      {
        title: "Offline Operation",
        description:
          "Entire application runs locally without internet connection. No data is sent to external servers or cloud services. Suitable for secure, isolated environments."
      },
      {
        title: "Live Status Display",
        description:
          "FPS counter and processing status shown in real-time. Window title displays current mode and active detection count."
      }
    ],
    architecture: [
      {
        title: "Python + OpenCV Video Capture",
        description:
          "Reads frames from webcam using OpenCV. Video stream processed at ~30 FPS. Each frame passed to both face recognition and weapon detection pipelines in parallel."
      },
      {
        title: "YOLO Face Detection",
        description:
          "YOLOv8 model detects face bounding boxes in each frame. Outputs coordinates and confidence. Runs on CPU or GPU depending on available hardware."
      },
      {
        title: "FaceNet Face Embedding",
        description:
          "Cropped face images passed to FaceNet model for 128-dimensional embedding generation. Embeddings compared against stored reference embeddings of known attendees using Euclidean distance. Threshold (typically 0.5-0.6) determines if face matches a known person."
      },
      {
        title: "YOLOv8 Weapon Detection",
        description:
          "Second YOLOv8 model trained on weapon dataset runs in parallel on each frame. Outputs weapon class and confidence. Non-maximum suppression filters overlapping detections."
      },
      {
        title: "In-Memory Attendance Tracking",
        description:
          "Python dict stores recognized attendees: {name: {first_seen_time, confidence_score, detection_count}}. Updated on each recognition. Prevents duplicate attendance logs for same person across multiple frames."
      },
      {
        title: "Tkinter GUI",
        description:
          "Desktop interface displays live video feed, detected faces with bounding boxes and labels, attendance counter, weapon alerts counter, and control buttons (Start, Stop, Snapshot, Export CSV)."
      },
      {
        title: "PyInstaller Packaging",
        description:
          "Python application bundled into standalone Windows EXE using PyInstaller. Includes Python runtime, all dependencies (OpenCV, FaceNet, YOLOv8), and pre-trained model weights."
      }
    ],
    implementation: [
      {
        title: "Face Recognition Pipeline",
        description:
          "For each frame: (1) Detect faces with YOLOv8. (2) Crop detected faces. (3) Generate FaceNet embedding. (4) Compare embedding against stored reference embeddings using Euclidean distance. (5) If distance < threshold, log attendance with name and timestamp. (6) Display bounding box with name and confidence on video."
      },
      {
        title: "Weapon Detection Pipeline",
        description:
          "For each frame: (1) Run YOLOv8 weapon detection model. (2) Filter detections by confidence threshold (e.g., > 0.5). (3) Apply NMS to remove overlapping boxes. (4) If weapons detected, increment counter and display bounding box with 'Weapon' label in red. (5) Log detection timestamp."
      },
      {
        title: "Reference Face Storage",
        description:
          "Known attendees' faces stored in a folder structure (e.g., faces/name1/image1.jpg, faces/name2/image2.jpg). On startup, generate FaceNet embeddings for all reference images and cache in memory for fast comparison during recognition."
      },
      {
        title: "Attendance Record Management",
        description:
          "During session, keep in-memory dict of {person_name: {first_seen_timestamp, latest_confidence_score}}. On export, iterate dict and write to CSV: Name, First Seen (HH:MM:SS), Confidence Score, Weapons Detected Count."
      },
      {
        title: "GUI Threading",
        description:
          "Video capture and frame processing run on a separate thread to prevent UI freezing. GUI thread handles button clicks and display updates. Thread-safe queue passes processed frames from capture thread to GUI thread."
      },
      {
        title: "Model Loading",
        description:
          "On startup, load YOLOv8 face model, YOLOv8 weapon model, and FaceNet embedder. This takes 3-5 seconds on first run. Models cached in memory for entire session."
      }
    ],
    challenges: [
      {
        challenge:
          "Face recognition accuracy drops in poor lighting, side angles, or when person wears glasses/mask.",
        solution:
          "Displayed confidence score so users can judge reliability. Require confidence > 0.8 for automatic log; lower scores flagged for manual review. Recommend good lighting during sessions."
      },
      {
        challenge:
          "YOLOv8 weapon detection model may have false positives (e.g., detecting objects that resemble weapons).",
        solution:
          "Alerts are triggers for manual verification, not automatic lockdown. Administrator reviews alerts in the UI before taking action. Log all detections with timestamp for audit trail."
      },
      {
        challenge:
          "Same person appearing in multiple frames causes duplicate attendance logs.",
        solution:
          "Track recognized faces per session with {person_name: first_seen_time}. Only log first detection of each person per session. Subsequent detections of same person update confidence but don't duplicate the log."
      },
      {
        challenge:
          "Packaged EXE is large (~300-400 MB) due to Python runtime and model weights.",
        solution:
          "Acceptable trade-off for offline operation and easy deployment (single .exe file, no Python installation required). Users download once, run many times."
      },
      {
        challenge:
          "GPU not always available; running inference on CPU is slower (5-10 FPS vs 30+ on GPU).",
        solution:
          "Application auto-detects GPU (CUDA/cuDNN) and falls back to CPU. Acceptable performance on modern CPUs. For institutions with GPU hardware, performance improves automatically."
      },
      {
        challenge:
          "No persistence between sessions; attendance data lost if application crashes.",
        solution:
          "Periodic auto-save of attendance records to disk every 30 seconds during active session. If crash occurs, data from last save checkpoint is recovered."
      }
    ]
  }
},
  // {
  //   id: "dataforge",
  //   title: "DataForge",
  //   category: "AI & Data",
  //   tags: ["REACT", "NETLIFY", "DATA EXTRACTION", "AUTOMATION"],
  //   year: "2026",
  //   client: "Freelance — Live product",
  //   status: "LIVE",
  //   description:
  //     "A data extraction dashboard for scraping workflows, source monitoring, export actions, and structured dataset management.",
  //   coverImage: `${BASE}/assets/ChatGPT%20Image%20May%2016_%202026_%2004_43_30%20AM%20(8)-DeQPUfvQ.png`,
  //   images: [`${BASE}/assets/ChatGPT%20Image%20May%2016_%202026_%2004_43_30%20AM%20(8)-DeQPUfvQ.png`],
  //   liveUrl: "https://data-forge-scrap.netlify.app/",
  // },
  {
  id: "magic-sms",
  title: "Magic SMS",
  category: "SaaS Apps",
  tags: ["REACT", "SMS GATEWAY", "MESSAGING", "ANALYTICS"],
  year: "2026",
  client: "Freelance — Live product",
  status: "LIVE",
  description:
    "A bulk messaging platform that connects to an Android SMS gateway, imports contacts from CSV or Excel, and sends templated messages at scale with configurable delays. Includes gateway setup and connection testing, message templates, delivery reports, and daily, weekly, and monthly analytics with export.",
  coverImage: magicSmsCover,
  images: [magicSmsCover],
  liveUrl: "https://magic-sms.netlify.app/",
  githubUrl: "https://github.com/bushaa-sss/MagicSms/tree/main/magic-bulk-sms-main",
  caseStudy: {
    overview:
      "Magic SMS is a React-based bulk messaging application designed for users who need to send SMS campaigns at scale. The platform connects to an Android SMS gateway (a physical or virtual Android device running a companion app), allowing outbound SMS delivery without traditional telecom APIs. Users import contact lists from CSV/Excel files, compose messages from predefined templates, configure sending delays between messages, and monitor delivery via a real-time analytics dashboard. The application tracks sent vs. delivered counts and generates exportable reports for campaign analysis.",
    features: [
      {
        title: "Android SMS Gateway Integration",
        description:
          "Connects to an Android device running a companion SMS gateway app. Gateway receives send commands from Magic SMS and uses the device's SIM card to transmit SMS. Connection established via Cloud Server configuration (IP/hostname, port, credentials)."
      },
      {
        title: "Gateway Setup & Testing",
        description:
          "Configuration screen for gateway connection: server address, username, password, and device ID. Test Connection button validates connectivity before sending messages. Displays success/failure status."
      },
      {
        title: "Contact Import",
        description:
          "Import contact lists from CSV or Excel files. Expected format: phone numbers (and optional fields like name). Imported contacts stored and managed in the Contacts section."
      },
      {
        title: "Message Templates",
        description:
          "Predefined message templates available in the Compose & Send section. Users select a template, which populates the message body. Templates support plain text messages."
      },
      {
        title: "Compose & Send",
        description:
          "Select template, choose message type (SMS or MMS), and configure delay between messages (in seconds). Delay prevents throttling and avoids overwhelming the gateway or recipient carriers."
      },
      {
        title: "Message Type Selection",
        description:
          "Users can send SMS or MMS messages. Dropdown selector to choose message type before sending."
      },
      {
        title: "Scheduled Sending",
        description:
          "Configure delay (in seconds) between each message. For example, 3-second delay between messages sends 20 messages per minute instead of bulk all-at-once."
      },
      {
        title: "Real-Time Analytics",
        description:
          "Dashboard displays key metrics: Messages (total queued), Sent (successfully transmitted), and Delivered (confirmed by carrier). Analytics updated as messages are processed."
      },
      {
        title: "Delivery Reports",
        description:
          "Track delivery status for each message. Reports show which messages were sent, which were delivered, and which failed."
      },
      {
        title: "Analytics Export",
        description:
          "Export analytics data and delivery reports to file format for external analysis or record-keeping."
      },
      {
        title: "Dashboard & Navigation",
        description:
          "Left sidebar navigation: Dashboard (overview), Messages (send history), Contacts (imported lists), Templates (message templates), Reports (delivery reports), Settings (gateway config)."
      }
    ],
    architecture: [
      {
        title: "React Frontend",
        description:
          "Single-page application with sections for gateway setup, contact import, message composition, and analytics dashboard. State management tracks gateway connection status, imported contacts, selected template, and message metrics."
      },
      {
        title: "Gateway Connection Module",
        description:
          "HTTP/TCP client that connects to Android SMS gateway using configured server address, port, username, and password. Sends message payloads to gateway for delivery."
      },
      {
        title: "Contact Management",
        description:
          "Store imported contacts in local state or browser storage. Display contacts in table, allow search/filter. Track contact count and import history."
      },
      {
        title: "Message Queue",
        description:
          "Messages added to queue when user clicks 'Send Messages'. Queue processes messages sequentially with configurable delay between each message to avoid gateway overload."
      },
      {
        title: "Template Storage",
        description:
          "Predefined templates stored in application state or backend database. Users select template during message composition."
      },
      {
        title: "Analytics Tracking",
        description:
          "Track message state: queued (in queue), sent (transmitted to gateway), delivered (confirmed by carrier). Counters updated as messages progress through states."
      },
      {
        title: "Report Generation",
        description:
          "Generate analytics reports as CSV or JSON export. Include message count, sent count, delivery count, timestamp, and delivery status per message."
      }
    ],
    implementation: [
      {
        title: "Gateway Connection Flow",
        description:
          "User enters server address, port, username, password in Gateway Setup. Clicks 'Test Connection'. Frontend makes HTTP request to backend with credentials. Backend attempts to reach gateway server. Returns success/failure status to UI."
      },
      {
        title: "Contact Import Process",
        description:
          "User selects CSV or Excel file. File uploaded to browser, parsed (phone numbers extracted). Contacts stored in React state or sent to backend for persistence. Display import summary (X contacts imported)."
      },
      {
        title: "Message Sending Pipeline",
        description:
          "User selects template, chooses message type (SMS/MMS), sets delay (e.g., 3 seconds). Clicks 'Send Messages'. Frontend creates message batch from imported contacts. For each contact: (1) Create message object {phone, template_text, type}. (2) Add to queue. (3) Process queue with delay: send message to gateway, wait delay seconds, process next message. (4) Track sent/delivered status."
      },
      {
        title: "Delay Implementation",
        description:
          "After each message is sent to gateway, application waits X seconds before sending the next message. Prevents carrier throttling and distributes load on gateway device."
      },
      {
        title: "Gateway Communication",
        description:
          "Each message sent to gateway as JSON payload: {phone_number, message_text, type}. Gateway receives payload, extracts details, uses Android SMS API to send. Response indicates success/queued."
      },
      {
        title: "Analytics Update",
        description:
          "Frontend maintains counters for Total Messages, Sent, Delivered. As gateway returns responses, counters increment. Displayed in real-time in Analytics dashboard."
      },
      {
        title: "Report Export",
        description:
          "User clicks 'Export Report'. Frontend collects message history and delivery status. Generates CSV: [Phone Number, Message Text, Type, Status (Sent/Delivered/Failed), Timestamp]. Downloaded to user's computer."
      }
    ],
    challenges: [
      {
        challenge:
          "Android SMS gateway device is a single point of failure. If device goes offline, no messages can be sent.",
        solution:
          "Test Connection button allows users to verify gateway status before sending. Recommended practice: keep gateway device plugged in and on stable network. For mission-critical needs, customers should deploy multiple gateway devices and configure failover in settings."
      },
      {
        challenge:
          "SMS carriers rate-limit or block bulk senders. Sending all contacts at once gets flagged as spam.",
        solution:
          "Configurable delay between messages (e.g., 3 seconds per message) distributes sending over time. Recommended: 2-5 second delay to stay below carrier throttling thresholds. Users can adjust based on testing with their carrier."
      },
      {
        challenge:
          "Message delivery status is hard to track. Gateway device reports 'sent' but carrier may delay or fail delivery.",
        solution:
          "Displayed two metrics: Sent (accepted by gateway) and Delivered (carrier confirmation). This is realistic—'sent' doesn't guarantee delivery. Users reviewing reports should understand this distinction."
      },
      {
        challenge:
          "Imported contact lists may have invalid phone numbers (wrong format, wrong length, non-numeric).",
        solution:
          "Add import validation: check phone number length and format during import. Flag invalid numbers and show warning before sending. Allow user to filter out invalid numbers before sending campaign."
      },
      {
        challenge:
          "No persistence between sessions; if user closes browser, message queue and contact list may be lost.",
        solution:
          "Store imported contacts and template selections in browser localStorage or IndexedDB. On page reload, restore contact list and templates. Queue state is transient (OK to lose)."
      },
      {
        challenge:
          "Gateway credentials stored on frontend are exposed in browser memory or local storage.",
        solution:
          "Store gateway credentials in browser's encrypted storage or sessionStorage (cleared on logout). Recommend users never reuse gateway passwords. Credentials are only for local gateway connection, not cloud services, so risk is contained."
      },
      {
        challenge:
          "Large contact lists (10,000+ contacts) cause slow import and memory issues.",
        solution:
          "For current MVP: acceptable limit is 1,000-5,000 contacts. Larger lists recommended for backend processing in future. For now, document the limit and advise users to split large campaigns into batches."
      }
    ]
  }
},
 {
  id: "magic-mail",
  title: "Magic Mail",
  category: "SaaS Apps",
  tags: ["REACT", "EMAIL OUTREACH", "DASHBOARD", "AUTOMATION"],
  year: "2026",
  client: "Freelance — Live product",
  status: "LIVE",
  description:
    "An email outreach dashboard for importing leads, composing personalized email campaigns from templates, and tracking open rates, reply rates, and bounce metrics.",
  coverImage: MAgicMAilCOverpage,
  images: [MAgicMAilCOverpage],
  liveUrl: "https://magic-mail.netlify.app/",
   testimonial: {
      quote:
        "The tool has been working seamlessly. Being able to send bulk, targeted emails directly from our data sheets has greatly streamlined our outreach process and saved our team significant time. The project was delivered on schedule, the software performance and UI/UX are top-notch, and the post-delivery support has been exceptional. Any adjustments or questions were addressed promptly and professionally. We look forward to collaborating with you on future projects.",
      name: "Bilal Hashim",
      role: "CEO",
      company: "Crafttechco",
    },
  caseStudy: {
    overview:
      "Magic Mail is a React-based email outreach platform designed for sales teams and outreach specialists who need to send personalized email campaigns at scale. The application streamlines the workflow: import lead lists from files or Google Sheets, select or create email templates, customize subject lines and body text with dynamic placeholders (Name, Email, Title), send emails to recipients, and track campaign performance through an analytics dashboard. The platform provides visibility into sent counts, open rates, reply rates, and bounce rates—essential metrics for measuring outreach effectiveness.",
    features: [
      {
        title: "Lead Import",
        description:
          "Import lead lists from CSV/Excel files or connect to Google Sheets for live data. Leads should include name, email, and title fields. Imported leads stored in the Leads section for campaign targeting."
      },
      {
        title: "Lead Management",
        description:
          "Leads section displays all imported contacts. Users can view, filter, and organize lead lists before selecting them for campaigns."
      },
      {
        title: "Email Templates",
        description:
          "Predefined templates for common outreach scenarios (General Outreach, etc.). Users select a template when composing campaigns to jumpstart message creation."
      },
      {
        title: "Dynamic Placeholder System",
        description:
          "Email body supports dynamic placeholders: {Name}, {Email}, {Title}. When emails are sent, placeholders are replaced with actual values from the lead record. Example: 'Hi {Name}' becomes 'Hi John'."
      },
      {
        title: "Subject Line Customization",
        description:
          "Users enter a custom subject line for the campaign. Subject line can include placeholders (e.g., 'Opportunity for {Name}')."
      },
      {
        title: "Email Body Composition",
        description:
          "Edit email body text directly in the UI. Supports plain text and dynamic placeholders for personalization. Preview shows how placeholders will be replaced."
      },
      {
        title: "Send Campaign",
        description:
          "Click 'Send to Recipients' to initiate email campaign to selected lead list. Emails sent with personalized placeholders replaced per lead."
      },
      {
        title: "Campaign Management",
        description:
          "Campaigns section stores sent campaigns with details: recipient count, template used, send date, performance metrics."
      },
      {
        title: "Email Analytics",
        description:
          "Dashboard displays key metrics: Sent (total emails sent), Opened (recipients who opened email), Replied (recipients who responded), Bounced (failed deliveries). Shows count and percentage for each metric."
      },
      {
        title: "Analytics Dashboard",
        description:
          "Central dashboard displays campaign performance at a glance. Metrics shown: 1200 Sent, 840 Opened (70%), 210 Replied (25%), 45 Bounced (5%)."
      },
      {
        title: "Settings & Configuration",
        description:
          "Settings section for user preferences and account configuration (details TBD based on future requirements)."
      }
    ],
    architecture: [
      {
        title: "React Frontend",
        description:
          "Single-page application with sections for Dashboard, Leads, Campaigns, Templates, Analytics, and Settings. State management tracks imported leads, selected templates, campaign draft, and analytics data."
      },
      {
        title: "Lead Storage",
        description:
          "Imported leads stored in React state or browser storage (localStorage/IndexedDB). Each lead record contains: name, email, title, import timestamp."
      },
      {
        title: "Template Management",
        description:
          "Templates stored in application state. Each template includes: name, subject line template, body text template with placeholders. Users select template during campaign composition."
      },
      {
        title: "Email Composition",
        description:
          "Compose view collects: template selection, subject line, body text. Supports dynamic placeholders {Name}, {Email}, {Title}. Preview shows personalized output for first lead."
      },
      {
        title: "Email Sending",
        description:
          "Send action passes lead list and personalized emails to backend. Backend sends emails via SMTP or email service (Nodemailer, SendGrid, etc.). Tracks sent status and timestamps."
      },
      {
        title: "Analytics Tracking",
        description:
          "Campaign tracks: emails sent count, opened count (via pixel tracking or open webhook), replied count (manual or automated from email replies), bounced count (from SMTP bounce reports)."
      },
      {
        title: "Campaign History",
        description:
          "Stores past campaigns with metadata: recipients count, template used, send date/time, current performance metrics. Accessible in Campaigns section."
      }
    ],
    implementation: [
      {
        title: "Lead Import Flow",
        description:
          "User navigates to Leads section. Selects 'Upload File' (CSV/Excel) or 'Google Sheets'. If file upload: parse CSV, extract name/email/title columns, store in state. If Google Sheets: authenticate with Google, fetch sheet data, parse columns. Display imported count and preview table."
      },
      {
        title: "Template Selection",
        description:
          "User goes to Compose & Send. Dropdown menu shows available templates (General Outreach, etc.). Selecting template populates subject line template and body template in editor."
      },
      {
        title: "Placeholder Replacement",
        description:
          "When user types {Name}, {Email}, or {Title} in subject or body, they are stored as-is. When 'Send to Recipients' is clicked, for each lead, replace {Name} with lead.name, {Email} with lead.email, {Title} with lead.title."
      },
      {
        title: "Email Send Process",
        description:
          "User clicks 'Send to Recipients'. Frontend collects: selected leads, subject line (with placeholders), body (with placeholders). Sends to backend POST /api/campaigns/send with payload: {leads: [{name, email, title}, ...], subject_template, body_template}. Backend loops through leads, personalizes, sends via SMTP."
      },
      {
        title: "Open Tracking",
        description:
          "Email body includes tracking pixel (1x1 invisible image from server). When recipient opens email, pixel loads, server records open event with campaign ID and recipient email. Analytics incremented."
      },
      {
        title: "Reply Tracking",
        description:
          "Replies sent to a campaign email address. Backend receives reply, parses sender address, maps to campaign, increments replied count. (Or manual marking in UI if automated tracking unavailable)."
      },
      {
        title: "Bounce Handling",
        description:
          "SMTP server reports bounce (hard bounce = invalid email, soft bounce = temporary issue). Bounce notifications received by backend, campaign bounce count incremented."
      },
      {
        title: "Analytics Calculation",
        description:
          "Metrics displayed: Sent (total recipients), Opened (unique opens), Replied (unique replies), Bounced (failed sends). Percentages calculated: (Opened / Sent) * 100, etc."
      }
    ],
    challenges: [
      {
        challenge:
          "Import from Google Sheets requires OAuth authentication, which adds complexity for users.",
        solution:
          "Provide clear OAuth flow with 'Connect Google' button. Users grant permission once, then can import sheets. Store refresh token securely to avoid re-authentication each time."
      },
      {
        challenge:
          "CSV file format varies (column order, encoding, extra spaces). Parsing can fail or map fields incorrectly.",
        solution:
          "Add column mapping UI after file upload. Show first few rows, let user drag-and-drop columns to 'Name', 'Email', 'Title' fields. Validate at least 'Email' column is mapped."
      },
      {
        challenge:
          "Placeholder replacement fails if lead data is missing (e.g., lead has no Title). Results in 'Hi {Title}' in email.",
        solution:
          "Validate lead records before sending: all must have name and email. Title field optional; if missing, replace {Title} with empty string or default (e.g., 'Colleague'). Show validation errors before send."
      },
      {
        challenge:
          "Email open tracking relies on pixel load. Some email clients block images by default, resulting in undercount.",
        solution:
          "Document that open rates are estimates, not 100% accurate. Explain that clients with images disabled won't be tracked. Combine with reply tracking for better engagement measurement."
      },
      {
        challenge:
          "No way to distinguish between user-caused bounces (invalid email) and temporary issues (server down). Both counted as bounces.",
        solution:
          "Track bounce type (hard vs. soft) in backend. Display in analytics or separate counts if needed. Allow user to review bounced emails and retry soft bounces."
      },
      {
        challenge:
          "Sending large campaigns (10,000+ emails) can take hours and overwhelm SMTP server.",
        solution:
          "For MVP: document safe sending limit (~1,000 emails per campaign). For larger lists, implement backend queue with batch processing (send 100 emails at a time, wait between batches). Show send progress in UI."
      },
      {
        challenge:
          "No persistence between sessions. Imported leads, templates, and draft campaigns lost on browser refresh.",
        solution:
          "Store leads, templates, and draft campaigns in browser localStorage. On page load, restore from storage. For production, move to backend database."
      },
      {
        challenge:
          "Sending unsolicited emails violates anti-spam laws (CAN-SPAM, GDPR). Users might abuse the platform.",
        solution:
          "Add disclaimer in UI: users responsible for compliance. Recommend: only send to opted-in recipients, include unsubscribe link in emails (if applicable), include sender contact info. Document best practices."
      }
    ]
  }
},

  {
  id: "menuvision-ar",
  title: "MenuVision AR",
  category: "Websites",
  tags: ["REACT", "NETLIFY", "AUGMENTED REALITY", "3D", "RESTAURANT", "PHOTOGRAMMETRY"],
  year: "2026",
  client: "Freelance — Live product",
  status: "LIVE",
  description:
    "An augmented reality restaurant menu experience where guests tap a dish card to view an exact 3D replica of their meal on their table in AR. 3D models created via photogrammetry from actual dishes, ensuring visual accuracy. Built with an elegant editorial landing page emphasizing premium feel, visual confidence, and higher-value ordering.",
  coverImage: menuVisionArCover,
  images: [menuVisionArCover, menuVisionArScreenshot],
  liveUrl: "https://ar-foodmenu.netlify.app/",
   githubUrl: "https://github.com/bushaa-sss/AR-Menu",  
  caseStudy: {
    overview:
      "MenuVision AR is a React web application that brings restaurant menus to life through photogrammetry-based 3D models. Each signature dish is photographed from multiple angles under controlled lighting. These photos are processed using photogrammetry software to create a 3D mesh that matches the actual dish with high accuracy. Guests browse the menu on tablet or phone, tap 'View on Your Table', and see an AR preview of the exact dish they're ordering positioned on their dining table. The near-identical visual match removes ordering hesitation—guests know precisely what they're getting. The application includes an elegant landing page targeting restaurants with three key propositions: premium presentation, visual confidence in ordering, and increased order value from premium dish selection.",
    features: [
      {
        title: "Landing Page Marketing",
        description:
          "Editorial hero section titled 'Transform Your Restaurant Menu with Augmented Reality'. Value propositions: Premium feel (modern dining impression from actual 3D dish), Better choices (see exact dish before ordering, reduce indecision), Higher value (guests confidently order premium and signature dishes). 'View Demo' and 'Get AR Menu' CTAs."
      },
      {
        title: "Dish Menu Cards",
        description:
          "Grid display of signature dishes. Each card shows: high-quality photograph of actual dish, dish name, price, description highlighting key ingredients/style. Example dishes: Burger ($12.99), Pizza ($18.49), Biryani ($19.75), Cake ($8.25)."
      },
      {
        title: "Photogrammetry 3D Models",
        description:
          "Each dish card links to an exact 3D model created from 50-100 photographs of the actual dish. Model captured under consistent professional lighting from all angles (top, sides, bottom). The 3D mesh is nearly identical to the real dish in appearance."
      },
      {
        title: "AR Preview on Table",
        description:
          "Tapping 'View on Your Table' launches AR mode on mobile devices. 3D model positioned on user's actual dining table via camera. Model rendered with realistic lighting and shadows matching the restaurant's ambiance. Users can rotate 360° to inspect all sides and pinch to scale to see actual portion size on their table."
      },
      {
        title: "Exact Visual Match",
        description:
          "3D model appearance matches the photographed dish with high accuracy. Minor variations occur only due to natural differences (slight lighting changes, plating angle) but the guest sees essentially what they will receive—same dish composition, size, color, and plating style."
      },
      {
        title: "Device Compatibility",
        description:
          "Supports AR on iOS (ARKit) and Android (ARCore) devices. Gracefully falls back to 3D viewer on unsupported devices."
      },
      {
        title: "Demo Booking",
        description:
          "Header 'BOOK DEMO' button allows restaurant owners to schedule a demonstration. Links to booking/contact flow to discuss photogrammetry setup."
      },
      {
        title: "Responsive Design",
        description:
          "Landing page and menu cards responsive across desktop (restaurant marketing), tablet (guest browsing menu), and mobile (AR launch)."
      }
    ],
    architecture: [
      {
        title: "React Frontend",
        description:
          "Single-page application with: (1) Landing page with hero, value propositions, and demo CTA. (2) Dish menu showcase with cards. (3) AR viewer that loads 3D models on demand."
      },
      {
        title: "Photogrammetry 3D Models",
        description:
          "Each dish captured with 50-100 photos (professional camera, multiple angles, consistent lighting). Photos processed with photogrammetry software (e.g., Reality Composer, Meshroom, Polycam) to generate 3D mesh. Output: GLTF/GLB file with textures. File size typically 8-15 MB per model (after draco compression, ~2-3 MB)."
      },
      {
        title: "Model Storage & Delivery",
        description:
          "3D models stored in CDN (e.g., Cloudinary, AWS S3). Draco compression applied to reduce file size. Models streamed to mobile devices on demand. First load: ~2-3 seconds (model download + AR init). Subsequent loads: ~1 second (local cache)."
      },
      {
        title: "AR Framework",
        description:
          "Uses Three.js + WebAR libraries, or native iOS/Android AR wrappers. ARKit (iOS) and ARCore (Android) handle plane detection (user's table surface). 3D model loaded from GLB file and rendered in real-world coordinates."
      },
      {
        title: "Dish Data Structure",
        description:
          "Each dish stored as: {id, name, price, description, photo_url, model_3d_url, photogrammetry_date}. Data source: static JSON or headless CMS (e.g., Contentful, Strapi)."
      },
      {
        title: "Lighting & Realism",
        description:
          "3D models include normal maps and metallic/roughness textures captured during photogrammetry. AR renderer applies dynamic lighting based on device camera light estimation. Model lit naturally in user's actual environment."
      },
      {
        title: "Booking Integration",
        description:
          "Demo booking form captures restaurant info. Submission triggers email to business team. Future: automate photogrammetry intake workflow (send camera requirements, schedule shoot, deliver models)."
      }
    ],
    implementation: [
      {
        title: "Photogrammetry Workflow",
        description:
          "(1) Restaurant provides 2-3 signature dishes. (2) Professional photogrammetry shoot: capture 50-100 high-res photos per dish under controlled studio lighting (360° coverage, top/sides/bottom angles). (3) Process images with photogrammetry software (Reality Composer, Polycam, or Meshroom). (4) Refine mesh, clean up artifacts. (5) Bake textures from photos onto 3D mesh. (6) Export as GLTF/GLB with draco compression. (7) Upload to CDN."
      },
      {
        title: "Menu Display",
        description:
          "Menu page fetches dish data from JSON/CMS. For each dish, render card component: large photo of actual dish, name, price, 2-3 line description (key ingredients, style), 'View on Your Table' button."
      },
      {
        title: "AR Activation Flow",
        description:
          "User taps 'View on Your Table': (1) Detect device capability (ARKit/ARCore available). (2) Fetch 3D model from CDN. (3) Show loading spinner while downloading. (4) Initialize AR session. (5) Wait for plane detection (user's table surface). (6) Display message 'Tap to place on your table'. (7) User taps → model positioned on detected plane. (8) Model rendered with live lighting from device camera."
      },
      {
        title: "3D Model Rendering",
        description:
          "Model loaded via Three.js GLTFLoader or native ARCore/ARKit loaders. Mesh + textures rendered in AR space. Dynamic lighting applied: device light estimation adjusts model brightness/shadow to match surrounding light. Gesture controls: single-finger drag rotates, two-finger pinch scales, swipe exits AR."
      },
      {
        title: "Caching Strategy",
        description:
          "First AR view: model downloaded from CDN (~2-3 MB), cached locally in app storage or service worker cache. Subsequent views: load from cache (~0.5 seconds). Cache TTL: 30 days (user can clear manually)."
      },
      {
        title: "Visual Accuracy",
        description:
          "Photogrammetry captures true geometry and color of dish. Textures baked from actual photos ensure surface details match real dish. Only minor variations occur: (1) Plating angle (rotatable in AR, so user sees all sides anyway). (2) Lighting conditions (restaurant lighting varies, but AR adapts via light estimation). (3) Natural food variation (slight color shifts in real service, but base appearance identical)."
      },
      {
        title: "Mobile Optimization",
        description:
          "Models tested on target device range (iPhone 12+, Android 8+). Draco compression reduces GLB size by 75%. Target load time: <3 seconds on 4G LTE. Graceful fallback: on slow network, show lower-poly preview while full model downloads."
      }
    ],
    challenges: [
      {
        challenge:
          "Photogrammetry shoot requires professional setup (camera, lighting rig, turntable, software). Initial cost per restaurant: $500-2000.",
        solution:
          "Offer as a service: (1) Include photogrammetry shoot cost in initial setup fee ($1500-3000 per restaurant for 5-6 dishes). (2) Document DIY workflow for tech-savvy restaurants (camera phone requirements, lighting tips, free software like Meshroom). (3) Partner with photogrammetry service for scale (negotiate bulk rates)."
      },
      {
        challenge:
          "Food changes daily. Plating varies slightly per service. Photogrammetry model becomes dated quickly.",
        solution:
          "Photogrammetry captures the 'canonical' version of the dish—the way it's plated when done correctly. Minor daily plating variations are acceptable (model shows ideal presentation). Recommend re-shoot annually or when recipe changes significantly. Store photogrammetry_date in metadata."
      },
      {
        challenge:
          "3D model looks perfect in AR but real dish disappoints due to chef's plating on the day, lighting differences, portion size in person.",
        solution:
          "Set expectations: disclaimer in app states 'Model represents our signature presentation. Actual dish may vary slightly due to chef's interpretation and portion on the day.' Emphasize: the model shows what the dish *is*, not a guarantee of identical appearance every service. Most guests accept minor variations."
      },
      {
        challenge:
          "AR model rendering on older devices is slow or crashes due to heavy mesh/textures.",
        solution:
          "Optimize 3D models: (1) Target poly count: 50,000-100,000 (high detail but mobile-friendly). (2) Draco compression mandatory. (3) Texture atlasing: combine all textures into single 2K map. (4) Test on iPhone 11, Samsung Galaxy A10 (low-end devices). (5) Show device compatibility warning if specs too low."
      },
      {
        challenge:
          "First-time AR users don't understand how to use the feature. Low adoption if confusing.",
        solution:
          "On-app onboarding: short animated tutorial showing workflow (tap View → AR opens → tap table → model appears → rotate/scale). Video demo on landing page. Help text in AR view: 'Drag to rotate, pinch to scale, swipe to go back'. In-restaurant signage: 'Try AR—tap View on Your Table'."
      },
      {
        challenge:
          "Photogrammetry model quality depends on lighting during shoot. Overexposed or underexposed shots result in poor textures.",
        solution:
          "Use professional studio setup with calibrated lighting (3-point lighting: key light, fill light, backlight). Shoot under daylight-equivalent color temperature (5500K). Post-process: color correct images before photogrammetry processing. Have mesh artist review and manually clean artifacts if needed."
      },
      {
        challenge:
          "Some restaurants want to update dish appearance (new plating, ingredient swap). Requires re-shoot, costs money.",
        solution:
          "Communicate upfront: photogrammetry model is a snapshot of the dish at time of shoot. Minor tweaks (ingredient swap, slightly different plate) acceptable. Major plating redesigns → offer re-shoot package. Build into service contracts: 1 free annual update per dish."
      },
      {
        challenge:
          "Food items like soups, sauces, drinks don't photogrammetry well (featureless liquid surfaces).",
        solution:
          "Recommend: capture these in a serving vessel or with garnish that adds visual detail (e.g., soup with croutons/herbs, drink with ice/lime). Avoid featureless liquids. For pure liquid dishes, consider hybrid approach: actual high-res photo + simple glass model with liquid shader in AR."
      },
      {
        challenge:
          "Model file sizes add up quickly. 6 dishes × 3-5 MB = 15-25 MB total. Mobile data usage, storage pressure.",
        solution:
          "Draco compression reduces to 2-3 MB per model. Total ~12-18 MB. Lazy load: only fetch model when user taps AR button, don't pre-download. Cache locally to avoid re-downloading. Recommend restaurants start with 3-4 signature dishes, expand over time."
      }
    ]
  }
},
  // {
  //   id: "hashmi-cattle",
  //   title: "Hashmi Cattle",
  //   category: "Websites",
  //   tags: ["REACT", "NETLIFY", "RESPONSIVE", "BRAND"],
  //   year: "2026",
  //   client: "Freelance — Live product",
  //   status: "LIVE",
  //   description:
  //     "A premium livestock and Qurbani platform with polished landing sections, breed highlights, responsive product discovery, and a live Netlify deployment.",
  //   coverImage: `${BASE}/assets/ChatGPT%20Image%20May%2016_%202026_%2004_43_27%20AM%20(1)-BoW9JvXQ.png`,
  //   images: [`${BASE}/assets/ChatGPT%20Image%20May%2016_%202026_%2004_43_27%20AM%20(1)-BoW9JvXQ.png`],
  //   liveUrl: "https://hashmi-cattle.netlify.app/",
  // },
  // {
  //   id: "iqra-fyp",
  //   title: "Iqra FYP Showcase",
  //   category: "Websites",
  //   tags: ["REACT", "NETLIFY", "EDUCATION", "SHOWCASE"],
  //   year: "2026",
  //   client: "Freelance — Live product",
  //   status: "LIVE",
  //   description:
  //     "A final-year-project display portal for Iqra University with project cards, academic showcase content, and a live Netlify build.",
  //   coverImage: `${BASE}/assets/ChatGPT%20Image%20May%2016_%202026_%2004_43_30%20AM%20(9)-H_CAPFOn.png`,
  //   images: [`${BASE}/assets/ChatGPT%20Image%20May%2016_%202026_%2004_43_30%20AM%20(9)-H_CAPFOn.png`],
  //   liveUrl: "https://iqra-fyp-showcase.netlify.app/",
  // },
  {
    id: "craftech-demo",
    title: "CrafTech Demo",
    category: "Websites",
    tags: ["REACT", "NETLIFY", "AGENCY", "RESPONSIVE"],
    year: "2026",
    client: "Freelance — Live product",
    status: "LIVE",
    description:
      "A modern, high-performance website for a digital product studio, built to showcase services, process, and portfolio with a premium user experience. Features a cinematic hero carousel, clear conversion CTAs, and a fully responsive, performance-focused build following best practices.",
    coverImage: craftechCover,
    images: [craftechCover],
    liveUrl: "https://craftech-demo.netlify.app/",
   
  },
  {
    id: "gourmet-grandeur",
    title: "Gourmet Grandeur Luxe",
    category: "Websites",
    tags: ["REACT", "VERCEL", "LUXURY", "HOSPITALITY"],
    year: "2026",
    client: "Freelance — Live product",
    status: "LIVE",
    description:
      "A luxury fine-dining landing experience with dark editorial styling, immersive menu presentation, and a live Vercel showcase.",
    coverImage: gourmetcoverpage,
    images: [gourmetcoverpage],
    liveUrl: "https://gourmet-grandeur-luxe.vercel.app/",
  },
  {
    id: "savoria",
    title: "Savoria",
    category: "Websites",
    tags: ["REACT", "VERCEL", "RESTAURANT", "ANIMATION"],
    year: "2026",
    client: "Freelance — Live product",
    status: "LIVE",
    description:
      "A fine-dining restaurant experience with seasonal menu storytelling, cinematic food visuals, reservation-focused navigation, and a deployed Vercel build.",
    coverImage: savoriacoverpage,
    images: [savoriacoverpage],
    liveUrl: "https://savoria-nine.vercel.app/",
  },
];

const featuredProjectOrder = [
  "safargoo",
  "campusconnect-aws",
  "meditrack",
  "smart-attendance",
  "menuvision-ar",
  "maxis-energy",
];

export const projects: Project[] = [...projectData].sort((left, right) => {
  const leftOrder = featuredProjectOrder.indexOf(left.id);
  const rightOrder = featuredProjectOrder.indexOf(right.id);
  const fallbackOrder = featuredProjectOrder.length;

  return (leftOrder === -1 ? fallbackOrder : leftOrder) -
    (rightOrder === -1 ? fallbackOrder : rightOrder);
});

export const PORTRAIT_URL = bushraPortrait;
export const RESUME_URL = "#";
