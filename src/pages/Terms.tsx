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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              AI4Inclusion
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
              Terms of Use
            </h2>
            <p className="text-muted-foreground mb-8">Last updated: April 2026</p>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                This website (
                <a href="https://ai4inclusion.org" className="text-primary hover:underline">
                  https://ai4inclusion.org
                </a>
                ) is maintained by the Center for Open Societal Systems ("COSS"), formed at IIIT-Bangalore (IIIT-B) in partnership with EkStep Foundation, having its registered office at 26/C, COSS, IIIT Bangalore, Opposite of Infosys gate 1, Electronics City Phase 1, Hosur Road, Bengaluru - 560100, Karnataka, India.
              </p>

              <p className="text-muted-foreground">
                By accessing or using this website, you agree to these Terms of Use ("Terms"). The terms "you" and "your" refer to any person who accesses or uses the website. The terms "we", "us", and "our" refer to COSS.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">1. Intellectual Property & Copyright</h2>

              <p className="text-muted-foreground">
                All content on this website, including text, graphics, documentation, and data, is the intellectual property of AI4Inclusion, operated by COSS (copyright © IIIT-B on behalf of COSS).
              </p>

              <p className="text-muted-foreground">
                Other than code, all works put out on this website are governed by a Creative Commons Attribution-ShareAlike 4.0 International License (
                <a href="http://creativecommons.org/licenses/by-sa/4.0/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  http://creativecommons.org/licenses/by-sa/4.0/
                </a>
                ), unless expressly indicated otherwise.
              </p>

              <p className="text-muted-foreground">
                This means that you are free to copy and redistribute our material, and adapt or transform it, even for commercial purposes, as long as you:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Attribute our work, and</li>
                <li>Distribute your adapted work under the same license, without placing additional restrictions.</li>
              </ul>

              <p className="text-muted-foreground">
                Software code released through AI4Inclusion is licensed under the MIT License (
                <a href="https://mit-license.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  https://mit-license.org/
                </a>
                ) and owned by IIIT-B (Copyright © IIIT-B on behalf of COSS). Permission is hereby granted, free of charge, to any person obtaining a copy of the software, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the inclusion of the above copyright notice in all copies or substantial portions of the software.
              </p>

              <p className="text-muted-foreground">
                The software is provided "as is", without warranty of any kind. In no event shall COSS be liable for any claim, damages, or other liability arising from, out of, or in connection with the software.
              </p>

              <p className="text-muted-foreground">
                For licensing queries, contact:{" "}
                <a href="mailto:info@ai4inclusion.org" className="text-primary hover:underline">
                  info@ai4inclusion.org
                </a>
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">2. No Warranty / Disclaimer</h2>

              <p className="text-muted-foreground">
                This website is provided for general informational purposes only, on an "as is" basis. COSS makes no representations or warranties either express or implied regarding the accuracy, completeness, or fitness for any particular purpose of the information provided.
              </p>

              <p className="text-muted-foreground">
                COSS does not guarantee the continuous uptime or availability of the website and shall not be held responsible for any technical disruptions or inaccessibility.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">3. Limitation of Liability</h2>

              <p className="text-muted-foreground">
                COSS shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of, or reliance on, any content available on this website.
              </p>

              <p className="text-muted-foreground">
                You hereby agree to indemnify and hold COSS, its affiliates, directors, officers, employees, partners, and agents harmless from and against all claims, penalties, damages, losses, and expenses arising out of or in relation to your use of this website or breach of these Terms.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">4. Acceptable Use</h2>

              <p className="text-muted-foreground">
                By accessing or using this website, you agree not to:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Reproduce, distribute, or commercially exploit any content without prior written permission from AI4Inclusion (beyond what is permitted under the CC BY-SA 4.0 (
                  <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    https://creativecommons.org/licenses/by-sa/4.0/
                  </a>
                  ) or MIT licenses above);
                </li>
                <li>Use the website for any unlawful purpose, or in a manner that could damage, disable, or impair its functioning;</li>
                <li>Scrape or attempt to scrape any content or data available on the website;</li>
                <li>Submit false, misleading, or unsolicited information through any contact or subscription form on this website.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-12 mb-4">5. Governing Law</h2>

              <p className="text-muted-foreground">
                These Terms are governed by the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
