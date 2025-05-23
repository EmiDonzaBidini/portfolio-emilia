import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  if (!seo || !greeting) {
    return null;
  }

  let sameAs = socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .map((media) => media.link);

  let mail = socialMediaLinks.find((media) => media.link.startsWith("mailto"))?.link?.substring("mailto:".length) ?? "";

  let job = experience?.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0);

  let credentials = [];
  certifications?.certifications?.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification?.certificate_link,
      name: certification?.title,
      description: certification?.subtitle,
    });
  });

  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting?.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData?.phoneSection?.title ?? "",
    sameAs: sameAs,
    jobTitle: job?.title ?? "",
    worksFor: {
      "@type": "Organization",
      name: job?.company ?? "",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData?.addressSection?.locality ?? "",
      addressRegion: contactPageData?.addressSection?.region ?? "",
      addressCountry: contactPageData?.addressSection?.country ?? "",
      postalCode: contactPageData?.addressSection?.postalCode ?? "",
      streetAddress: contactPageData?.addressSection?.streetAddress ?? "",
    },
    hasCredential: credentials,
  };

  return (
    <Helmet>
      <title>{seo?.title ?? "Portfolio"}</title>
      <meta name="description" content={seo?.description ?? "Portfolio"} />
      <meta property="og:title" content={seo?.og?.title ?? "Portfolio"} />
      <meta property="og:type" content={seo?.og?.type ?? "website"} />
      <meta property="og:url" content={seo?.og?.url ?? "/"} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;