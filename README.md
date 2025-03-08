# AI Email Reply Generator

This project is divided into two parts:
- **Backend**: `email-writer-sb` (Spring Boot)
- **Frontend**: `email-writer-react` (React)

---

# Frontend - `email-writer-react`

## Prerequisites
- Node.js (v18+ recommended)
- Vite
- GitHub Pages (for deployment)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Swathi-Mishra/email-writer-react.git
   cd email-writer-react
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the **`vite.config.js`** file:
   ```javascript
   base: '/email-writer-react/'
   ```
4. Update the **`App.js`** API endpoint:
   ```javascript
   const response = await axios.post('https://email-writer-sb-04ng.onrender.com/api/email/generate', {
   ```
5. Deploy to GitHub Pages:
   ```bash
   npm run build
   npm run deploy
   ```

## URL Access
- **Backend:** [Render Deployment Link](https://email-writer-sb-04ng.onrender.com)
- **Frontend:** [GitHub Pages Link](https://Swathi-Mishra.github.io/email-writer-react)

---

# Related Projects
- [Email Writer Backend](https://github.com/Swathi-Mishra/email-writer-sb)

---

# Additional Notes
- Ensure proper CORS configuration in the backend for successful requests.
- Clear browser cache if frontend updates are not reflected immediately.

If you face any issues, refer to:
- [Render Troubleshooting Guide](https://render.com/docs/troubleshooting-deploys)
- [GitHub Pages Documentation](https://pages.github.com/)

