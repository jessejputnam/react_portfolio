// Import React tools
import { useState } from "react";

// Import PDF tools
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

// Import CSS
import styles from "./Pdf.module.css";

const Pdf = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNum(1);
  }

  function changePage(offset) {
    setPageNum((prevPageNum) => prevPageNum + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <div className={styles.Pdf}>
      <Document
        className={styles.resumePdf}
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode='canvas'
      >
        <Page scale={1.3} pageNumber={pageNum} />
      </Document>
      <div className={styles.pdfNav}>
        <p>
          Page {pageNum || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className={styles.navBtns}>
          <button type='button' disabled={pageNum <= 1} onClick={previousPage}>
            Previous
          </button>
          <button
            type='button'
            disabled={pageNum >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>

      <div className={styles.download_container}>
        <a href={pdf} target='_blank' rel='noreferrer'>
          <button>View Resume</button>
        </a>

        <FontAwesomeIcon icon={faReadme} size='8x' />
      </div>
    </div>
  );
};

export default Pdf;
