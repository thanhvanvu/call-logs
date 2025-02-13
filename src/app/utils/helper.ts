// Helper function to read a file as text
const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (e) => resolve(e?.target?.result as string);
    reader.onerror = () => reject(new Error("Failed to read the file."));
  });
};

export { readFileAsText };
