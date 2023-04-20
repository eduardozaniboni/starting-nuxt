export default defineEventHandler(async (event) => {
  const { code } = event?.context?.params ?? {};
  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`;

  interface ApiResponse {
    data: any;
  }

  try {
    const response: ApiResponse = await $fetch<ApiResponse>(uri);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
