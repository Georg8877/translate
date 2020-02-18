import React from "react";
import LanguageContext from "../context/LanguageContext";
//import Styles from "./Styles.css";

class LanuageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div className="container">
        Select a language:
        <div>
          <div className="flagSize">
            <i
              className="flag us"
              onClick={() => this.context.onLanguageChange("english")}
            />
          </div>
          <div className="flagSize">
            <i
              className="flag ru"
              onClick={() => this.context.onLanguageChange("russian")}
            />
          </div>
        </div>
      </div>
    );
  }
}
//

export default LanuageSelector;
