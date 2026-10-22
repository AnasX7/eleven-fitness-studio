'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useQuery(url) {
  const initialState = { url, data: undefined, isLoading: true, error: null };
  const [state, setState] = useState(initialState);
  const activeRequest = useRef(null);

  // Reset before rendering results for a different URL.
  if (state.url !== url) setState(initialState);

  const load = useCallback(() => {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;

    return fetch(url, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Request failed.');
        const data = await response.json();
        if (!controller.signal.aborted) setState({ url, data, isLoading: false, error: null });
      })
      .catch((error) => {
        if (!controller.signal.aborted) setState({ url, data: undefined, isLoading: false, error });
      });
  }, [url]);

  useEffect(() => {
    load();
    return () => activeRequest.current?.abort();
  }, [load]);

  function refetch() {
    setState(initialState);
    return load();
  }

  const { data, isLoading, error } = state;
  return { data, isLoading, error, refetch };
}
