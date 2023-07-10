export const metadata = {
  title: "  App",
  description: "next app js",
  generator: "Next.js",
  themeColor: "cyan",
  applicationName: "uday app",
  metadataBase: new URL("https://opengraph-image-one.vercel.app/"),
  alternates: {
    canonical: "/link",
  },

  openGraph: {
    title:
      "Create a BMI Calculator using Google Forms and Google Sheets - Digital Inspiration",
    description:
      "Build your own BMI calculator app with Google Forms. The BMI report is generated in Google Sheets and the user receives an email with the BMI score.",
    url: "https://nextjs.org",
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
