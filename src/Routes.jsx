import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import DynamicHomepageHub from "pages/dynamic-homepage-hub";
import ContactConstellation from "pages/contact-constellation";
import ProjectShowcaseEcosystem from "pages/project-showcase-ecosystem";
import CollaborationHubServices from "pages/collaboration-hub-services";
import CreativeUniverseAbout from "pages/creative-universe-about";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<DynamicHomepageHub />} />
        <Route path="/dynamic-homepage-hub" element={<DynamicHomepageHub />} />
        <Route path="/contact-constellation" element={<ContactConstellation />} />
        <Route path="/project-showcase-ecosystem" element={<ProjectShowcaseEcosystem />} />
        <Route path="/collaboration-hub-services" element={<CollaborationHubServices />} />
        <Route path="/creative-universe-about" element={<CreativeUniverseAbout />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;