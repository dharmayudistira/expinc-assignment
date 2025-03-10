# **Expinc AI Chatbot Assignment**  

This project is an **AI-powered chatbot** with a questionnaire system that recommends suitable assistance packages based on user responses. The chatbot uses **OpenAI's API** for natural language understanding and **Supabase** as the database for storing user interactions.  

## **Tech Stack**  
- **Frontend:** Next.js, TypeScript, Tailwind CSS  
- **Backend:** Supabase (Database & Authentication)  
- **AI Processing:** OpenAI API (GPT-4)  
- **State Management:** React Hooks  

## **Project Architecture**  

The system follows this structure:  

```bash
Frontend <--> Supabase 
|
v
OpenAI (Chatbot)
```

### **Workflow Explanation**  
1. **User interacts** with the chatbot via the frontend (Next.js).  
2. The frontend **sends user input** to OpenAI's API for processing.  
3. OpenAI **generates a response** based on predefined prompts.  
4. The response is **displayed in the frontend** and **stored in Supabase**.  

## **Chatbot Prompt Configuration**  

The chatbot behavior is configured in **`src/lib/prompt.ts`**. This file contains the **initial system prompt**, which guides the chatbot’s response style and logic. You can modify this file to fine-tune the chatbot’s behavior.  

## **Getting Started**  

### **1. Clone the Repository**  
```bash
git clone https://github.com/dharmayudistira/expinc-assignment.git
cd expinc-assignment
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Setup Environment**
Create a .env.local file and add your OpenAI API Key and Supabase credentials:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

### **4. Run Development Server**
```bash
npm run dev
```
Then open http://localhost:3000/ in your browser. 🚀