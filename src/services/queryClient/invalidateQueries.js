export function invalidateQueries({ queryClient, queryKeys }) {
  queryKeys.forEach((key) =>
    queryClient.invalidateQueries({ queryKey: [key] })
  );
}
