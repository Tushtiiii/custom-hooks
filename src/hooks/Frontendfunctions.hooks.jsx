import axios from "axios";

export async function fetchData(url) {
  
  const response = await axios.get(url);

  // console.log("Response received:", response);

  const result = response.data;
  return result;

  //  catch (err) {
  //   return err;
  // }
  //  finally {
  //     setLoading(false);
  //   }
}
