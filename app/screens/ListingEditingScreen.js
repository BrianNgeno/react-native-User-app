import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
  AppFormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  distance: Yup.number().required().min(1).max(10000).label("Distance"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing, {resetForm}) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    
    if (!result.ok) {
      setUploadVisible(false);
      alert("could not save the listing");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={()=> setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
      <AppForm
        initialValues={{
          title: "",
          distance: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(location, values)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="distance"
          placeholder="Distance Covered"
          width={120}
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
