import React from "react";
import { Button } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

import { MAX_LISTING_SCREENS } from "../../constants/general";

const Footer = ({ screenNumber, handleChangeScreen, loading }) => {
  return (
    <div className="Footer flex flex-row justify-content-space-between">
      <div className="left flex flex-row justify-content-left">
        <Button
          color="primary"
          onClick={() =>
            screenNumber - 1 >= 1 && handleChangeScreen(screenNumber - 1)
          }
        >
          <ArrowBackIos color="primary" />
          Back
        </Button>
      </div>
      <div className="right flex flex-row justify-content-right">
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            screenNumber + 1 <= MAX_LISTING_SCREENS &&
            handleChangeScreen(screenNumber + 1)
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Footer;
