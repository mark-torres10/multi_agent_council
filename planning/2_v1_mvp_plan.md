# ChatGPT UI Replica - MVP Development Plan

This document outlines the step-by-step plan to create a front-end replica of the ChatGPT user interface using Next.js. The goal is to build a functional MVP that can be deployed to Vercel.

## Phase 1: Project Setup and "Hello World"

**Goal:** Initialize a new Next.js project and deploy a minimal "Hello World" page to Vercel to ensure the deployment pipeline is working.

**Requirements:**
*   Node.js and npm (or yarn/pnpm) installed on your local machine.
*   A GitHub account.
*   A Vercel account.

**Success Criteria:**
*   A new Next.js application is created locally.
*   The application is connected to a new GitHub repository.
*   The application is deployed to Vercel.
*   A "Hello World" message is visible when accessing the Vercel deployment URL.

**Testing:**
1.  Run `npm run dev` locally to verify the app runs.
2.  Visit the Vercel URL provided after deployment and confirm that "Hello World" is displayed.

**Implementation Steps:**
1.  **Create Next.js App:**
    ```bash
    npx create-next-app@latest chatgpt-ui --typescript --tailwind --eslint
    ```
2.  **Modify Homepage:**
    *   Open `app/page.tsx`.
    *   Replace the existing content with a simple `<h1>Hello World</h1>`.
3.  **Create GitHub Repository:**
    *   Create a new repository on GitHub.
    *   Initialize git in your local project, commit the changes, and push to the new repository.
4.  **Deploy to Vercel:**
    *   Log in to your Vercel account.
    *   Create a new project and connect it to your GitHub repository.
    *   Vercel will automatically detect that it's a Next.js project and deploy it.

## Phase 2: Core UI Layout

**Goal:** Create the basic layout of the application, including a sidebar for chat history and a main area for the conversation.

**Requirements:**
*   A `Layout` component that defines the overall structure.
*   A `Sidebar` component (placeholder).
*   A `ChatArea` component (placeholder).

**Success Criteria:**
*   The application displays a sidebar on the left and a main content area on the right.
*   The layout is responsive.

**Testing:**
*   Run `npm run dev` and open `http://localhost:3000`.
*   You should see the sidebar and chat area laid out. Resize the browser window to check for responsiveness.

**Implementation Steps:**
1.  **Create Components:**
    *   `app/components/Sidebar.tsx`: A simple component with a dark background and some placeholder text.
    *   `app/components/ChatArea.tsx`: A simple component that will contain the conversation and input form.
2.  **Update `app/page.tsx`:**
    *   Import the `Sidebar` and `ChatArea` components.
    *   Use Flexbox or CSS Grid to create the two-column layout.

## Phase 3: Chat Input Component

**Goal:** Create a form at the bottom of the chat area for users to input their queries.

**Requirements:**
*   A `ChatInput` component.
*   A text area for input and a submit button.
*   The form should handle user input and submission. For now, it will just log the input to the console.

**Success Criteria:**
*   The chat input form is visible at the bottom of the `ChatArea`.
*   Typing in the text area and clicking the submit button logs the input to the browser's developer console.

**Testing:**
1.  Run `npm run dev` and open `http://localhost:3000`.
2.  Open the developer console in your browser.
3.  Type a message in the input field and click submit.
4.  Verify that the message is logged to the console.

**Implementation Steps:**
1.  **Create `app/components/ChatInput.tsx`:**
    *   Create a form with a `<textarea>` and a `<button>`.
    *   Use the `useState` hook to manage the input's value.
    *   Create an `onSubmit` handler that prevents the default form submission, logs the input value, and clears the input.
2.  **Add to `ChatArea.tsx`:**
    *   Import and render the `ChatInput` component inside the `ChatArea`.

## Phase 4: Conversation View

**Goal:** Display the conversation between the user and the (stubbed) AI.

**Requirements:**
*   A `Conversation` component to display the list of messages.
*   A `Message` component to render individual messages.
*   State management (`useState`) in `app/page.tsx` to hold the conversation history.
*   A stubbed response function that returns a default message.

**Success Criteria:**
*   When a user submits a message, it appears in the conversation view.
*   Immediately after the user's message, a stubbed response from the "AI" appears.
*   The conversation view automatically scrolls to the latest message.

**Testing:**
1.  Run `npm run dev` and open `http://localhost:3000`.
2.  Send a message using the chat input.
3.  Verify that your message and the AI's stubbed response are displayed in the correct order.

**Implementation Steps:**
1.  **Create `app/components/Message.tsx`:**
    *   A component that takes `role` ("user" or "assistant") and `content` as props.
    *   It should have different styling based on the `role`.
2.  **Create `app/components/Conversation.tsx`:**
    *   A component that takes an array of messages as a prop and maps over them to render `Message` components.
3.  **Update `app/page.tsx`:**
    *   Create a state variable `messages` using `useState`.
    *   Update the `ChatInput`'s submission handler to add the user's message to the `messages` array.
    *   After adding the user's message, add a hardcoded "assistant" message to the array.
    *   Pass the `messages` array to the `Conversation` component.

## Phase 5: Chat History Sidebar

**Goal:** Display a list of past conversations in the sidebar.

**Requirements:**
*   State management to hold a list of conversations.
*   The `Sidebar` component will be updated to display this list.
*   A "New Chat" button.

**Success Criteria:**
*   Each new conversation creates a new entry in the sidebar.
*   Clicking the "New Chat" button clears the current conversation.

**Testing:**
1.  Run `npm run dev` and open `http://localhost:3000`.
2.  Have a short conversation.
3.  Click the "New Chat" button.
4.  Verify that the current conversation is cleared and a new item appears in the sidebar representing the previous chat.

**Implementation Steps:**
1.  **Update `app/page.tsx`:**
    *   Create a state variable `chatHistory` to store an array of conversations.
    *   When a new chat is started (e.g., after the first message is sent in a new session), save the current `messages` to `chatHistory`.
2.  **Update `app/components/Sidebar.tsx`:**
    *   Add a "New Chat" button.
    *   The component should receive `chatHistory` as a prop and display it as a list.
    *   The "New Chat" button's `onClick` handler should clear the `messages` state.

## Phase 6: Styling and Final Touches

**Goal:** Apply styling to make the UI closely resemble ChatGPT, and add final touches.

**Requirements:**
*   Use Tailwind CSS for styling.
*   Create a dark mode theme.
*   Add icons for the submit button and user/assistant messages.
*   Ensure the layout is polished and professional.

**Success Criteria:**
*   The UI has a dark background, similar to ChatGPT.
*   The distinction between user and AI messages is clear.
*   The overall look and feel is clean, modern, and intuitive.

**Testing:**
*   Visual inspection on `http://localhost:3000`.
*   Compare the UI to screenshots of ChatGPT.

**Implementation Steps:**
1.  **Global Styles:**
    *   Modify `app/globals.css` and `tailwind.config.ts` to set up the dark theme, fonts, and colors.
2.  **Component-Level Styling:**
    *   Apply Tailwind CSS classes to all components to match the desired look and feel.
3.  **Icons:**
    *   Use an icon library like `react-icons` to add icons.

## Phase 7: Vercel Deployment

**Goal:** Deploy the completed MVP to Vercel.

**Requirements:**
*   All code is pushed to the GitHub repository.

**Success Criteria:**
*   The full application is live and functional on the Vercel URL.

**Testing:**
*   Interact with the deployed application on Vercel, testing all functionality.
