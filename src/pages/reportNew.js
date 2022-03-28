import LocationCity from "../components/LocationCity";
import useFetch from "../hooks/useFetch";
import Notfound from "./404";
function ReportNew() {
  const { data, loading, error } = useFetch(
    "https://inap-moviles-default-rtdb.firebaseio.com/locations.json"
  );

  if (!error) {
    return <div>{LocationCity(data)}</div>;
  }
  return <div>{Notfound}</div>;
}

export default ReportNew;
