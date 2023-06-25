import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface advicement {
  slip: {
    id: number;
    advice: string;
  };
}

const useAdviceApi = () => {
 
  
  return useQuery<advicement, Error>({
    queryKey: ["advice"],
    queryFn: ()=>  axios
    .get<advicement>("https://api.adviceslip.com/advice")
    .then((res) => res.data)
  });
};
export default useAdviceApi;
