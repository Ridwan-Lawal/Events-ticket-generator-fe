import FormContextProvider from "@/app/_lib/contexts/FormContext";
import { roboto } from "@/app/_styles/font";
import NavBar from "@/app/_ui/NavBar";
import "@_styles/globals.css";
import { Toaster } from "react-hot-toast";

interface Metadata {
  title: {
    template: string;
    default: string;
  };
  description: string;
}

export const metadata: Metadata = {
  title: {
    template: "%s - Ticket Generator",
    default: "Welcome - Print your ticket",
  },
  description:
    "Welcome, print your ticket for the upcoming Techember fest 25 and join us for an unforgettable experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} space-y-[30px] md:space-y-[48px] px-5 pt-8`}
      >
        {/* navigation bar */}
        <header>
          <NavBar />
        </header>

        <FormContextProvider>
          <main>{children}</main>
        </FormContextProvider>

        <Toaster />
      </body>
    </html>
  );
}

// using step
// store the first part in redux
// return the form from the server action after validation, and store in redux also
