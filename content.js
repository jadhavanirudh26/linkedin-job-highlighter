const highlightAppliedJobs = () => {
  console.log("Highlighting applied jobs...");

  document.querySelectorAll(".job-card-job-posting-card-wrapper").forEach((jobCard) => {
    const footerItems = jobCard.querySelectorAll(
      ".job-card-job-posting-card-wrapper__footer-item.t-bold"
    );

    footerItems.forEach((item) => {
      const text = item.innerText.toLowerCase();

      if (text.includes("applied")) {
        jobCard.style.border = "2px solid red";
        jobCard.style.backgroundColor = "#ffe6e6";
        console.log("Applied job highlighted.");
      } else if (text.includes("viewed")) {
        jobCard.style.border = "2px solid blue";
        jobCard.style.backgroundColor = "#e6f2ff";
        console.log("Viewed job highlighted.");
      } else if (text.includes("saved")) {
        jobCard.style.border = "2px solid green";
        jobCard.style.backgroundColor = "#e6ffe6";
        console.log("Saved job highlighted.");
      }
    });
  });
};

// Observer to handle LinkedIn's dynamic loading
const observer = new MutationObserver(() => {
  highlightAppliedJobs();
});

observer.observe(document.body, { childList: true, subtree: true });

// Initial call
highlightAppliedJobs();
