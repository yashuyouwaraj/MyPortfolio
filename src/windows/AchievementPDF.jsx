import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const AchievementPDF = () => {
  const { windows } = useWindowStore();
  const achievementData = windows.achievementpdf?.data || {};
  const { name = "Achievement", file = "" } = achievementData;

  return (
    <>
      <div id="window-header">
        <WindowControls target="achievementpdf" />
        <h2>{name}</h2>
      </div>
      {file && (
        <Document file={`files/${file}`}>
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Document>
      )}
    </>
  );
};

const AchievementPDFWindow = WindowWrapper(AchievementPDF, "achievementpdf");

export default AchievementPDFWindow;
