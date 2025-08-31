# AI System Lifecycle Standard

## Phase 1: Discover (Design, Data, Train, Evaluate)
This is the core of your GovHack project, where we'll design the solution and build the prototype.

### Design 🎨

**Define the Problem:** We'll start by clearly defining our specific user persona and their life event (e.g., a new parent in Victoria). We'll also formally assess why an AI solution is more beneficial than non-AI alternatives.

**Adopt a Human-Centred Approach:** KoalAI must be built for people. We'll plan mechanisms to clearly inform users they are interacting with an AI, design an inclusive and accessible interface, and define how a human can always step in or override a decision.

**Define Success Criteria:** We'll select multiple metrics to measure success, not just accuracy. This includes metrics for performance, bias (e.g., demographic parity), safety, and user adoption.

### Data 📊

**Map the Data Supply Chain:** We'll identify the specific government datasets needed for our "new parent" scenario. We must document the data's purpose, what consent is needed, and how it will be stored and protected.

**Ensure Data Quality:** We will define quality criteria for our data, ensuring it is relevant, timely, and accurate.

**Manage Data Bias:** This is critical. We'll measure how representative our model's dataset is of the real population and actively manage any identified bias. The training dataset must be kept separate from the validation and testing datasets to ensure an unbiased evaluation.

### Train 🧠

**Plan the Model Architecture:** For GovHack, we'll likely use a pre-trained model (like an LLM). Our plan will detail how we'll fine-tune it using Retrieval-Augmented Generation (RAG), grounding it with trusted, up-to-date government data to improve accuracy and reduce "hallucinations".

**Establish the Training Environment:** We must secure the infrastructure used for training the AI model, with appropriate access controls based on the data's security classification.

**Validate the Model:** We need to evaluate the model against our success criteria, including testing for bias and implementing bias mitigation techniques.

### Evaluate 🧪

**Develop a Testing Strategy:** Our testing must be robust. This includes functional performance testing, safety testing using negative inputs, and user acceptance testing (UAT) with a diverse group of end-users.

**Mitigate Bias in Testing:** We will ensure that the people testing the system were not involved in developing it, and that test data is different from the training data, to provide an independent and unbiased evaluation.

## Phase 2: Operate (Integrate, Deploy, Monitor)
For GovHack, this will be a roadmap for how KoalAI would be deployed and managed in the real world.

### Deploy 🚀

**Phased Roll-out:** We won't launch to everyone at once. The plan will describe a phased roll-out, starting with a small pilot group to gather feedback and detect issues early.

**Business Continuity:** We must develop a plan to ensure critical services remain operational if KoalAI experiences a disruption.

### Monitor 👀

**Ongoing Monitoring:** After deployment, we'll need to continuously monitor KoalAI's performance against our predefined metrics. This includes monitoring for AI drift, where performance degrades over time.

**Monitor for Unintended Consequences:** We will implement feedback channels for people to report issues or contest outcomes. We must also monitor for safety, reliability, and security issues.

## Phase 3: Retire

Even at the start, we need a plan for the end.

### Decommissioning Plan 📋

Our project documentation will include a plan that defines how to safely decommission KoalAI. This includes how we will communicate the retirement to users, shut down the system securely, and archive or destroy the data in compliance with the Archives Act 1983.

## Cross-Cutting Principles (Whole of AI Lifecycle)
These are the core values we'll embed in every stage of the project.

**Explainability:** We must be able to explain how KoalAI works and the reasons for its outputs in a way that users can understand.

**Auditability:** Every decision and process must be traceable. We will maintain documentation and logs to enable internal and external scrutiny.

**Bias Management:** We will create a bias management plan to identify, assess, and manage bias across the entire lifecycle.

**Watermarking:** KoalAI will always apply a visual and accessible indicator to let a user know they are interacting with an AI system, not a human.

---

*This plan gives us a solid roadmap. The best place to start is right at the beginning of the Discover phase.*