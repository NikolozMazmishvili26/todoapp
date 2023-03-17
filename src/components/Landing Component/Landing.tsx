import { useEffect, useState } from "react";

// import styles
import {
  BackgroundImage,
  LandingContainer,
  LandingTitle,
  LandingTitleContainer,
  TodoBox,
} from "./LandingStyles";

// import components
import Header from "../Header Component/Header";
import CreateTodoInput from "../Create Todo Input Component/CreateTodoInput";

function Landing() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("theme") || "true")
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <LandingContainer
      isDarkMode={isDarkMode}
      animate={{
        backgroundColor: isDarkMode
          ? "var(--very-dark-blue)"
          : "var(--very-light-gray)",
      }}
      transition={{ duration: 0.2 }}
    >
      <BackgroundImage isDarkMode={isDarkMode} />
      <TodoBox>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <CreateTodoInput isDarkMode={isDarkMode} />
      </TodoBox>
      {/* landing title container */}
      <LandingTitleContainer>
        {" "}
        <LandingTitle isDarkMode={isDarkMode}>
          Drag and drop to reorder list
        </LandingTitle>
      </LandingTitleContainer>
    </LandingContainer>
  );
}

export default Landing;
