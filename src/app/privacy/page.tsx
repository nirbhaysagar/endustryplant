'use client';

import GrainOverlay from '@/components/GrainOverlay';
import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';

export default function PrivacyPage() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      
      <style>{`
        .legal-layout {
          background: #080808;
          color: #f2f2ee;
          min-height: 100vh;
          padding: 160px 40px 100px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          border-bottom: 1px solid rgba(57,255,133,0.1);
        }

        .legal-inner {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
        }

        .sidebar-col {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .legal-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .legal-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #39FF85;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .legal-title {
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }

        .toc-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .toc-link {
          font-family: var(--font-mono);
          font-size: 12px;
          color: rgba(242,242,238,0.4);
          text-transform: uppercase;
          transition: color 0.2s ease;
          display: block;
        }

        .toc-link:hover {
          color: #39FF85;
        }

        .content-col {
          display: flex;
          flex-direction: column;
          gap: 60px;
          max-width: 800px;
        }

        .meta-box {
          border: 1px solid rgba(57,255,133,0.15);
          background: rgba(57,255,133,0.02);
          padding: 24px;
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .meta-row {
          display: flex;
          justify-content: space-between;
        }

        .meta-label {
          color: rgba(242,242,238,0.5);
        }

        .meta-value {
          color: #39FF85;
        }

        .doc-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
          scroll-margin-top: 120px;
        }

        .section-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #39FF85;
          letter-spacing: 0.1em;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin: 0 0 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 8px;
        }

        .doc-text {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.7;
          color: rgba(242,242,238,0.7);
          text-align: justify;
        }

        .doc-text p {
          margin-bottom: 16px;
        }

        .doc-text ul {
          list-style: square;
          padding-left: 20px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .doc-text li {
          color: rgba(242,242,238,0.7);
        }

        .emphasis-box {
          border-left: 2px solid #39FF85;
          background: rgba(57,255,133,0.03);
          padding: 16px 20px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: rgba(242,242,238,0.9);
          margin: 20px 0;
        }

        @media (max-width: 900px) {
          .legal-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .sidebar-col {
            position: relative;
            top: 0;
            gap: 20px;
          }
          .toc-list {
            display: none; /* Hide TOC on mobile for layout breathing space */
          }
          .legal-layout {
            padding: 120px 20px 60px;
          }
        }
      `}</style>

      <main className="legal-layout">
        <div className="legal-inner">
          
          {/* Sidebar */}
          <div className="sidebar-col">
            <div className="legal-header">
              <div className="legal-label">[ SYSTEM DOC // EP-PP-2026 ]</div>
              <h1 className="legal-title">Privacy Policy</h1>
            </div>

            <div className="toc-list">
              <a href="#introduction" className="toc-link">1.0 Introduction</a>
              <a href="#data-collection" className="toc-link">2.0 Data Collection</a>
              <a href="#data-usage" className="toc-link">3.0 Data Usage</a>
              <a href="#data-sharing" className="toc-link">4.0 Data Sharing</a>
              <a href="#security" className="toc-link">5.0 Data Security</a>
              <a href="#retention" className="toc-link">6.0 Data Retention</a>
              <a href="#user-rights" className="toc-link">7.0 User Rights</a>
              <a href="#policy-updates" className="toc-link">8.0 Policy Updates</a>
              <a href="#contact-info" className="toc-link">9.0 System Support</a>
            </div>
          </div>

          {/* Content */}
          <div className="content-col">
            
            <div className="meta-box">
              <div className="meta-row">
                <span className="meta-label">DOCUMENTREF:</span>
                <span className="meta-value">EP-PRIVACY-POLICY-V1</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">EFFECTIVE DATE:</span>
                <span className="meta-value">JANUARY 01, 2026</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">LAST MODIFIED:</span>
                <span className="meta-value">JUNE 15, 2026</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">JURISDICTION:</span>
                <span className="meta-value">NEW DELHI, INDIA</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">ISSUER:</span>
                <span className="meta-value">ENDUSTRY PLANT LLC</span>
              </div>
            </div>

            {/* Section 1 */}
            <section id="introduction" className="doc-section">
              <span className="section-num">[ SECTION 1.0 ]</span>
              <h2 className="section-title">INTRODUCTION & INTENT</h2>
              <div className="doc-text">
                <p>
                  At Endustry Plant LLC ("Endustry Plant", "we", "us", or "our"), privacy is treated as a core system constraint, not an afterthought. We are committed to protecting the integrity, confidentiality, and security of all personal data and intellectual material collected through our marketing site (endustryplant.com) and client onboarding protocols.
                </p>
                <p>
                  This policy outlines what data we collect, how it is processed and stored within our database clusters, and your legal rights under relevant data privacy frameworks, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and the Information Technology Act, 2000 of India.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="data-collection" className="doc-section">
              <span className="section-num">[ SECTION 2.0 ]</span>
              <h2 className="section-title">DATA COLLECTION & TRANSMISSION PROTOCOLS</h2>
              <div className="doc-text">
                <p>
                  We collect data through two primary pathways: direct submissions (e.g. project briefs) and automated system telemetry.
                </p>
                <p>
                  <strong>1. Direct Client Submissions:</strong> When you start a project, submit a brief, or interact with our system engineers, we collect:
                </p>
                <ul>
                  <li>Identification details (Full Name, Company / Product Name).</li>
                  <li>Communication channels (Email address, phone numbers).</li>
                  <li>Project metadata (Selected service types, system complexity, timelines, and technical requirements).</li>
                </ul>
                <p>
                  <strong>2. System Telemetry & Logs:</strong> When you navigate our digital interface, our server architecture automatically logs:
                </p>
                <ul>
                  <li>Network parameters (IP address, approximate geolocation, ISP details).</li>
                  <li>Client configuration (Browser type, operating system version, viewport parameters).</li>
                  <li>Interactivity telemetry (Timestamped page interactions, referral parameters, navigation pathing).</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="data-usage" className="doc-section">
              <span className="section-num">[ SECTION 3.0 ]</span>
              <h2 className="section-title">DATA PROCESSING & OPERATIONAL USAGE</h2>
              <div className="doc-text">
                <p>
                  Endustry Plant processes your personal data strictly to execute operational tasks. We never sell, lease, or distribute your data to advertising conglomerates.
                </p>
                <p>
                  <strong>Primary Use Cases:</strong>
                </p>
                <ul>
                  <li><strong>Systems Engineering:</strong> Evaluating project feasibility, compiling system architectures, and executing the manufacture of software.</li>
                  <li><strong>Client Communications:</strong> Transmitting project updates, scheduling technical syncs, issuing billing invoices, and processing payments.</li>
                  <li><strong>Security Auditing:</strong> Inspecting server access logs, detecting scraping patterns, and preventing malicious form injections.</li>
                  <li><strong>Interface Optimization:</strong> Reviewing structural site telemetry to improve page speed, layouts, and accessibility.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="data-sharing" className="doc-section">
              <span className="section-num">[ SECTION 4.0 ]</span>
              <h2 className="section-title">THIRD-PARTY DATA SHARING & CLOUD PROCESSORS</h2>
              <div className="doc-text">
                <p>
                  We share data only with verified, compliant cloud infrastructure processors required to maintain our operations:
                </p>
                <ul>
                  <li><strong>Database Infrastructure:</strong> Supabase Inc. (PostgreSQL database hosting, encryption-at-rest, and user management layers).</li>
                  <li><strong>Hosting & Edge Network:</strong> Vercel Inc. and Amazon Web Services (AWS) (Edge network hosting, serverless computing, caching layers).</li>
                  <li><strong>Integrations & Tools:</strong> OpenAI LLC (AI route testing and pipeline configurations), Stripe Inc. (Secure payment processing gates).</li>
                </ul>
                <p>
                  All processors are legally bound via Data Processing Agreements (DPAs) to protect client telemetry with security measures matching or exceeding our own guidelines.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="security" className="doc-section">
              <span className="section-num">[ SECTION 5.0 ]</span>
              <h2 className="section-title">DATA SECURITY & ENCRYPTION ARCHITECTURE</h2>
              <div className="doc-text">
                <p>
                  We secure all system interfaces and datastores using modern cryptography and architectural practices:
                </p>
                <ul>
                  <li><strong>Transit Encryption:</strong> All browser requests and API transmissions are encrypted using Transport Layer Security (TLS 1.3).</li>
                  <li><strong>Storage Encryption:</strong> Our PostgreSQL instances on Supabase employ AES-256 database-level encryption for all tables containing client records.</li>
                  <li><strong>Row-Level Security (RLS):</strong> We use strict Postgres RLS rules to ensure that anonymous users can submit project briefs but are completely blocked from reading or querying existing database entries.</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="retention" className="doc-section">
              <span className="section-num">[ SECTION 6.0 ]</span>
              <h2 className="section-title">DATA RETENTION & ARCHIVE POLICY</h2>
              <div className="doc-text">
                <p>
                  We store your personal data only as long as necessary to complete the operational objectives stated in Section 3.0:
                </p>
                <ul>
                  <li><strong>Project Inquiries:</strong> Submitted briefs and related contact details are archived in our database for one (1) year.</li>
                  <li><strong>Active Client Records:</strong> Client contact, invoicing, and architectural data are retained for the duration of the engagement, plus seven (7) years to comply with Indian corporate tax and fiscal auditing guidelines.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="user-rights" className="doc-section">
              <span className="section-num">[ SECTION 7.0 ]</span>
              <h2 className="section-title">USER RIGHTS & PRIVACY CONTROLS</h2>
              <div className="doc-text">
                <p>
                  Regardless of your physical location, we recognize your right to assert complete control over your personal data. You have the right to:
                </p>
                <ul>
                  <li><strong>Access:</strong> Request a structural JSON export of all personal information we hold about you.</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate phone numbers, names, or project details.</li>
                  <li><strong>Deletion ("Right to be Forgotten"):</strong> Request that we purge all telemetry logs and contact database records.</li>
                  <li><strong>Portability:</strong> Request that we transmit your structured data to another service provider.</li>
                </ul>
                <p>
                  To invoke these rights, transmit a cryptographically signed request or standard email directly to our systems administrator at the contact address listed in Section 9.0.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="policy-updates" className="doc-section">
              <span className="section-num">[ SECTION 8.0 ]</span>
              <h2 className="section-title">UPDATES & SCHEMA REVISIONS</h2>
              <div className="doc-text">
                <p>
                  As we add automation systems, deploy new features, or adapt to shifting legal requirements, this Privacy Policy will be revised. Updates will be logged immediately on this page with an incremented version number and timestamp. Continued usage of our website and services following changes constitutes explicit acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="contact-info" className="doc-section">
              <span className="section-num">[ SECTION 9.0 ]</span>
              <h2 className="section-title">SYSTEM COMPLIANCE & CONTACT INFORMATION</h2>
              <div className="doc-text">
                <p>
                  For all privacy requests, data deletions, security audits, or inquiries, please contact our Compliance Officer at our Delhi lab:
                </p>
                <div className="emphasis-box">
                  <strong>ENDUSTRY PLANT LLC</strong><br />
                  Attention: Compliance Officer<br />
                  Base Location: New Delhi, India<br />
                  Contact Email: <a href="mailto:endustryplant.com@gmail.com" style={{ color: '#39FF85', textDecoration: 'underline' }}>endustryplant.com@gmail.com</a><br />
                  Line 1: +91 73021 64841 (Nirbhay Sagar)<br />
                  Line 2: +91 95486 91732 (Aditya Kumar)
                </div>
              </div>
            </section>

          </div>

        </div>
      </main>

      <TerminalFooter />
    </>
  );
}
