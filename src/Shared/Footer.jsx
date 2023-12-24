const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-gray-200 py-8 mt-16 ">
      <div className="container mx-auto px-2 ">
        <p className="text-center text-light">
          Copyright &copy; {year} |{" "}
          <a
            rel="noreferrer"
            className="text-primary font-bold"
            href="https://www.linkedin.com/in/sabbir10s/"
            target="_blank"
          >
            Sabbir Ahmed
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
