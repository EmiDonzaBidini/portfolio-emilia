import React from "react";
import {
  SiPowerbi, SiMicrosoftexcel, SiGoogledatastudio, SiTableau,
  SiTrello, SiNotion, SiAsana, SiSlack, SiGoogle,
  SiHubspot, SiSalesforce, SiZoho,
  SiGoogleads, SiFacebook, SiGoogleanalytics, SiMaildotru, SiHootsuite, SiUbersuggest, SiSemrush, SiOdoo,
  SiCanva, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro,
  SiScrumalliance, SiJirasoftware, SiSelenium, SiGoogleappsscript, SiPlaywright
} from "react-icons/si";

const ToolCard = ({ name, Icon, color }) => (
  <div
    className="flex flex-col items-center justify-center p-4 rounded-2xl shadow-md transition-transform transform hover:scale-105 bg-white"
    style={{ border: `2px solid ${color}` }}
  >
    <Icon size={36} color={color} className="mb-2" />
    <p className="text-sm font-semibold text-center">{name}</p>
  </div>
);

const ToolsSection = () => {
  const toolsByCategory = {
    "Análisis de Datos": [
      { name: "Power BI", Icon: SiPowerbi, color: "#F2C811" },
      { name: "Excel", Icon: SiMicrosoftexcel, color: "#217346" },
      { name: "Google Data Studio", Icon: SiGoogledatastudio, color: "#4285F4" },
      { name: "Tableau", Icon: SiTableau, color: "#E97627" },
    ],
    "Gestión de Proyectos": [
      { name: "Trello", Icon: SiTrello, color: "#0079BF" },
      { name: "Notion", Icon: SiNotion, color: "#000000" },
      { name: "Asana", Icon: SiAsana, color: "#273347" },
      { name: "Slack", Icon: SiSlack, color: "#4A154B" },
      { name: "Google Workspace", Icon: SiGoogle, color: "#4285F4" },
    ],
    "CRM y Ventas": [
      { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
      { name: "Salesforce", Icon: SiSalesforce, color: "#00A1E0" },
      { name: "Zoho CRM", Icon: SiZoho, color: "#F0483E" },
    ],
    "Marketing Digital": [
      { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
      { name: "Meta Ads", Icon: SiFacebook, color: "#1877F2" },
      { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#F9AB00" },
      { name: "Mailchimp", Icon: SiMaildotru, color: "#FFE01B" },
      { name: "Hootsuite", Icon: SiHootsuite, color: "#000000" },
      { name: "Ubersuggest", Icon: SiUbersuggest, color: "#F56A2B" },
      { name: "SEMrush", Icon: SiSemrush, color: "#FF642D" },
      { name: "Odoo", Icon: SiOdoo, color: "#875A7B" },
    ],
    "Diseño y Creatividad": [
      { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
      { name: "Photoshop", Icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Illustrator", Icon: SiAdobeillustrator, color: "#FF9A00" },
      { name: "InDesign", Icon: SiAdobeindesign, color: "#FF3366" },
      { name: "Premiere Pro", Icon: SiAdobepremierepro, color: "#9999FF" },
    ],
    "Metodologías y Automatización": [
      { name: "Scrum", Icon: SiScrumalliance, color: "#F15A22" },
      { name: "Jira", Icon: SiJirasoftware, color: "#0052CC" },
      { name: "Selenium", Icon: SiSelenium, color: "#43B02A" },
      { name: "Playwright", Icon: SiPlaywright, color: "#45BA73" },
      { name: "Google Apps Script", Icon: SiGoogleappsscript, color: "#4285F4" }
    ]
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Herramientas Profesionales</h2>
      {Object.entries(toolsByCategory).map(([category, tools]) => (
        <div key={category} className="mb-8 px-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tools.map((tool, idx) => (
              <ToolCard key={idx} {...tool} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ToolsSection;