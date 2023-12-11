import error_page from "../../assets/errorpage.svg";

function ErrorPage() {
  return (
    <>
      <div
        className="error "
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <img
          src={error_page}
          alt="404 error picture"
          width="60%"
          height="60%"
        />
      </div>
    </>
  );
}

export default ErrorPage;
