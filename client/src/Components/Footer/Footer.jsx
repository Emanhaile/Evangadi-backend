import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import footerLogo from "../../Images/evangadi-logo-footer (1).png";

const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* Main content */}
      <main className="flex-grow ">
        {/* Main page content goes here */}
      </main>

      {/* Footer */}
      <footer className="bg-[#3a4559] p-12 text-white  ">
        <section className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="flex-1">
            <img
              src={footerLogo}
              className="w-full max-w-[250px] mb-5"
              alt="Footer Logo"
            />
            <div className="flex space-x-4">
              <a
                href=""
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full transition hover:bg-red-600"
              >
                <FacebookRoundedIcon />
              </a>
              <a
                href=""
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-pink-600 transition"
              >
                <InstagramIcon />
              </a>
              <a
                href=""
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-red-600 transition"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-5">Useful Links</h3>
            <div className="space-y-2 opacity-80">
              <p>
                <a href="#" className="no-underline hover:underline text-white">
                  How it works
                </a>
              </p>
              <p>
                <a href="#" className="no-underline hover:underline text-white">
                  Terms of Service
                </a>
              </p>
              <p>
                <a href="#" className="no-underline hover:underline text-white">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-5">Contact Information</h3>
            <div className="space-y-2 opacity-80">
              <p>Evangadi Networks</p>
              <p>support@evangadi.com</p>
              <p>+1-202-386-2702</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
