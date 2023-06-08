import React from "react";
import Page from "./Page";

function Terms() {
  return (
    <>
      <Page wide={true} title="Terms and Conditions">
        <div class="container">
          <h3 class="mt-4">Terms and Conditions</h3>
          <p>Welcome to MySocialNet! By accessing or using our website, you agree to comply with these terms and conditions.</p>

          <h5>Intellectual Property</h5>
          <p>All content on MySocialNet is the property of MySocialNet and is protected by intellectual property laws. You may not use, modify, reproduce, distribute, or transmit any content without prior written consent.</p>

          <h5>User Conduct</h5>
          <p>When using MySocialNet, you agree to provide accurate information, respect the rights of others, and use the website solely for lawful purposes.</p>

          <h5>Privacy</h5>
          <p>We value your privacy. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.</p>

          <h5>Third-Party Websites</h5>
          <p>MySocialNet may contain links to third-party websites. We do not endorse or assume responsibility for the content or privacy practices of these websites.</p>

          <h5>Limitation of Liability</h5>
          <p>MySocialNet is provided "as is" without warranties. We shall not be liable for any damages arising from your use of the website.</p>

          <h5>Modifications to Terms and Conditions</h5>
          <p>We reserve the right to modify these terms and conditions at any time without prior notice.</p>

          <h5>Governing Law</h5>
          <p>These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction].</p>

          <p>By using MySocialNet, you acknowledge that you have read, understood, and agree to these terms and conditions.</p>
        </div>
      </Page>
    </>
  );
}

export default Terms;
