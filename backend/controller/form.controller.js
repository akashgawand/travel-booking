import formSchema from "../models/form.schema.js";

export const createFormSubmission = async (req, res) => {
    try {
        // const { location } = req.params.location
        // console.log("Location from params:", location);
    const {
        firstName,
        lastName,
        email,
        mobile,
        adult,
        child,
        infant,
        hotelName,
        roomNumber,
        location
    } = req.body;
 
    const formData = new formSchema({
      firstName,
      lastName,
      email,
      mobile,
      adult,
      child,
      infant,
      hotelName,
      roomNumber,
      location
    });

    await formData.save();

    res
      .status(201)
      .json({ message: "Form submission successful", data: formData });

  } catch (error) {
    console.error("Error creating form submission:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
