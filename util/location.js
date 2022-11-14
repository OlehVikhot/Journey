import * as Location from "expo-location";

const GOOGLE_API_KEY = "AIzaSyAdoUjSjyqgs2ZoIRH57KaE5RT3CG0nIk0";

export function getMapPreview(lat, lng, noPin) {
  let imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=4&size=1000x600&maptype=roadmap&markers=color:purple%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  if (noPin) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=4&size=1000x600&maptype=roadmap&key=${GOOGLE_API_KEY}`;
  }

  return imagePreviewUrl;
}

export async function pickLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  return location;
}

export async function getCountryName(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].address_components;
  const name = address.filter((item) => item.types[0] === "country")[0]
    .long_name;
  return name;
}
