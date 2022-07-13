import { NextApiRequest, NextApiResponse } from "next";
import { isValidEmail } from "@shm/utils";
import axios from "axios";
import { sourceToListIdMap } from "../../constants/common";
import { validSources } from "../../types";

const API = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY as string;

function addEmailAsContact(email: string, sources: validSources[]) {
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
      listIds: sources.map((src) => sourceToListIdMap[src]),
    },
  });
}

const validateSource = (source: validSources[]) => source.every((src) => src in sourceToListIdMap);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }
  const { email, source: sources } = req.body;
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (!validateSource(sources) || !Array.isArray(sources)) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  try {
    const response = await addEmailAsContact(email, sources);
    if (response.status === 201) {
      return res.status(201).json({ message: "Success" });
    }
  } catch (error: any) {
    if (error.response) {
      // console.log(error.response);
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
