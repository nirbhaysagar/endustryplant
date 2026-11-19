'use client';

import Nav from '@/components/Nav';
import TerminalFooter from '@/components/TerminalFooter';
import FloatingActions from '@/components/FloatingActions';

export default function TermsPage() {
  return (
    <>
      <Nav />
      
      <style>{`
        .legal-layout {
          background: var(--bg);
          color: var(--text-primary);
          min-height: 100vh;
          padding: 140px 24px 100px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          border-bottom: 1px solid var(--border);
        }

        .legal-inner {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 60px;
        }

        .sidebar-col {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .legal-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .legal-label {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--coral);
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .main-heading {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .meta-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }

        .nav-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-left: 1px solid var(--border);
          padding-left: 16px;
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          transition: color 0.15s ease;
        }

        .nav-link:hover {
          color: var(--coral);
        }

        .content-col {
          display: flex;
          flex-direction: column;
          gap: 56px;
          max-width: 800px;
        }

        .doc-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          scroll-margin-top: 100px;
        }

        .section-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--coral);
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .section-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .doc-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .doc-text strong {
          color: var(--text-primary);
        }

        .emphasis-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-left: 3px solid var(--coral);
          border-radius: 8px;
          padding: 16px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .legal-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sidebar-col {
            position: relative;
            top: 0;
          }
        }
      `}</style>

      <main className="legal-layout">
        <div className="legal-inner">
          
          {/* Sidebar */}
          <div className="sidebar-col">
            <div className="legal-header">
              <div className="legal-label">[ SYSTEM DOC // EP-TC-2026 ]</div>
              <h1 className="legal-title">Terms of Service</h1>
            </div>

            <div className="toc-list">
              <a href="#operating-model" className="toc-link">1.0 Operating Model</a>
              <a href="#engagements" className="toc-link">2.0 Engagements</a>
              <a href="#payment-terms" className="toc-link">3.0 Payment Terms</a>
              <a href="#intellectual-property" className="toc-link">4.0 Intellectual Property</a>
              <a href="#integrations" className="toc-link">5.0 Third-Party Systems</a>
              <a href="#warranties" className="toc-link">6.0 Warranties & Limit</a>
              <a href="#liability" className="toc-link">7.0 Liability Caps</a>
              <a href="#termination" className="toc-link">8.0 Termination</a>
              <a href="#governing-law" className="toc-link">9.0 Governing Jurisdiction</a>
            </div>
          </div>

          {/* Content */}
          <div className="content-col">
            
            <div className="meta-box">
              <div className="meta-row">
                <span className="meta-label">DOCUMENTREF:</span>
                <span className="meta-value">EP-TERMS-CONDITIONS-V1</span>
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
            <section id="operating-model" className="doc-section">
              <span className="section-num">[ SECTION 1.0 ]</span>
              <h2 className="section-title">OPERATING MODEL & STUDIO DEFINITION</h2>
              <div className="doc-text">
                <p>
                  Endustry Plant LLC ("Endustry Plant", "we", "us", or "our") operates as a high-leverage Full-Service Systems Studio. We engineer production infrastructure, custom web applications, mobile platforms, eCommerce stores, and custom artificial intelligence automation pipelines.
                </p>
                <div className="emphasis-box">
                  <strong>CRITICAL PARADIGM:</strong> Endustry Plant is NOT a freelancer collective, body-shop, or generalist software house. We do not sell billable hours, timesheets, or fractional headcounts. We design, manufacture, and license leverage-producing software systems.
                </div>
                <p>
                  All engagements are executed on a fixed-scope, value-priced, or project-milestone basis. By submitting a brief, signing a Statement of Work (SOW), or paying an invoice, you ("Client", "User", "Licensee") agree to be bound by these Terms of Service.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="engagements" className="doc-section">
              <span className="section-num">[ SECTION 2.0 ]</span>
              <h2 className="section-title">ENGAGEMENTS & PROJECT INITIATION</h2>
              <div className="doc-text">
                <p>
                  Project scopes, timelines, deliverables, and fees will be explicitly detailed in a separate Statement of Work ("SOW") or digital proposal executed by both parties.
                </p>
                <p>
                  <strong>Client Cooperation & Dependencies:</strong> The successful manufacture of software systems requires active and timely collaboration. The Client agrees to provide:
                </p>
                <ul>
                  <li>Administrative access to hosting environments, cloud databases (e.g., Supabase, AWS), and API gateways.</li>
                  <li>Branding assets, copy, graphic media, and functional data payloads in specified formats.</li>
                  <li>Feedback, review, and milestone approvals within three (3) business days of delivery.</li>
                </ul>
                <p>
                  Delays in cooperation exceeding five (5) business days will automatically suspend project timelines and may incur restocking or rescheduling fees to re-allocate system engineers.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="payment-terms" className="doc-section">
              <span className="section-num">[ SECTION 3.0 ]</span>
              <h2 className="section-title">PAYMENTS, INVOICING, & FISCAL COMPLIANCE</h2>
              <div className="doc-text">
                <p>
                  <strong>Milestone Pricing:</strong> Engagement fees are divided into fixed, non-refundable milestone payments (e.g., 50% upfront initialization fee, 50% final verification/handover fee, or customized multi-stage milestones).
                </p>
                <p>
                  <strong>Third-Party Costs:</strong> Software dependencies, third-party API subscriptions (e.g., OpenAI tokens, Supabase database hosting, Shopify plans, Vercel team hosting, and domain costs) are the sole fiscal responsibility of the Client. Endustry Plant will never absorb or invoice recurring utility bills on behalf of the Client.
                </p>
                <p>
                  <strong>Late Payments:</strong> Invoices are payable net-zero (0) or within the timeline specified on the SOW. If payment is delayed past three (3) calendar days, Endustry Plant reserves the right to immediately suspend all live development, revoke staging environment access, and freeze API access keys. Staged work will be resumed only upon clearance of outstanding balances plus a late charge of 1.5% per month.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="intellectual-property" className="doc-section">
              <span className="section-num">[ SECTION 4.0 ]</span>
              <h2 className="section-title">INTELLECTUAL PROPERTY & TRANSFER OF CODE</h2>
              <div className="doc-text">
                <p>
                  <strong>Client Deliverables (Custom Code):</strong> Upon receipt of the final invoice payment in full, all custom-made frontend assets, database tables, and tailored API route implementations written exclusively for the Client transfer entirely to the Client.
                </p>
                <p>
                  <strong>Pre-Existing Intellectual Property (Background IP):</strong> Endustry Plant utilizes a proprietary set of tools, boilerplate libraries, AI automation connectors, deployment scripts, and configuration schemas to build systems rapidly.
                </p>
                <div className="emphasis-box">
                  <strong>BACKGROUND IP RETENTION:</strong> Endustry Plant retains exclusive ownership of all pre-existing tools, libraries, scripts, and automation architectures. Upon final payment, Client is granted a non-exclusive, perpetual, royalty-free, worldwide, non-transferable license to use and modify our Background IP solely as embedded in the completed project deliverables.
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="integrations" className="doc-section">
              <span className="section-num">[ SECTION 5.0 ]</span>
              <h2 className="section-title">THIRD-PARTY SYSTEMS & INFRASTRUCTURE DEPENDENCIES</h2>
              <div className="doc-text">
                <p>
                  Our software integrations heavily rely on third-party software, libraries, and API servers (e.g., Supabase database hosting, OpenAI LLM services, Vercel deployments, Stripe payment processors).
                </p>
                <p>
                  <strong>Disruption Disclaimer:</strong> Endustry Plant is not responsible or liable for any operational downtime, breaking schema updates, fee increases, usage cap restrictions, or compliance policy changes enforced by these third-party platforms. Any remediation work required due to external API changes or service disruptions will be treated as an out-of-scope system modification and invoiced separately.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="warranties" className="doc-section">
              <span className="section-num">[ SECTION 6.0 ]</span>
              <h2 className="section-title">WARRANTIES & SYSTEM COMPLIANCE</h2>
              <div className="doc-text">
                <p>
                  <strong>Warranty Window:</strong> Endustry Plant provides a thirty (30) day warranty starting from the day of final project handover. This warranty strictly covers critical bugs (deviations from the SOW specifications) that render core functions inoperable.
                </p>
                <p>
                  <strong>AI System Non-Determinism:</strong> Systems incorporating artificial intelligence models (such as large language models, agents, vector databases) generate non-deterministic outputs. Endustry Plant does not warrant that AI model outputs will be completely error-free, factual, unbiased, or consistently aligned. The Client assumes all risks associated with AI-generated text, decisions, and operations.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="liability" className="doc-section">
              <span className="section-num">[ SECTION 7.0 ]</span>
              <h2 className="section-title">LIMITATION OF LIABILITY</h2>
              <div className="doc-text">
                <p>
                  To the maximum extent permitted by applicable law, Endustry Plant LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data corruption, database downtime, operational disruptions, security breaches, or system failures.
                </p>
                <div className="emphasis-box">
                  <strong>LIABILITY CAP:</strong> Under no circumstances shall Endustry Plant's total aggregate liability arising out of or related to this agreement exceed the total amount paid by the Client to Endustry Plant under the specific Statement of Work (SOW) causing the claim during the three (3) months preceding the event.
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="termination" className="doc-section">
              <span className="section-num">[ SECTION 8.0 ]</span>
              <h2 className="section-title">TERMINATION & ENGAGEMENT SUSPENSION</h2>
              <div className="doc-text">
                <p>
                  Either party may terminate an engagement or SOW for cause if the other party materially breaches any provision of these terms and fails to cure such breach within ten (10) business days of written notice.
                </p>
                <p>
                  In the event of termination, the Client shall pay Endustry Plant for all milestones initiated, hours allocated, or engineering resources locked in up to the effective termination date. Unfinished source code and staging builds will not be delivered to the Client if outstanding balances remain.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="governing-law" className="doc-section">
              <span className="section-num">[ SECTION 9.0 ]</span>
              <h2 className="section-title">GOVERNING LAW & JURISDICTIONAL COMPLIANCE</h2>
              <div className="doc-text">
                <p>
                  These Terms of Service, along with any individual SOW, shall be governed by, interpreted, and construed in accordance with the laws of India.
                </p>
                <p>
                  Any legal actions, disputes, or arbitrations arising out of or in connection with our services must be resolved exclusively within the courts of New Delhi, India. If any portion of these terms is deemed unenforceable, the remaining clauses will stay in full force and effect.
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>

      <TerminalFooter />
      <FloatingActions />
    </>
  );
}
