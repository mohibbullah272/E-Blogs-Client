import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        color: "#4a4a4a",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#333", // Slightly darker for heading
          }}
        >
          Privacy Policy
        </h1>
        <p>
          Welcome to our e-blog! Your privacy is critically important to us. This privacy policy explains how we collect, use, and safeguard your personal information when you use our website.
        </p>

        <h2 style={{ fontSize: "1.8rem", margin: "1.5rem 0" }}>1. Information We Collect</h2>
        <p>
          We may collect the following information:
          <ul style={{ marginLeft: "1.5rem", listStyle: "disc" }}>
            <li>Your name, email address, and contact information.</li>
            <li>Usage data, including how you interact with our website.</li>
            <li>Any content you submit, such as comments or blog posts.</li>
          </ul>
        </p>

        <h2 style={{ fontSize: "1.8rem", margin: "1.5rem 0" }}>2. How We Use Your Information</h2>
        <p>
          We use the collected information to:
          <ul style={{ marginLeft: "1.5rem", listStyle: "disc" }}>
            <li>Provide and improve our services.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Send newsletters or updates .</li>
          </ul>
        </p>

        <h2 style={{ fontSize: "1.8rem", margin: "1.5rem 0" }}>3. Cookies and Tracking</h2>
        <p>
          We use cookies to enhance your browsing experience. You can control your cookie preferences in your browser settings.
        </p>

        <h2 style={{ fontSize: "1.8rem", margin: "1.5rem 0" }}>4. Third-Party Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners for operational purposes, but only with your consent.
        </p>

        <h2 style={{ fontSize: "1.8rem", margin: "1.5rem 0" }}>5. Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy policy, feel free to contact us at <a href="mailto:info@e-blog.com" style={{ color: "#007BFF", textDecoration: "underline" }}>info@e-blog.com</a>.
        </p>

        <p style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
          © 2025 e-Blog. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
