import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    borderTop: "1px solid #ddd",
    fontSize: "0.9rem",
    color: "#333",
  },
};

export default Footer;
