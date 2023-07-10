export const metadata = {
  title: "  App",
  description: "next app js",
  generator: "Next.js",
  themeColor: "cyan",
  applicationName: "uday app",
  metadataBase: new URL("https://uadysa.vercel.app/"),
  alternates: {
    canonical: "/link",
  },
  // i just try to check twitter card image not showing
  twitter: {
    card: "summary_large_image",
    title: "Twitter Card check ",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://uadysa.vercel.app//do.jpg",
      alt: "Alt logo",
    },
  },

  openGraph: {
    title:
      "Create a BMI Calculator using Google Forms and Google Sheets - Digital Inspiration",
    description:
      "Build your own BMI calculator app with Google Forms. The BMI report is generated in Google Sheets and the user receives an email with the BMI score.",
    url: "https://uadysa-techudaymungalpara.vercel.app",
    type: "article",
    siteName: "Next.js",
    images: [
      {
        url: "/ikio.jpg",
        width: 800,
        height: 600,
        alt: "My custom alt",
      },
      {
        url: "/ikio.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <p>Hello</p>
    </>
  );
}
