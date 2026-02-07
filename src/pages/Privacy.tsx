import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  This privacy policy ("Privacy Policy") defines the rights in relation to User (as defined in the Terms of Use) information, and answers questions that you may have about the manner in which User information may be collected, used, stored, transferred, disclosed and safeguarded.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By accessing or Using the Website and/or providing your information, you are accepting the terms of our Privacy Policy, you confirm that you are legally competent to form a legally binding contract and consent to the collection and use by us of the information you disclose on the Website in accordance with these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This Privacy Policy should be read in conjunction with the Terms of Use. Defined terms not specifically defined herein, shall have the meaning ascribed to them in the Terms of Use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">1. WHAT USER INFORMATION AND DATA IS AUTOMATICALLY COLLECTED BY THE WEBSITE?</h2>
                <p className="text-muted-foreground leading-relaxed">None</p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">2. DOES THE WEBSITE COLLECT PERSONALLY IDENTIFIABLE INFORMATION?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  a. No personal information or personally identifiable information of the User nor sensitive personal information of the User is collected by us unless you choose to provide us with your information such as your name, email address, GitHub user credentials, or any other details you provide by:
                </p>
                <ul className="list-none pl-8 text-muted-foreground mb-4 space-y-2">
                  <li>i. emailing us at <a href="mailto:info@ai4inclusion.org" className="text-primary hover:underline">info@ai4inclusion.org</a>,</li>
                  <li>ii. contacting us via the form on the Website,</li>
                  <li>iii. registering for our events, and/or</li>
                  <li>iv. engaging with the AI4I community through the use of your GitHub, Discord or Slack account.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  b. COSS is not responsible for any personal information or sensitive personal information being collected by other platforms, websites, third-party services or external links or Assets linked on the Website. All such third-party services and Asset creators are bound by the respective data protection laws applicable to them and should have their own terms of use and privacy policy documents which would be applicable to such third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">3. WHO HAS ACCESS TO USER INFORMATION AND DATA?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Employees, contractors, or subcontractors of COSS authorized to monitor and manage any communication or submissions made through the Website, including but not limited to emails or forms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">4. WHAT IS YOUR INFORMATION AND DATA USED FOR?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To contact you and deliver information, notices, seek feedback or other communications in connection with your usage of the Website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">5. DISCLOSURE AND TRANSFER</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will not publish or disclose your information without your prior consent, unless (i) the law requires us to do so, (ii) you have consented to disclosure of the information, or (iii) it is required to do so in order to provide services to you. We will make sure that whoever we share the information with will also adhere to strict non-disclosure and confidentiality requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">6. SECURITY PRACTICES AND PROCEDURES</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We ensure the confidentiality and security of the information by implementing reasonable and appropriate security practices and procedures that includes administrative, physical security and technical controls in order to safeguard your information in accordance with Indian laws currently in force, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">7. ACCESS TO USER INFORMATION</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  a. If you want to change, alter or otherwise modify or update your information, at any time, please contact us at <a href="mailto:info@ai4inclusion.org" className="text-primary hover:underline">info@ai4inclusion.org</a>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  b. Do note that COSS reserves the rights to save any non-personal, device information and usage information (if any) and you are not entitled to seek the deletion of the same.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  c. COSS at its sole discretion may permit or deny the change of any information, if it is believed the same is required to observe applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">8. LINKS TO OTHER WEBSITES</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  a. We may, on the Website, provide links to third-party websites or applications, which in turn may collect information about you. We will not be responsible or liable for the privacy standards, practices and policies implemented on such websites.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  b. Pages that have YouTube videos embedded, may allow YouTube to collect information about you. Please read YouTube's Privacy Policy to learn more.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  c. We may provide links to the code repository and discussion forum on GitHub, a website and cloud-based service that allows us to store and manage our code, as well as track and control changes to the code. GitHub collects information such as full name and a valid email address during account creation. Please read the GitHub Privacy Statement to learn more about when and how GitHub may collect information about its users.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  d. We may also host discussions or community engagement via Discord and/or Slack, which are online chat and communication platforms. Discord and Slack may collect information such as your username, email address, and other details during account creation. Please read Discord's Privacy Policy and Slack's Privacy Policy to learn more about how they collect and process your information.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  e. We may, from time to time, host online events/webinars through the use of Zoom and/or Google Meet. If you choose to register, the registration information you provide, which may include name and contact information, responses to registration questions and other registration information will be safeguarded by us in the manner detailed under this Privacy Policy, but it may also be collected and processed by Zoom or Google Meet. Please read Zoom's Privacy Statement and Google's Privacy Policy to learn more.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">9. USE OF COOKIES</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  a. Cookies are a feature of web browsers that allow web servers to temporarily store information within your browser. Most browsers automatically accept cookies. The Website does not use any cookies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  b. However, pages that have YouTube videos embedded may enable YouTube to set certain cookies. Read YouTube's Cookie Policy for more details.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  c. Similarly, GitHub uses its own cookies for analytics purposes. You can learn about this in GitHub's Privacy Statement and on the GitHub Subprocessors and Cookies Page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">10. CHANGES TO THE PRIVACY POLICY</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Privacy Policy is subject to revision at any time, as determined by COSS, without notice, and any such changes are effective immediately upon being updated on the Website. Any continued access and use of the Website thereafter will be deemed to be an acceptance of these changes by you. You are strongly advised to periodically check this Privacy Policy for revisions regarding the use of your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">11. COMPLAINTS</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take our responsibility towards ensuring the privacy and security of your information very seriously. If you have any concerns or questions regarding this Privacy Policy, feel free to contact us at <a href="mailto:info@ai4inclusion.org" className="text-primary hover:underline">info@ai4inclusion.org</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
