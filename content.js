// Run this script whenever the LinkedIn jobs page is loaded or refreshed
const highlightAppliedJobs = () => {
    console.log("Highlighting applied jobs...");
  
    // Select all job cards dynamically
    document.querySelectorAll(".job-card-container").forEach((jobCard) => {
      const jobCardText = jobCard.innerText.toLowerCase(); // Get the card's text
  
      // Check if it contains the "Applied" label (case-insensitive)
      if (jobCardText.includes("applied")) {
        console.log("Found an applied job:", jobCardText);
        
        // Highlight the job card
        jobCard.style.border = "2px solid red"; // Add a red border
        jobCard.style.backgroundColor = "#ffe6e6"; // Light red background
      }

      // Check if the job is "Viewed"
      if (jobCardText.includes("viewed")) {
        console.log("Found a viewed job:", jobCardText);
  
        // Highlight the job card for "Viewed"
        jobCard.style.border = "2px solid blue"; // Blue border for viewed jobs
        jobCard.style.backgroundColor = "#e6f2ff"; // Light blue background
      }
    });
  };
  
  // Observe DOM changes to handle LinkedIn's dynamic loading (infinite scrolling)
  const observer = new MutationObserver(() => {
    highlightAppliedJobs(); // Run the highlight function when the DOM changes
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Initial run
  highlightAppliedJobs();
  