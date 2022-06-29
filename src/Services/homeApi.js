import axios from "axios";

export const getAllTlds = async () => {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cms/hub/home/getAllTld.php`
    );
    return response.data;
  } catch (error) {
    console.log("errror while calling getAllTlds API", error);
  }
};

export const getAllCategories = async () => {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cms/hub/home/getCategoryInfo.php`
    );
    return response.data;
  } catch (error) {
    console.log("errror while calling getAllCategories API", error);
  }
};

export const getSpotlightInfo = async () => {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cms/hub/home/getSpotlightInfo.php`
    );
    return response.data[0];
  } catch (error) {
    console.log("errror while calling getSpotlightInfo API", error);
  }
};

export const getAllChannelPartner = async () => {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_API_URL}/cms/hub/home/getAllChannelPartnerHome.php`
    );
    return response.data;
  } catch (error) {
    console.log("errror while calling getAllTlds API", error);
  }
};
