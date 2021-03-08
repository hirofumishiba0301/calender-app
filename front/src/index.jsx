import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import CalenderBoard from "./components/CalenderBoard";

dayjs.locale("ja");

const App = () => (
<div>
 <CalenderBoard/>
</div>
);


ReactDOM.render(<App />, document.getElementById("root"));
