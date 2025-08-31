# KoalAI: Full Project Plan

This document outlines the end-to-end project plan for **KoalAI**, a conversational AI assistant designed to help Australian entrepreneurs start a business. The plan follows the AI lifecycle defined in the **Australian Government AI technical standard** to ensure a responsible, secure, and human-centred approach.

---
## Phase 1: Discover

This phase covers the initial conception, design, and development of the KoalAI prototype.

### Design 🎨

Our design process is focused on solving the right problem in a way that is safe, effective, and trustworthy.

* **Define the Problem:**
    * **Problem Statement:** We will solve the problem of aspiring entrepreneurs struggling with the fragmented and complex regulatory landscape when starting a business. [cite: 908]
    * **Stakeholders:** We will identify and document all impacted stakeholders, including entrepreneurs, government agencies (ATO, ASIC), and subject matter experts. [cite: 912]
    * **Assess Alternatives:** We will validate the need for KoalAI by conducting an objective assessment against non-AI alternatives (e.g., static websites), justifying why an AI approach is more beneficial. [cite: 921, 924, 926]

* **Adopt a Human-Centred Approach:**
    * **User Involvement:** We will involve users throughout the design process by creating personas and conducting workshops to capture their needs and values. [cite: 1010, 1014]
    * **Transparency:** We will establish mechanisms to clearly inform users they are interacting with an AI system [cite: 967], incorporating visual cues [cite: 969] and providing the source for information given.
    * **Accessibility & Inclusivity:** The KoalAI web app will be designed to be inclusive and meet **Web Content Accessibility Guidelines (WCAG)**, considering users from diverse backgrounds and people with disabilities. [cite: 981] We will also provide alternate channels for users who choose not to use the AI. [cite: 979]
    * **Feedback Mechanisms:** The interface will include options for users to provide explicit feedback via ratings or comments [cite: 995] and to opt-out of the AI system. [cite: 991]
    * **Human Oversight:** We will define a clear pathway for timely intervention or decision override by an authorised human. [cite: 999] The system will identify situations that need to be escalated to a human supervisor for review and approval. [cite: 997]

* **Define Success Criteria:**
    * **Select Appropriate Metrics:** We will select multiple complementary metrics to avoid false confidence. [cite: 1044]
    * **Metric Categories:** Our metrics will cover:
        * **Value-Proposition:** Social outcomes and productivity measures. [cite: 1047]
        * **Performance:** Precision and recall for classification models or Mean Absolute Error for regression models. [cite: 1048]
        * **Bias-Related:** Demographic parity to measure group fairness. [cite: 1054]
        * **Reliability:** Availability, latency, and response time. [cite: 1056]
        * **Adoption-Related:** Adoption rate, frequency of use, and session length. [cite: 1058]
        * **Qualitative Measures:** Checking the well-being of humans operating or using the AI system. [cite: 1060]

### Data 📊

A robust data strategy is the foundation of KoalAI's performance and trustworthiness.

* **Map the Data Supply Chain:**
    * **Identify Data Sources:** We will identify and document the data needed from Federal (ATO, ASIC), State, and Local government sources, and the specific purpose for its use. [cite: 1135, 1137]
    * **Ensure Traceability:** We will map the data supply chain to maintain awareness of the flow of data across the AI system[cite: 1194], ensuring we can trace all information back to its origin.
    * **Plan Data Management:** We will establish clear criteria for data archival and destruction for data used at each stage of the AI lifecycle. [cite: 1178]

* **Validate Data Quality:**
    * **Quality Criteria:** We will define data quality criteria based on the ABS Data Quality Framework, covering **relevance, timeliness, accuracy, coherence, interpretability, and accessibility**. [cite: 1304]
    * **Data Profiling:** Before use, we will analyze the structure, content, and quality of data to determine its fitness for purpose. [cite: 1319]
    * **Validation Techniques:** We will perform ongoing data validation activities, including **type validation** [cite: 1379], **format validation** [cite: 1380], **range validation** [cite: 1381], and checking for **completeness**. [cite: 1386]

* **Manage Data Bias:**
    * **Measure Representativeness:** We will measure whether the model dataset is representative of the true population relevant to the purpose of the AI system. [cite: 1448, 1450]
    * **Ensure Data Diversity:** We will ensure the dataset has the required representation and demographics, including people with lived experience and intersectional dimensions. [cite: 1451]
    * **Analysis:** We will use exploratory data analysis with descriptive statistics and visualization tools to identify patterns and discrepancies. [cite: 1468] We will also analyze how data was generated and verified to check the methodologies used. [cite: 1462]

### Train 🧠

Our training process focuses on adapting a powerful, pre-existing model for our specific use case.

* **Plan the Model Architecture:**
    * **Training Mechanism:** We will use **transfer learning** [cite: 1575] by adapting a pre-trained Large Language Model (LLM). The primary technique will be **Retrieval-Augmented Generation (RAG)**, which grounds the model with a trusted, internal knowledge base. [cite: 1652]
    * **Select Tools:** We will reuse approved AI modelling frameworks, libraries, and tools[cite: 1600], such as the **Google Gemini API**, **LangChain** for development, and **ChromaDB** as a vector database.

* **Establish the Training Environment:**
    * **Compute Resources:** We will establish compute resources and infrastructure for the training environment, likely using a cloud platform like GCP or AWS. [cite: 335]
    * **Secure the Infrastructure:** We must implement required security and access controls for the infrastructure, dependent on the security classification of the data. [cite: 1596]

* **Validate, Assess, and Update Model:**
    * **Validation Techniques:** We will use multiple techniques for model validation, including checking for **correct classifications and factual correctness** [cite: 1666], **benchmarking** [cite: 1671], and ensuring **consistency in responses**. [cite: 1672]
    * **Evaluate for Bias:** We will use suitable tools that test and discover unwarranted associations between an algorithm's input features and its output. [cite: 1683]
    * **Identify Failure Modes:** We will identify and address situations when AI outputs should not be provided, such as when user input is ambiguous or lacks reliable sources. [cite: 1627, 1629]

### Evaluate 🧪

We will conduct continuous, rigorous testing to verify and validate the entire KoalAI system.

* **Adapt Test Strategies:**
    * **Mitigate Bias in Testing:** We will ensure test subjects are not involved in the development of the system under test [cite: 1757], and that test data for formal testing is differentiated from data used during model development. [cite: 1756]
    * **Test Criteria:** We will use **baseline testing**, comparing KoalAI's behaviour and performance against a reference system (e.g., manual processing). [cite: 1766, 1767]
    * **Regression Testing:** We will perform robust **regression testing** to mitigate the heightened risk of defects resulting from changes. [cite: 395]

* **Test for Specified Behaviour and Safety:**
    * **Functional Performance:** We will conduct functional performance testing to verify the correctness of the system as per our pre-defined metrics. [cite: 372]
    * **Controllability:** We will perform controllability testing to verify our human oversight and control requirements. [cite: 373]
    * **Safety:** We will test safety measures through **negative testing methods** and **fault injection**. [cite: 383]
    * **Adversarial Testing:** We will undertake adversarial "red team" testing to attempt to break security and privacy measures to identify weaknesses. [cite: 386]

* **Test for Intended and Unintended Consequences:**
    * **User Acceptance Testing (UAT):** We will perform UAT, validating the system with a diversity of end-users in their operating contexts and real-world scenarios. [cite: 393]

---
## Phase 2: Operate

This phase covers the integration, deployment, and ongoing monitoring of the KoalAI web app.

### Integration

* **Integration Planning:**
    * **Security Approval:** We will ensure the AI system meets architecture and operational requirements with the Australian Government **Security Authority to Operate (SATO)**. [cite: 402]
    * **Continuous Integration (CI):** We will apply secure and auditable continuous integration practices, enabling us to build, test, and validate changes upon every commit. [cite: 1900]

### Deployment

* **Create Business Continuity Plans:**
    * **Develop Plans:** We must develop plans to ensure critical systems remain operational during disruptions [cite: 410], including defining disaster recovery, backup, and restore procedures. [cite: 1928]
* **Deploy to a Production Environment:**
    * **Phased Roll-out:** We will apply strategies for a **phased roll-out** [cite: 417], potentially splitting traffic between versions or rolling out to a subset of users to gradually introduce changes. [cite: 1943]
    * **Change Management:** All production deployments will follow change management protocols, including impact assessment, notifying stakeholders, and obtaining approvals. [cite: 1948]
    * **Rollback Mechanisms:** We will implement automated rollback mechanisms to revert to the last stable version in case of a pre-defined critical failure. [cite: 1977]

### Monitor

* **Establish Monitoring Framework:**
    * **Ongoing Monitoring:** We will periodically test KoalAI after deployment and have a clear framework to manage any issues. [cite: 439] We will monitor the system as agreed and specified in its operating procedures. [cite: 440]
    * **Performance and Drift:** We will monitor performance and **AI drift** as per our pre-defined metrics. [cite: 441]
    * **Safety and Unintended Consequences:** We will monitor inputs and outputs for abuse, misuse, or other forms of harm [cite: 2034], and implement various channels for people to provide feedback or contest outcomes. [cite: 2050]
    * **Incident Resolution:** We will define incident handling processes, allocating a severity level to identified incidents to ensure they are addressed promptly. [cite: 2088, 2089]

---
## Phase 3: Retire (Decommission)

This phase ensures KoalAI is retired responsibly at the end of its lifecycle.

### Create a Decommissioning Plan

* **Define Scope:** The plan will clearly identify the system components being shut down and the reason for decommissioning. [cite: 2113]
* **Impact Analysis:** We will conduct an impact analysis of decommissioning the system, assessing the potential impacts on business operations and stakeholders. [cite: 461]
* **Proactive Communication:** The plan will include a strategy to proactively communicate the system retirement to all affected parties. [cite: 144]

### Shut Down the AI System

* **Retain Records:** Any records related to the AI system, including those generated during retirement, must be preserved to demonstrate compliance. [cite: 2122]
* **Disable Resources:** We will disable computing resources or components specifically dedicated to the AI system. [cite: 2123]
* **Secure Decommissioning:** We will securely decommission or repurpose all computing resources, systematically shutting down and wiping servers, storage devices, and terminating cloud services. [cite: 467, 2125]

### Finalise Documentation and Reporting

* **Final Documentation:** We will record all decommissioning information, activities, decisions, and lessons learned in the final system documentation. [cite: 2128]
* **Final Report:** We will deliver a final report to relevant stakeholders, providing a detailed account of the decommissioning process and compliance adherence. [cite: 2128]