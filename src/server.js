 import express from "express";
import bodyParser from "body-parser";
import { google } from "googleapis";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" })); // Adjust for your frontend URL

// Google Sheets API Setup
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetId = "1pjRnnF8VIZMd36DCJuY77kybubn1ow_Ejn0VGKlF3Ts";

app.post("/submit-form", async (req, res) => {
  console.log("Received body:", req.body); // Log incoming data
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const {
      fullName = "",
      email = "",
      phone = "",
      company = "",
      website = "",
      businessType = "",
      companySize = "",
      industry = "",
      services = "",
      projectType = "",
      urgency = "",
      budget = "",
      projectDescription = "",
      goals = "",
      challenges = "",
      preferredCommunication = "",
      timezone = "",
      additionalNotes = "",
    } = req.body;

    const values = [
      [
        fullName,
        email,
        phone,
        company,
        website,
        businessType,
        companySize,
        industry,
        services,
        projectType,
        urgency,
        budget,
        projectDescription,
        goals,
        challenges,
        preferredCommunication,
        timezone,
        additionalNotes,
      ],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:A", // Append to next available row
      valueInputOption: "RAW", // Use RAW for consistency
      resource: { values },
    });

    console.log("Sheets API response:", response.data);
    res.status(200).send("Data added successfully");
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).send(`Error adding data: ${error.message}`);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));




