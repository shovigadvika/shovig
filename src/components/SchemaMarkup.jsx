import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shovig Business Solution",
    image: "https://www.shovig.in/logo.png",
    url: "https://www.shovig.in",
    telephone: ["+918870173336", "+918680850380"],
    email: "info@shovig.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8/45 Vee Vee Illam, Sardha Nagar, BK Pudur, Kuniyamuthur",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641008",
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/shovig.in/",
      "https://www.instagram.com/shovig_/"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
