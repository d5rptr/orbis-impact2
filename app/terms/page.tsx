"use client";

import React from "react";

export default function TermsOfUse() {
  return (
    <div className="bg-accent text-darkBlue font-sans py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold text-darkBlue mb-6">Terms of Use</h1>
        <p className="mb-4">
          Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before
          using the{" "}
          <a
            href="https://www.orbisoperations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orbitBlue hover:text-azureBlue transition"
          >
            https://www.orbisoperations.com
          </a>{" "}
          (the &quot;Website&quot;) operated by Orbis Operations Management Company, LLC (&quot;us&quot;, &quot;we&quot;, or
          &quot;our&quot;). Your access to and use of The Website is conditioned on your acceptance of and
          compliance with these Terms. These Terms apply to all visitors, users, and others who
          access or use The Website. By accessing or using The Website you agree to be bound by
          these Terms. If you disagree with any part of the terms, then you may not access The
          Website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Proprietary Rights</h2>
        <p className="mb-4">
          As between you and us, we own, solely and exclusively, all rights, title, and interest in
          and to the Website, all the content (including, for example, audio, photographs,
          illustrations, graphics, other visuals, video, copy, text, software, titles, etc.), code,
          data, and materials thereon, the look and feel, design, and organization of the Website,
          and the compilation of the content, code, data, and materials on the Website, including
          but not limited to any copyrights, trademark rights, patent rights, database rights, moral
          rights, sui generis rights, and other intellectual property and proprietary rights
          therein. Your use of the Website does not grant to you ownership of any content, code,
          data, or materials you may access on or through the Website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Limited License</h2>
        <p className="mb-4">
          You may access and view the content on the Website on your computer or other device and,
          unless otherwise indicated in these Terms and Conditions or on the Website, make single
          copies or prints of the content on the Website for your personal, internal use only.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Prohibited Use</h2>
        <p className="mb-4">
          Unless otherwise specifically indicated in these Terms and Conditions or on the Website,
          any commercial or promotional distribution, publishing, or exploitation of the Website, or
          any content, code, data, or materials on the Website, is strictly prohibited unless you
          have received the express prior written permission from our authorized personnel.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Trademarks</h2>
        <p className="mb-4">
          The trademarks, logos, service marks, and trade names (collectively the &quot;Trademarks&quot;)
          displayed on the Website are our registered and unregistered Trademarks and may not be
          used in connection with products or services not related to, associated with, or sponsored
          by their rights holders.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">User Information</h2>
        <p className="mb-4">
          Our information collection and use policies with respect to the privacy of such User
          Information are set forth in the Website&apos;s{" "}
          <a
            href="/privacy"
            className="text-orbitBlue hover:text-azureBlue transition"
          >
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Submitted Materials</h2>
        <p className="mb-4">
          Unless specifically requested, we do not solicit nor do we wish to receive any
          confidential, secret, or proprietary information or other material from you through the
          Website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Indemnification</h2>
        <p className="mb-4">
          You agree to defend, indemnify, and hold us harmless from any claims, liabilities, costs,
          and expenses arising from your use of the Website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to the Website without prior notice for any
          reason.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <address className="not-italic mb-4">
          Orbis Operations Management Company, LLC <br />
          6862 Elm St. Ste 300 <br />
          McLean, VA 22101-3886 <br />
          <a
            href="mailto:impact@orbisops.com"
            className="text-orbitBlue hover:text-azureBlue transition"
          >
            impact@orbisops.com
          </a>
        </address>
        <p className="mt-6 text-sm text-gray-600">Last updated: March 3, 2020</p>
      </div>
    </div>
  );
}
