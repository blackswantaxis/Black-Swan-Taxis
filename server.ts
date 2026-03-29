import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/book", async (req, res) => {
    const { name, phone, pickup, destination, date, time, wheelchairType, returnTrip, notes } = req.body;

    // Create a transporter
    // Note: User needs to provide EMAIL_USER and EMAIL_PASS in environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'blackswantaxiswa@gmail.com',
      subject: `New Booking Request from ${name}`,
      text: `
        New Booking Request Details:
        
        Name: ${name}
        Phone: ${phone}
        Pickup: ${pickup}
        Destination: ${destination}
        Date: ${date}
        Time: ${time}
        Wheelchair Type: ${wheelchairType}
        Return Trip: ${returnTrip ? 'Yes' : 'No'}
        Notes: ${notes}
      `,
    };

    try {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("Email credentials not configured. Skipping email send.");
        // We'll still return success to the user for the demo, but log the warning
        return res.json({ success: true, message: "Booking received (Email not sent - credentials missing)" });
      }

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
