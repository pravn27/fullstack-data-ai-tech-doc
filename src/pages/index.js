import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return (
    <Redirect to="/fullstack-data-ai-tech-doc/docs/category/introduction" />
  );
}
