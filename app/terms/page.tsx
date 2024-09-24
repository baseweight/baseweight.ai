import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 py-16 px-8">

        <section className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
        <div className="text-left">
        <p><strong>Effective Date: September 25, 2024</strong></p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to BaseWeight Solutions Inc (“we,” “us,” or “our”). These Terms of Service (“Terms”) govern your access and use of our web application located at [https://baseweight.ai] (the “Service”). By using or accessing the Service, you agree to be bound by these Terms.</p>
        
        <h2>2. Eligibility</h2>
        <p>To use our Service, you must be at least the age of majority in your province or territory of residence. By using the Service, you represent that you meet this eligibility requirement.</p>
        
        <h2>3. User Responsibilities</h2>
        <p>You agree to:
            <ul>
                <li>Use the Service in compliance with all applicable laws and regulations.</li>
                <li>Provide accurate and up-to-date information during the registration process.</li>
                <li>Maintain the confidentiality of your account credentials and notify us of any unauthorized access.</li>
            </ul>
        </p>
        
        <h2>4. Prohibited Conduct</h2>
        <p>You agree not to:
            <ul>
                <li>Use the Service for any illegal or unauthorized purpose.</li>
                <li>Upload or transmit viruses or malicious code.</li>
                <li>Attempt to hack, overload, or disrupt the operation of the Service.</li>
            </ul>
        </p>
        
        <h2>5. Intellectual Property</h2>
        <p>All content, trademarks, logos, and designs on the Service are the intellectual property of BaseWeight Solutions Inc or its licensors. You may not use, reproduce, or distribute this content without our express written permission.</p>
        
        <h2>6. Termination</h2>
        <p>We reserve the right to suspend or terminate your access to the Service at any time for any reason, including violation of these Terms, without notice.</p>
        
        <h2>7. Disclaimer of Warranties</h2>
        <p>The Service is provided on an "as-is" and "as available" basis. We make no warranties, either express or implied, regarding the operation or availability of the Service.</p>
        
        <h2>8. Limitation of Liability</h2>
        <p>In no event shall we be liable for any indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the Service.</p>
        
        <h2>9. Governing Law</h2>
        <p>These Terms are governed by the laws of Canada and the province of British Columbia, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in British Columbia.</p>
        
        <h2>10. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Continued use of the Service after changes have been posted constitutes your acceptance of the new Terms.</p>
        
        <h2>11. Contact Information</h2>
        <p>If you have any questions or concerns about these Terms, please contact us at admin@baseweight.ai.</p>
        </div>
        </section>

        <section className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <div className="text-left">
        <p><strong>Effective Date: September 25, 2024</strong></p>
        
        <h2>1. Introduction</h2>
        <p>Baseweight Solutions Inc. (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and disclose your information when you use our web application (the “Service”).</p>
        
        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
            <li><strong>Personal Information:</strong> This may include your name, email address, phone number, and any other information you provide during registration.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with the Service, including your IP address, browser type, and usage patterns.</li>
        </ul>
        
        <h2>3. How We Use Your Information</h2>
        <p>We may use the information we collect for the following purposes:</p>
        <ul>
            <li>To provide and improve the Service.</li>
            <li>To communicate with you regarding updates, offers, or promotions.</li>
            <li>To analyze usage trends and improve user experience.</li>
            <li>To comply with legal obligations.</li>
        </ul>
        
        <h2>4. Sharing Your Information</h2>
        <p>We may share your information with:</p>
        <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating the Service.</li>
            <li><strong>Legal Compliance:</strong> If required by law or legal processes, we may disclose your information.</li>
        </ul>
        <p>We do not sell, rent, or lease your personal information to third parties for marketing purposes.</p>
        
        <h2>5. Data Retention</h2>
        <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
        
        <h2>6. Security</h2>
        <p>We take appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.</p>
        
        <h2>7. Your Rights</h2>
        <p>Under Canadian law, you have the right to:</p>
        <ul>
            <li>Access and request correction of your personal information.</li>
            <li>Withdraw your consent to the use of your personal information.</li>
            <li>Lodge a complaint with the Office of the Privacy Commissioner of Canada.</li>
            <li>Lodge a complaint with the Office of the Privacy Commissioner of British Columbia.</li>
        </ul>
        
        <h2>8. Cookies</h2>
        <p>We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can adjust your browser settings to refuse cookies.</p>
        
        <h2>9. Children’s Privacy</h2>
        <p>Our Service is not directed to individuals under the age of 13, and we do not knowingly collect personal information from children.</p>
        
        <h2>10. Changes to Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be effective once posted, and continued use of the Service indicates your acceptance.</p>
        
        <h2>11. Contact Information</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at admin@baseweight.ai.</p>
        </div>
        </section>



      </main>

      <Footer />
    </>
  );
}

