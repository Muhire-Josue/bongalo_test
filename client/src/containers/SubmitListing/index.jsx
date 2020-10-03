import React from "react";
import { useSelector } from "react-redux";

import SubmitListing from "../../components/SubmitListing";
import { MAX_LISTING_SCREENS } from "../../constants/general";

const SubmitListingContainer = () => {
  const [screenNumber, setScreenNumber] = React.useState(1);
  const [progress, setProgress] = React.useState(0);
  const [formData, setFormData] = React.useState({
    amenities: {
      wifi: false,
      tv: false,
      heat: false,
    },
    place: {
      type: "",
      placesNumber: 0,
    },
  });

  const { submitListing } = useSelector((state) => state);

  const handleChange = ({ name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeScreen = (screen) => {
    // check if at least one amenity has be selected, otherwise return
    if (
      !Object.keys(formData.amenities).some(
        (key) => formData.amenities[key] === true
      )
    ) {
      return;
    }
    setScreenNumber(screen ?? 1);
  };
  const handleChangeProgress = () => {
    const percentage = Math.ceil((screenNumber * 100) / MAX_LISTING_SCREENS);

    // check if at least one amenity has be selected, otherwise return
    if (
      !Object.keys(formData.amenities).some(
        (key) => formData.amenities[key] === true
      )
    ) {
      return setProgress(0);
    }
    if (!(formData.place.type && formData.place.placesNumber)) {
      return setProgress(50);
    }
    setProgress(percentage);
  };

  React.useEffect(() => {
    handleChangeProgress();
  }, [screenNumber, formData]);

  return (
    <SubmitListing
      progress={progress}
      handleChangeProgress={handleChangeProgress}
      screenNumber={screenNumber}
      handleChangeScreen={handleChangeScreen}
      formData={formData}
      setFormData={setFormData}
      handleChange={handleChange}
      submitListing={submitListing}
    />
  );
};

export default SubmitListingContainer;
