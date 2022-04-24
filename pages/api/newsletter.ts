import { NextApiRequest, NextApiResponse } from "next";
import { isValidEmail } from "@shm/utils";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY as string;

function addEmailAsContact(email: string) {
  const REQUEST_URL = "https://api.sendinblue.com/v3/contacts";
  return axios({
    url: REQUEST_URL,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": API,
    },
    data: {
      email,
    },
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }
  const { email } = req.body;
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    const response = await addEmailAsContact(email);
    if (response.status === 201) {
      return res.status(201).json({ message: "Success" });
    }
  } catch (error: any) {
    if (error.response) {
      console.log(error.response);
      switch (error.response.data.code) {
        case "duplicate_parameter":
          return res.status(400).json({ code: "", error: "Invalid Request" });
        default:
          return res.status(500).json({ code: "", error: "Internal server error" });
      }
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}
