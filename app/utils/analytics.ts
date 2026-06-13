
export const handleDownloadClick = () => {
  window.open("http://cdn.rawencat.tech/rawr_0.1.0_x64_en-US.msi", "_blank");

  fetch("/api/downloadlog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userAgent: navigator.userAgent,
    }),
  }).catch((err) => {
    console.error("Error al registrar la descarga:", err);
  });
};