import React from "react";

const SupportPage = () => {
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
            color: "#333",
          }}
        >
          Support Center
        </h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Need help? We're here to assist you. Find answers to common questions or contact our support team.
        </p>

        <div className="md:flex gap-10">
          {/* Contact Form */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Contact Us</h2>
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your message here"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#4a4a4a",
                  color: "#fff",
                  padding: "0.8rem 1.5rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="md:w-1/2">
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Frequently Asked Questions</h2>
            <div style={{ marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                How can I reset my password?
              </h3>
              <p>Go to the login page and click "Forgot Password" to reset your password.</p>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                How can I delete my account?
              </h3>
              <p>
                If you'd like to delete your account, please contact our support team using the form above.
              </p>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                How do I post a blog on this platform?
              </h3>
              <p>
                To post a blog, log in to your account and navigate to the "Create Blog" section from your dashboard.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Need further assistance?
              </h3>
              <p>
                If your question isn't listed here, please reach out using the form, and our team will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
