import { createFooter } from "./src/components/Footer.jsx";

const app = document.getElementById("app");

app.appendChild(createNavbar());
app.appendChild(document.createElement("hr"));
app.appendChild(createFooter());

