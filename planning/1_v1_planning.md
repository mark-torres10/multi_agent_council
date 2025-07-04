# Multi-Persona AI Panel App — Product Requirements Document (PRD)

## 🧩 Overview

This app allows users to input a question and receive responses from multiple AI personas (e.g., Engineer, Salesperson, Product Manager). Each persona answers the question from its perspective, and an aggregator agent summarizes the collective responses and proposes actionable next steps. The goal is to simulate multi-role decision-making or brainstorming.

---

## 🎯 Goals

- Enable question input from user
- Visualize persona responses in structured cards
- Show aggregated insights and next steps
- Easy to deploy (via Streamlit Cloud)

---

## 🧠 Key Features

### Input
- Text input box for user to enter a question

### Multi-Persona Agents
- Engineer
- Salesperson
- Product Manager

Each agent:
- Receives the question
- Responds from its role using a system prompt
- Returns structured JSON including:
  - `persona` (name)
  - `role` (summary of perspective)
  - `response` (natural language output)
  - `confidence` (High/Medium/Low)
  - `focus_areas` (bullet list)

### Aggregator Agent
- Receives all persona responses
- Summarizes:
  - Key agreements or disagreements
  - Themes across personas
  - 2–3 recommended next steps

### Frontend (Streamlit)
- Input box at the top
- Persona panels displayed horizontally (cards with persona thoughts)
- Aggregated summary at the bottom
- Optional confidence visual indicator (emoji or color badge)

---

## 🧱 Project Structure
``
multi_persona_panel/
├── app.py # Main Streamlit app
├── agents.py # Persona logic
├── aggregator.py # Aggregator logic
├── requirements.txt # Package dependencies
└── .streamlit/
└── secrets.toml # OpenAI API key (for local dev)
```


---

## 🔧 Tech Stack

| Layer     | Tool                     |
|-----------|--------------------------|
| Backend   | LangChain + OpenAI       |
| Frontend  | Streamlit                |
| Hosting   | Streamlit Cloud          |
| Prompting | System prompts per agent |

---

## 🔁 Data Flow

1. User enters question
2. Each persona agent is called in parallel
3. JSON responses collected
4. Aggregator agent consumes them and generates a summary
5. Streamlit UI displays all outputs in a clean layout

---

## 🚀 Deployment Plan

1. Create a GitHub repo with the project files
2. Push `app.py`, `agents.py`, `aggregator.py`, and `requirements.txt`
3. Go to https://streamlit.io/cloud
4. Log in with GitHub and connect your repo
5. Configure secrets:
   - Either use the dashboard UI to enter your `OPENAI_API_KEY`
   - Or include a `.streamlit/secrets.toml` file locally
6. Launch and test!

---

## 📦 Requirements.txt Template

```text
streamlit
langchain
openai
```

