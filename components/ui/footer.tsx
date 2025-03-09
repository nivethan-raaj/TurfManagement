"use client"

import React, { useState, type FormEvent } from "react"

// Define interfaces for our data structures
interface QuickLink {
  name: string
  url: string
}

const Footer: React.FC = () => {
  // State for hover effects with proper typing
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredButton, setHoveredButton] = useState<boolean>(false)

  // Function to handle newsletter subscription
  const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    alert("Thank you for subscribing to our newsletter!")
    // Reset the form
    e.currentTarget.reset()
  }

  // Quick links data
  const quickLinks: QuickLink[] = [
    { name: "Home", url: "http://localhost:3000/" },
    { name: "About", url: "http://localhost:3000/about" },
    { name: "Book", url: "http://localhost:3000/book" },
    { name: "Rent", url: "http://localhost:3000/rent" },
    { name: "Tournament & Coach", url: "http://localhost:3000/tournament" },
  ]

  // Policy links
  const policyLinks: string[] = ["Privacy Policy", "Terms of Service", "Cookie Policy"]

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Logo and About Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>TURFMASTER</h3>
          <p style={styles.footerText}>
          TurfMaster provides professional turf management and maintenance services to keep lawns and landscapes healthy, vibrant, and well-maintained.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Quick Links</h3>
          <ul style={styles.linkList}>
            {quickLinks.map((link, index) => (
              <li key={index} style={styles.linkItem}>
                <a
                  href={link.url}
                  style={{
                    ...styles.footerLink,
                    ...(hoveredLink === link.name ? styles.footerLinkHover : {}),
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                  <span
                    style={{
                      ...styles.linkUnderline,
                      width: hoveredLink === link.name ? "100%" : "0",
                    }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Stay Updated</h3>
          <p style={styles.footerText}>
          Subscribe to our newsletter for expert turf care tips, maintenance techniques, and the latest in turf management solutions.
          </p>
          <form onSubmit={handleSubscribe} style={styles.subscribeForm}>
            <input type="email" placeholder="Your email address" required style={styles.emailInput} />
            <button
              type="submit"
              style={{
                ...styles.subscribeButton,
                ...(hoveredButton ? styles.subscribeButtonHover : {}),
              }}
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>Contact Us</h3>
          <p style={styles.contactInfo}>
            <span style={styles.contactLabel}>Email:</span>
            <a
              href="mailto:g.nivethanraajt@gmail.com"
              style={{
                ...styles.emailLink,
                ...(hoveredLink === "email" ? styles.emailLinkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink("email")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              nivethanraajt@gmail.com
            </a>
          </p>
          <p style={styles.contactInfo}>
            <span style={styles.contactLabel}>Support:</span> 24/7 AI-powered assistance
          </p>
          <p style={styles.contactInfo}>
            <span style={styles.contactLabel}>Contact:</span>+91 7708409636
          </p>
          <p style={styles.contactInfo}>
            <span style={styles.contactLabel}>Location:</span> India, Srilanka
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Copyright Section */}
      <div style={styles.copyrightSection}>
        <p style={styles.copyright}>&copy; {new Date().getFullYear()} TURFMASTER. All rights reserved.</p>
        <div style={styles.footerLinks}>
          {policyLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href="#"
                style={{
                  ...styles.policyLink,
                  ...(hoveredLink === `policy-${index}` ? styles.policyLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink(`policy-${index}`)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link}
              </a>
              {index < 2 && <span style={styles.dividerDot}>•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={styles.decorativeElement1}></div>
      <div style={styles.decorativeElement2}></div>
    </footer>
  )
}

// Define the styles with TypeScript interface
interface StylesDictionary {
  [key: string]: React.CSSProperties
}

const styles: StylesDictionary = {
  footer: {
    backgroundColor: "#000000",
    background: "linear-gradient(135deg, #000000, #1a1a1a 75%, #333333)",
    padding: "60px 40px 30px",
    color: "#ffffff",
    position: "relative",
    overflow: "hidden",
    marginTop: "80px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.1)",
  },
  footerContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  footerSection: {
    flex: "1 1 250px",
    margin: "0 15px 30px",
    minWidth: "250px",
  },
  footerHeading: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
    position: "relative",
    paddingBottom: "10px",
    color: "#ffffff",
  },
  footerText: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#cccccc",
    marginBottom: "20px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: "12px",
  },
  footerLink: {
    color: "#cccccc",
    textDecoration: "none",
    fontSize: "15px",
    position: "relative",
    display: "inline-block",
    transition: "color 0.3s ease",
  },
  footerLinkHover: {
    color: "#ffffff",
  },
  linkUnderline: {
    position: "absolute",
    bottom: "-3px",
    left: 0,
    height: "2px",
    backgroundColor: "#9333ea",
    transition: "width 0.3s ease",
  },
  subscribeForm: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
  },
  emailInput: {
    padding: "12px 15px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "10px",
    outline: "none",
    transition: "background-color 0.3s ease",
  },
  subscribeButton: {
    padding: "12px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#9333ea",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  subscribeButtonHover: {
    backgroundColor: "#7928ca",
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(147, 51, 234, 0.4)",
  },
  contactInfo: {
    marginBottom: "12px",
    fontSize: "15px",
    color: "#cccccc",
  },
  contactLabel: {
    fontWeight: "bold",
    color: "#ffffff",
    marginRight: "5px",
  },
  emailLink: {
    color: "#9333ea",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  emailLinkHover: {
    color: "#7928ca",
    textDecoration: "underline",
  },
  divider: {
    height: "1px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: "30px auto",
    maxWidth: "1200px",
  },
  copyrightSection: {
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  copyright: {
    fontSize: "14px",
    color: "#888888",
    margin: "0 0 15px",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  policyLink: {
    color: "#888888",
    textDecoration: "none",
    fontSize: "14px",
    margin: "0 5px",
    transition: "color 0.3s ease",
  },
  policyLinkHover: {
    color: "#ffffff",
  },
  dividerDot: {
    color: "#888888",
    margin: "0 5px",
  },
  decorativeElement1: {
    position: "absolute",
    top: "50px",
    left: "5%",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0) 70%)",
    zIndex: 1,
  },
  decorativeElement2: {
    position: "absolute",
    bottom: "50px",
    right: "5%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0) 70%)",
    zIndex: 1,
  },
}

export default Footer

