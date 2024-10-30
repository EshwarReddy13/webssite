import "./PageHeader.css";

const PageHeader = ({ pageTitle }) => {
  return (
    <div className="page-header-container">
      <h1>{pageTitle}</h1>
    </div>
  );
};

export default PageHeader;
