import useThemeStore from "#store/theme";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle-btn"
      aria-label="Toggle dark mode"
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? (
        // Sun icon for dark mode (switch to light)
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM4.47 4.47a.75.75 0 011.06 0l1.414 1.414a.75.75 0 01-1.06 1.06L4.47 5.53a.75.75 0 010-1.06zm15.06 0a.75.75 0 010 1.06l-1.414 1.414a.75.75 0 01-1.06-1.06l1.414-1.414a.75.75 0 011.06 0zM2.25 12a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm17 0a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zM4.47 19.53a.75.75 0 011.06 0l1.414 1.414a.75.75 0 11-1.06 1.06L4.47 20.59a.75.75 0 010-1.06zm15.06 0a.75.75 0 011.06 1.06l-1.414 1.414a.75.75 0 01-1.06-1.06l1.414-1.414zM12 17a5 5 0 100-10 5 5 0 000 10z" />
        </svg>
      ) : (
        // Moon icon for light mode (switch to dark)
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.64 15.95a7.007 7.007 0 01-8.59 8.59A7.007 7.007 0 015.95 2.36a7.004 7.004 0 1015.69 13.59z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
