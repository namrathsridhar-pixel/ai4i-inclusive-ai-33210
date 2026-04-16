import { motion } from "framer-motion";

const Terms = () => {
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
              AI4INCLUSION Terms of Use
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                This website{" "}
                <a href="https://ai4inclusion.org/" className="text-primary hover:underline">https://ai4inclusion.org</a>{" "}
                ("Website") has been developed and is being maintained by Center for Open Societal Systems ("COSS").
              </p>

              <p className="text-muted-foreground">
                This Website provides information related to AI4Inclusion ("AI4I"), an initiative enabling nations to build sovereign Language AI Digital Public Infrastructure. The Website invites users to explore how AI4I helps countries collect and curate citizen-sourced datasets, and deliver native language AI models through open, interoperable building blocks — unlocking true digital inclusion, where every citizen can access digital services and participate in their own spoken language ("Purpose").
              </p>

              <p className="text-muted-foreground">
                By using the Website, you have accepted and agree to be governed by these Terms of Use ("Terms"), as may be amended from time to time. The terms 'you', 'your' refer to anyone who accesses, views or uses the Website. The terms "we", "us", "our" refer to COSS.
              </p>

              <p className="text-muted-foreground">
                Set out below are the Terms of Use of this Website:
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">1. ACCESS AND USE</h2>
              
              <p className="text-muted-foreground">
                <strong>a.</strong> As a User, you represent and warrant that you are of legal age and are legally competent to form a binding contract (or if not, you've received your parent's or guardian's permission to Use the Website and they have agreed to these Terms on your behalf).
              </p>

              <p className="text-muted-foreground">
                <strong>b.</strong> If you're agreeing to these Terms on behalf of a department, institution, organization or legal entity, you represent and warrant that you are duly authorized to agree to these Terms on behalf of that department, institution, organization or entity and these Terms are binding on them.
              </p>

              <p className="text-muted-foreground">
                <strong>c.</strong> All Users shall have access to all the Assets available on the Website for the purpose of learning, finding, viewing, Using, contributing to, modifying, replicating, downloading, and sharing Assets with other Users, through the Website.
              </p>

              <p className="text-muted-foreground">
                <strong>d.</strong> It is possible that your access and Use of Assets on the Website may be disrupted due to technical or operational difficulties and with no prior notice of downtime. COSS makes no guarantee as to the continuous uptime and availability of the Website or the quality of Assets on the Website.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">2. OBLIGATIONS OF USERS</h2>
              
              <p className="text-muted-foreground">
                <strong>a.</strong> You access the Website only to Use the Assets.
              </p>
              <p className="text-muted-foreground">
                <strong>b.</strong> You will be responsible and liable for any activity on the Website by you.
              </p>
              <p className="text-muted-foreground">
                <strong>c.</strong> You will follow these Terms and all the policies of the Website.
              </p>

              <h3 className="text-xl font-heading font-semibold mt-8 mb-3">Acceptable Use</h3>
              <p className="text-muted-foreground">
                This website is intended for informational purposes only. By accessing or using this website, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>reproduce, distribute, or commercially exploit any content without prior written permission from AI4Inclusion;</li>
                <li>use the website for any unlawful purpose or in a manner that could damage, disable, or impair its functioning;</li>
                <li>submit false, misleading, or unsolicited information through any contact or subscription form on this website.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                All content on this website, including text, graphics, and data, is the intellectual property of AI4Inclusion and is protected under applicable copyright laws.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">3. INTELLECTUAL PROPERTY RIGHTS</h2>
              
              <p className="text-muted-foreground">
                <strong>a.</strong> The Website contains copyrighted material, trademarks and other Intellectual Property owned by COSS. Unless specifically permitted, you agree not to copy, modify, publish, transmit, distribute, perform, display, or sell any such Intellectual Property. Access to or Use of the Website does not confer upon anyone any license to COSS's Intellectual Property rights.
              </p>

              <p className="text-muted-foreground">
                <strong>b.</strong> You agree to abide by all licenses and copyright notices accompanying any Asset published on the Website. Any Asset (other than software code) you contribute to AI4I or the Website is licensed under the Creative Commons Attribution-ShareAlike 4.0 International - CC BY-SA License. You can share and adapt the licensed Assets under the terms of the same license, provided you cite the creator as COSS or another party if the creator is not COSS, include a link to the original publication on the Website with copyright notice, license notice and disclaimer notice, and indicate if changes were made. You may do so in any reasonable manner, but not in any way which suggests that COSS (or the creator as the case may be) endorses you or your Use. For any assistance with contributing to AI4I or the Website or understanding any license, please contact us at{" "}
                <a href="mailto:info@ai4inclusion.org" className="text-primary hover:underline">
                  info@ai4inclusion.org
                </a>
              </p>

              <p className="text-muted-foreground">
                <strong>c.</strong> You agree that you will not use the Website to scrape or attempt to scrape any Asset available on the Website.
              </p>

              <p className="text-muted-foreground">
                <strong>d.</strong> Assets that are software code and are released under AI4I and made available on/through the Website are licensed under the MIT license reproduced below:
              </p>

              <div className="bg-muted p-6 rounded-lg my-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Copyright (c) 2024 COSS
                </p>
                <p className="text-sm text-muted-foreground">
                  Permission is hereby granted, free of charge, to any person obtaining a copy of all software and associated documentation files (the "Software") listed on this website under this AI4I (website link), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold mt-8 mb-3">Creative Commons</h3>
              <p className="text-muted-foreground">
                Other than code, all works put out on this website are governed by a Creative Commons Attribution-ShareAlike 4.0 International License, unless expressly indicated otherwise.
              </p>
              <p className="text-muted-foreground">
                This means that you are free to copy and redistribute our material, and adapt or transform it, even for commercial purposes, as long as you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Attribute our work, and</li>
                <li>Distribute your adapted work under the same license, without placing additional restrictions.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">4. PRIVACY POLICY</h2>
              <p className="text-muted-foreground">
                By Using the Website and/or by providing your information, if applicable, you consent to the collection and use of the information you disclose on the Website in accordance with our Privacy Policy. We take the privacy of our Users very seriously. Please refer to our Privacy Policy for complete details.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">5. LIMITED LIABILITY</h2>
              <p className="text-muted-foreground">
                We do not guarantee the accuracy, veracity, correctness, validity, usability, or currency of any Assets made available on or linked through the Website. We shall not be held responsible for any offensive or unlawful Asset posted, transmitted, sent or communicated through the Website.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">6. DISCLAIMER</h2>
              <p className="text-muted-foreground">
                COSS PROVIDES THE WEBSITE ON AN "AS IS" BASIS AND GRANTS NO WARRANTIES OF ANY KIND WITH RESPECT TO THE WEBSITE. COSS SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. ACCESS AND USE OF THE WEBSITE (INCLUDING ANY ASSET OR INFORMATION AVAILABLE ON/THROUGH THE WEBSITE) IS ENTIRELY AT YOUR OWN RISK.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">7. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by the laws of India and any disputes or proceedings arising hereunder shall be subject to the jurisdiction of the courts in Bangalore.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
