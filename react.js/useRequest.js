import { useEffect, useState } from "react";

export const useRequest = (request, { dependencies }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    request.call({
      next: (res) => {
        setLoading(false);
        setData(res.data);
      },
      error: (err) => {
        setLoading(false);
        setError(err);
      },
    });
  }, dependencies);

  return [loading, error, data];
};
